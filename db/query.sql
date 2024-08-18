-- WHEN I choose to view all departments
-- THEN I am presented with a formatted (alphabetical order by department) table showing department names and department ids
SELECT * FROM department 
ORDER BY name ASC

-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
SELECT r.id, r.title, r.salary, d.name AS department
FROM role r
JOIN department d ON r.department_id = d.id

-- WHEN I choose to view all employees
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT e.id, e.first_name, e.last_name, r.title AS job_title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employee e
JOIN role r ON e.role_id = r.id
JOIN department d ON r.department_id = d.id
LEFT JOIN employee m ON e.manager_id = m.id

--DELETING A DEPARTMENT:
-- Query to delete a Department by id:
DELETE FROM department WHERE id = <department_id>;

-- then: Check Roles belonging to the Department:
SELECT * FROM role WHERE department_id = <department_id>;

-- then: Check for Employees belonging to the Department:
SELECT e.* FROM employee e
JOIN role r ON e.role_id = r.id
WHERE r.department_id = <department_id>;


-- Orphaned Roles after deleting a Department:

-- Delete Orphaned Roles:
DELETE FROM role WHERE department_id IS NULL;
-- or: Reassign Roles to another Department:
UPDATE role SET department_id = <new_department_id> WHERE department_id = <department_id>;


-- Orphaned Employees:

-- Delete Orphaned Employees:
DELETE FROM employee WHERE role_id IS NULL;
-- or: Reassign Employees to another Department:
UPDATE employee SET role_id = <new_role_id> WHERE role_id IS NULL;