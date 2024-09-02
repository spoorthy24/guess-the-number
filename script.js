'use strict';
/*
// To read the content. from console
console.log(document.querySelector('.message').textContent);
// To manioulate
document.querySelector('.message').textContent = '🎉 Correct number!';

document.querySelector('.number').textContent = 24;
//.value to get input values
document.querySelector('.guess').value = 2;
console.log(document.querySelector('.guess').value);
*/

// to generate a random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input

  if (!guess) {
    console.log(
      //   (document.querySelector('.message').textContent = '⛔ No Number!')
      displayMessage('⛔ No Number!')
    );

    // When guess is correct player wins
  } else if (guess === secretNumber) {
    console.log(
      //   (document.querySelector('.message').textContent = '🎉 Correct number!')
      displayMessage('🎉 Correct number!')
    );
    document.querySelector('.number').textContent = secretNumber;

    // DOM with CSS

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when the guess is Too High.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      console.log(
        // (document.querySelector('.message').textContent =
        //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!')
        displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!')
      );
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      console.log(
        // (document.querySelector('.message').textContent =
        //   '😪 You Lost the Game!')
        displayMessage('😪 You Lost the Game!')
      );
      document.querySelector('.score').textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       console.log(
  //         (document.querySelector('.message').textContent = 'Too High!')
  //       );
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       console.log(
  //         (document.querySelector('.message').textContent =
  //           '😪 You Lost the Game!')
  //       );
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // when the guess is Too Low.
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       console.log(
  //         (document.querySelector('.message').textContent = 'Too Low!')
  //       );
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       console.log(
  //         (document.querySelector('.message').textContent =
  //           'You Lost the Game! ☹')
  //       );
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
