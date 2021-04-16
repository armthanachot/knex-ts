// Update with your config settings.
import {MYSQL} from "./db/development"
const connection = {
  development: {
    client: "mysql",
    connection: MYSQL,
    migrations:{
      directory:__dirname + '/db/migrations'
    },
    seeds:{
      directory: __dirname + '/db/seeds'
    }
  }
}
export {
  connection
}
