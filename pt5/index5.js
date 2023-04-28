const praFaze = [];

function adicionarFaze() {
  const inputNome = document.querySelector(".nome-input");
  const nome = inputNome.value;

  praFaze.push(nome);
  console.log(praFaze);

  inputNome.value = "";
}
