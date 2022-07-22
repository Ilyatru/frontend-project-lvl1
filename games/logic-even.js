import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../src/index.js';

const evenGame = () => {
  console.log('0Answer "yes" if the number is even, otherwise answer "no".'); // eslint-disable-line no-console
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
