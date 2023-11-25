const knex = require("knex");
require("dotenv").config();

const connection = knex({
    client: "pg",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        ssl: process.env.NODE_ENV === "production",
    },
});

module.exports = connection;
