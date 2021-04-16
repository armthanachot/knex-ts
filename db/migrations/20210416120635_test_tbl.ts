import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("test_tbl",(t)=>{
        t.increments("id").unsigned().primary()
        t.string("name").notNullable()
        t.string("email")
        t.timestamp("created_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"))
        t.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('test_tbl')
}

