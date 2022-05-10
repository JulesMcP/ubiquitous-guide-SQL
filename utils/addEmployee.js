const inquirer = require("inquirer");
const db = require("../db/server");

const addEmployee = async (roles, employees) => {
    employees = employees.map((x) => `${x.first_name} ${x.last_name}`);
    employees.push("None");
    roles = roles.map((x) => x.title);

    return inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter the employee's first name.",
            validate: (firstName) => {
                if (firstName) {
                    return true;
                } else {
                    console.log("Please enter a first name.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter the employee's last name.",
            validate: (lastName) => {
                if (lastName) {
                    return true;
                } else {
                    console.log("Please enter a last name.");
                    return false;
                }
            },
        },
        {
            type: "list",
            name: "whichRole",
            message: "Enter their role.",
            choices: roles,
        },
        {
            type: "list",
            name: "manager",
            message: "Enter their manager.",
            choices: employees,
        },
    ]);
};

module.exports = addEmployee;