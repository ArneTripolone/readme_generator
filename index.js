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

## Description
${answers.description}

## Screenshots
${answers.visuals}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Support
${answers.support}

## Roadmap 
${answers.roadmap}

## Authors
${answers.authors}
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
      name: 'visuals',
      message: 'Upload any screenshots, GIFS or videos of your project here:',
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
      type: 'input',
      name: 'support',
      message: 'Where can people go if they need support with your project?',
    },
    {
      type: 'input',
      name: 'roadmap',
      message: 'How could this project be developed further in the future?',
    },
    {
      type: 'input',
      name: 'authors',
      message: 'Who contributed to this project?',
    },
  ])
  .then((answers) => {
    const mdPageContent = generateMD(answers);

    fs.writeFile('index.md', mdPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });
