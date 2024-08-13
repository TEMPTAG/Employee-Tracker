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