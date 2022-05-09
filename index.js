const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const app = express();
const cTable = require("console.table");

// includes external modules
const firstPrompts = require("./utils/firstPrompts");
const addDepartment = require("./utils/addDepartment");
const addEmployee = require("./utils/addEmployee");
const addRole = require("./utils/addRole");
const updateRole = require("./utils/updateRole");
const db = require("./db/server");
const {
  insertDepartment,
  insertRole,
  insertEmployee,
  viewDepartment,
  viewRole,
  viewEmployee,
  changeEmployee,
} = require("./utils/dbQueries");

console.log(`
 ▄▄▄▄▄▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄▄     ▄▄▄▄▄▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄    ▄▄▄▄▄▄▄ ▄▄▄▄▄▄   ▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄   ▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄   
█       █  █▄█  █       █   █   █       █  █ █  █       █       █  █       █   ▄  █ █      █       █   █ █ █       █   ▄  █  
█    ▄▄▄█       █    ▄  █   █   █   ▄   █  █▄█  █    ▄▄▄█    ▄▄▄█  █▄     ▄█  █ █ █ █  ▄   █       █   █▄█ █    ▄▄▄█  █ █ █  
█   █▄▄▄█       █   █▄█ █   █   █  █ █  █       █   █▄▄▄█   █▄▄▄     █   █ █   █▄▄█▄█ █▄█  █     ▄▄█      ▄█   █▄▄▄█   █▄▄█▄ 
█    ▄▄▄█       █    ▄▄▄█   █▄▄▄█  █▄█  █▄     ▄█    ▄▄▄█    ▄▄▄█    █   █ █    ▄▄  █      █    █  █     █▄█    ▄▄▄█    ▄▄  █
█   █▄▄▄█ ██▄██ █   █   █       █       █ █   █ █   █▄▄▄█   █▄▄▄     █   █ █   █  █ █  ▄   █    █▄▄█    ▄  █   █▄▄▄█   █  █ █
█▄▄▄▄▄▄▄█▄█   █▄█▄▄▄█   █▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█ █▄▄▄█ █▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█    █▄▄▄█ █▄▄▄█  █▄█▄█ █▄▄█▄▄▄▄▄▄▄█▄▄▄█ █▄█▄▄▄▄▄▄▄█▄▄▄█  █▄█   
`);
  
// function to begin prompts
const firstPrompt = () => {
  firstPrompts().then((answer) => {
    switch (answer.main) {
      case "View All Employees":
        viewEmployee()
          .then((employees) => {
            console.table(employees);
          })
          .then(firstPrompt);
          break;
        case "Add A New Employee":
          viewRole().then((roles) => {
            viewEmployee().then((employees) => {
              addEmployee(roles, employees).then((employee) => {
                insertEmployee(employee).then(firstPrompt);
              });
            });
          });
          break;
        case "View All Roles":
          viewRole()
            .then((roles) => {
              console.table(roles);
            })
            .then(firstPrompt);
          break;
        case "Add A Role":
          viewDepartment().then((departments) => {
            addRole(departments).then((role) => {
              insertRole(role).then(firstPrompt);
            });
          });
          break;
        case "View All Departments":
          viewDepartment()
            .then((departments) => {
              console.table(departments);
            })
          .then(firstPrompt);
          break;
        case "Add A Department":
          addDepartment().then((department) => {
            insertDepartment(department.department2).then(firstPrompt);
          });
          break;
        case "Update An Employee Role":
          viewEmployee().then((employees) => {
            viewRole().then((roles) => {
              updateRole(employees, roles).then((newEmployeeRole) => {
                changeEmployee(newEmployeeRole).then(firstPrompt);
              });
            });
          });
          break;
        case "Exit":
          console.log(" Press CTRL-C to Exit.");
          break;
    }
  });
};
      
firstPrompt();