import generateGame from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'What is the result of the expression?';
const correctAnswerIfAddition = (a, b) => a + b;
const correctAnswerIfSubtraction = (a, b) => a - b;
const correctAnswerIfMultiplication = (a, b) => a * b;

const generateRound = () => {
  const firstNumber = getRandomInRange(0, 100);
  const secondNumber = getRandomInRange(0, 100);
  const mathSymbolNumber = getRandomInRange(0, 2);
  let mathSymbol;
  let correctAnswer;
  if (mathSymbolNumber === 0) {
    mathSymbol = '+';
    correctAnswer = correctAnswerIfAddition(firstNumber, secondNumber);
  } else if (mathSymbolNumber === 1) {
    mathSymbol = '-';
    correctAnswer = correctAnswerIfSubtraction(firstNumber, secondNumber);
  } else {
    mathSymbol = '*';
    correctAnswer = correctAnswerIfMultiplication(firstNumber, secondNumber);
  }
  const question = `${firstNumber} ${mathSymbol} ${secondNumber}`;

  return [question, correctAnswer.toString()];
};

export default () => generateGame(gameDescription, generateRound);
