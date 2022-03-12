let venceu = "Vitória!";
let perdeu = "Fim de Jogo!"
let xTexto = 300;
let yTexto = 200;

//variaveis da imagem da vitoria
let xImagemDaVitoria = 200;
let yImagemDaVitoria = 200;
let xImagemDaDerrota = 200;
let yImagemDaDerrota = 200;

function vitoria(){
  image(imagemDoAtor, xImagemDaVitoria, yImagemDaVitoria, 200, 200);
  noStroke();
  fill(color(255, 203, 219));
  rect(100, 150, 400, 70);
  textAlign(CENTER);
  textSize(40);
  fill(0,0,255);
  text(venceu, xTexto, yTexto);
}

function derrota(){
  image(imagemDoAtor, xImagemDaDerrota, yImagemDaDerrota, 200, 200);
  noStroke();
  fill(color(255, 203, 219));
  rect(100, 150, 400, 70);
  textAlign(CENTER);
  textSize(40);
  fill(0,0,255);
  text(perdeu, xTexto, yTexto);
}