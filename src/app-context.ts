import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core"

export default class AppContext {
    orm?: MikroORM<IDatabaseDriver<Connection>>
}

module.exports = new AppContext()