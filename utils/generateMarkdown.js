// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
 
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
## Description
* ${data.description}
 
  
## Table of Contents  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 
 <a name="installation"/>
 
 ## Installation
 
 * ${data.installation}
 
 <a name="usage"/>
 
 ## Usage
 
 * ${data.usage}
 
 
 <a name="license"/>
 
 ## License
* licensed under the ${data.license}
 
 <a name="Contributing"/>
 
 ## Contributing
 
 * ${data.contribution}
 
 
 <a name="tests"/>
 
 ## Tests
 
 * ${data.tests}
 
 <a name="questions"/>
 
 ## Questions
 
 * For additional help or questions about collaboration, please reach out to ${data.email}

 * Follow me on Github at [${data.github}](http://github.com/${data.github})
 

`;
}

module.exports = generateMarkdown;
