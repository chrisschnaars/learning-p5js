// 021: clock 3b
// three circles that get filled in, form the center out, based on the time


var s;	// second
var m;	// minute
var h;	// hour

var x_hour;	// x position of hour clock
var x_min;	// x position of minute clock
var x_sec;	// x position of second clock

var yPos;	// y posiiton of all clocks

var w = 250;	// diameter of each time piece

var bg;	// background color value for all clicks


function setup() {
  createCanvas(windowWidth, windowHeight);

  x_hour = width/4;
  x_min = width/2;
  x_sec = (width/4)*3;

  yPos = height/2;
}


function draw() {
	background(255);
	noStroke();	// global fill property
	bg = color(240);

	// calculation for time arcs
	
	if (hour() > 12) {
		h = (w/12)*(hour()-12);	// hour calculation for pm
	} else {
		h = (w/12)*hour();	// hour
	}

	m = (w/60)*minute();	// minute
	s = (w/60)*second();	// seconds


	// draw the background of the hour indicator
	fill(bg);
	ellipse(x_hour,yPos,w,w);

	// fill the hour indicator with current time
	fill(0);
	ellipse(x_hour, yPos, h, h);


	// draw the background of the minute indicator
	fill(bg);
	ellipse(x_min,yPos,w,w);

	// fill the minute indicator with current time
	fill(0);
	ellipse(x_min, yPos, m, m);

	// draw the background of the minute indicator
	fill(bg);
	ellipse(x_sec,yPos,w,w);

	// fill the minute indicator with current time
	fill(0);
	ellipse(x_sec, yPos, s, s);



  
}
