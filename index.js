const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./templates/html-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamData = [];

// prompted questions
const addManager = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please provide the manager's name:",
        },
        {
          type: "input",
          name: "id",
          message: "Please provide the manager's ID:",
        },
        {
          type: "input",
          name: "email",
          message: "Please provide the manager's e-mail:",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Please provide the manager's office number:",
        },
      ])

      // add manager to the team data
      .then((managerData) => {
        const { name, id, email, officeNumber} = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        teamData.push(manager);
      })
  );
};

const addEmployee = () => {
  console.log(`
    ==================
    Add a New Employee
    ==================
    `);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please provide the employee's role:",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please provide the employee's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Please provide the employee's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Please provide the employee's e-mail:",
      },
      {
        type: "input",
        name: "github",
        message: "Please provide the engineer's github username:",
        when: function (answers) {
          return answers.role === "Engineer";
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please provide the intern's school name:",
        when: function (answers) {
          return answers.role === "Intern";
        },
      },
      {
        type: "confirm",
        name: "newEmployee",
        message: "Would you like to enter another employee?",
        default: false,
      },
    ])
    .then((employeeData) => {
      const { role, name, id, email, github, school, newEmployee } =
        employeeData;

      //add new employee to the team data
      if (role === "Engineer") {
        const engineer = new Engineer(name, id, email, github);
        teamData.push(engineer);
      } else if (role === "Intern") {
        const intern = new Intern(name, id, email, school);
        teamData.push(intern);
      }

      // check if the user wants to add new employee
      if (newEmployee) {
        return addEmployee(teamData);
      } else {
        return teamData;                
      }
    });
};

addManager()
  .then(addEmployee)
  .then((teamData) => {
    const pageHTML = generatePage(teamData);

    fs.writeFile("./templates/index.html", pageHTML, (err) => {
      if (err) throw new Error(err);

      console.log("Team profile page created! ");
    });
  });                 