//Number Guessing Game
var answer = Math.floor(Math.random() * 101);
var result = document.getElementById('guessesUsed');
var feedback = document.getElementById('guessFeedback');
let numberOfGuesses = 0;
var guessCounter = 0

function chooseNumber(){
	Math.floor(Math.random() * 101);
}

function guessNumber(){
	var userGuess = document.getElementById('guessBox').value

	if(userGuess < 0 || userGuess > 100){
		alert('Please enter a value 0 - 100');
	}
	else{
		if(userGuess < answer){
			numberOfGuesses ++;
			guessCounter ++;
			result.innerHTML = 'Used Guesses: ' + numberOfGuesses;
			feedback.innerHTML = 'Your guess is: too low';
		}
		else if(userGuess > answer){
			numberOfGuesses ++;
			guessCounter ++;
			result.innerHTML = 'Used Guesses: ' + numberOfGuesses;
			feedback.innerHTML = 'Your guess is: too high';
		}
		else if(userGuess = answer){
			result.innerHTML = 'CONGRATULATIONS';
		}
	}
	 if(guessCounter === 4){
	 	alert('GAME OVER');
	 	return;
	 }
}