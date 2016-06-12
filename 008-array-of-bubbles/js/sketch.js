// array of objects
// learned how to create an array of objects and to use them - first time
// truly understanding object oriented programming


var balls = [];	// declare array

function setup() {
  createCanvas(displayWidth, displayHeight);
  //myCanvas.parent('container');

  for (var i = 0; i < 100; i++) {
  	balls.push(new Ball(windowWidth/2,windowHeight/2));
  }

}

function draw() {
	background(255);
	for (var i = 0; i < balls.length; i++) {
    	balls[i].display();	
    	balls[i].move();
  }
}

function mousePressed() {

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
	this.display = function() {
		noStroke();
		fill(this.r, this.g, this.b);
		ellipse(this.xPos, this.yPos, this.rad, this.rad);
	}
}


