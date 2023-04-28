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
