import inquirer from 'inquirer';

// CLI:
class Cli {
    exit: boolean = false;

    startCli(): void {
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
                    this.exit = true;
                    return;
                }
                if (!this.exit) {
                    this.startCli();
                }
            });
    }

    viewAllDepartments(): void {
        console.log('Viewing all departments...');
    }

    viewAllRoles(): void {
        console.log('Viewing all roles...');
    }

    viewAllEmployees(): void {
        console.log('Viewing all employees...');
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