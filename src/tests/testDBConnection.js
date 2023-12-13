const connection = require("../configs/database/connection/connection");

connection
    .raw("SELECT NOW()")
    .then((result) => {
        console.log(
            "Successful connection. Current date and time of the database:",
            result.rows[0].now
        );
    })
    .catch((error) => {
        console.error("Error connecting to the database.", error);
    });
