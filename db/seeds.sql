USE employeesDB;

INSERT INTO department (name)
VALUES 
    ('Administration'),
    ('Teacher'),
    ('Office Staff')
    ('Other Faculty');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Principal', 75000, 1),
    ('Teacher', 45000, 2),
    ('Office Staff', 30000, 3),
    ('Other Faculty', 38000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    ('James', 'Howlett', 3, 3),
    ('Charles', 'Xavier', 1, 1),
    ('Jean', 'Grey', 3, 2),
    ('Kitty', 'Pride', 4, null),
    ('Ororo', 'Munro', 1, 2),
    ('Hank', 'McCoy', 2, null),
    ('Anna Marie', 'Raven', 4, null),
    ('Scott', 'Summers', 2, 2),
    ('Wanda', 'Maximoff', 3, null);

