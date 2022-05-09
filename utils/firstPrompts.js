const inquirer = require("inquirer");

const firstPrompts = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "main",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add A Department",
                "Add A Role",
                "Add A New Employee",
                "Update An Employee Role",
                "Exit",
            ],
        },
    ]);
};

module.exports = firstPrompts;