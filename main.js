function fuja() {
  var botaoNao = document.getElementById("nao");

  var largueJanela = window.innerWidth;
  var alturaJanela = window.innerHeight;

  var maxX = largueJanela - botaoNao.offsetWidth;
  var maxY = alturaJanela - botaoNao.offsetHeight;

  var aleatorioX = Math.floor(Math.random() * maxX);
  var aleatorioY = Math.floor(Math.random() * maxY);

  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top = aleatorioY + "px";
}

function aceitou() {
  alert("Agora estamos juntos xuxu");
}
