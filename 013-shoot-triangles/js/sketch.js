// 013: SHOOT TRIANGLES
// shoot randomly colored trianges according to mouse position
// triangles should fade out over time
// maybe they gravitate or flock or move away from the mouse


var triangles = [];	// declare array



function setup() {
  createCanvas(windowWidth, windowHeight);


  // initialize ball objects
  for (var i = 0; i < 0; i++) {	
  	triangles.push(new Triangle());
  } 

}


function draw() {
	background(1,1,50);


	// draw the ball objects
	for (var i = 0; i < triangles.length; i++) {
    	triangles[i].display();
    	triangles[i].move();	
    }

    // add triangles when the mouse is pressed
    if (mouseIsPressed) {
    	triangles.push(new Triangle());
    }

  
}


// Triangle Class
function Triangle() {
	this.w = 50;	// difference between mouse location and triangle corners
	this.r = 230;	// R value
	this.g = 3;	// G value
	this.b = 132;	// B value
	this.lifespan = 255;	// alpha value
	this.xPos = mouseX;
	this.yPos = mouseY;
	this.xSpeed = random(-1,1);	// random x-axis movement
	this.ySpeed = random(-1,1);	// random y-axis movement

	// move the triangle
	this.move = function() {
		this.xPos += this.xSpeed;	// move the ball along the x axis
		this.yPos += this.ySpeed;	// move the ball along the y axis
		this.lifespan -= .5;
		var d = dist(this.xPos, this.yPos, mouseX, mouseY);

		// reverse x direction if the ball hits the edge
		if (this.xPos < 0 || this.xPos > windowWidth) {
			this.xSpeed *= -1;
		}

		// reverse the y direction if the ball hits the edge
		if (this.yPos < 0 || this.yPos > windowHeight) {
			this.ySpeed *= -1
		}

		// if (d < 20) {
		// 	this.xSpeed *= -1;
		// 	this.ySpeed *= -1;
		// }


	}

	// draw the triangle
	this.display = function() {
		stroke(this.r, this.g, this.b, this.lifespan);
		noFill();
		triangle(this.xPos, this.yPos-this.w, this.xPos-this.w, this.yPos+this.w, this.xPos+this.w, this.yPos+this.w);
	}
}


