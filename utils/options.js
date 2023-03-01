#!/usr/bin/env node

import { program } from "commander";

program
  .version('1.0.0', '-v, --version', 'Outputs programs current version')
  .option('-l, --length <number>', 'Sets password length', '15')
  .option('-s, --save', 'Save password to file')
  .option('-nn, --no-numbers', 'Excludes numbers from generated password')
  .option('-ns, --no-symbols', 'Excludes symbols from generated password')
  .option('-r, --strength', 'Displays the strength rating of generated password')
  .parse();

export const { length, save, numbers, symbols, strength } = program.opts();

