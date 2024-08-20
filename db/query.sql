-- WHEN I choose to view all departments
-- THEN I am presented with a formatted (alphabetical order by department) table showing department names and department ids
SELECT * FROM department 
ORDER BY name ASC;


--
-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
SELECT r.id, r.title, r.salary, d.name AS department
FROM role r
JOIN department d ON r.department_id = d.id;


-- 
-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT e.id, e.first_name, e.last_name, r.title AS job_title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee e
JOIN role r ON e.role_id = r.id
JOIN department d ON r.department_id = d.id
LEFT JOIN employee m ON e.manager_id = m.id;


--
-- WHEN I choose to add a department
-- THEN I am prompted to enter the name of the department and that department is added to the database
INSERT INTO department (name)
VALUES ('$1');


--
-- WHEN I choose to add a role
-- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
-- Get Department names (in alphabetical order) and ids:
SELECT * FROM department ORDER BY name ASC
-- Insert a new Role into the Role table:
INSERT INTO role (title, salary, department_id)
VALUES ('$1', $2, $3);


--
-- WHEN I choose to add an employee
-- THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
-- Get Role titles (in alphabetical order) and ids:
SELECT id, title FROM role ORDER BY title ASC
-- Get Employee names - title (so they are easy to identify in the managers list, dash concatenate first_name and last_name:
SELECT e.id, CONCAT(r.title, ' - ', e.first_name, ' ', e.last_name) AS name 
FROM employee e
JOIN role r ON e.role_id = r.id
-- Only get Employees that have Manager in their title:
WHERE r.title ILIKE '%Manager%'
-- Put the Manager list in alphabetical order by name:
ORDER BY name ASC


--
-- WHEN I choose to update an employee role
-- THEN I am prompted to select an employee to update and their new role and this information is updated in the database
-- Get Employees by id, concat first_name and last_name, and put in alphabetical order by name:
SELECT id, CONCAT(first_name, ' ', last_name) AS name
FROM employee
ORDER BY name ASC
-- Get Role titles (in alphabetical order) and ids:
SELECT id, title FROM role ORDER BY title ASC
-- Update the Employee's role:
UPDATE employee
SET role_id = $2
WHERE id = $1;


--
-- Update employee managers:
-- Get Employees by id, concat first_name and last_name, and put in alphabetical order by name:
SELECT id, CONCAT(first_name, ' ', last_name) AS name 
FROM employee 
ORDER BY name ASC

-- then: Get Managers by id, concat first_name and last_name, and put in alphabetical order by name:
SELECT e.id, CONCAT(r.title, ' - ', e.first_name, ' ', e.last_name) AS name
FROM employee e
JOIN role r ON e.role_id = r.id
WHERE r.title ILIKE '%Manager%'
ORDER BY name ASC

-- Update the Employee's manager:
UPDATE employee 
SET manager_id = $1 
WHERE id = $2


---
-- View employees by manager:
-- Get Managers by id, concat first_name and last_name, and put in alphabetical order by name:
SELECT e.id, CONCAT(r.title, ' - ', e.first_name, ' ', e.last_name) AS name
FROM employee e
JOIN role r ON e.role_id = r.id
WHERE r.title ILIKE '%Manager%'
ORDER BY name ASC

-- Get Employees, their title, their department, and their manager by manager_id, and put in alphabetical order by first_name:
SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department
FROM employee e
JOIN role r ON e.role_id = r.id
JOIN department d ON r.department_id = d.id
WHERE e.manager_id = $1
ORDER BY e.first_name ASC

-- Get Employees with no manager, their title, their department, and put in alphabetical order by first_name:
SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department
FROM employee e
JOIN role r ON e.role_id = r.id
JOIN department d ON r.department_id = d.id
WHERE e.manager_id IS NULL
ORDER BY e.first_name ASC



--
--DELETING A DEPARTMENT:
-- Query to delete a Department by id:
DELETE FROM department WHERE id = $1;

-- DELETING A ROLE:
-- Query to delete a Role by id:
DELETE FROM role WHERE id = $1;

-- DELETING AN EMPLOYEE:
-- Query to delete an Employee by id:
DELETE FROM employee WHERE id = $1;