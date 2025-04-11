const perguntas = [
    "Você prefere acordar com o som de galos ou de buzinas?",
    "Prefere estar cercado de verde ou arranha-céus?",
    "Curte mais feira livre ou shopping center?"
  ];
  
  let atual = 0;
  let pontosCampo = 0;
  let pontosCidade = 0;
  
  function mostrarPergunta() {
    if (atual < perguntas.length) {
      document.getElementById("pergunta").textContent = perguntas[atual];
      atualizarBarra();
    } else {
      mostrarResultado();
    }
  }
  
  function responder(resposta) {
    if (resposta === "campo") pontosCampo++;
    else pontosCidade++;
    atual++;
    mostrarPergunta();
  }
  
  function mostrarResultado() {
    const resultado = document.getElementById("resultado");
    const quiz = document.getElementById("quiz");
    quiz.style.display = "none";
  
    if (pontosCampo > pontosCidade) {
      resultado.textContent = "🌿 Você é mais do CAMPO!";
    } else if (pontosCidade > pontosCampo) {
      resultado.textContent = "🏙️ Você é mais da CIDADE!";
    } else {
      resultado.textContent = "🌎 Você é uma mistura perfeita dos dois!";
    }
  
    atualizarBarra(100);
    document.getElementById("voltar").style.display = "block";
  }
  
  function atualizarBarra() {
    const percent = (atual / perguntas.length) * 100;
    document.getElementById("progressBar").style.width = percent + "%";
  }
  
  let somAtivado = false;
  function toggleSom() {
    const audio = document.getElementById("somAmbiente");
    if (somAtivado) {
      audio.pause();
    } else {
      audio.play();
    }
    somAtivado = !somAtivado;
  }
  
  mostrarPergunta();
  