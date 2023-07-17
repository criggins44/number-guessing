//Number Guessing Game

var answer = Math.floor(Math.random() * 101);
var tooLow = document.getElementById('guessResult');
var tooHigh = document.getElementById('guessResult');
var correctAnswer = document.getElementById('guessResult');
var amountOfGuesses = document.getElementById('guessesUsed');
var numberOfGuesses = 0;

function chooseNumber(){
	Math.floor(Math.random() * 101);
}

function guessNumber(){
	userGuess = document.getElementById('guessBox').value;
	numberOfGuesses +=1;

	if(userGuess < 0 || userGuess > 100){
		alert('Please enter a value 0-100')
	}

	else if (userGuess < answer){
		tooLow.innerHTML = 'Too Low';
		amountOfGuesses.innerHTML = 'Used Guesses: ' + numberOfGuesses;
	}

	else if (userGuess > answer){
		tooHigh.innerHTML = 'Too High';
		amountOfGuesses.innerHTML = 'Used Guesses: ' + numberOfGuesses;
	}

	else if (userGuess = answer){
		correctAnswer.innerHTML = 'CONGRATULATIONS';
	}
}