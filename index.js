const { fstat } = require("fs");
const { default: inquirer } = require("inquirer");

inquirer
  .prompt([
    {
        type: 'input',
        name: 'Name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you right now?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Tell me about yourself, all your secrets.'
    },
    {
        type: 'input',
        name: 'linkdin',
        message: 'Paste your Linkdin URL here, now!'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Paste your Github URL here, faster!'
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    fs.writeFile('README.md', )
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
