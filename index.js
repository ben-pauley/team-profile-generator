const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

function init() {
  const data = fs.readFile("./src/index-template.html", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
}

init();
