//Number Guessing Game

var answer = Math.floor(Math.random() *101);

function chooseNumber(){
	Math.floor(Math.random() *101);
}

function guessNumber(){
	userGuess = document.getElementById('guessBox').value;

	if(userGuess < 0 || userGuess > 100){
		alert('Please enter a value 0-100')
	}
}