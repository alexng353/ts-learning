#!/usr/bin/env node
"use strict";
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
const readline = require('readline');
clear();
console.log(chalk.red(figlet.textSync('God its a thing', { horizontalLayout: 'full' })));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What is your name? ', (answer) => {
    console.log(`Hello ${answer}`);
    rl.close();
});
