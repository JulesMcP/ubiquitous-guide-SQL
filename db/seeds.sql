USE employeesDB;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 50000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 130000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 110000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 125000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Howlett", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Franco", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Maria", "Sanchez", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elliot", "Blade", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Christina", "Stuart", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Shawn", "Perez", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Julia", "Roberts", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jimi", "Hendrix", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jimi", "Hendrix", 1, 3);

