# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### start command in window (package.json)
* \"ts-node\"
### start command in Linux MacOS (package.json)
* 'ts-node'

### Knex usage ###
npm install knex 
knex init -x ts
after run this you will get a knexfile.ts
    - migration 
        - knex migrate:make <migration_name> -x ts
        - knex migrate:latest or knex migrate:up <migration_file.ts>
        - knex migrate:up <migration_file.ts>
        
    - seeder
        - knex seed:make <seeder_name> -x ts 
        - knex seed:run or knex seed:run --specific=<seeder_name.ts>

config migration and seeder destination in knexfile.ts

    