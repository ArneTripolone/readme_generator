const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = (answers) =>
  `
![${answers.licence} Licence](https://img.shields.io/badge/Licence-${answers.licence}-blue)


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
If you have any questions about this project, please direct them to: [](${answers.questions}).
`
;

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
      message: 'Please enter your best email address to direct questions about your project:',
    },
  ])

  .then((answers) => {
    const mdPageContent = generateMD(answers);

    fs.writeFile('README.md', mdPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });