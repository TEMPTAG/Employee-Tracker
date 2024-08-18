import inquirer from 'inquirer';
import { pool } from '../connection.js';
import Table from 'cli-table3';

// CLI:
// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
class Cli {
    mainMenu(): void {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'MainMenu',
                    message: 'What would you like to do?',
                    choices: [
                        'View all Departments', 
                        'View all Roles', 
                        'View all Employees', 
                        'Add a Department', 
                        'Add a Role', 
                        'Add an Employee',
                        'Update an Employee Role',
                        'Exit'
                    ],
                },
            ])
            .then((answers) => {
                switch (answers.MainMenu) {
                    case 'View all Departments':
                        this.viewAllDepartments();
                        break;
                    case 'View all Roles':
                        this.viewAllRoles();
                        break;
                    case 'View all Employees':
                        this.viewAllEmployees();
                        break;
                    case 'Add a Department':
                        this.addDepartment();
                        break;
                    case 'Add a Role':
                        this.addRole();
                        break;
                    case 'Add an Employee':
                        this.addEmployee();
                        break;
                    case 'Update an Employee Role':
                        this.updateEmployeeRole();
                        break;
                    case 'Exit':
                        console.log('Goodbye!');
                        process.exit();
                        break;
                }
            });
    }

    // WHEN I choose to view all departments
    // THEN I am presented with a formatted (alphabetical order by department) table showing department names and department ids
    viewAllDepartments(): void {
        pool.query('SELECT * FROM department ORDER BY name ASC', (err, res) => {
            if (err) {
                console.error('Error executing query.', err);
                this.mainMenu();
            } else {
                console.log();
                console.log('All Departments:');
                const table = new Table({
                    head: ['Department Name', 'Department ID'],
                });
                res.rows.forEach((row) => {
                    table.push([row.name, row.id]);
                });
                console.log(table.toString());
                console.log();
                this.mainMenu();
            }
        });
    }

    // WHEN I choose to view all roles
    // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    viewAllRoles(): void {
        pool.query(
            `SELECT 
                r.id, 
                r.title, 
                r.salary, 
                d.name AS department 
            FROM role r 
            JOIN department d 
            ON r.department_id = d.id`, 
            (err, res) => {
            if (err) {
                console.error('Error executing query.', err);
                this.mainMenu();
            } else {
                console.log();
                console.log('All Roles:');
                const table = new Table({
                    head: ['Job Title', 'Role ID', 'Department', 'Salary'],
                });
                res.rows.forEach((row) => {
                    table.push([row.title, row.id, row.department, row.salary]);
                });
                console.log(table.toString());
                console.log();
                this.mainMenu();
            }
        });
    }

    // WHEN I choose to view all employees
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    viewAllEmployees(): void {
        pool.query(
            `SELECT 
                e.id, 
                e.first_name, 
                e.last_name, 
                r.title AS job_title, 
                d.name AS department, 
                r.salary, 
                CONCAT(m.first_name, ' ', m.last_name) AS manager 
            FROM employee e 
            JOIN role r ON e.role_id = r.id 
            JOIN department d ON r.department_id = d.id 
            LEFT JOIN employee m ON e.manager_id = m.id`, 
            (err, res) => {
            if (err) {
                console.error('Error executing query.', err);
                this.mainMenu();
            } else {
                console.log();
                console.log('All Employees:');
                const table = new Table({
                    head: ['Employee ID', 'First Name', 'Last Name', 'Job Title', 'Department', 'Salary', 'Manager'],
                });
                res.rows.forEach((row) => {
                    table.push([
                        row.id, 
                        row.first_name, 
                        row.last_name, 
                        row.job_title, 
                        row.department, 
                        row.salary, 
                        row.manager || 'None'
                    ]);
                });
                console.log(table.toString());
                console.log();
                this.mainMenu();
            }
        });
    }

    // WHEN I choose to add a department
    // THEN I am prompted to enter the name of the department and that department is added to the database
    addDepartment(): void {
        console.log('Add a Department');
        // Placeholder for additional logic or prompts
        this.mainMenu();
    }

    // WHEN I choose to add a role
    // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
    addRole(): void {
        console.log('Add a Role');
        // Placeholder for additional logic or prompts
        this.mainMenu();
    }

    // WHEN I choose to add an employee
    // THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database
    addEmployee(): void {
        console.log('Add an Employee');
        // Placeholder for additional logic or prompts
        this.mainMenu();
    }

    // WHEN I choose to update an employee role
    // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
    updateEmployeeRole(): void {
        console.log('Update an Employee Role');
        // Placeholder for additional logic or prompts
        this.mainMenu();
    }

    // Bonus:
    // Try to add some additional functionality to your application, such as the ability to do the following:

    // Update employee managers:

    // View employees by manager:

    // View employees by department:

    // Delete departments, roles, and employees:

    // View the total utilized budget of a department—in other words, the combined salaries of all employees in that department:
}

export default Cli;