import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants"
import { Post } from "./entities/Post"
import path from 'path'

export default {
    migrations:{
        path:path.join(__dirname,"./migrations"),
        glob:'!(*.d).{js,ts}'
    },
    entities: [Post],
    dbName: "neoledgers_dev",
    type: "postgresql",
    debug: !__prod__, // process.env.NODE_ENV !== 'production'
} as Parameters<typeof MikroORM.init>[0];