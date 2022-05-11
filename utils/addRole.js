const inquirer = require("inquirer");

const addRole = async (departments) => {
    departments = departments.map((x) => x.name);
    return inquirer.prompt([
        {   
            type: "input",
            name: "role",
            message: "Enter the name of the role.",
            validate: (role) => {
                if (role) {
                    return true;
                } else {
                    console.log("\n You must enter a role name.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the salary for this role.",
            validate: (salary) => {
                if (isNaN(salary) === false) {
                    return true;
            } else {
                console.log("\n Please enter a number.");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "whichDepartment",
            message: "What department does this role belong to?",
            choices: departments
        },
    ]);
};

module.exports = addRole;