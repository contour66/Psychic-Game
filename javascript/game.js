 
window.addEventListener("DOMContentLoaded", function(){
	
	//This is my game object that contains the main properties and methods that are used to run.


//Array of letters that are used to be randomly generated
	var letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M","N","O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];
	//Generates random letter
    
  	var random = letters[Math.floor(Math.random()* letters.length)];
 
  				console.log( "first " + random);
  
  	var game = {
  		wins: 0,    // Stores number of wins
  		losses: 0,  // Stores number of losses
  		guessesLeft: 10, //Stores number of guess left.
  		// lostGame: true,
  		lettersGuessed:"",
  		
  
		// This clears and starts the game.
  		
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
  				random = letters[Math.floor(Math.random()* letters.length)];
  				console.log("Lose " + random);
  			}
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
  			this.lettersGuessed = " ";
  			random = letters[Math.floor(Math.random()* letters.length)];
  			console.log("Win " + random);
  		},

  	};		


	game.startGame();
	console.log(game.losses);
	console.log(game.guessesLeft);
	console.log(game.wins);

	
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
    			
    			// uses jQuery to pull the lettsGuessed id
    			var elGuessDiv = $("#lettersGuessed");

    				//creates a new div to place each letter
    				var newLetters= $("<div>" + userInput + "</div>");
  				
  					//appends the letter 
  					 elGuessDiv.append(userInput);
    			
  				//run the method to see if the user is out of guesses and starts new game
    			game.outOfGuesses();

    			
    			
    		}

    		//Checks to see if key pressed is equal to the random number.
    		else if (userInput === random) {
    			
    			console.log(userInput);
    			
    			//Runs the method to update wins and start new game.
    			game.correctGuess();	
    		}
  		}
  		
  		//Checks to see if its not an alpha key that was pressed
  		else {
      		
      		//Alerts user to press another key
      		alert("That's not a letter!");
      	}
  
 	};
  
});
  