import * as GQL from "type-graphql";

@GQL.Resolver()
export class HelloResolver {
  @GQL.Query(returns => String)
  hello() {
    return "hello GQL world";
  }
}
