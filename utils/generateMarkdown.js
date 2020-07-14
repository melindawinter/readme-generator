// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License](${data.licenseBadge})

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

${data.licenseDescription}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

- [Github Profile](${data.usernameLink})
- ${data.email}
- ${data.contact}
`;
}

module.exports = generateMarkdown;
