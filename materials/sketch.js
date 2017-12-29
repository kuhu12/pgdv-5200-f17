// Example: Two Car objects
var myCar1;
var myCar2; // Two objects!

function setup() {
  createCanvas(200,200);
  // Parameters go inside the parentheses when the object is constructed.
  myCar1 = new Car(color(255,0,0),0,100,2);
  myCar2 = new Car(color(0,0,255),0,10,1);
}

function draw() {
  background(255);
  myCar1.drive();
  myCar1.display();
  myCar2.drive();
  myCar2.display();
}

// Even though there are multiple objects, we still only need one class.
// No matter how many cookies we make, only one cookie cutter is needed.
function Car(color,xpos,ypos,xspeed) {
  //property
  this.color = color;
  this.xpos = xpos;
  this.ypos = ypos;
  this.xspeed = xspeed;

  //method
  this.display = function(){
    stroke(0);
    fill(this.color);
    rectMode(CENTER);
    rect(this.xpos,this.ypos,20,10);
  }
  this.drive = function(){
    this.xpos = this.xpos + this.xspeed;
    if(this.xpos > window.innerWidth){
      this.xpos = 0;
    }
  }
}
