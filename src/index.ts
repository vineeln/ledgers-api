
import { __prod__ } from "./constants";

import {} from "@mikro-orm/migrations";
import orm from './orm'
import graphql from './graphql'


const main = async () => {
  console.log("working dir:", __dirname);
  console.log("Hello World");

  //initialize ORM
  await orm()

  //initialize GraphQL
  await graphql()

};

main().catch((err) => {
  console.error(err);
});
