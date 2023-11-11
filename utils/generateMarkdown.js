// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `https://img.shields.io/badge/LICENSE-${license.replace('-','_')}-green`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `https://choosealicense.com/licenses/${license.toLowerCase()}`;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `This project is licensed under the [${license} License](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  [![license-shield]][license-url]

  ## Description
  
  ${data.projectDesc}
  
  ## Table of Contents
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  ${data.projectInstall}

  <p align="right"><a href='#${data.title.toLowerCase()}'>back to top</a></p>
  
  ## Usage
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
  
  ![alt text](assets/images/screenshot.png)

  <p align="right"><a href='#${data.title.toLowerCase()}'>back to top</a></p>

  ## License
  
  ${renderLicenseSection(data.license)}

  <p align="right"><a href='#${data.title.toLowerCase()}'>back to top</a></p>

  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

  <p align="right"><a href='#${data.title.toLowerCase()}'>back to top</a></p>
  
  ## Tests

  <p align="right"><a href='#${data.title.toLowerCase()}'>back to top</a></p>

  ## Questions

  [${data.githubName}'s GitHub](https://github.com/${data.githubName})

  If you have any questions or feedback, reach me @ [${data.email}](https://${data.email}).

  <p align="right"><a href='#${data.title.toLowerCase()}'>back to top</a></p>

  [license-shield]: ${renderLicenseBadge(data.license)}
  [license-url]: ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
