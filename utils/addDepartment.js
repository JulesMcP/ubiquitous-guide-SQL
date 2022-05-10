const inquirer = require("inquirer");
const db = require("../db/server");

const addDepartment = async () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "department2",
            message: "What is the name of the departmen",
            validate: (department2) => {
                if (department2) {
                    return true;
                } else {
                    console.log("Please enter a department name.");
                    return false;
                }
            },
        },
    ]);
};

module.exports = addDepartment;