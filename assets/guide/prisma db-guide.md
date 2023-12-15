# How to use DataBase on Nuxt3?
## Soruce:
### Prisma
[Prisma Getting Started](https://www.prisma.io/docs/getting-started/quickstart)
[Create db and then Migrate](https://www.prisma.io/docs/getting-started/quickstart#3-run-a-migration-to-create-your-database-tables-with-prisma-migrate)
[Syntax for Prisma configuration](https://www.prisma.io/docs/reference/database-reference/connection-urls)

### MySql or sqLite
#### MySql
[Download xampp](https://www.apachefriends.org/download.html)
[Video: Create db and Migrate](https://www.youtube.com/watch?v=FKOv-ZqJ8gk)
- Install xampp
- Create db
- Start xampp Apache & MySQL

#### SqLite
[Download sqlite-tools](https://sqlite.org/download.html)
[Create empty DB with sqlite3](https://stackoverflow.com/questions/20155693/create-empty-sqlite-db-from-command-line)

> `sqlite3 file.db "VACUUM;"`

The last line create an empty database

## URL-syntax
if **mysql**: 
- `url = "mysql://root:@localhost:3306/mydb"`
if **sqlite**: 
- `url = "file:db1sqlite.db"`
[//]: # (https://www.prisma.io/docs/concepts/database-connectors/sqlite)

OR
- `url = env("DATABASE_URL")`

### .env-file
```bat [.env]
if mysql:
DATABASE_URL='mysql://root:@localhost:3306/mydb'
else
if sqlite
DATABASE_URL='file:./db1sqlite.db'
```

## Creating migrations-folder with Migrate
After creating DB-file
- The `schema.prisma`-file must be in the _/prisma_-folder

Then run:  
> `npx prisma migrate dev --name init`

This will create the migrations-folder with files.

Now you can start testing the repo:
> `yarn dev`

## Summa
```javascript
sqlite3 db1sqlite.db "VACUUM;"
// then move the file to /prisma
npx prisma migrate dev --name init
```