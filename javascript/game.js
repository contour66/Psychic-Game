 
window.addEventListener("DOMContentLoaded", function(){
	
	//Array for letters
 	//var letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L","M","N","O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];

	//Variable for wins
 	//var wins = 0;  
 
	//Variable for losses
 	//var losses = 0;  
 
	//Variable for guesses
 	// var guesses = userInput; 

	// Generates a random leter from the letters array
 	//var random = letters[Math.floor(Math.random()*letters.length)];
 	//console.log(random);

  	//var rightguess = random

  	var game = {
  		wins: 0,    // Stores number of wins
  		losses: 0,  // Stores number of losses
  		guessesLeft: 10, //Stores number of guess left.
  		lostGame: true,
  		lettersGuessed:"",
  		currentLetter: null,
  		
  // 		generate: function(){
  // 			var letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M','N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z'];
  		
		// 	var random = letters[Math.floor(Math.random()* letters.length)];
		// 	console.log(random);
		// },
  		
  		startGame: function(){
  			console.log("New Game!");
  			//Sets wins to 0
  			this.wins =  0;
  			var elWins = document.getElementById("wins");
  			elWins.textContent = this.wins;
  			
  			this.losses=  0; //Sets losses to 0
  			var elWins = document.getElementById("losses");
 			elWins.textContent = game.losses;
  			
  			this.guessesLeft =  10; //Sets guessLeft to 10
  			var elWins = document.getElementById("guessesLeft");
  			elWins.textContent = game.guessesLeft;
  			
  			//this.winner = false;  //Sets winner to false
  			
  			this.lettersGuessed = " "; //Sets letters guessed to none
  			
  		},
  		
  		// This function subtracts 1 from the guessesLeft and updates it in the HTML
  		incorrectGuess: function(){
  			this.guessesLeft = this.guessesLeft - 1;
  			var elWins = document.getElementById("guessesLeft");
  			elWins.textContent = this.guessesLeft;
  			this.random;
  			
  			
  		},

  		/* This function checks if the guessesLeft is equal to 0.
  		If it is equal to 0 then it updates the losses by one.
  		Then it alerts the user the game is lost.
  		Next it resets guesses to 10 and updates it in the HTML.
  		*/
  		outOfGuesses: function(){

  			if (this.guessesLeft === 0) {
  				this.losses=  this.losses + 1; //Adds to losses
  				var elWins = document.getElementById("losses");
 				elWins.textContent = game.losses;
  				alert("You got psyched!")
  				this.guessesLeft =  10; //Sets guessLeft to 10
  				var elWins = document.getElementById("guessesLeft");
  				elWins.textContent = game.guessesLeft;
  				this.lettersGuessed = " ";
  				var elWins = document.getElementById("lettersGuessed");
  				elWins.textContent = game.lettersGuessed;

  			
  			}
  			//this.guessesLeft = this.lostGame/  			// this.guessesLeft;
  			
  		},

  		// This function adds 1 to wins and updates it in the HTML
		correctGuess: function(){

  			this.wins = this.wins  + 1;
  			var elWins = document.getElementById("wins");
  			elWins.textContent = this.wins;
  			alert("You are psychic!")
  			this.guessesLeft =  10; //Sets guessLeft to 10
  			var elWins = document.getElementById("guessesLeft");
  			elWins.textContent = game.guessesLeft;
  			this.random;
  		},
  		
  		continueGame: function(){



  		},


  	};		



  				
  				
  	
 	console.log(game.wins)
	game.startGame();
	// var randomLetter=game.generate();

	// var randomLetter = game.generate();
  
  	// console.log(game.wins);
	console.log(game.losses);
	console.log(game.guessesLeft);
	console.log(game.wins);

		//Array of letters
	

	var letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M","N","O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];
	console.log(game.correctGuess());
	

	//Generates random letter
  	var random = letters[Math.floor(Math.random()* letters.length)];
  	if (game.correctGuess() || game.outOfGuesses()){

  	// else {
  	
  	// console.log(random);

  	// }
  	
  	  	//Listens for key press to start game
  	  	document.onkeyup = function(event) {
     	var userInput = event.key.toUpperCase();
   
     	
     	//Variable to check keys typed are A-Z only
		var inp = String.fromCharCode(event.keyCode);

	
		
		// If statement checks if keys Alpha and then goes to next if statement
		if (/[A-Z]/.test(inp)){
		


			//If the users guess does not equal the random letter chosen
			if (userInput!== random) {
    			//console.log(userInput);
    			
    			//run the method incorrect guess;
    			game.incorrectGuess();
    			
    		//append the letter 
    			var elGuessDiv = $("#lettersGuessed");

    			// for(var i = 0; i < letters.length; i++){

    				var newLetters= $("<div>" + userInput + "</div>");
  				
  					// el.textContent = newLetters;

  					 elGuessDiv.append(userInput);
    			// }
  					// 	//var newSpan =document.createElement("span"); ?????????
  					// 	document.createElement("div")
  				// elGuessLetter.textContent = elGuessLetter
  			  	 

  				//run the method to see if the user is out of guesses
    			game.outOfGuesses(); 
    			
    			
    		}

    		else if (userInput === random) {
    			
    			console.log(userInput);
    			
    			game.correctGuess();	

    			
    		}
  		}
  		else {
      		alert("That's not a letter!");
      	}



     	//Checks if userInput mattches the random number
    	// if (userInput!==random)  {
    	// 	console.log(userInput);
    	// 	game.incorrectGuess();

    	// 	var elWins = document.getElementById("guessesLeft");
  			// elWins.textContent = game.guessesLeft();

    	// }
 	};


    // for(var i = 0; i < letters.length; ++i){
        
        // Check the input against the current letter we're looping over
//         	if(userInput === letters[i]){
//         	console.log("correct")
//   			}
// 		}
// 	};
});
    // if (userInput !== random ){

	


// console.log("yes")



// reset wins, losses, guesses to 0 or null

// look for key event
// if letter matches key event
	//update wins
	//reset values
// otherwise display key event
	//display key event
	//subtract from guesses
	//keep doing this until guesses=0 or letter is guessed
	//if letter is guessed	