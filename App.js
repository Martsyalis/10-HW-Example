const { fs } = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Employees/Engineer");
const Manager = require("./Employees/Manager");
const Intern = require("./Employees/Intern");
const { buildQs, buildHtml } = require("./utils");

class App {
  buildRole = {
    Engineer: (data) => new Engineer(data),
    Manager: (data) => new Manager(data),
    Intern: (data) => new Intern(data),
  };

  employees = [];

  buildQs = buildQs;
  buildHtml = buildHtml;

  start() {
    console.log(
      "Thanks for using our app, please enter info below to begin building your new website"
    );
    this.promptEmployee("Manager");
  }

  addEmployee(type, data) {
    const newEmployee = this.buildRole[type](data);
    this.employees.push(newEmployee);
  }

  promptEmployee(type) {
    inquirer.prompt(this.buildQs(type)).then((answers) => {
      this.addEmployee(type, answers);
      this.promptContinue();
    });
  }

  promptContinue() {
    inquirer
      .prompt({
        type: "list",
        choices: [
          { name: "Add Engineer", value: "Engineer" },
          { name: "Add Intern", value: "Intern" },
          { name: "Exit", value: "exit" },
        ],
        name: "choice",
        message:
          "Please select from the list below if you would like to add another employee or finish and build aplication",
      })
      .then(({ choice }) => {
        if (choice === "exit") return this.buildHtml();
        else this.promptEmployee(choice);
      });
  }
}

module.exports = App;
