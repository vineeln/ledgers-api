import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello-resolver";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { PostResolver } from "./resolvers/post-resolver";
import { Post } from "./entities/Post";
import path from "path";
import { ConstraintViolationException } from "@mikro-orm/core";

var context = require("./app-context");

const init = async () => {
  //console.log(context.orm)

  console.log("resolvers", [
    path.resolve(__dirname, "**", "*-resolver.{js,ts}"),
    path.resolve(__dirname, "**", "entities/*.{js,ts}"),
  ]);

  const app = express();

  // initialize ApolloServer
  const server = new ApolloServer({
    schema: await buildSchema({
      //resolvers: [HelloResolver,PostResolver,Post],
      resolvers: [
        path.resolve(__dirname, "**", "entities/*.{js,ts}"),
        path.resolve(__dirname, "**", "*-resolver.{js,ts}"),
      ],
      validate: false,
    }),
    //context: () => {em:global.orm},
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();

  //   server.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("server started on :4000");
  });
};

export default init;
