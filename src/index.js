#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { gameDescription, evenLogic, correctAnswer } from '../src/games/logic-even.js';

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Welcome to the Brain Games!');
export const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!`);
console.log(gameDescription);

export const gameEngine = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInRange(0, 100);
    console.log('Question:', number);
    const answer = readlineSync.question('Your answer: ');

    if (evenLogic(answer, number)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer(answer)}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  } console.log(`Congratulations, ${playerName}!`);
};
