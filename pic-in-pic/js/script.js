window.onscroll = function() {myFunction()};

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

// use onclick attribute
let btn1 = document.getElementById('firstBtn');
let btn2 = document.getElementById('secondBtn');
let btn3 = document.getElementById('thirdBtn');
let btn4 = document.getElementById('fourthBtn');

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