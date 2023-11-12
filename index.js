// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'projectDesc',
        message: 'Enter project description:',
    },
    {
        type: 'input',
        name: 'projectInstall',
        message: 'Enter project Installation requirements:',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Enter project Usage Info:',
    },
    {
        type: 'input',
        name: 'projectContri',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'projectTests',
        message: 'Enter project tests:',
    },
    {
        type: 'list',
        message: 'Please choose a license or none:',
        name: 'license',
        choices: ['MIT', 'AGPL-3.0', 'GPL-3.0', 'LGPL-3.0', 'MPL-2.0', 'APACHE-2.0', 'BSL-1.0', 'UNLICENSE', 'None'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function init() { }
// Function call to initialize app
inquirer
    .prompt(questions)
    .then((answers) => {
        const readMeData = generateMarkDown(answers);
        writeToFile('../README.md', readMeData);
    });
init();
