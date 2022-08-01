import { Post } from "src/entities/Post"
import * as GQL from "type-graphql"
import { HelloResolver } from "./hello-resolver"

@GQL.Resolver()
export class PostResolver {
    @GQL.Query(()=>String)
    posts() : [Post] {
        return [new Post()];
    }
}