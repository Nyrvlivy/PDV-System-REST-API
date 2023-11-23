const pool = require("../configs/database/connection/connection");

pool.query("SELECT NOW()", (error, res) => {
  if (error) {
    console.error("Erro ao conectar ao banco de dados", error);
  } else {
    console.log(
      "Conexão bem-sucedida. Data e hora atual do banco de dados:",
      res.rows[0].now
    );
  }
});
