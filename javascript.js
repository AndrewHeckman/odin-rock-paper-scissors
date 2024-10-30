function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";

    default:
      break;
  }
}

function getHumanChoice() {
  let choice;
  while (choice != "rock" && choice != "paper" && choice != "scissors" && choice != "exit") {
    choice = prompt("Enter rock, paper, scissors, or exit: ").toLowerCase();
  }
  return choice;
}



function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      results.textContent = "It's a tie!";
      return;
    }
    else if (humanChoice == "rock") {
      if (computerChoice == "paper") {
        results.textContent = "You lose! Paper beats rock";
        computerScore++;
        return;
      }
      else if (computerChoice == "scissors") {
        results.textContent = "You win! Rock beats scissors";
        humanScore++;
        return;
      }
      else {
        results.textContent = `How did we get here? computerChoice: ${computerChoice}`;
        return;
      }
    }
    else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        results.textContent = "You win! Paper beats rock";
        humanScore++;
        return;
      }
      else if (computerChoice == "scissors") {
        results.textContent = "You lose! Scissors beats paper";
        computerScore++;
        return;
      }
      else {
        results.textContent = `How did we get here? computerChoice: ${computerChoice}`;
        return;
      }
    }
    else if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        results.textContent = "You lose! Rock beats scissors";
        computerScore++;
        return;
      }
      else if (computerChoice == "paper") {
        results.textContent = "You win! Scissors beats paper";
        humanScore++;
        return;
      }
      else {
        results.textContent = `How did we get here? computerChoice: ${computerChoice}`;
        return;
      }
    }
    else {
      results.textContent = `How did we get here? humanChoice: ${humanChoice}`;
      return;
    }
  }
  let humanScore = 0;
  let computerScore = 0;

  container.addEventListener("click", function (event) {
    let computerChoice = getComputerChoice();
    let humanChoice = event.target.textContent.toLowerCase();

    playRound(humanChoice, computerChoice);
    if (humanScore > 4) {
      score.textContent = "Human wins!";
      humanScore = 0;
      computerScore = 0;
    }
    else if (computerScore > 4) {
      score.textContent = "Computer wins!";
      humanScore = 0;
      computerScore = 0;
    }
    else {
      score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }
  })

}

const container = document.querySelector("#player-buttons");
const buttons = document.querySelectorAll(".player-button");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

playGame();
