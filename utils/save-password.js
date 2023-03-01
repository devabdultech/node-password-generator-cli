#!/usr/bin/env node
import readline from "readline";
import fs from "fs";

import chalk from 'chalk';

export const savePassword = (password) => {
    const rl = readline.Interface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Enter File Path:', (path, error) => {
        console.log(chalk.greenBright(`The file path you entered is ${chalk.blue.underline(path)}`))
        if (error) {
            console.log(error)
            rl.close()
            return
        };

        if (!fs.existsSync(path)) {
            console.log(chalk.red(`Path ${path} does not exist`));
            rl.close();
            return;
        }

        rl.question('What would you like to name the file: ', (fileName) => {
            console.log(`Do you want to name the file ${fileName}`)

            fs.appendFile(`${path}/${fileName}.txt`, `${password}\n`, function (err) {
                if (err) {
                    console.log(err);
                };
                console.log(chalk.green('File saved successfully.'));
                rl.close()
            });
        })
    })
}
