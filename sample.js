function playRound(playerSelection, computerSelection) {
  //When player chooses Rock.
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log("Computer also chose rock. It's a tie!");
      return "tie";
    } else if (computerSelection === "paper") {
      console.log("Computer chose Paper. You lose!");
      return "computer";
    } else {
      console.log("Computer chose Scissors. You win!");
      return "player";
    }
  }

  // When player chooses paper.
  if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      console.log("Computer also chose paper. It's a tie!");
      return "tie";
    } else if (computerSelection === "scissors") {
      console.log("Computer chose scissors. You lose!");
      return "computer";
    } else {
      console.log("Computer chose rock. You win!");
      return "player";
    }
  }

  // When player chooses Scisssors.
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("Computer chose rock. You lose!");
      return "computer";
    } else if (computerSelection === "paper") {
      console.log("Computer chose Paper. You win!");
      return "player";
    } else {
      console.log("Computer chose Scissors. It's a tie!");
      return "tie";
    }
  }
}

// function game() {
//   let playerPoints = 0;
//   let computerPoints = 0;
//   let tiePoints = 0;

// let firstRound = playRound(playerChoice(), computerPlay());
// let secondRound = playRound(playerChoice(), computerPlay());
// let thirdRound = playRound(playerChoice(), computerPlay());
// let fourthRound = playRound(playerChoice(), computerPlay());
// let fifthRound = playRound(playerChoice(), computerPlay());

//   if (firstRound == "player") {
//     playerPoints++;
//   } else if (firstRound == "computer") {
//     computerPoints++;
//   } else {
//     tiePoints++;
//   }

//   if (secondRound == "player") {
//     playerPoints++;
//   } else if (secondRound == "computer") {
//     computerPoints++;
//   } else {
//     tiePoints++;
//   }

//   if (thirdRound == "player") {
//     playerPoints++;
//   } else if (thirdRound == "computer") {
//     computerPoints++;
//   } else {
//     tiePoints++;
//   }

//   if (fourthRound == "player") {
//     playerPoints++;
//   } else if (fourthRound == "computer") {
//     computerPoints++;
//   } else {
//     tiePoints++;
//   }

//   if (fifthRound == "player") {
//     playerPoints++;
//   } else if (fifthRound == "computer") {
//     computerPoints++;
//   } else {
//     tiePoints++;
//   }

//   // Calculating the Winner.
//   if (playerPoints > computerPoints) {
//     console.log("PLAYER WINS. CONGRATULATIONS!");
//   } else if (computerPoints > playerPoints) {
//     console.log("YOU SUCK AT THIS GAME. TRY AGAIN!");
//   } else {
//     console.log("ITS A TIE!");
//   }
// }

// game();
