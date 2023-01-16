function renderLicenseBadge(license) {
  if (license) {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  } else {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license) {
    return `
    [License](#license) `;
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `## License`;
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

##### Table of Contents  
[Headers](#headers)  
[Emphasis](#emphasis) 
[Description](#description)
[Requirements](#requirements)
[Usage](#usage)
[Contact-Me](#contact-me)
[Contributers](#contributers)
[Testing](#testing)
${renderLicenseLink(data.license)} 
## Description
${data.description}
## Requirements
${data.require}
## Usage
${data.usage}
## Contact
Name - ${data.name}
Email - ${data.email}
Github - ${data.creator}
## Contributors
${data.contributors}
## Testing
${data.test}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
