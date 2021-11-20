function generateReadme(answers) {
    return `
# ${answers.proName}

## Description
${answers.description} 

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

`;
};

module.exports = generateReadme;