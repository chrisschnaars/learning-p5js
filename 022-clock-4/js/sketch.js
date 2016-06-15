// 022: CLOCK TAKE 3
// three hands that turn on independent axis


var s;	// second
var m;	// minute
var h;	// hour
var hh;	// special hour normalizer

var hHand;	// calclation for the minute hand
var mHand;	// calculation for the minute hand
var sX;	// calcualtiona for the second hand x position
var sY;	// calculation for the second hand y position

var x_hour;	// x position of hour clock
var x_min;	// x position of minute clock
var x_sec;	// x position of second clock

var yPos;	// y posiiton of all clocks

var w = 200;	// diameter of each time piece
var l = 50;	// length of each hand

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
	bg = color(250);

	// normalize all hour values to be 1 - 12
	hh = hour();
	if (hour() > 12) {
		hh = (hour()-12);
	}


	h = (l/3)*hh;	// hour length calculation
	m = (l/15)*minute();	// minute
	s = (l/15)*second();	// seconds

	// calculate the hour hand position
	if (hh > 6 && hh < 12) {
		hX = (x_hour - h);
	} else {
		hX = (x_hour + h);
	}

	if (hh > 45 && hh < 15) {
		hY = (yPos - h);
	} else {
		hY = (yPos + h);
	}

	// calculate the minute hand position
	if (minute() > 30 && minute() < 60) {
		mX = (x_min - m);
	} else {
		mX = (x_min + m);
	}

	if (minute() > 45 && minute() < 15) {
		mY = (yPos - m);
	} else {
		mY = (yPos + m);
	}

	// calculate the second hand position
	if (second() > 30 && second() < 60) {
		sX = (x_sec - s);
	} else {
		sX = (x_sec + s);
	}

	if (second() > 45 && second() < 15) {
		sY = (yPos - s);
	} else {
		sY = (yPos + s);
	}


	// draw the background of the indicators
	fill(bg);
	noStroke();
	ellipse(x_hour,yPos,w,w);	// hour
	ellipse(x_min,yPos,w,w);	// minute
	ellipse(x_sec,yPos,w,w);	// second

	// fill the hour indicator with current time
	stroke(0);
	noFill();
	line(x_hour,yPos,(x_hour+hX), (yPos+hY));	// hour
	line(x_min, yPos, (x_min+mX), (yPos+mY));	// minute
	line(x_sec, yPos, (x_sec+sX), (yPos+sY));	// second



  
}
