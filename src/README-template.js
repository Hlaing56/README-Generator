function generateReadme(answers) {

    var list = answers.license;
    var badge = "hi";
    var link = "hello";

    function loot(list) {
        switch (list){
            case 'Apache':
                badge = "License-Apache_2.0-blue";
                link = "(https://opensource.org/licenses/Apache-2.0)";
                break;
            case 'MIT':
                badge = "License-MIT-yellow";
                link = "(https://opensource.org/licenses/MIT)";
                break;
            case 'Boost':
                badge = "License-Boost_1.0-lightblue";
                link = "(https://www.boost.org/LICENSE_1_0.txt)";
                break;
            case 'Eclipse':
                badge = "License-EPL_1.0-red";
                link = "(https://opensource.org/licenses/EPL-1.0)";
                break;
            case 'IBM':
                badge = "License-IPL_1.0-blue";
                link = "(https://opensource.org/licenses/IPL-1.0)";
                break;
            case 'ISC':
                badge = "License-ISC-blue";
                link = "(https://opensource.org/licenses/ISC)";
                break;
            case 'Mozilla':
                badge = "License-MPL_2.0-brightgreen";
                link = "(https://opensource.org/licenses/MPL-2.0)";
                break;    
        }
    }

    loot(list);

    return `
# ${answers.proName}
![badge](https://img.shields.io/badge/${badge}.svg)

## Description
${answers.description} 

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
[![License](https://img.shields.io/badge/${badge}.svg)]${link}

## Questions
My gitHub account: https://github.com/${answers.gitHub}

My email to reach me if you have additional questions: ${answers.email}
`;
};

module.exports = generateReadme;