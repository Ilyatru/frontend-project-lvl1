import gameEngine from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (someNumber) => someNumber % 2 === 0;

const roundLogic = () => {
  const number = getRandomInRange(0, 100);
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const evenGame = () => {
  gameEngine(gameDescription, roundLogic);
};

export default evenGame;
