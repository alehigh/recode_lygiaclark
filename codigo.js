//Recode, Lygia Clark, PLANOS EM SUPERFICIE MODULADA – CERTIFICADO N° 107, 1957
function setup() {
  createCanvas(660,660);
  colorMode(HSB,1);
}

function draw() {
  background(map(92,0,width,0,1),map(26,0,height,0,1),1);
 console.log("mouseX = " + mouseX);
  console.log("mouseY = " + mouseY);
  //se reemplaza el mouseX y mouseY por las coordenadas del color que uno quiere.
  //PREGUNTA: puedo poner directamente el color sin mapear coordenada?
  //komo se ase
 //esta funcion es buena onda  fill(map(mouseX,0,width,0,1),map(mouseY,0,height,0,1),1); 
  fill(map(1,1,width,1,0),map(1,1,height,1,0),0);
  console.log("mouseX = " + mouseX);
  console.log("mouseY = " + mouseY);
  noStroke();
  //forma1
  beginShape();
vertex(0, 0);
vertex(330, 0);
vertex(500, 330);
vertex(329, 332);
vertex(0, 165);
endShape(CLOSE);
  //forma2
  beginShape();
vertex(170, 330);
vertex(330, 330);
vertex(660, 500);
vertex(660, 660);
vertex(335, 660);
endShape(CLOSE);
  
}
