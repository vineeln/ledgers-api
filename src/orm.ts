import { Connection, IDatabaseDriver, MikroORM } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config";
import { Post } from "./entities/Post";

var context = require('./app-context')

const init = async() => {
    const orm = await MikroORM.init(ormConfig);
    await orm.getMigrator().up();
  
    // <-- create the fork to avoid the issue of not having request context
    const emf = orm.em.fork(); 
    const posts = await emf.find(Post, {});
    if (posts.length == 0) {
      const post = emf.create(Post, {
        title: "our first post",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await emf.persistAndFlush(post);
    } else {
      console.log(posts)
    }
    context.orm = orm    
}

export default init
  