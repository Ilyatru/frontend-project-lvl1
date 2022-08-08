export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const correctAnswer = (param) => {
  if (param === 'yes') {
    return 'no';
  } return 'yes';
};

export const evenLogic = (param, num) => {
  const checkYes = (num % 2 === 0) && (param === 'yes');
  const checkNo = (num % 2 !== 0) && (param === 'no');
  if (checkYes || checkNo) {
    return true;
  } return false;
};
