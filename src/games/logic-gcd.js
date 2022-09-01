import generateGame from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
  const divisorsArr = [];

  for (let i1 = 1; i1 <= firstNumber; i1 += 1) {
    if (firstNumber % i1 === 0) {
      divisorsArr.push(i1);
    }
  } // Добавили в массив делителей делители первого числа
  for (let i2 = 1; i2 <= secondNumber; i2 += 1) {
    if (secondNumber % i2 === 0) {
      divisorsArr.push(i2);
    }
  } // Добавили в массив делителей делители второго числа

  const compareNumbers = (a, b) => a - b;
  const sortedDivisorsArr = divisorsArr.sort(compareNumbers); // Расставили делители по возрастанию

  let greatCommonDivider;

  for (let i3 = 0; i3 < (sortedDivisorsArr.length - 1); i3 += 1) {
    if (sortedDivisorsArr[i3] === sortedDivisorsArr[i3 + 1]) {
      greatCommonDivider = sortedDivisorsArr[i3];
    }
  }
  return greatCommonDivider;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(1, 100);
  const secondNumber = getRandomInRange(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = findGCD(firstNumber, secondNumber);

  return [question, correctAnswer.toString()];
};

export default () => generateGame(gameDescription, generateRound);
