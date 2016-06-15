// 020: CLOCK TAKE 2
// three circle outlines, one for second, day, hour, that fill to correspond to the time


var s;	// second
var m;	// minute
var h;	// hour

var xPos;
var yPos;

var hourW = 600;	// radius of the hour indicator
var minW = 400;	// radius of the minute indicator
var secW = 200;	// radius of the second inddicator

var weight = 20;	// stroke weight of indicators

function setup() {
  createCanvas(windowWidth, windowHeight);

  xPos = width/2;
  yPos = height/2;

}


function draw() {
	background(255);
	noFill();	// global fill property
	strokeWeight(weight);	// global stroke property

	// calculation for time arcs
	
	if (hour() > 12) {
		h = radians(((360/12)*(hour()-12))-90);	// hour calculation for pm
	} else {
		h = radians(((360/12)*hour())-90);	// hour
	}

	m = radians(((360/60)*minute())-90);	// minute
	s = radians(((360/60)*second())-90);	// seconds


	// draw the background of the hour indicator
	stroke(240);
	ellipse(xPos,yPos,hourW,hourW);

	// fill the hour indicator with current time
	stroke(0);
	arc(xPos, yPos, hourW, hourW, PI+HALF_PI, h);


	// draw the background of the minute indicator
	stroke(240);
	ellipse(xPos,yPos,minW,minW);

	// fill the minute indicator with current time
	stroke(0);
	arc(xPos, yPos, minW, minW, PI+HALF_PI, m);

	// draw the background of the minute indicator
	stroke(240);
	ellipse(xPos,yPos,secW,secW);

	// fill the minute indicator with current time
	stroke(0);
	arc(xPos, yPos, secW, secW, PI+HALF_PI, s);



  
}
