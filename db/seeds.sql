INSERT INTO department (name)
VALUES 
    ('Administration'),
    ('Teacher'),
    ('Office Staff'),
    ('Other Faculty');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Principal', 75000, 1),
    ('Teacher', 45000, 2),
    ('Office Staff', 30000, 3),
    ('Other Faculty', 38000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Kitty', 'Pride', 4, NULL),
('Hank', 'McCoy', 2, NULL),
('Anna Marie', 'Raven', 4, NULL),
('Wanda', 'Maximoff', 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('James', 'Howlett', 3, 5),
('Charles', 'Xavier', 1, 1),
('Jean', 'Grey', 3, 3),
('Ororo', 'Munro', 1, 2),
('Scott', 'Summers', 2, 4);
