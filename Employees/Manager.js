const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(data) {
    const { officeNum } = data;
    super(data);
    this.officeNum = officeNum;
    this.role = "Manager";
  }
}

module.exports = Manager;
