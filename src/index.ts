#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
const readline = require('readline');


clear();
console.log(
  chalk.red(
    figlet.textSync('Tip Calculator', { horizontalLayout: 'full' })
  )
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tipCalculator(){
    console.log(Asker());

    // // calculate tip
    // if (bill < 50){
    //     var tipWeight = 0.0;
    // } else if (bill < 100){
    //     var tipWeight = 0.03;
    // } else if (bill < 200){
    //     var tipWeight = 0.05;
    // } else {
    //     var tipWeight = 0.08;
    // }

    // let tip:number
    // switch (country.toLowerCase()) {
    //     case 'usa':
    //         switch (service) {
    //             case 1:
    //                 tip = 0.1;
    //                 break;
    //             case 2:
    //                 tip = 0.15;
    //                 break;
    //             case 3:
    //                 tip = 0.18;
    //                 break;
    //             default:
    //                 console.log('Did not proved service level, defaulting 0.0');
    //                 tip = 0.0;
    //                 break;
    //         }
    //         break;

    //     case 'canada':
    //         switch (service) {
    //             case 1:
    //                 tip = 0.05;
    //                 break;
    //             case 2:
    //                 tip = 0.08;
    //                 break;
    //             case 3:
    //                 tip = 0.12;
    //                 break;
    //             default:
    //                 console.log('Did not proved service level, defaulting 0.0');
    //                 tip = 0.0;
    //                 break;
    //         }
    //         break;
    //     default:
    //         console.log('Did not proved country, defaulting 0.0');
    //         tip = 0.0;
    //         break;
    //     }

    // const total:number = bill + (bill * tipWeight) + (bill * tip);
    // console.log(`The tip is ${tip}`);
    // console.log('Added weight, tip is now ' + (tip + tipWeight));
    // console.log('The tip amount is ' + ((bill * tipWeight) + (bill * tip)));
    // console.log(`The total is ${total}`);

}

function Asker() {
    rl.question('What is the bill? ', (answer: string) => {
        var bill: number = parseInt(answer);
        rl.question('What is the country? ', (answer: string) => {
            var country: string = answer;
            rl.question('What is the service level? ', (answer: string) => {
                var service: number = parseInt(answer);
                console.log({
                    bill: bill,
                    country: country,
                    service: service
                
                })
                return {
                    "bill": bill,
                    "country": country,
                    "service": service
                };
            });
        });
    });
}

const test = new Asker();

console.log(typeof test)