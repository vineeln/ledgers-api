import { User } from "../entities/user";
import { Resolver, Query } from "type-graphql";
import 'reflect-metadata'

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return "Welcome to neoledgers";
  }
}