//Agostina Milla
//tp1 Comisión 1
//link youtube https://youtu.be/4xySkT2RQ0I

//declaración de variables
let arte;
const cuadrado = 16;
let tam;
let click;

// carga recursos
function preload() {
  arte = loadImage('data/artep.jpg');
}

function setup() {
  //confi inicial
  createCanvas(800, 400);
  background(255);
  tam = width / cuadrado;
  click = true;
}
// dibujo y act del canvas
function draw() {
  image(arte, 0, 0, 400, 400);
   // ciclo FOR anidados
  noStroke();
   //condicionales (IF)
    if (click) {
     click = false;
    for (let i = 8; i < 16; i++) {
      for (let j = 0; j < 8; j++) {
        dibujar(i, j, tam);
      }
    }
  }
 
}
//función q NO RETORNA pq esta escrito con el void y pq no devuelve nada al void draw
// le sacamos los int
function dibujar(x, y, xd) {
  fill(randomizar(), randomizar(), randomizar());
  rect(x * xd, y * xd, xd, xd);
  fill(randomizar(), randomizar(), randomizar());
  rect(x * xd + 10, y * xd + 10, xd - 20, xd - 20);
}
// funciones axuliares 
// función q RETORNA un float del 0 al 255 en forma aleatoria a las lineas fill
function randomizar() {
//función matemática (uso de random)
  return random(0,255);
}
//reinica el progama // evento de mousse/ usuario
function mousePressed() {
  click = true;
 
}
