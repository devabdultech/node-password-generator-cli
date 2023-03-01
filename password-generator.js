#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import alert  from 'cli-alert-msg';
import clipboard from "clipboardy";

import { generatePassword } from './utils/generate-password.js';
import { length, numbers, symbols, save, strength } from "./utils/options.js";
import { generatePasswordStrength } from "./utils/password-strength.js";
import { savePassword } from "./utils/save-password.js";

// Display welcome message and help documentation
const welcomeMessage = chalkAnimation.rainbow(figlet.textSync('Password Generator'));
welcomeMessage.start()

const description = chalk.white('Generate strong, random passwords from the command line!');
const helpDocumentation = `
Usage:
  password-generator [options]

Options:
  --length, -l <n>   The length of the generated password (default: 15)
  --no-numbers, -nn     Include numbers in the generated password
  --no-symbols, -ns      Include symbols in the generated password
  --strength, -r     Display the strength rating of the generated password
  --save, -s, --output, -0 <file> Save the generated password to a file
  --help             Show this help message
  \n
`;

// console.log(welcomeMessage);
console.log(description);
console.log(helpDocumentation);

const password = generatePassword(length, numbers, symbols, save);
alert({
    type: "success",
    msg: `Here's your generated password: ${password}`,
    name: "GENERATED PASSWORD"
})

const passwordStrength = generatePasswordStrength(password);
if (passwordStrength <= 30) {
    alert({
        type: "error",
        msg: `Generated password has a strength of ${passwordStrength}%`,
        name: 'VERY WEAK PASSWORD'
    })
} else if (passwordStrength <= 50) {
    alert({
        type: "warning",
        msg: `Generated password has a strength of ${passwordStrength}%`,
        name: 'WEAK PASSWORD'
    })
} else {
    alert({
        type: "success",
        msg: `Generated password has a strength of ${passwordStrength}%`,
        name: 'STRONG PASSWORD'
    })
}

clipboard.writeSync(password)
alert({
    type: "success",
    msg: "COPIED TO CLIPBOARD SUCCESSFULLY!",
    name: "PASSWORD",
});

if(save) {
    savePassword(password)
}
