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
  const { githubName, 
          email, 
          title, 
          projectDesc, 
          projectInstall, 
          projectUsage,
          projectContri,
          projectTests,
          license } = data;
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);
  const href = title.toLowerCase().split(' ').join('-');

  return `# ${title} 
  [![license-shield]][license-url]

  ## Description
  
  ${projectDesc}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  ${projectInstall}

  <p align="right"><a href='#${href}'>back to top</a></p>
  
  ## Usage

  ${projectUsage}
  
  <p align="right"><a href='#${href}'>back to top</a></p>

  ## License
  
  ${licenseSection}

  <p align="right"><a href='#${href}'>back to top</a></p>

  ## How to Contribute
  
  ${projectContri}
  
  <p align="right"><a href='#${href}'>back to top</a></p>
  
  ## Tests

  ${projectTests}

  <p align="right"><a href='#${href}'>back to top</a></p>

  ## Questions

  [${githubName}'s GitHub](https://github.com/${githubName})

  If you have any questions or feedback, reach me @ [${email}](mailto:${email}).

  <p align="right"><a href='#${href}'>back to top</a></p>

  [license-shield]: ${badge}
  [license-url]: ${link}

`;
}

module.exports = generateMarkdown;
