let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

let ativo = true;

function mostrarContato(contato) {
  return `
    <p><strong>Nome:</strong> ${contato.name}</p>
    <p><strong>Telefone:</strong> ${contato.phone}</p>
    <p><strong>Email:</strong> ${contato.email}</p>
    <hr>
  `;
}

function mostrarPrimeiro() {
  if (!ativo) return;
  let saida = document.getElementById("saida");
  saida.innerHTML = mostrarContato(contacts[0]);
}

function mostrarUltimo() {
  if (!ativo) return;
  let saida = document.getElementById("saida");
  saida.innerHTML = mostrarContato(contacts[contacts.length - 1]);
}

function mostrarTodos() {
  if (!ativo) return;
  let saida = document.getElementById("saida");
  saida.innerHTML = "";

  for (let contato of contacts) {
    saida.innerHTML += mostrarContato(contato);
  }
}

function adicionarContato() {
  if (!ativo) return;

  let nome = prompt("Nome:");
  let telefone = prompt("Telefone:");
  let email = prompt("Email:");

  if (nome && telefone && email) {
    contacts.push({
      name: nome,
      phone: telefone,
      email: email
    });
    alert("Contato adicionado!");
  }
}

function encerrar() {
  ativo = false;
  document.getElementById("saida").innerHTML = "<p>Programa encerrado.</p>";
}