/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../src/index.js';

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
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
    const strProgression = progression.join(' ');
    console.log('Question:', strProgression);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  } console.log(`Congratulations, ${playerName}!`);
};

export default progressionGame;
