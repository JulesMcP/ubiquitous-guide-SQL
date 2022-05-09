const cTable = require("console.table");
const db = require("../db/server");
const mysql = require("mysql2");

const insertDepartment = async (newDepartment) => {
    await db
        .promise()
        .query(`INSERT INTO department (department_name) VALUES (?)`, newDepartment)
        .then(console.log(`New department, ${newDepartment}, added. \n`));
};

const insertRole = async ({ role, salary, whichDepartment }) => {
    await db
        .promise()
        .query(
            `INSERT INTO role (title, salary, department_id)
            SELECT '${role}', ${salary}, id
            FROM department
            WHERE department_name = '${whichDepartment}'`
        )
        .then(console.log(`Added new role, ${role}. \n`));
};

const insertEmployee = async (employee) => {
    console.log(employee);
    await db
        .promise()
        .query(
            `SELECT id FROM role
            WHERE title = '${employee.whichRole}'`
        )
        .then((roleId) => {
            db.promise()
                .query(
                    `SELECT id FROM employee
                    WHERE first_name = '${employee.manager.split(" ")[0]}'`
                )
                .then((managerId) => {
                    db.promise()
                        .query(
                            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employee.firstName}','${employee.lastName}',${roleId[0][0].id},${managerId[0][0].id})`
                        )
                        .then(
                            console.log(
                                `Added employee ${employee.firstName} ${employee.lastName}. \n`
                            )
                        );
                });
        });
};

const viewDepartment = async () => {
    let departments;
    await db
        .promise()
        .query(`SELECT * FROM department`)
        .then((result) => {
            departments = result[0];
        });
    return departments;
};

const viewEmployee = async () => {
    let employees;
    await db
        .promise()
        .query(
            `SELECT employee.*, role.title
            AS role_id
            FROM employee
            LEFT JOIN role
            ON employee.role_id = role.id
            ORDER BY last_name`
        )
        .then((result) => {
            employees = result[0];
        });
    return employees;
};

const viewRole = async () => {
    let roles;
    await db
        .promise()
        .query(
            `SELECT role.*, department.department_name
            AS department_id
            FROM role
            LEFT JOIN department
            ON role.department_id = department.id
            ORDER BY title`
        )
        .then((result) => {
            roles = result[0];
        });
    return roles;
};

const changeEmployee = async ({ whichEmployee, whichRole }) => {
    whichEmployee = whichEmployee.split(" ");
    const first = whichEmployee[0];
    const last = whichEmployee[1];

    await db
        .promise()
        .query(
            `SELECT id FROM role
            WHERE title = '${whichRole}'`
        )
        .then((roleId) => {
            db.promise()
                .query(
                    `UPDATE employee SET role_id = '${roleId[0][0].id}'
                WHERE first_name = '${first}'`
                )
                .then(
                    console.log(`Changed ${first} ${last}'s job role to ${whichRole}`)
                );
        });
};

module.exports = {
    insertDepartment,
    insertRole,
    insertEmployee,
    viewDepartment,
    viewEmployee,
    viewRole,
    changeEmployee,
};