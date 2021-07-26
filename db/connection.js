
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  // Your MySQL username,
  user:'root',//process.env.DB_USER,
  // Your MySQL password
  password: 'root',//process.env.DB_PASS,
  database: 'employee_db'
});

module.exports = db;
