const mysql = require("mysql2");

// we gonna create a pool of connections in this file
const pool = mysql.createPool({
  host: "mysql",
  user: "user",
  database: "db",
  password: "password"
});

// these are the connection parameters of our database created by docker

module.exports = pool.promise(); //it's a way to export the pool
