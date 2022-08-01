import * as ORM from '@mikro-orm/core';
import * as GQL from "type-graphql"
import { v4 } from 'uuid'

export abstract class CustomBaseEntity {

  @GQL.Field(()=>String)
  @ORM.PrimaryKey({columnType:'text'})
  uuid: string = v4();

  @GQL.Field()
  @ORM.Property()
  createdAt: Date = new Date();

  @GQL.Field()
  @ORM.Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

}