let resultBoard = document.querySelector("#mainHeading");
let playerResult = document.querySelector("#playerResult");
let computerResult = document.querySelector("#computerResult");

// Computer generating a choice randomly.
function computerPlay() {
  let computerChoice = Math.random() * 10;
  if (computerChoice <= 3) {
    return "rock";
  } else if (computerChoice <= 6) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerSelection = computerPlay();

let rock = document.querySelector("#rock");
rock.addEventListener("click", playerChoice);

let paper = document.querySelector("#paper");
paper.addEventListener("click", playerChoice);

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playerChoice);

function playerChoice(event) {
  let playerSelection = event.target.id;
  playRound(playerSelection, computerPlay());
}

let playerPoints = 0;
let computerPoints = 0;
let tiePoints = 0;

function playRound(playerSelection, computerSelection) {
  //
  if (playerSelection == "rock") {
    //
    if (computerSelection == "rock") {
      tiePoints++;
      resultBoard.textContent =
        "You chose Rock! Computer also chose Rock. It's a tie!";
      playerResult.textContent = `You: ${playerPoints}`;
      computerResult.textContent = `Computer: ${computerPoints}`;
    }
    //
    else if (computerSelection == "paper") {
      computerPoints++;
      resultBoard.textContent =
        "You chose Rock. Computer chose Paper. You lose! LOL.";
      playerResult.textContent = `You: ${playerPoints}`;
      computerResult.textContent = `Computer: ${computerPoints}`;
    }
    //
    else {
      playerPoints++;
      resultBoard.textContent =
        "You chose Rock. Computer chose Scissors. You win!!";
      playerResult.textContent = `You: ${playerPoints}`;
      computerResult.textContent = `Computer: ${computerPoints}`;
    }
  }

  if (playerSelection == "paper") {
    //
    if (computerSelection == "paper") {
      tiePoints++;
      resultBoard.textContent =
        "You chose Paper! Computer also chose Paper. It's a tie!";
      playerResult.textContent = `You: ${playerPoints}`;
      computerResult.textContent = `Computer: ${computerPoints}`;
    }
    //
    else if (computerSelection == "scissors") {
      computerPoints++;
      resultBoard.textContent =
        "You chose Paper. Computer chose Scissors. You lose! LOL.";
      playerResult.textContent = `You: ${playerPoints}`;
      computerResult.textContent = `Computer: ${computerPoints}`;
    }
    //
    else {
      playerPoints++;
      resultBoard.textContent =
        "You chose paper. Computer chose rock. You win!!";
      playerResult.textContent = `You: ${playerPoints}`;
      computerResult.textContent = `Computer: ${computerPoints}`;
    }
  }

  if (playerSelection == "scissors") {
    //
    if (computerSelection == "scissors") {
      tiePoints++;
      resultBoard.textContent =
        "You chose scissors! Computer also chose scissors. It's a tie!";
      playerResult.textContent = `You: ${playerPoints}`;
      computerResult.textContent = `Computer: ${computerPoints}`;
    }
    //
    else if (computerSelection == "paper") {
      playerPoints++;
      resultBoard.textContent =
        "You chose scissors. Computer chose paper. You win!!";
      playerResult.textContent = `You: ${playerPoints}`;
      computerResult.textContent = `Computer: ${computerPoints}`;
    }
    //
    else {
      computerPoints++;
      resultBoard.textContent =
        "You chose scissors. Computer chose Rock. You lose! LOL.";
      playerResult.textContent = `You: ${playerPoints}`;
      computerResult.textContent = `Computer: ${computerPoints}`;
    }
  }

  if (playerPoints == 5) {
    resultBoard.textContent = "User has won 5 games! You are the winner!";
    resultBoard.setAttribute(
      "style",
      "background-color: lightblue; color: black; font-weight: 700; font-family: Helvetica"
    );

    const button = document.querySelectorAll("button");
    for (let elements of button) {
      elements.disabled = true;
    }
  } else if (computerPoints == 5) {
    resultBoard.textContent =
      "Computer has won 5 games! Computer Wins. You suck!";
    resultBoard.setAttribute(
      "style",
      "background-color: lightblue; color: black; font-weight: 700; font-family: Helvetica"
    );

    const button = document.querySelectorAll("button");
    for (let elements of button) {
      elements.disabled = true;
    }
  }
}
