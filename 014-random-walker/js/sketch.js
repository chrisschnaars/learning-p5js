// 014: RANDOM WALKER
// just trying to rebuild the random walker sketch from memory


// initialize walker
var walker;

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(255);
	frameRate(10);


	// initialize new walker
	walker = new Walker();

}


function draw() {
	
	walker.step();
	walker.display();

  
}

// Walker Class
function Walker() {
	this.w = 10;
	this.xPos = windowWidth/2;
	this.yPos = windowHeight/2;


	// step in a random direction
	this.step = function() {
		var stepX = round(random(0,2)-1);
		var stepY = round(random(0,2)-1);
		print(stepX);
		print(stepY);
		
		this.xPos += stepX;
		this.yPos += stepY;

	
	}


	// draw the square
	this.display = function() {
		noStroke();
		fill(0);
		rectMode(CENTER);
		rect(this.xPos, this.yPos, this.w, this.w);
	}
}

