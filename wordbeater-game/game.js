window.addEventListener('load', init)

let time = 5;
let score = 0;
let isPlaying;

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
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize game
function init() {
	// load random word from array
	showWord(words);
	// start matching on word input
	wordInput.addEventListener('input', startMatch)
	// Call countdown every second 
	setInterval(countdown, 1000);
	// Check game status
	setInterval(checkStatus, 50);

}

// Start match
function startMatch() {
	if(matchWords()) {
		isPlaying = true;
		time = 6;
		showWord(words);
		wordInput.value='';
		score++;
	}
	//display 0 when game restarts
	if(score === -1) {
		scoreDisplay.innerHTML= 0
	} else{
		scoreDisplay.innerHTML = score;
	}
}


//match currentWord to wordInput
function matchWords() {
	if(wordInput.value === currentWord.innerHTML) {
		message.innerHTML = "Correct!";
		return true;
	}else {
		return false;
	}
}

// Pick and show random word
function showWord(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	currentWord.innerHTML = arr[randomIndex];
}

// 
function countdown() {
	if(time > 0) {
		time--;
	} else if(time === 0) {
		isPlaying = false;
	}
	timeDisplay.innerHTML = time;
}

function checkStatus() {
	if(!isPlaying && time === 0) {
		message.innerHTML = "GAME OVER!"
		score = -1;
	}
}





/*------------- THIS IS MY WAY --------- */

// const view = {
// 	init: function() {
// 		handler.showWord(words);
// 	}
// }

// const handler = {
// 	showWord: function(arr) {
// 		let randomIndex = Math.floor(Math.random() * arr.length);
// 		currentWord.innerHTML = arr[randomIndex];
// 	}
// }


// window.addEventListener('load', view.init)
