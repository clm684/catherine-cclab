//arrays
var colorNames1;
var colorNames2;
var colorNames3;
var colorNames4;

colorNames1 = [
  "#99FFFF", //cyan
];
colorNames2 = [
  "#FFA07A", //lightsalmon
];
colorNames3 = [
  "#E6E6FA", //lavender
]
colorNames4 = [
  "#FFC0CB", //pink
];

//clouds
var cloudx;
var cloudy;
var canCloudMove = false;
var canCloudShow = false;
var clouds = []; 


var canMountainShow1 = false;
var canMountainShow2 = false;

var backgroundColor;
//p5 setup
function setup() {
  let myCanvas = createCanvas(700, 400);
  // myCanvas.parent('#p5Canvas');
  // let elements = document.getElementsById('container');
  //  elements[0].appendChild( myCanvas.elt );

  backgroundColor = color(220);
  background(220);
};




function draw() {
  background(backgroundColor);
  if (canCloudMove == true) {
    for (let i = 0; i < clouds.length; i ++){
      clouds[i].update();
    }
  }
  if(canCloudShow == true){
    for (let i = 0; i < clouds.length; i ++){
      clouds[i].show();
    }
  }

  if(canMountainShow1 == true){
    mountain1();
  }
  else if(canMountainShow2 == true){
    mountain2();
  }
  else if(canMountainShow3 == true){
    mountain3();
  }
  else if(canMountainShow4 == true){
    mountain4();
  }

 };

//onclick functions
function changeColor1() {
  backgroundColor = color("#99FFFF");
  for (let i = 0; i < colorNames1.length; i++) {
    let x = 0;
    let y = i * 100;
    noStroke();
    fill(colorNames1[i]);
    rect(x, y, 700, 400);
  }
}

function changeColor2() {
  for (let i = 0; i < colorNames2.length; i++) {
    let x = 0;
    let y = i * 100;
    noStroke();
    fill(colorNames2[i]);
    rect(x, y, 700, 400);
  }
}

function changeColor3() {
  for (let i = 0; i < colorNames3.length; i++) {
    let x = 0;
    let y = i * 100;
    noStroke();
    fill(colorNames3[i]);
    rect(x, y, 700, 400);
  }
}

function changeColor4() {
  for (let i = 0; i < colorNames4.length; i++) {
    let x = 0;
    let y = i * 100;
    noStroke();
    fill(colorNames4[i]);
    rect(x, y, 700, 400);
  }
}

function showMountain1(){
  canMountainShow1 = true;
  canMountainShow2 = false;
}

function showMountain2(){
  canMountainShow1 = false;
  canMountainShow2 = true;
}

function showMountain3(){
  canMountainShow1 = false;
  canMountainShow2 = false;
  canMountainShow3 = true;
}

function showMountain4(){
  canMountainShow1 = false;
  canMountainShow2 = false;
  canMountainShow3 = false;
  canMountainShow4 = true;
}

function mountain1() {
  //further mountain
  fill(91, 71, 110);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);

  fill(213, 212, 255);
  strokeWeight(0);
  beginShape();
  vertex(360, 130);
  vertex(485, 246);
  vertex(390, 200);
  vertex(360, 250);
  vertex(320, 217);
  vertex(225, 255);
  endShape(CLOSE);
  //closer one
  fill(174, 139, 2220);
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);

  fill(231, 241, 255);
  strokeWeight(0);
  beginShape();
  vertex(100, 180);
  vertex(225, 280);
  vertex(145, 250);
  vertex(120, 290);
  vertex(70, 260);
  vertex(-20, 286);
  endShape(CLOSE);

  //3rd mountain
  fill(51, 0, 102);
  strokeWeight(0);
  translate(500, 0);
  triangle(100, 180, 500, 500, -260, 500);

  fill(229, 204, 255);
  strokeWeight(0);
  beginShape();
  vertex(100, 180);
  vertex(225, 280);
  vertex(145, 250);
  vertex(120, 290);
  vertex(70, 260);
  vertex(-20, 286);
  endShape(CLOSE);
}

function mountain2() {
  fill(176, 44, 12);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);

  fill(180, 231, 183);
  strokeWeight(0);
  beginShape();
  vertex(360, 130);
  vertex(485, 246);
  vertex(390, 200);
  vertex(360, 250);
  vertex(320, 217);
  vertex(225, 255);
  endShape(CLOSE);
}

function mountain3() {
  //further mountain
  fill(102, 51, 0);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);

  fill(204, 0, 0);
  strokeWeight(0);
  beginShape();
  vertex(360, 130);
  vertex(485, 246);
  vertex(390, 200);
  vertex(360, 250);
  vertex(320, 217);
  vertex(225, 255);
  endShape(CLOSE);
  //closer one
  fill(153, 76, 0);
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);

  fill(231, 241, 255);
  strokeWeight(0);
  beginShape();
  vertex(100, 180);
  vertex(225, 280);
  vertex(145, 250);
  vertex(120, 290);
  vertex(70, 260);
  vertex(-20, 286);
  endShape(CLOSE);

  fill(123, 63, 0);
  strokeWeight(0);
  translate(500, 0);
  triangle(100, 180, 500, 500, -260, 500);

  fill(231, 241, 255);
  strokeWeight(0);
  beginShape();
  vertex(100, 180);
  vertex(225, 280);
  vertex(145, 250);
  vertex(120, 290);
  vertex(70, 260);
  vertex(-20, 286);
  endShape(CLOSE);
}

function mountain4() {
  fill(176, 44, 12);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);

  fill(180, 231, 183);
  strokeWeight(0);
  beginShape();
  vertex(360, 130);
  vertex(485, 246);
  vertex(390, 200);
  vertex(360, 250);
  vertex(320, 217);
  vertex(225, 255);
  endShape(CLOSE);
}

function clouds1() {
  canCloudShow = true;
  canCloudMove = false;
  let cloudNum = random(1, 10);
  for (let j = 0; j < cloudNum; j++) {
    cloudx = random(1, 700);
    cloudy = random(1, 100);
    clouds.push(new Cloud(cloudx, cloudy));
  }
}

function clouds2() {

}

//snow
function action1() {
  let snowNum = random(20, 100);
  for (let j = 0; j < snowNum; j++) {
    snowX = random(1, 700);
    snowY = random(1, 400);
    for (let i = 0; i < 4; i++) {
      fill(255);
      noStroke();
      ellipse(snowX, snowY, 10, 10);
    }
  }
}

//stars
function action2() {
  let starsNum = random(20, 100);
  for (let j = 0; j < starsNum; j++) {
    starsX = random(1, 700);
    starsY = random(1, 400);
    for (let i = 0; i < 4; i++) {
      fill(255);
      ellipse(starsX, starsY, 5, 5);
      fill(255);
      triangle(starsX + 1, starsY + 1, 10, 10, 20, 20)
    }
  }
}

//moving clouds
function action3() {
  canCloudMove = true;
  canCloudShow = true;
}


class Cloud{
  constructor(x, y){
    this.cloudX = x;
    this.cloudY = y;
    this.xVel = 1;
  }

  show(){
    for (let i = 0; i < 4; i++) {
      fill(250);
      noStroke();
      ellipse(this.cloudX, this.cloudY, 70, 50);
      ellipse(this.cloudX + 10, this.cloudY + 10, 70, 50);
      ellipse(this.cloudX - 20, this.cloudY + 10, 70, 50);
    }
  }
  update(){
    if(this.cloudX > 700){
      this.cloudX = 0
    }
    this.cloudX += this.xVel;
  }

}

//rain
function action4() {

}
