import * as ORM from "@mikro-orm/core";
import * as GQL from "type-graphql";
import { v4 } from "uuid";
import 'reflect-metadata'
//import { CustomBaseEntity } from "./CustomBaseEntity";

@GQL.ObjectType("Post")
@ORM.Entity()
export class Post  {
  @GQL.Field(() => String)
  @ORM.PrimaryKey({ columnType: "text" })
  uuid: string = v4();

  @GQL.Field(()=>String)
  @ORM.Property()
  createdAt: Date = new Date();

  @GQL.Field(()=>String)
  @ORM.Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @GQL.Field(() => String)
  @ORM.Property({ columnType: "text" })
  title!: string;
}
