const moment = require("moment");
const fs = require("fs");
let thisYear = moment().format("YYYY");


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	// opting to use switch statement for determining which license user selected and returning the license badge
	switch (license) {
		case "GNU GPLv3":
			return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
		case "GNU LGPLv3":
			return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
		case "GNU AGPLv3":
			return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
		case "Mozilla Public License 2.0":
			return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
		case "Apache License 2.0":
			return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
		case "MIT License":
			return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
		case "Boost Software License 1.0":
			return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
		case "The Unlicense":
			return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
		default:
			return "";
	}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	switch (license) {
		case "GNU GPLv3":
			return `<a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank">here</a>`;
		case "GNU LGPLv3":
			return `<a href="https://www.gnu.org/licenses/lgpl-3.0" target="_blank">here</a>`;
		case "GNU AGPLv3":
			return `<a href="https://www.gnu.org/licenses/agpl-3.0" target="_blank">here</a>`;
		case "Mozilla Public License 2.0":
			return `<a href="https://opensource.org/licenses/MPL-2.0" target="_blank">here</a>`;
		case "Apache License 2.0":
			return `<a href="https://opensource.org/licenses/Apache-2.0" target="_blank">here</a>`;
		case "MIT License":
			return `<a href="https://opensource.org/licenses/MIT" target="_blank">here</a>`;
		case "Boost Software License 1.0":
			return `<a href="https://www.boost.org/LICENSE_1_0.txt" target="_blank">here</a>`;
		case "The Unlicense":
			return `<a href="http://unlicense.org/" target="_blank">here</a>`;
		default:
			return "";
	}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let license = "your_license_here"; // Define the license variable here

if (license === "your_license_here") {
	return "";
}

let licenseText = fs.readFileSync(
	path.join(__dirname, "legal-text", `${license}.txt`),
	"utf8"
);

return `
<p align="center">Copyright ${thisYear}</p>
<p align="center">=======================================</p><br>
<details>
  <summary>Click for the legal stuff, if that's <em><strong>your thing</strong></em></summary>
  ${licenseText}
</details>`;


function insertGif (relativePath) {
  if (relativePath) {
    return `![Brief GIF/video showing how to use application.](./${relativePath})`;
  } else return 'No GIF/video was supplied';

}

function appRunCommand(runCommand){
  if(runCommand === undefined){
    return `
  \`\`\`
  npm start
  \`\`\`
  The \*start\* command effectively stands in for running "node index.js" as shown in the "scripts" property in the package.json file you download.
    `
  } else {
    return `
  \`\`\`
  ${runCommand}
  \`\`\`
  The app should successfully run after having typed the above.
    `
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.projectLicense)}
  # ${data.projectTitle}
  ## Project Description 📝
  ${data.projectDescription}
  ## Table of Contents 🗒
  * [Installation](#installation-💻)
  * [Usage](#usage-🏆)
  * [License](#license)
  * [Contribute](#contributions-😃)
  * [Tests](#tests-🧪)
  * [Questions?](#questions-❓)
  ## Installation 💻
  After cloning or downloading a local copy of the repository, from a terminal install the required dependencies that are listed in the package.json file:
  \`\`\`
  npm install
  \`\`\`
  Once the node_modules folder is created and all dependencies are downloaded, type the following in your terminal:
  ${appRunCommand(data.runCommand)}
  ## Usage 🏆
  ${data.projectUsage}<br>
  ${insertGif(data.gifPath)}
  ## License
  ${renderLicenseSection(data.projectLicense)}
  Legalese borrowed from ${renderLicenseLink(data.projectLicense)}.

  ## Contribute 😃
  ${data.projectContribute}

  ## Tests 🧪
  ${data.projectTests}

  ## Questions ❓
  I enjoy hearing back about my work. You can reach me at ${data.email}.
  Alternatively, contact me on my GitHub page <a href="https://github.com/${data.github}">here</a>.
  `;
}

module.exports = generateMarkdown;
