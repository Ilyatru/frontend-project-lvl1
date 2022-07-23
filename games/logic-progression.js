import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../src/index.js';

const progressionGame = () => {
  console.log('What number is missing in the progression?'); // eslint-disable-line no-console
  for (let i = 0; i < 3; i += 1) {
    let progression = [];
    progression[0] = getRandomInRange(0, 10);
    const difference = getRandomInRange(0, 10);
    const missingElementIndex = getRandomInRange(0, 9);

    for (let y = 0; y < 9; y += 1) {
      const progressionElement = progression[y] + difference;
      progression.push(progressionElement);
    }
    const correctAnswer = progression[missingElementIndex];
    progression[missingElementIndex] = '..';
    let strProgression = progression.join(' ');
    console.log('Question:', strProgression); // eslint-disable-line no-console
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!'); // eslint-disable-line no-console
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`); // eslint-disable-line no-console
      console.log(`Let's try again, ${playerName}!`); // eslint-disable-line no-console
      return;
    }
  } console.log(`Congratulations, ${playerName}!`); // eslint-disable-line no-console
};

export default progressionGame;
