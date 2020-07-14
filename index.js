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
      "If you have included tests with your project, what command will run your tests?",
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

// Function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize program
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
      }) => {
        // To write the username as a link
        if (username) {
          usernameLink = "https://github.com/" + username;
        }
        // To assign the correct license badge and description based on user choice
        let licenseBadge = "";
        let licenseDescription = "";
        if (license === "Apache License 2.0") {
          licenseBadge =
            "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
          licenseDescription =
            "The Apache License allows users to distribute and modify software but does not allow them to remove existing copyright, patent, trademark, and attribution notices.";
        } else if (license === "GNU General Public License v3.0") {
          licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
          licenseDescription =
            "The GNU License allows the software to be modified and distributed by other users. It does not impose any restrictions on the use of the software but requires that it remain open source.";
        } else {
          licenseBadge =
            "https://img.shields.io/badge/License-MIT%202.0-blue.svg";
          licenseDescription =
            "The MIT License is a permissive license with only very limited restriction on reuse and has good compatibility because it can be re-licensed under other licenses";
        }
        // Data object
        const dataObject = {
          title: title,
          description: description,
          installation: installation,
          usage: usage,
          license: license,
          licenseBadge: licenseBadge,
          licenseDescription: licenseDescription,
          contributing: contributing,
          tests: tests,
          username: username,
          usernameLink: usernameLink,
          email: email,
          contact: contact,
        };

        // Sending the results to the markdown file
        const markdownResults = generateMarkdown(dataObject);

        writeToFile("README.md", markdownResults);
      }
    );
}

// Function call to initialize program
init();
