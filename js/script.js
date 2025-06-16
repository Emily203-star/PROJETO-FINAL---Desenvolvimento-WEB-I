// Validação do formulário
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const motivo = document.getElementById("motivo").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !motivo || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    alert("Sua solicitação foi registrada com sucesso!");
    this.reset();
  });

// Buscar livros
function buscarLivro() {
  const termoBusca = document
    .getElementById("buscaLivro")
    .value.toLowerCase()
    .trim();

  const cards = document.querySelectorAll(".book-card");
  let encontrou = false;

  cards.forEach((card) => {
    const titulo = card.querySelector(".card-title").textContent.toLowerCase();

    if (titulo.includes(termoBusca)) {
      card.closest(".col-lg-3").style.display = "block";
      encontrou = true;
    } else {
      card.closest(".col-lg-3").style.display = "none";
    }
  });

  const mensagemErro = document.getElementById("mensagemErro");
  if (termoBusca === "") {
    // Se estiver vazio, mostra todos
    cards.forEach((card) => {
      card.closest(".col-lg-3").style.display = "block";
    });
    mensagemErro.classList.add("d-none");
  } else if (!encontrou) {
    mensagemErro.classList.remove("d-none");
  } else {
    mensagemErro.classList.add("d-none");
  }
}
