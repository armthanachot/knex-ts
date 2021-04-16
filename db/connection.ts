import {connection} from "../knexfile"
import  {knex} from "knex"
export const conn = knex(connection.development)
