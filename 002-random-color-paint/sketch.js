// painting and erasing with an ellipse

// declare initial r,g,b fill variables
var	r;
var	g;
var	b;

function setup() {
	createCanvas(windowWidth, windowHeight);
	println(r);

	// set initial random value of fill variables
	r = random(255);
	g = random(255);
	b = random(255);
}

function draw() {
	// draw an ellipse with the random color
	noStroke();
	fill(r, g, b);
	ellipse(mouseX, mouseY, 160, 160);

	// if mouse pressed, change variable
	noStroke();
	if (mouseIsPressed) {
		r = random(255);
		g = random(255);
		b = random(255);
	} 


}