import readlineSync from 'readline-sync';

const roundCount = 3;

const generateGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default generateGame;
