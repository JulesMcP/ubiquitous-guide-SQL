const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
require('dotenv').config();
// const sql = require("./db"); --maybe??????????
// console.log(process.env)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "employeesDB"
});