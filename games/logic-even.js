import { getRandomInRange } from '../src/index.js';
import { getPlayerName } from '../src/index.js';
import readlineSync from 'readline-sync';

const evenGame = () => {
    playerName();
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInRange(0, 100);
    console.log('Question:', number); // eslint-disable-line no-console
    const answer = readlineSync.question('Your answer: ');
    const checkYes = (number % 2 === 0) && (answer === 'yes');
    const checkNo = (number % 2 !== 0) && (answer === 'no');
    if ((checkYes === true) || (checkNo === true)) {
      console.log('Correct!'); // eslint-disable-line no-console
    } else {
      const correctAnswer = (answer === 'yes' ? 'no' : 'yes');
      console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`); // eslint-disable-line no-console
      console.log(`Let's try again, ${playerName}!`); // eslint-disable-line no-console
      return;
    }
  } console.log(`Congratulations, ${playerName}!`); // eslint-disable-line no-console
};

export default evenGame;
