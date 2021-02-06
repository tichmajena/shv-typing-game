window.addEventListener('load', init);

// Globals

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
}
// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'sttue',
  'generate',
  'stubborn',
  'cocktail',
];

// Initialize Game
function init() {
  // Show number of seconds in UI
seconds.innerHTML = currentLevel;
// Load word from array
showWord(words);
// Start matching on word input
wordInput.addEventListener('input', startMatch);
// Call countdown every second
setInterval(countdown, 1000);
// Check game status
setInterval(checkStatus, 50)
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;

  }else {
    scoreDisplay.innerHTML = score;

  }
}
// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  }else {
    message.innerHTML = '';
    return false;
  }

}

// Pick & show random word
function showWord() {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  //Output random words
  currentWord.innerHTML = words[randIndex];

// words[0]
// words.length
// Math.floor()zx
 //Math.random()

}

// countdown timer
function countdown() {
  // Make sure time is not run out
  if(time > 0) {
    // Decrement
    time--;
  }else if (time === 0) {
    // Game is over
    isPlaying = false;
    return;
  }
  // Show time
  timeDisplay.innerHTML = time;
  console.log(time);
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
    return;
  }
}

setInterval(countdown, 1000);
// Check game status
setInterval(checkStatus, 50);
