const { writeFile } = require("fs");

function buildQs(role) {
  const validateInt = (str) => !!parseInt(str);
  const validateLength = (str) => !!str.length;
  const validateEmail = (str) =>
    !!str.length && str.includes("@") && str.includes(".");

  const qs = [
    {
      type: "input",
      name: "name",
      message: `What is the ${role}'s name?`,
      validate: validateLength,
    },
    {
      type: "input",
      name: "id",
      message: `What is the ${role}'s employee id?`,
      validate: validateInt,
    },
    {
      type: "input",
      name: "email",
      message: `What is the ${role}'s email?`,
      validate: validateEmail,
    },
  ];
  if (role === "Manager")
    qs.push({
      type: "input",
      name: "officeNum",
      message: `What is the ${role}'s office number?`,
      validate: validateInt,
    });
  else if (role === "Engineer")
    qs.push({
      type: "input",
      name: "github",
      message: `What is the ${role}'s github?`,
      validate: validateLength,
    });
  else
    qs.push({
      type: "input",
      name: "school",
      message: `What is the ${role}'s school?`,
      validate: (str) =>
        str.trim().toLowerCase() === "uofo"
          ? true
          : "We dont recognize that as school, try UofO.",
    });
  return qs;
}

function buildHtml() {
  const emploeeHTML = this.employees.reduce(
    (html, employee) => (html += employee.buildHtml()),
    ""
  );

  const websiteHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    ${emploeeHTML}
  </body>
  </html>
  `;

  
  writeFile("./output/index.html", websiteHtml, (err) =>
    console.log("error writing file: ", err)
  );
}

module.exports = { buildQs, buildHtml };
