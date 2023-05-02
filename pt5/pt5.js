/* RPS auto loop */

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

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

/* Todo List */

const praFaze = [];

renderPagina();

function renderPagina() {
  let praFazePagina = "";

  for (let i = 0; i < praFaze.length; i++) {
    const fazeObj = praFaze[i];
    const { nome, data } = fazeObj;
    const pagina = `<h3>${nome} ${data}<button onclick="praFaze.splice(${i}, 1);renderPagina()">apagar</button></h3>`;
    praFazePagina += pagina;
  }

  document.querySelector(".lista-prafz").innerHTML = praFazePagina;
}

function adicionarFaze() {
  const inputNome = document.querySelector(".nome-input");
  const nome = inputNome.value;

  const inputData = document.querySelector(".data-input");
  const data = inputData.value;

  praFaze.push({
    nome,
    data,
  });

  inputNome.value = "";

  renderPagina();
}
