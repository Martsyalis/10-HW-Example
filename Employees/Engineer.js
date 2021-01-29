const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(data) {
    const { github } = data;
    super(data);
    this.github = github;
    this.role = "Engineer";
  }
}

module.exports = Engineer;
