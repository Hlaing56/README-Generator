const inquirer = require('inquirer');
const generatePage = require('./src/README-template');
const writeFile = require('./utils/generateMarkdown');

const promptProject = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'proName',
        message: 'What is your project name?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please enter your project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project:',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Please write a description of your project:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What steps are required to install your project(write none if no steps are needed):',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Write none if no steps are needed:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('please provide instructions and examples for use:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles:',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('Write none if there were no collaborators:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'gitHub',
        message: 'What is your gitHub username:',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('please provide your gitHub username:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email:',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('please provide your email:');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application from the list of options',
        choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla']
      }
    ])
  };

promptProject()
  .then(log => {
    return generatePage(log);
  })
  .then(pageREADME => {
    return writeFile(pageREADME);
  })