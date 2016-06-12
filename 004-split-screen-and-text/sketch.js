/* 
SPLIT SCREEN
use the cursor to drag a window-sized colored rectangle
*/

var	w = 0;	// intial width

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// white background
	background(255);

	// draw a rectangle at the mouse position
	fill(26, 188, 156);	// turquoise
	noStroke();
	rect(0,0, w, height);

	// update width for mouse location
 	w = mouseX - 0;
}


