// 011: ARRAY OF OBJECTS & SLIDER
// building off my original array of objects example
// adding a slider to give some control over how many bubbles there are?
// or using a slider to define object properties


var balls = [];	// declare array

var opacitySlider;	// slider that will determine the opacity of the ball
var quantitySlider;	// slider that will determine how many balls

var a;	// variable that sets the opacity
var ballsQuantity;	// variable the sets the quanitity of balls

// min an max value for number of balls
var quantitySliderMax = 300;
var quantitySliderMin = 5;



function setup() {
  createCanvas(windowWidth, windowHeight);

  // creat an opacity slider
  opacitySlider = createSlider(20, 255, 255);
  opacitySlider.position(10,10);

  // create a slider for quantity
  quantitySlider = createSlider(quantitySliderMin, quantitySliderMax, 50);
  quantitySlider.position(10,40);

  // initialize ball objects
  for (var i = 0; i < quantitySliderMax; i++) {	
  	balls.push(new Ball(windowWidth/2,windowHeight/2));
  } 

}


function draw() {
	background(255);

	// set a to the value of the slider
	a = opacitySlider.value();

	// set the ballsQuantity value to the slider
	ballsQuantity = quantitySlider.value();

	// draw the ball objects
	for (var i = 0; i < ballsQuantity; i++) {
    	balls[i].display(a);	
    	balls[i].move();
  }


  
}


// Ball Class
function Ball(_xPos, _yPos) {
	this.r = 3;	// R value
	this.g = 3;	// G value
	this.b = 132;	// constant
	this.rad = random(20,50);	// randomly sized radius of balls
	this.xPos = _xPos;	// starting x position of ball
	this.yPos = _yPos;	// starting y position of ball
	this.xSpeed = random(-1,1);	// random x-axis movement
	this.ySpeed = random(-1,1);	// random y-axis movement

	// move the ball
	this.move = function() {
		this.xPos = this.xPos + this.xSpeed;	// move the ball along the x axis
		this.yPos = this.yPos + this.ySpeed;	// move the ball along the y axis

		// reverse x direction if the ball hits the edge
		if (this.xPos < 0 || this.xPos > windowWidth) {
			this.xSpeed *= -1;
		}

		// reverse the y direction if the ball hits the edge
		if (this.yPos < 0 || this.yPos > windowHeight) {
			this.ySpeed *= -1
		}
	}

	// draw the ball
	this.display = function(alpha) {
		noStroke();
		fill(this.r, this.g, this.b, alpha);
		ellipse(this.xPos, this.yPos, this.rad, this.rad);
	}
}


