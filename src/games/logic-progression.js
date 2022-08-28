import makeCommonActions from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const makeRound = () => {
  const progression = [];
  progression[0] = getRandomInRange(0, 10);
  const difference = getRandomInRange(0, 10);
  const missingElementIndex = getRandomInRange(0, 9);

  for (let y = 0; y < 9; y += 1) {
    const progressionElement = progression[y] + difference;
    progression.push(progressionElement);
  }

  const correctAnswer = progression[missingElementIndex];
  progression[missingElementIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer.toString()];
};

export default () => makeCommonActions(gameDescription, makeRound);
