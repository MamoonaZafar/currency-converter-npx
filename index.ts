#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';

// Display welcome message
console.log(chalk.blue(figlet.textSync('Welcome to Currency Converter')));

// Define the type for the conversionRates object
type ConversionRates = {
  [key: string]: number;
};

// Define currency conversion rates
const conversionRates: ConversionRates = {
  USD: 1,
  EUR: 0.82,
  GBP: 0.71,
  CAD: 1.21,
  AUD: 1.29,
  Dirham: 1,
  pkr: 0.28
};

// Prompt for currency and amount
inquirer.prompt([
  {
    type: 'input',
    name: 'amount',
    message: 'Enter amount:',
    validate: (input) => {
      if (isNaN(input)) {
        return 'Please enter a valid amount';
      } else {
        return true;
      }
    },
  },
  {
    type: 'list',
    name: 'from',
    message: 'Select currency to convert from:',
    choices: ['USD', 'EUR', 'GBP', 'CAD', 'AUD' , 'Dirham', 'pkr'],
  },
  {
    type: 'list',
    name: 'to',
    message: 'Select currency to convert to:',
    choices: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'Dirham', 'pkr'],
  },
]).then(({ amount, from, to }) => {
  // Convert currency
  const convertedAmount = Number(amount) * (conversionRates[to] / conversionRates[from]);

  // Display result
  console.log(`${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`);
});
