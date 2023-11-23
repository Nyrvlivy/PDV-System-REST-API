const pool = require("../configs/database/connection/connection");

pool.query("SELECT NOW()", (error, res) => {
  if (error) {
    console.error("Error connecting to the database.", error);
  } else {
    console.log(
      "Successful connection. Current date and time of the database:",
      res.rows[0].now
    );
  }
});
