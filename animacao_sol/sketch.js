var vetorSol = [];
var contAnimacao = 0;

function preload() {
  for (i = 0; i < 15; i++) {
    vetorSol[i] = loadImage('./imagens/Sun_0000' + i + '.png');
  }
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);
  image(vetorSol[contAnimacao], 30, 30);
  contAnimacao++;
  if (contAnimacao > 14) {
    contAnimacao = 0;
  }

}
