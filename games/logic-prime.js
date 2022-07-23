import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../src/index.js';

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".'); // eslint-disable-line no-console
  for (let i = 0; i < 3; i += 1) {
    let divisorsArr = [];
    const number = getRandomInRange(2, 100);
    let correctAnswer;

    for (let y = 3; y < number; y += 1) {
      if (number % y === 0) {
        divisorsArr.push(y);
      }
    }

    if (divisorsArr.length > 0) {
      correctAnswer = 'no';
    } else correctAnswer = 'yes';

    console.log('Question:', number); // eslint-disable-line no-console
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!'); // eslint-disable-line no-console
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`); // eslint-disable-line no-console
      console.log(`Let's try again, ${playerName}!`); // eslint-disable-line no-console
      return;
    }
  } console.log(`Congratulations, ${playerName}!`); // eslint-disable-line no-console
};

export default primeGame;
