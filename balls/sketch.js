let particles = [];
let numParticles = 10;
function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer")
  
  for(let i = 0; i<numParticles; i++){
    particles.push(new Particle(random(width), random(height)));
  }
  // frameRate(10);
}

function draw() {
  background(200, 20, 20);
  for(let i = 0; i<particles.length; i++){
    particles[i].update();
    particles[i].display();
  }
}

class Particle{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.speedX = random(-1,1);
    this.speedY = random(-1,1);
    this.diameter = 20;
    this.col = 255;
    this.falling = true;

  }

  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    
    this.checkBoundaries();
  }
  checkBoundaries(){
    if(this.x < this.diameter/2 || this.x > width-this.diameter/2){
      this.speedX *= -1
    }
    if(this.y < this.diameter/2 || this.y > height-this.diameter/2){
      this.speedY *= -1
    }
  }
  display(){
    push();
    translate(this.x, this.y);
    
    fill(this.col)
    circle(0, 0, this.diameter)
    
    pop();
  }
  
}