import generateGame from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';
const generateProgression = (firstNumber, commonDifference, missingElementIndex) => {
  const progression = [];
  progression[0] = firstNumber;
  const progressionLength = 10;

  for (let i = 0; i < (progressionLength - 1); i += 1) {
    const progressionElement = progression[i] + commonDifference;
    progression.push(progressionElement);
  }

  progression[missingElementIndex] = '..';

  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(0, 10);
  const difference = getRandomInRange(0, 10);
  const missingElementIndex = getRandomInRange(0, 9);
  const progression = generateProgression(firstNumber, difference, missingElementIndex);
  const correctAnswer = +progression[missingElementIndex + 1] - difference;
  const question = progression.join(' ');

  return [question, correctAnswer.toString()];
};

export default () => generateGame(gameDescription, generateRound);
