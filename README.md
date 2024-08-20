## <a name="top"></a>

# Employee Tracker

---

![GitHub License](https://img.shields.io/github/license/TEMPTAG/Employee-Tracker?label=License)

## Description

The Employee Management System is a command-line application that allows users to manage a company's employee database. This application is built using Node.js, Inquirer, and PostgreSQL. It provides an intuitive interface for performing various operations such as viewing, adding, updating, and deleting departments, roles, and employees, as well as viewing the total utilized budget for each department.

![Screenshot of Application Sample](/assets/images/applicationScreenshot.jpg)
[You can see the application in action HERE](https://drive.google.com/file/d/1m-KNRscz4r7BjJv4YgFffkXAz-8sHl-f/view)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

---

## Features

- **View Departments, Roles, and Employees**: Display detailed information about the company’s departments, roles, and employees.
- **Add Departments, Roles, and Employees**: Dynamically add new departments, roles, and employees to the database.
- **Update Employee Roles and Managers**: Update the role or manager of an existing employee.
- **View Employees by Manager**: See all employees managed by a selected manager or view those without a current manager.
- **View Employees by Department**: View all employees working in a selected department.
- **Delete Departments, Roles, and Employee**: Remove entries from the database with confirmation to prevent accidental deletions.
- **View Department Budget**: Calculate and display the total utilized budget of a department by summing up all employees’ salaries in that department.

---

## Technologies Used

- **Node.js**: JavaScript Runtime environment.
- **Inquirer.js**: Library for building interactive command-line prompts.
- **PostgreSQL**: Relational database for storing company data.
- **pg**: Node.js library to interface with PostgreSQL.
- **JavaScript/TypeScript**: For handling client-side logic and interactions.
- **cli-table3**: Library for formatting data into tables in the console.

---

## Installation

**To install this project locally, jump into your terminal application and please follow these steps**:

1. Clone the `Employee-Tracker` Repository to your local machine - first navigate to the directory you would like to clone it into, then:

```bash
Using HTTPS:
git clone https://github.com/TEMPTAG/Employee-Tracker.git

Using SSH:
git clone git@github.com:TEMPTAG/Employee-Tracker.git

Using GitHub CLI:
gh repo clone TEMPTAG/Employee-Tracker
```

2. Navigate into the `Employee-Tracker` directory you just cloned down:

```bash
cd Employee-Tracker
```

3. Install the npm dependencies:

```bash
npm install
```

4. Set Up the Database:

- Create a PostgreSQL database.
- Run the provided schema.sql file to create the necessary tables.
- Optionally, populate the database using the provided seeds.sql file.
- Create a .env file in the root directory and add your database connection details:

```bash
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

---

## Usage

1. Start the application by running the following command in your terminal:

```bash
npm start
```

2. Main Menu Options:

```bash
? What would you like to do? (Use arrow keys)
❯ View all Departments
  View all Roles
  View all Employees
  Add a Department
  Add a Role
  Add an Employee
  Update an Employee Role
  Update an Employee's Manager
  View Employees by Manager
  View Employees by Department
  Delete a Department
  Delete a Role
  Delete an Employee
  View Department Budget
  Exit
```

3. Navigate the Menu:

- Use the arrow keys to navigate the menu and press Enter to select an option, and follow the prompts!

---

## Contributing

![GitHub contributors](https://img.shields.io/github/contributors/TEMPTAG/Employee-Tracker?color=green) ![GitHub commit activity](https://img.shields.io/github/commit-activity/t/TEMPTAG/Employee-Tracker)

OH. MY. GOODNESS. Collaborations are amazing. Share ideas, code, etc. with others is the best way to share knowledge, mutual enthusiasms, and a lot of times we make cool friends along the way. I welcome contributions in many ways, shapes, and forms:

- [Email Me](mailto:iansterlingferguson@gmail.com) and just plain tell me what you like, do not like, would like to see changed... just give me a compliment before laying it on me
- FORK IT ALL - create a fork, clone it down, mess it up, do the neato commits and comments, push it back, test it at least a million times, then submit a pull request for me to review and merge into the project if I think you are cool (and the code is cool too) - but again, the nice thing to do would be emailing me first and telling me your intentions... and don't forget the compliment part

Something, something... Have your people call my people. And by call, I mean email - who answers the phone these days?

## Tests

As the above states, please test your changes thoroughly before submitting a pull request or sending it straight to me. As far as tests I have done? None. Zero. Ziltch. I have not learned how to do that yet, so I am relying on you to do your part until I learn how to do mine.

---

## Questions

Have questions about this project? Want to collaborate? Eager to discuss conspiracy theories or debate why your favorite car is not as cool as you think? [Email Me](mailto:iansterlingferguson@gmail.com) — just do not call, because I probably will not answer.

Did this project make your life better in any way, shape, or form? Check out my other exceptionally rare moments of lucidity on my [GitHub Profile](https://github.com/TEMPTAG)

---

## License

This project is covered under the MIT License. The details of the MIT License can be found on their site [HERE](https://opensource.org/licenses/MIT). You can also see the full details of the [LICENSE](./LICENSE) for this specific project in the linked file.

---

<div align="center">
<em>Copyright © 2024 Ian Ferguson - powered by caffine, love, and a little bit of fun</em>

[Back to top](#top)

</div>
