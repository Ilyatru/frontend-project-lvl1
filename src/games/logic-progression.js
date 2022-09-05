import generateGame from '../index.js';
import getRandomInRange from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';
const generateProgression = (firstNumber, commonDifference) => {
  const progression = [];
  progression[0] = firstNumber;
  const progressionLength = 10;

  for (let i = 0; i < (progressionLength - 1); i += 1) {
    const progressionElement = progression[i] + commonDifference;
    progression.push(progressionElement);
  }

  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(0, 10);
  const difference = getRandomInRange(0, 10);
  const progression = generateProgression(firstNumber, difference);
  const missingElementIndex = getRandomInRange(0, 9);
  const correctAnswer = progression[missingElementIndex + 1] - difference;
  progression[missingElementIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer.toString()];
};

export default () => generateGame(gameDescription, generateRound);
