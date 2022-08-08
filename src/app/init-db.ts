import path from "path";
import { User } from "../entities/user";
import { createConnection, Db } from "typeorm";
import { AppContext } from "./init-context";

const init = async (_: AppContext) => {
  console.log("init db:")
  const conn = await createConnection({
    type: "postgres",
    url: "postgresql://postgres:postgres@localhost:5432/ledgers_dev", //process.env.DATABASE_URL,
    logging: true,
    // synchronize: true,
    migrations: [path.join(__dirname, "../migrations/*")],
    entities: [User],
  });
  console.log("init db: done")
};

export default init

