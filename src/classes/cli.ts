import inquirer from 'inquirer';
import { QueryResult } from 'pg';
import { pool } from '../connection.js';

// CLI:
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
                        'Manage Departments', 
                        'Manage Roles', 
                        'Manage Employees', 
                        'Exit'
                    ],
                },
            ])
            .then((answers) => {
                if (answers.MainMenu === 'View all Departments') {
                    this.viewAllDepartments();
                } else if (answers.MainMenu === 'View all Roles') {
                    this.viewAllRoles();
                } else if (answers.MainMenu === 'View all Employees') {
                    this.viewAllEmployees();
                } else if (answers.MainMenu === 'Manage Departments') {
                    this.manageDepartments();
                } else if (answers.MainMenu === 'Manage Roles') {
                    this.manageRoles();
                } else if (answers.MainMenu === 'Manage Employees') {
                    this.manageEmployees();
                } else if (answers.MainMenu === 'Exit') {
                    console.log('Goodbye!');
                    process.exit();
                }
            });
    }

    viewAllDepartments(): void {
        pool.query('SELECT * FROM department', (err: Error, res: QueryResult) => {
            if (err) {
                console.error('Error executing query.', err);
                this.mainMenu();
            } else {
                console.log('Departments:');
                console.table(res.rows);
                this.mainMenu();
            }
        });
    }

    viewAllRoles(): void {
        pool.query('SELECT * FROM role', (err: Error, res: QueryResult) => {
            if (err) {
                console.error('Error executing query.', err);
                this.mainMenu();
            } else {
                console.log('Roles:');
                console.table(res.rows);
                this.mainMenu();
            }
        });
    }

    viewAllEmployees(): void {
        pool.query('SELECT * FROM employee', (err: Error, res: QueryResult) => {
            if (err) {
                console.error('Error executing query.', err);
                this.mainMenu();
            } else {
                console.log('Employees:');
                console.table(res.rows);
                this.mainMenu();
            }
        });
    }

    manageDepartments(): void {
        console.log('Managing departments...');
    }

    manageRoles(): void {
        console.log('Managing roles...');
    }

    manageEmployees(): void {
        console.log('Managing employees...');
    }
}

export default Cli;