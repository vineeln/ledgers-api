import { Migration } from '@mikro-orm/migrations';

export class Migration20220801092008 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("uuid" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null, constraint "post_pkey" primary key ("uuid"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "post" cascade;');
  }

}
