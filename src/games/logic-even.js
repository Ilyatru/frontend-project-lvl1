import makeCommonActions from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (someNumber) => someNumber % 2 === 0;

const makeRound = () => {
  const question = getRandomInRange(0, 100);
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => makeCommonActions(gameDescription, makeRound);
