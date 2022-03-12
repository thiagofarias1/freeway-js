//código do ator
let xAtor = 100;
let yAtor = 370;
let colisao = false;
let meusPontos=0;
let vidas=3;

function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
    
  }
} 

function verificaColisao(){
  for(let i=0; i<imagemCarros.length; i = i+1){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro,alturaCarro, xAtor,yAtor, 15);
    if(colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      vidas-=1;
          if(pontosMaiorQueZero()){
            meusPontos -= 1;
        
      }
        
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor =370;
}

function incluiPontos(){
  textAlign(CENTER);
  fill(color(255,240,0));
  textSize(30);
  text(meusPontos, width/5, 30);
}

function marcaPonto(){
  if(yAtor<15){
     meusPontos+=1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0 ;
}

function podeSeMover(){
  return yAtor<370;
}

function incluiVidas() {
  image(imagemDoAtor, 355, 6, 25, 25);
  textAlign(CENTER);
  textSize(28);
  fill(139, 0, 139);
  text(vidas, 400, 27);
}

function finalizaJogo(){
  if(meusPontos>10){
    vitoria();
    somDaTrilha.stop();
    somDaVitoria.play();
    noLoop();
  }
  if(vidas==0){
    derrota();
    somDaTrilha.stop();
    somDaDerrota.play();
    noLoop();
  }
  
  
}