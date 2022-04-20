function setup() {
  createCanvas(300, 400);
  background(255, 0, 0);
 // rectMode(CENTER);
  
  // below are examples for rectangles
  // noFill();
  // rect(width/2, height/2, 50, 50);
  // rect(width/2 + 20, height/2 + 20, 50, 50);
  // fill(0);
  // rect(100, 100, 100, 100)

}

function draw() {
  fill(0, 450, 120);
  stroke(255);
  strokeWeight(2);
  rect(width/2, height/2, 50, 50);
  rect(width/2 + 20, height/2 + 20, 50, 50);
  
  fill(2, 40, 200);
  noStroke()
  rect(100, 100, 100, 100);

  fill(0, 0, 255, 180);
  noStroke();
  ellipseMode(CENTER);
  ellipse(90, 90, 60, 60);
  
  noFill();
  stroke(255);
  arc(100, 55, 100, 100, 0, PI + PI);
  strokeWeight(10);
  point(80, 40);
  point(130, 40);
  arc(100, 70, 80, 20, 2, HALF_PI)
  

}