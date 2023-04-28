let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie.";
    } else if (computerMove === "paper") {
      result = "you lose.";
    } else if (computerMove === "scissors") {
      result = "you win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "you win.";
    } else if (computerMove === "paper") {
      result = "tie.";
    } else if (computerMove === "scissors") {
      result = "you lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "you lose.";
    } else if (computerMove === "paper") {
      result = "you win.";
    } else if (computerMove === "scissors") {
      result = "tie.";
    }
  }

  if (result === "you win.") {
    score.wins += 1;
  } else if (result === "you lose.") {
    score.losses += 1;
  } else if (result === "tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  alert(
    `you picked ${playerMove} and the computer picked ${computerMove}, so ${result}
wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
  );
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
