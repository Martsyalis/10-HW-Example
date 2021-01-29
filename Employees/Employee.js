class Employee {
  constructor({ name, id, email }) {
    (this.name = name), (this.id = id), (this.email = email);
  }

  buildHtml() {
    return `
    <div class="employee-card card">
      <h1>Name: ${this.name}</h1>
      <h2>Role: ${this.role}</h2>
      <h2>Id: ${this.id}</h2>
      <h3>Email: ${this.email}</h3>
      ${  
        this.github && `<h3>Github: ${this.github}</h3>`
        || this.officeNum && `<h3>Office Number: ${this.officeNum}</h3>` 
        || this.school && `<h3>School: ${this.school}</h3>`
      };
    </div>
    `;
  }
}

module.exports = Employee;


