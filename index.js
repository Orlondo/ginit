const chalk       = require('chalk');
const chalkAnimation = require('chalk-animation');
const clear       = require('clear');
const figlet      = require('figlet');

const files       = require('./lib/files');
const inquirer    = require('./lib/inquirer');
const github    = require('./lib/github');

const Configstore = require('configstore');
const conf        = new Configstore('ginit');

// if (files.directoryExists('.git')) {
//   console.log(chalk.red('Already a git repository!'));
//   process.exit();
// }

// const run = async () => {
//   const credentials = await inquirer.askGithubCredentials();
//   console.log(credentials);
// }

const run = async () => {
  let token = github.getStoredGithubToken();
  if(!token) {
    await github.setGithubCredentials();
    token = await github.registerNewToken();    
  }
  console.log(token);
}

run();