document.title = "D.O.Miniqueniquenique";

// Calculatora

function calculaEnter(event) {
  if (event.key === "Enter") {
    calcula();
  }
}

function calcula() {
  const inputElemento = document.querySelector(".custo-input");
  let custo = Number(inputElemento.value);

  if (custo < 40) {
    custo = custo + 10;
  }

  document.querySelector(".custo-total").innerHTML = `$${custo}`;
}

// YT Subs Butt

function sinscreveBotaum() {
  const boutaoElemento = document.querySelector(".boutao");

  if (boutaoElemento.innerText === "Clica") {
    boutaoElemento.innerText = "o:";
    boutaoElemento.classList.add("sub");
  } else {
    boutaoElemento.innerText = "Clica";
    boutaoElemento.classList.remove("sub");
  }
}

// RPS Butts

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "TIE";
    } else if (computerMove === "paper") {
      result = "LOOSE";
    } else if (computerMove === "scissors") {
      result = "WIN!!";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "WIN!!";
    } else if (computerMove === "paper") {
      result = "TIE";
    } else if (computerMove === "scissors") {
      result = "LOOSE";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "LOOSE";
    } else if (computerMove === "paper") {
      result = "WIN!!";
    } else if (computerMove === "scissors") {
      result = "TIE";
    }
  }

  if (result === "WIN!!") {
    score.wins += 1;
  } else if (result === "LOOSE") {
    score.losses += 1;
  } else if (result === "TIE") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(
    ".player-choice"
  ).innerHTML = `<img src="../assets/${playerMove}.svg">`;
  document.querySelector(
    ".computer-choice"
  ).innerHTML = `<img src="../assets/${computerMove}.svg">`;
  document.querySelector(".result-choice").innerHTML = `${result}`;

  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(".win").innerHTML = `${score.wins}`;
  document.querySelector(".loss").innerHTML = `${score.losses}`;
  document.querySelector(".tie").innerHTML = `${score.ties}`;
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
