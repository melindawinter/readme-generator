// global variables
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  // Project title
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  //  Description
  {
    type: "input",
    name: "description",
    message: "How would you describe your project?",
  },
  //  Installation
  {
    type: "input",
    name: "installation",
    message: "How does a user install your project?",
  },
  // Usage
  {
    type: "input",
    name: "usage",
    message: "What is the intended usage for your project?",
  },
  //  License
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your project?",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
    ],
  },
  //  Contributing
  {
    type: "input",
    name: "contributing",
    message: "How can other developers contribute to this project?",
  },
  //  Tests
  {
    type: "input",
    name: "tests",
    message:
      "Do you have any tests you would like to include? How should users run your tests?",
  },
  //  Questions
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "contact",
    message: "How can you be reached with questions about this project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(
      ({
        title,
        description,
        installation,
        usage,
        license,
        contributing,
        tests,
        username,
        email,
        contact,
      }) => {}
    );
}

// function call to initialize program
init();