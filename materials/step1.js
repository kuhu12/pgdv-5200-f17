var c,a,x,y,speed;

function setup(){
  createCanvas(200,200);
  c = color('#ffffff');
  a = 0;
  x = 0;
  y = 100;
  speed = 1;
}

function draw(){
  background(255);
  move();
  display();
}

function move(){
  x = x + speed;
  if(x > width){
    x = 0;
  }
}

function display(){
  fill(c);
  rect(x,y,30,10);
}