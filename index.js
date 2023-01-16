const fs = require("fs");
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { type } = require("os");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "enter your project",
  },

  {
    type: "input",
    name: "description",
    message: "please provide the purpose of this project",
  },

  {
    type: "checkbox",
    name: "license",
    message: "please select a license for this project",
    choices: ["boost1.0", "MIT", "MPL2.0", "APATCHE2.0", "none"],
  },

  {
    type: "input",
    name: "require",
    message: "list any project dependancies here",
  },

  {
    type: "input",
    name: "usage",
    message: " please list the names of languages for this project",
  },

  {
    type: "input",
    name: "creator",
    message: "state your Github username",
  },

  {
    type: "input",
    name: "name",
    message: "state your full name",
  },

  {
    type: "input",
    name: "email",
    message: "please provide a valid email address",
  },

  {
    type: "input",
    name: "contributors",
    message: "please provide a list of contributors",
  },

  {
    type: "input",
    name: "test",
    message: "please provide a walkthrough of required tests if applicable",
  },
];

// Function to write a README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize an app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("creating professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
