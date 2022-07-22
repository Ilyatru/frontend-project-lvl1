import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../src/index.js';

const calcGame = () => {
  console.log('What is the result of the expression?'); // eslint-disable-line no-console
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

    console.log('Question:', firstNumber, mathSymbol, secondNumber); // eslint-disable-line no-console
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

export default calcGame;
