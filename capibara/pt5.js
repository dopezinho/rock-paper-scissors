/* play with keyboard */

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  } else if (event.key === "c") {
    cleanBoard();
  } else if (event.key === " ") {
    autoPlay();
  }
});

/* RPS buttons with addEventListener and arrow function */

document.querySelector(".butt1").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector(".butt2").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector(".butt3").addEventListener("click", () => {
  playGame("scissors");
});

/* RPS auto loop and arrow function */

document.querySelector(".auto-button").addEventListener("click", () => {
  autoPlay();
});

document.querySelector(".reset-button").addEventListener("click", () => {
  cleanBoard();
});

cleanBoard = () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
};

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
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector(".auto-button").addEventListener("click", () => {
  clearBg();
});

function clearBg() {
  const boutaoClear = document.querySelector(".auto-button");

  if (boutaoClear.innerText === "Auto") {
    boutaoClear.innerText = "ON";
    boutaoClear.classList.add("auto-button-after");
  } else {
    boutaoClear.innerText = "Auto";
    boutaoClear.classList.remove("auto-button-after");
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

/* Todo List with addEventListener */

const praFaze = [];

renderPagina();

function renderPagina() {
  let praFazePagina = "";

  praFaze.forEach((fazeObj) => {
    const { nome, data } = fazeObj;
    const pagina = `<div class="lista-container"><h3>${nome}</h3> ${data}<button class="delete-button">apagar</button>
    </div>`;
    praFazePagina += pagina;
  });

  document.querySelector(".lista-prafz").innerHTML = praFazePagina;

  document.querySelectorAll(".delete-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      praFaze.splice(index, 1);
      renderPagina();
    });
  });
}

document.querySelector(".add-button").addEventListener("click", () => {
  adicionarFaze();
});

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
