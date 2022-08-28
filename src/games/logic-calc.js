import makeCommonActions from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const makeRound = () => {
  const firstNumber = getRandomInRange(0, 100);
  const secondNumber = getRandomInRange(0, 100);
  const mathSymbolNumber = getRandomInRange(0, 2);
  let mathSymbol;
  let correctAnswer;
  if (mathSymbolNumber === 0) {
    mathSymbol = '+';
    correctAnswer = +firstNumber + +secondNumber;
  } else if (mathSymbolNumber === 1) {
    mathSymbol = '-';
    correctAnswer = +firstNumber - +secondNumber;
  } else {
    mathSymbol = '*';
    correctAnswer = +firstNumber * +secondNumber;
  }
  const question = `${firstNumber} ${mathSymbol} ${secondNumber}`;

  return [question, correctAnswer.toString()];
};

export default () => makeCommonActions(gameDescription, makeRound);
