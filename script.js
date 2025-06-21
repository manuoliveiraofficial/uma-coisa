let botaoNao = document.getElementById('nao');
const personagem = document.getElementById("personagem");

// Faz o botão "não" sair toda vez que o mouse passa por cima
botaoNao.addEventListener('mouseover', () => {
  botaoNao.style.position = "absolute";
  botaoNao.style.top = Math.random() * (window.innerHeight - 700) + "px";
  botaoNao.style.left = Math.random() * (window.innerWidth - 700) + "px";
});

//Variáveis da função mover personagem
let posicao = 400;
let destino = 800;
let indo = true;


// Função que move o personagem
function moverPersonagem() {
  const intervalo = setInterval(() => {
    if (indo) {
      posicao += 2;
      if (posicao >= destino) {
        indo = false;
        destino = 400;
      }
    } else {
      posicao -= 2;
      if (posicao <= destino) {
        indo = true;
        destino = 800;
      }
    }

    personagem.style.left = posicao + "px";
  }, 1);
}

function mostrarDiv(id) {
  const div = document.getElementById(id);
  div.style.display = "flex";
}

function ocultarDiv(id) {
  const div = document.getElementById(id);
  div.style.display = "none";
}


