const inquirer = require("inquirer");

const updateRole = async (employees, roles) => {
    employees = employees.map((x) => `${x.first_name} ${x.last_name}`);
    roles = roles.map((x) => x.title);
    return inquirer.prompt([
        {
            type: "list",
            name: "whichEmployee",
            message: "Enter the employee to update.",
            choices: employees,
        },
        {
            type: "list",
            name: "whichRole",
            message: "Enter the employee's new role.",
            choices: roles,
        },
    ]);
};

module.exports = updateRole;