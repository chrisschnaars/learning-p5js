// painting and erasing with an ellipse

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

	// if mouse pressed, make ellipse white
	noStroke();
	if (mouseIsPressed) {
		fill(255);
	} else {
		fill(241, 196, 15);
	}

	// draw ellipse at mouse position
	ellipse(mouseX, mouseY, 280,280);
}