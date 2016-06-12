// adding a moving ball each time the mouse is pressed
// expanded on the array of objects by inclduing some user control
// press the mouse and the balls appear
// really struggling to figure out how the balls can disappear, or change state, when they intersect

var balls = [];	// declare array



function setup() {
  createCanvas(displayWidth, displayHeight);
  //myCanvas.parent('container');



  for (var i = 0; i < 0; i++) {
  	balls.push(new Ball(50,50));
  }

}

function draw() {
	background(255);
	for (var i = 0; i < balls.length; i++) {
    	balls[i].display();	
    	balls[i].move();
  	}
  	
  	//check if mouse if over button
  	// if (mouseX > 0 && mouseX < buttonWidth && mouseY > 0 && mouseY < buttonHeight && mouseIsPressed) {
  	// 	fill(0);
  		
  	// } else {
  	// 	fill(155);
  	// }

  	//draw a rectangle to use as the button
	// rect(0,0,buttonWidth,buttonHeight);


	
}

function mousePressed() {
	balls.push(new Ball(mouseX, mouseY))
}

function removeBalls() {
	for (var i = 0; i < balls.length; i++) {
  		balls.splice(i);
  	}
}



// Ball Class
function Ball(_xPos, _yPos) {
	this.r = mouseX/3;	// R value
	this.g = mouseY/3;	// G value
	this.b = 132;	// constant
	`
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


