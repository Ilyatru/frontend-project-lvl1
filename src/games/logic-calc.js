import generateGame from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const calculator = (firstNumber, secondNumber, mathSymbolNumber) => {
  const mathSymbolsColl = ['+', '-', '*'];
  const [plus, minus, multiplication] = mathSymbolsColl;
  let mathSymbol = plus;
  let correctAnswer = firstNumber + secondNumber;

  if (mathSymbolNumber === 0) {
    mathSymbol = minus;
    correctAnswer = firstNumber - secondNumber;
  } else if (mathSymbolNumber === 1) {
    mathSymbol = multiplication;
    correctAnswer = firstNumber * secondNumber;
  }

  return [mathSymbol, correctAnswer];
};

const generateRound = () => {
  const firstNumber = getRandomInRange(0, 100);
  const secondNumber = getRandomInRange(0, 100);
  const mathSymbolNumber = getRandomInRange(0, 2);
  const [mathSymbol, correctAnswer] = calculator(firstNumber, secondNumber, mathSymbolNumber);
  const question = `${firstNumber} ${mathSymbol} ${secondNumber}`;

  return [question, correctAnswer.toString()];
};

export default () => generateGame(gameDescription, generateRound);
