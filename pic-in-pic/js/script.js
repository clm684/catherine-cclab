//window.onscroll = function() {myFunction()};

//arrays
let colorNames1 = [
  "#00FFFF", //cyan
];
let colorNames2 = [
  "#FFA07A", //lightsalmon
];
let colorNames3 = [
  "#E6E6FA", //lavender
]
let colorNames4 = [
  "#FFC0CB", //pink
];

//clouds
let cloudx = 100;
let cloudy = 100;



//onclick attribute
// let btn1 = document.getElementById('firstBtn');
// let btn2 = document.getElementById('secondBtn');
// let btn3 = document.getElementById('thirdBtn');
// let btn4 = document.getElementById('fourthBtn');

//p5 setup
function setup() {
  let myCanvas = createCanvas(700, 400);
    myCanvas.parent('#p5Canvas');
  let elements = document.getElementsByClassName('container');
   elements[0].appendChild( myCanvas.elt );

  background(220);
};

function draw(){};

//onclick functions
function changeColor1() {
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

function mountain1(){
fill(174, 139, 222);
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
}

function mountain2(){
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
}

function mountain3(){
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
  fill(174, 139, 222);
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

  fill(216,191,216);
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

function clouds1(){
  for (let i = 0; i < 4; i++) {
    fill(250)
    noStroke();
    ellipse(cloudx, cloudy, 70, 50);
    ellipse(cloudx + 10, cloudy + 10, 70, 50);
    ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
}

// let c;
// let creatureChoiceIndex = 0;


// function setup() {
//   let cnv = createCanvas(400, 400);
//   cnv.parent("canvasContainer")

//   c = new Creature(width/2, height/2)
// }

// function draw() {
//   background(r, g,b);

//   fill(cr, cg, cb);
//   circle(x, height/2, 20);

//   c.display(creatureChoiceIndex);

//   x+=speed;
// }

// class Creature{
//   constructor(startX, startY){
//     this.x = 50;
//     this.y = 100;
//   }
//   display(idx){
//     fill("yellow")
//     if(idx == 0){
//       rect(this.x, this.y, 50, 50)
//     }else if(idx == 1){
//       circle(this.x, this.y, 50)
//     }
    


//   }
// }