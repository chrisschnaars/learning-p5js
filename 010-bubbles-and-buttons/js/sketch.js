// 010: BUTTONS AND BUBBLES
// an extension of 009, using a button to clear the bubbles
// adding a moving ball each time the mouse is pressed

// steps:
// first get button working X
// figure out how to not have any balls be added when the button is pressed

var balls = [];	// declare array

var button;
var buttonWidth = 100;
var buttonHeight = 50;
var buttonSpacer = 60;

var buttonXpos;
var buttonYpos;

var buttonOn = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create button
  button = createButton('Clear Bubbles');

  //draw button
  buttonXpos = (windowWidth-buttonSpacer-buttonWidth);
  buttonYpos = (windowHeight-buttonHeight);
  button.position(buttonXpos, buttonYpos);

  // intialize balls
  for (var i = 0; i < 0; i++) {
  	balls.push(new Ball(50,50));
  }

}

function draw() {
	background(255);

  	//create balls
	for (var i = 0; i < balls.length; i++) {
    	balls[i].display();	
    	balls[i].move();
  	}


}

function mousePressed() {
	// check to see if the mouse if over the button or not
	// if it is, don't create a ball
	if ((mouseX > buttonXpos) && (mouseX < (buttonXpos+buttonWidth)) && (mouseY > buttonYpos) && (mouseY < (buttonYpos+buttonHeight))) {
		ellipse(20,20,20,20);
		removeBalls();
	} else {
		balls.push(new Ball(mouseX, mouseY));
	}
}

function removeBalls() {
	// remove all balls
	for (var i = 0; i < balls.length; i++) {
  		balls.splice(i);
  	}
}



// Ball Class
function Ball(_xPos, _yPos) {
	this.r = mouseX/3;	// R value
	this.g = mouseY/3;	// G value
	this.b = 132;	// constant
	this.a = (255/2);	// constant alpha value
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
	this.display = function() {
		noStroke();
		fill(this.r, this.g, this.b, this.a);
		ellipse(this.xPos, this.yPos, this.rad, this.rad);
	}
}


