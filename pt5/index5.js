const praFaze = [];

renderPagina();

function renderPagina() {
  let praFazePagina = "";

  for (let i = 0; i < praFaze.length; i++) {
    const faze = praFaze[i];
    const pagina = `<h3>${faze}<button onclick="praFaze.splice(${i}, 1);renderPagina()">apagar</button></h3>`;
    praFazePagina += pagina;
  }

  document.querySelector(".lista-prafz").innerHTML = praFazePagina;
}

function adicionarFaze() {
  const inputNome = document.querySelector(".nome-input");
  const nome = inputNome.value;

  praFaze.push(nome);
  console.log(praFaze);

  inputNome.value = "";

  renderPagina();
}
