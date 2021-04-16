import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { name: "Thanachot1",email:"thanachot1@mail.com" },
        { name: "Thanachot2",email:"thanachot2@mail.com" },
        { name: "Thanachot3",email:"thanachot3@mail.com" }
    ]);
};


/**
 * 
 * SEEDERS
 *  - create
 *      - knex seed:make <filename> -x ts
 *  - run
 *      - knex seed:run 
 *      or
 *      - knex seed:run --specific=users_seed.ts
 * 
 */