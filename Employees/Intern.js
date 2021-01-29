const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(data) {
    const { school } = data;
    super(data);
    this.school = school;
    this.role = "Intern";
  }
}

module.exports = Intern;
