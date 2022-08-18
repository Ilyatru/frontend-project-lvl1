import readlineSync from 'readline-sync';

export const gameEngine = (gameDescription, roundLogic) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

  for (let i = 0; i < 3; i += 1) {
    const [number, correctAnswer] = roundLogic();
    console.log('Question:', number);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  } console.log(`Congratulations, ${playerName}!`);
};

export default gameEngine;
