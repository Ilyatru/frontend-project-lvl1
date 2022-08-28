import makeCommonActions from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const makeRound = () => {
  const firstNumber = getRandomInRange(1, 100);
  const secondNumber = getRandomInRange(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
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

  return [question, correctAnswer.toString()];
};

export default () => makeCommonActions(gameDescription, makeRound);
