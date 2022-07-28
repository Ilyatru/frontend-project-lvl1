import readlineSync from 'readline-sync';
import { getRandomInRange, playerName } from '../index.js';

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const divisorsArr = [];
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

    console.log('Question:', number);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  } console.log(`Congratulations, ${playerName}!`);
};

export default primeGame;
