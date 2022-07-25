/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../src/index.js';

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInRange(1, 100);
    const secondNumber = getRandomInRange(1, 100);
    const firstDivArr = [];
    const secondDivArr = [];

    for (let i1 = 1; i1 <= firstNumber; i1 += 1) {
      if (firstNumber % i1 === 0) {
        firstDivArr.push(i1);
      }
    }
    for (let i2 = 1; i2 <= secondNumber; i2 += 1) {
      if (secondNumber % i2 === 0) {
        secondDivArr.push(i2);
      }
    }

    const commonDiv = [...new Set(firstDivArr)].filter((item) => (secondDivArr.includes(item)));
    const correctAnswer = commonDiv[commonDiv.length - 1];

    console.log('Question:', firstNumber, secondNumber);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  } console.log(`Congratulations, ${playerName}!`);
};

export default gcdGame;
