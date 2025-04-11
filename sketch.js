function mostrarImpacto() {
    const cidade = document.getElementById("cidadeReacao");
    cidade.classList.add("ativo");
    cidade.textContent = "⚡ Energia do campo abastecendo a cidade!";
    setTimeout(() => {
      cidade.classList.remove("ativo");
      cidade.textContent = "💡 Iluminação Urbana";
    }, 3000);
  }
  