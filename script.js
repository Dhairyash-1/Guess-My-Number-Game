'use strict';

const checkBtn = document.querySelector('.check');
const guessNum = document.querySelector('.guess');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
const body = document.querySelector('.body');
let score = 20;
let highScore = 0;

// again button

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  body.style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  message.textContent = 'Start guessing...';
  guessNum.value = '';
});

// checkbutton

checkBtn.addEventListener('click', () => {
  const guessValue = Number(guessNum.value);

  if (!guessValue) {
    message.textContent = '🚫 No number!';
  } else if (guessValue === secretNumber) {
    message.textContent = '🏆Correct guess!';
    body.style.background = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guessNum.value > secretNumber ? '📈too high!' : '📉too low!';
      guessNum.value = '';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
      body.style.background = 'red';
    }
  }

  // } else if (guessValue < secretNumber) {
  //   if (score > 1) {
  //     message.textContent = '📉too low!';
  //     guessNum.value = '';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     body.style.background = 'red';
  //   }
  // } else if (guessValue > secretNumber) {
  //   if (score > 1) {
  //     message.textContent = '📈too high!';
  //     guessNum.value = '';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     message.textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     body.style.background = 'red';
  //   }
});
