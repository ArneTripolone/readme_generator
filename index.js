/*
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/

const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = (answers) =>
  `
# ${answers.title}

### Description
${answers.description}

### Table of Contents
${answers.contents}

### Installation
${answers.installation}

### Usage
${answers.usage}

### Licence
${answers.licence}

### Contributing 
[${answers.contributing}](https://github.com/${answers.contributing})

### Tests
${answers.tests}

### Questions
${answers.questions}
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project called?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project, particularly its background, context and features:',
    },
    {
      type: 'input',
      name: 'contents',
      message: 'Provide a table of contents:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'List any steps needed to install your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide examples of your project being used:',
    },
    {
      type: 'list',
      name: 'licence',
      message: 'Provide the licence for your project:',
      choices: ['MIT', 'GPL', 'Apache'],
        //filter(val) {
          //return val.toLowerCase();
        //},
      },
    {
      type: 'input',
      name: 'contributing',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What outcomes resulted from your tests?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'What questions do you have about the project?',
    },
  ])
  .then((answers) => {
    const mdPageContent = generateMD(answers);

    fs.writeFile('index.md', mdPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });



  Step 1:-
  // Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  Step 2:-
  // Create a function that returns the license link
  // If there is no license, return an empty string
  Step 3:-
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  Step 4:-
  // Create a function to generate markdown for README