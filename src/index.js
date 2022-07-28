#!/usr/bin/env node
import readlineSync from 'readline-sync';
export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Welcome to the Brain Games!');
export const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
