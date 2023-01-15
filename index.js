// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { type } = require("os");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    
{
 type: "input",
name: 'title',
message:'enter your project',

}

{
type: 'input',
name: 'description',
message: 'please provide the purpose of this project',


}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
