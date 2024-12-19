const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "bjwphkbcen8bd5uaffqn-mysql.services.clever-cloud.com",
  user: "ulrxw9yv7frlibyh",
  password: "LrFUQI8cbHVZRHCHJYhc",
  database: "bjwphkbcen8bd5uaffqn",
  port: 3306,
  ssl: { rejectUnauthorized: false }
});

connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos");
});

module.exports = connection;
