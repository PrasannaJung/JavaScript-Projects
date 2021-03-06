'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// STAARTING CONDITION
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const newFeature = function () {
  console.log('This is a new feature');
};

// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click', function () {
  // 1. GENERATING A RANDOM DICE ROLL
  const dice = Math.trunc(Math.random() * 6) + 1;
  newFeature();

  // 2. DISPLAY DICE
  diceEl.classList.remove('hidden');
  diceEl.src = `./images/dice-${dice}.png`;

  // 3.CHECK FOR ROLLED 1: if true, switch to next player
  if (dice !== 1) {
    // ADD DICE TO THE CURRENT SCORE
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // SWITCH PLAYER
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // 1. ADD CURRENT SCORE TO ACTIVE PLAYER
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // 2.CHECK IF PLAYER'S SCORE IS AT >= 100
  if (scores[activePlayer] >= 100) {
    // FINISH THE GAME
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // SWITCH PLAYER
    switchPlayer();
  }
});
