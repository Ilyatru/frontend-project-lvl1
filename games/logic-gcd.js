import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../src/index.js';

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.'); // eslint-disable-line no-console
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInRange(0, 100);
    const secondNumber = getRandomInRange(0, 100);
    let correctAnswer;
    let firstDivArr = [];
    let secondDivArr = [];

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

    const commonDiv = [...new Set(firstDivArr)].filter(item => secondDivArr.includes(item));
    correctAnswer = commonDiv[commonDiv.length - 1];

    console.log('Question:', firstNumber, secondNumber); // eslint-disable-line no-console
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!'); // eslint-disable-line no-console
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`); // eslint-disable-line no-console
      console.log(`Let's try again, ${playerName}!`); // eslint-disable-line no-console
      return;
    }
  } console.log(`Congratulations, ${playerName}!`); // eslint-disable-line no-console
};

export default gcdGame;
