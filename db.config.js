const mysql = require("mysql2");

const history = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "annadale5",
  database: "entry",
});

module.exports = history;
