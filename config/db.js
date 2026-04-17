const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
  if (err) {
    console.error("DB Connection Failed:", err);
    return;
  }
  console.log("DB Connected");
});

module.exports = db;