function jogar() {
    let rodada = 1;
    while (rodada <= 3) {
      console.log("Rodada: " + rodada);
      
      let escolhaJogador = prompt("Nível " + rodada + ", escolha vidro (1, 2 ou 3)?");
      escolhaJogador = parseInt(escolhaJogador);
      
      let pisoQuebrado = Math.floor(Math.random() * 3) + 1;
      
      if (escolhaJogador === pisoQuebrado) {
        alert("Vidro quebrou! Você Perdeu.");
        rodada = 1000;
      } else {
        alert("Passou! O Piso Quebrado estava na ponte: " + pisoQuebrado);
      }
      
      rodada = rodada + 1;
    }
  
    if (rodada === 4) {
      alert("Você venceu! Parabéns!");
    }
  }
  