const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "managerID",
    message: "What is the manager's ID number?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is the engineer's ID number?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "internID",
    message: "What is the interns's ID number?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern go to?",
  },
];

function generateBaseHTML(data) {
  const manager = new Manager(
    data.managerName,
    data.managerID,
    data.managerEmail,
    data.officeNumber
  );

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
  
      <title>Team Profiles</title>
    </head>
    <body>
      <header class="jumbotron vertical-center text-center bg-danger text-white">
        <h1>My Team</h1>
      </header>
  
      <main class="container d-flex justify-content-center">
        <div class="row">
          <section class="card text-white bg-primary border-light m-3 shadow">
            <div class="card-header">
              <h4>${manager.name}</h4>
              <h5><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h5>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${
                  manager.email
                }">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
              </ul>
            </div>
          </section>
  `;
}

function generateEngineer(data) {
  const engineer = new Engineer(
    data.engineerName,
    data.engineerID,
    data.engineerEmail,
    data.github
  );

  return `
          <section class="card text-white bg-primary border-light m-3 shadow">
            <div class="card-header">
              <h4>${engineer.name}</h4>
              <h5><i class="fas fa-glasses"></i> ${engineer.getRole()}</h5>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${
                  engineer.email
                }">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
              </ul>
            </div>
          </section>
`;
}

function generateIntern(data) {
  const intern = new Intern(
    data.internName,
    data.internID,
    data.internEmail,
    data.school
  );

  return `
          <section class="card text-white bg-primary border-light m-3 shadow">
            <div class="card-header">
              <h4>${intern.name}</h4>
              <h5><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h5>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${
                  intern.email
                }">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
            </div>
          </section>
`;
}

function generateEndHTML() {
  return `
      </div>
    </main>
  </body>
</html>`;
}

function init() {
  // const data = fs.readFile("./src/index-template.html", (err, data) => {
  //   if (err) throw err;
  //   console.log(data.toString());
  // });

  inquirer.prompt(managerQuestions).then((data) => {
    writeToFile("./dist/index.html", data);
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateBaseHTML(data), (err) =>
    err ? console.error(err) : promptAddMembers()
  );
}

function promptAddMembers() {
  inquirer
    .prompt({
      type: "list",
      name: "addMembers",
      message: "Would you like to add another team member?",
      choices: ["Add an Engineer", "Add an Intern", "No more team members"],
    })
    .then((data) => {
      if (data.addMembers === "Add an Engineer") {
        return promptEngineer();
      } else if (data.addMembers === "Add an Intern") {
        return promptIntern();
      } else {
        fs.appendFileSync("./dist/index.html", generateEndHTML());
        return console.log("Team profile generated!");
      }
    });
}

function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    fs.appendFileSync("./dist/index.html", generateEngineer(data));

    promptAddMembers();
  });
}

function promptIntern() {
  inquirer.prompt(internQuestions).then((data) => {
    fs.appendFileSync("./dist/index.html", generateIntern(data));

    promptAddMembers();
  });
}

init();
