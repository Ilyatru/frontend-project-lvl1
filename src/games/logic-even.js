import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../index.js';

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInRange(0, 100);
    console.log('Question:', number);
    const answer = readlineSync.question('Your answer: ');
    const checkYes = (number % 2 === 0) && (answer === 'yes');
    const checkNo = (number % 2 !== 0) && (answer === 'no');
    const correctAnswer = (answer === 'yes' ? 'no' : 'yes');
    if (checkYes || checkNo) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  } console.log(`Congratulations, ${playerName}!`);
};

export default evenGame;
