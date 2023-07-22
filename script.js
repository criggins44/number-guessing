//Number Guessing Game
let answer = Math.floor(Math.random() * 11);
const result = document.getElementById('guessesUsed');
const feedback = document.getElementById('guessFeedback');
let numberOfGuesses = 0;
let guessCounter = 0

function chooseNumber(){
	Math.floor(Math.random() * 11);
}

function guessNumber(){
	var userGuess = Number(document.getElementById('guessBox').value)

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
		else if(userGuess === answer){
			result.innerHTML = 'CONGRATULATIONS';
		}
	}
	 if(guessCounter === 4){
	 	result.innerHTML = 'The correct answer is ' + answer;
	 	alert('GAME OVER');
	 	return;
	 }
}
