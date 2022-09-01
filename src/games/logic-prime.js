import generateGame from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (someNumber) => {
  const divisorsArr = [];
  for (let y = 3; y < someNumber; y += 1) {
    if (someNumber % y === 0) {
      divisorsArr.push(y);
    }
  }

  if (divisorsArr.length > 0) {
    return false;
  } return true;
};

const generateRound = () => {
  const question = getRandomInRange(2, 100);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => generateGame(gameDescription, generateRound);
