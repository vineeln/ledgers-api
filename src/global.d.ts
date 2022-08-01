import { Connection, IDatabaseDriver, MikroORM } from "@mikro-orm/core"

export {}
declare global {
    var orm: MikroORM<IDatabaseDriver<Connection>>
}