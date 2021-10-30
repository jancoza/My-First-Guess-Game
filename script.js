'use strict';

let numberSecret = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.score').textContent = '4';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// console.log(document.querySelector('body'));

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // When there is no winner

    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === numberSecret) {
    // When player wins

    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = numberSecret;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when the guess is wrong
    // When guess is too high
  } else if (guess !== numberSecret) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > numberSecret ? 'Too High!' : 'Too Low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
    // } else if (guess < numberSecret) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!!!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numberSecret = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
