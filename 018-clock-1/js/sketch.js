// 018: CLOCK TAKE 1
// a large bar that fills the screen to correspond to seconds
// the minute and hour are written hou


var w;	// width of the rectangle
var s;	// second
var m;	// minute
var h;	// hour

function setup() {
  createCanvas(windowWidth, windowHeight);


}


function draw() {
	background(255);

	s = second();
	m = minute();
	h = hour();
	if (hour() > 12) {
		h = hour ()- 12;
	}

	w = ((windowWidth/60)*s)

	fill(245);
	noStroke();
	rect(0,0,w,windowHeight);

	fill(0);
	text(h,40,20,200,20);
	text(minute(),40,40,200,20);


  
}
