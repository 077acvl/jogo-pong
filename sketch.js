let largura = 450
let altura = 300
let xbolinha = 200 
let ybolinha = 200
let xraquete = 5
let yraquete = altura/2
let xraqueteop = 430 
let yraqueteop = altura/2 
let larguraraquete = 5
let alturaraquete = 100
let diametro = 30
let raio = diametro/2
let xvelocidade = 8
let yvelocidade = 8
let yvelocidadeop; 
let colidiu = false 
let minhapontuacao = 0
let pontuacaoop = 0

function setup() {
  createCanvas(largura, altura);
}

function draw() {
  background(0);
 createcircle();
 movimentobolinha();
  bateevolta();
 criaraquete();
  sobedesce();
colisaoraquete ();
criaraqueteop();
  movimentoop();
  colisaoraqueteop();
  criaplacar();
  marcaponto ();
}
function createcircle()
{ circle(xbolinha,ybolinha,diametro)}
function movimentobolinha(){ xbolinha += xvelocidade
  ybolinha += yvelocidade}
function bateevolta(){if (xbolinha + raio > largura || xbolinha < 0)
    xvelocidade *= -1
  if (ybolinha + raio > altura || ybolinha < 0)
    yvelocidade *= -1}
function criaraquete () { rect(xraquete,yraquete,larguraraquete,alturaraquete)}
function sobedesce (){  if (keyIsDown(UP_ARROW))
  yraquete -= 10
  if (keyIsDown(DOWN_ARROW))
  yraquete += 10} 
function colisaoraquete (){if (xraquete + larguraraquete > xbolinha - raio && 
   ybolinha - raio < yraquete + alturaraquete && 
   ybolinha + raio > yraquete)
  xvelocidade *= -1}
function criaraqueteop (){ 
rect (xraqueteop,yraqueteop, larguraraquete, alturaraquete )
}
function movimentoop(){ 
yvelocidadeop = ybolinha - yraqueteop - larguraraquete/2 - 150
  yraqueteop += yvelocidadeop
}
function colisaoraqueteop(){
  colidiu = collideRectCircle(xraqueteop, yraqueteop, larguraraquete,alturaraquete, xbolinha, ybolinha, diametro)
  if (colidiu)
    xvelocidade *= -1
}
function criaplacar(){
  fill(color(153, 51, 153))  
  rect(122, 7, 35, 35)
  rect(321, 7, 35, 35)
  fill(255)
  text(pontuacaoop, 321, 35)
  fill(255)
  textSize(30)
  text(minhapontuacao, 130, 35)
}
function marcaponto(){
  if(xbolinha < 15)
 pontuacaoop += 1 
  if (xbolinha > 430)
  minhapontuacao += 1 
}
