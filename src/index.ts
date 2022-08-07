import path from "path";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import express from "express";
import session from "express-session";
import { createConnection } from "typeorm";
import { createClient } from "redis";
import connectRedis from "connect-redis";
import { __COOKIE_MAX_AGE__, __COOKIE_NAME__, __CORS_ALLOW_DOMAINS__, __prod__ } from "./app/app-constants";
import { User } from "./entities/user";
import { HelloResolver } from "./resolvers/hello-resolver";
import { UserResolver } from "./resolvers/user-resolver";
import cors from "cors";

const main = async () => {
  console.log("start neoledgers");
  const conn = await createConnection({
    type: "postgres",
    url: "postgresql://postgres:postgres@localhost:5432/ledgers_dev", //process.env.DATABASE_URL,
    logging: true,
    // synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [User],
  });

  const app = express();

  // configure cors: 
  // can be done dynamically as well: 
  //   https://expressjs.com/en/resources/middleware/cors.html#configuring-cors-w-dynamic-origin
  app.use(
    cors({
      origin: __CORS_ALLOW_DOMAINS__,
      credentials: true,
    })
  );

  console.log("connecting to redis client: ");
  const redisClient = createClient({ legacyMode: true }); // { legacyMode: true } for v4
  const redisStore = connectRedis(session);
  await redisClient.connect().catch((err) => {
    console.log("erroor");
    console.error(err);
  });

  app.use(
    session({
      name: __COOKIE_NAME__,
      cookie: {
        maxAge: __COOKIE_MAX_AGE__,
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      store: new redisStore({
        client: redisClient,
        disableTouch: true,
      }),
      saveUninitialized: false,
      secret: "keyboard cat",
      resave: false,
    })
  );
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, redisClient }),
  });

  server.applyMiddleware({ app, cors:false });

  app.listen(4000, () => {
    console.log("server listening on: 4000");
  });
};

main().catch((e) => {
  console.error("main error:", e);
});
