import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users",(t)=>{
        t.increments("id").unsigned().primary()
        t.string("name").notNullable()
        t.string("email")
        t.timestamp("created_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"))
        t.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
    })
}


export async function down(knex: Knex): Promise<void> {
}

/**
 * 
 * MIGRATION
 *  - make
 *      knex migrate:make <migration_name> -x ts
 *  - migrate
 *      knex migrate:up <migrationfile.ts>
 * 
 * 
 * 
 * 
 */