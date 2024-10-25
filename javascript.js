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



function playGame(rounds) {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("It's a tie!");
      return;
    }
    else if (humanChoice == "rock") {
      if (computerChoice == "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;
        return;
      }
      else if (computerChoice == "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore++;
        return;
      }
      else {
        console.log(`How did we get here? computerChoice: ${computerChoice}`);
        return;
      }
    }
    else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        console.log("You win! Paper beats rock");
        humanScore++;
        return;
      }
      else if (computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore++;
        return;
      }
      else {
        console.log(`How did we get here? computerChoice: ${computerChoice}`);
        return;
      }
    }
    else if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        console.log("You lose! Rock beats scissors");
        computerScore++;
        return;
      }
      else if (computerChoice == "paper") {
        console.log("You win! Scissors beats paper");
        humanScore++;
        return;
      }
      else {
        console.log(`How did we get here? computerChoice: ${computerChoice}`);
        return;
      }
    }
    else {
      console.log(`How did we get here? humanChoice: ${humanChoice}`);
      return;
    }
  }

  let humanScore = 0;
  let computerScore = 0;
  
  for (let round = 0; round < rounds; round++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice == "exit") return;
    else playRound(humanChoice, computerChoice);
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
  }
}

playGame(5);
