#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
  export const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`); // eslint-disable-line no-console
  console.log('Answer "yes" if the number is even, otherwise answer "no".'); // eslint-disable-line no-console

export const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
