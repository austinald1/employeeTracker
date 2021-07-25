const conTable = require("console.table");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./db/connection");
const util = require('util');

// Connect Database
// ===================================================
db.connect((err) => {
    if (err) throw err;
    console.log(` "${db.config.database}" Database connected.`);
    init();
});

db.query = util.promisify(db.query);

// Init prompts switch cases
// ==================================================
function init() {
    console.log(`
        ==========================

            Employee Tracker!

        ==========================
    `);
    inquirer
        .prompt([
            {
                type: "list",
                name: "options",
                message: "What would you like to do?",
                choices: [
                    "Add A Department",
                    "Add A Role",
                    "Add An Employee",
                    "View All Departments",
                    "View All Roles",
                    "View All Employees",
                    "Update Employee Role",
                ],
            },
        ])
        .then((answers) => {
            switch (answers.options) {
                case "Add A Department":
                    addDepartments();
                    break;
                case "Add A Role":
                    addRole();
                    break;
                case "Add An Employee":
                    addEmployee();
                    break;
                case "View All Departments":
                    viewDepartment();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "View All Employees":
                    viewEmployee();
                    break;
                case "Update Employee Role":
                    let dataType = 'emp_role';
                    let dataColum = 'role_id'
                    updateEmployeeRole(dataType, dataColum);
                    break;
                case "Update Employee Manager":
                    let dataType2 = 'employee'
                    let dataColum2 = 'manager_id'
                    updateEmployeeManager(dataType2, dataColum2);
                    break;
                case "Delete Departments":
                    deleteDepartments();
                    break;
                case "Delete Roles":
                    deleteRoles();
                    break;
                case "Delete Employees":
                    deleteEmployees();
                    break;
                case "Quit":
                    quit();
                    break;
                default:
                    break;
            }
        });
};
