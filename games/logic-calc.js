/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../src/index.js';

const calcGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInRange(0, 100);
    const secondNumber = getRandomInRange(0, 100);
    const mathSymbolNumber = getRandomInRange(0, 2);
    let mathSymbol;
    let correctAnswer;

    if (mathSymbolNumber === 0) {
      mathSymbol = '+';
      correctAnswer = Number(firstNumber) + Number(secondNumber);
    } else if (mathSymbolNumber === 1) {
      mathSymbol = '-';
      correctAnswer = Number(firstNumber) - Number(secondNumber);
    } else {
      mathSymbol = '*';
      correctAnswer = Number(firstNumber) * Number(secondNumber);
    }

    console.log('Question:', firstNumber, mathSymbol, secondNumber);
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

export default calcGame;
