// packages required
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for inquirer
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the title of your project.",
  },

  {
    type: "input",
    name: "Sections entitled",
    message: "Please enter the Sections entitled.",
  },

  {
    type: "input",
    name: "Description",
    message: "Please enter the Description of your project.",
  },

  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions for your project.",
  },

  {
    type: "input",
    name: "usage",
    message: "Please enter usage information for your project.",
  },

  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "ISC", "Apache", "GPL", "BSD", "None"],
  },

  {
    type: "input",
    name: "contribution",
    message: "Please enter contribution guidelines for your project.",
  },

  {
    type: "input",
    name: "testing",
    message: "Please enter test instructions for your project.",
  },
];

// function to write readme using generateMarkdown module
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}
9;

// function that initializes app
function init() {
  inquirer.prompt(questions).then(function (response) {
    console.log(response);
    writeToFile(`${response.title}.md`, response);
  });
}

// Function call to initialize app
init();
