//Number Guessing Game

var answer = Math.floor(Math.random() *101);
var tooLow = document.getElementById('guessResult');
var tooHigh = document.getElementById('guessResult');

function chooseNumber(){
	Math.floor(Math.random() *101);
}

function guessNumber(){
	userGuess = document.getElementById('guessBox').value;

	if(userGuess < 0 || userGuess > 100){
		alert('Please enter a value 0-100')
	}

	else if (userGuess < answer){
		tooLow.innerHTML = 'Too Low';
	}

	else if (userGuess > answer){
		tooHigh.innerHTML = 'Too High';
	}
}