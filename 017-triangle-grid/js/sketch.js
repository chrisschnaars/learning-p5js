// 017: TRIANGLE GRID
// Creating a grid of triangle shapes and styles
// inspired by the coffee cups at O Cafe in NYC


var canvas;	// canvas variable
var arrows = [];	// declare array
var w;	// height/width value of the triangles
var w2; // actual length of triange
var totalCount;	// total number of blocks in the grid



function setup() {
  // create canvas
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  // set the width of the blocks
  w = 80;	
  w2 = (w/2)*sqrt(3);

  // calculate how many arrows can fit in the display
  var xCount = (width/w2)+3;  // width of screen divided by the actual length of the triangle
  var yCount = (height/w)+3;   // height of screen divided by height of triangle
  totalCount = int(xCount * yCount);

  // set the array to start at position 0
  var index = 0;


  // initialize block objects
  for (var xx = 0; xx < xCount; xx++) {	
  	for( var yy = 0; yy < yCount; yy++) {
  		arrows[index++] = new Arrow(int(xx)*w2, int(yy)*w);
  	}	
  } 
}


function draw() {
	noStroke();
	// draw the arrows
	for (var i = 0; i < totalCount; i++) {
    	arrows[i].upDisplay(); // drawe the up arrows
    	arrows[i].downDisplay();	// draw the down arrows
    }
}

// function mousePressed() {
// 	for (var i = 0; i < totalCount; i++) {
//     	arrows[i].flip();
//     }
// }


// Arrow Class
function Arrow(_xPos, _yPos) {
	this.l = w/2;	// half of one side of the triangle
	this.x1 = _xPos;	// x position of the up arrow
	this.y1 = _yPos;	// y position of the up arrow
	this.x2 = _xPos;	// x position of the down arrow
	this.y2 = _yPos;	// y position of the down arrow
	this.selector = 0;
	this.c1 = color('#E6E5DF');	// default color
	this.c2 = color('#DBDAD1');	// hover color
	this.c3 = color('#446C3F');	// O cafe dark green
	this.c4 = color('#20A7A3');	// O cafe light green
	this.c5 = color('#B8443A');	// O cafe red
	this.hover1 = false;	// boolean to indicate if the up arrows are being hovered over
	this.hover2 = false;	// boolean to indicate if the down arrows are being hovered over
}

// change block pattern
Block.prototype.flip = function() {
	if (mouseX >(this.xPos) && mouseX <(this.xPos)+(this.half*2) && mouseY >(this.yPos) && mouseY < (this.yPos)+(this.half*2)) {
		this.selector = this.selector+1;
		if (this.selector === 7) {
			this.selector = 0;
		}
	}
}


// draw the arrowns pointing up
Arrow.prototype.upDisplay = function() {
	push();
	translate(this.x1, this.y1);	// use each arrow's x,y coordinates as (0,0)
	//draw the original triangle
	noStroke();
	fill(this.c1);
	triangle(0,0,0,this.l*2,(sqrt(3)*this.l),this.l);

	//figure out vectors
	this.px1 = mouseX;
	this.py1 = mouseY;
	this.ax1 = this.x1;
	this.ay1 = this.y1;
	this.bx1 = this.x1;
	this.by1 = this.y1+(this.l*2);
	this.cx1 = this.x1+(sqrt(3)*this.l);
	this.cy1 = this.y1+this.l;
	this.v01 = [this.cx1 - this.ax1, this.cy1 - this.ay1];
	this.v11 = [this.bx1 - this.ax1, this.by1 - this.ay1];
	this.v21 = [this.px1 - this.ax1, this.py1 - this.ay1];

	//compute dot products
	this.dot001 = (this.v01[0]*this.v01[0] + this.v01[1]*this.v01[1]);
	this.dot011 = (this.v01[0]*this.v11[0] + this.v01[1]*this.v11[1]);
	this.dot021 = (this.v01[0]*this.v21[0] + this.v01[1]*this.v21[1]);
	this.dot111 = (this.v11[0]*this.v11[0] + this.v11[1]*this.v11[1]);
	this.dot121 = (this.v11[0]*this.v21[0] + this.v11[1]*this.v21[1]);

	//compute barycentric coordinates
	this.invDenom1 = 1 / (this.dot001 * this.dot111 - this.dot011 * this.dot011);
	this.u1 = (this.dot111 * this.dot021 - this.dot011 * this.dot121) * this.invDenom1;
	this.v1 = (this.dot001 * this.dot121 - this.dot011 * this.dot021) * this.invDenom1;

	//check if point is in triangle
	this.hover1 = ((this.u1 >= 0) && (this.v1 >= 0) && (this.u1 + this.v1 < 1));
	if(this.hover1 === true) {
		fill(this.c2);
		triangle(0,0,0,this.l*2,(sqrt(3)*this.l),this.l);
	} else {
		noFill();
	}
	pop();
}

// draw the arrowns pointing down
Arrow.prototype.downDisplay = function() {
	push();
	translate(this.x2, this.y2);	// use each arrow's x,y coordinates as (0,0)
	//draw the original triangle
	noStroke();
	fill(this.c1);
	triangle(0,0,(sqrt(3)*this.l), -this.l,(sqrt(3)*this.l),this.l)

	//figure out vectors
	this.px2 = mouseX;
	this.py2 = mouseY;
	this.ax2 = this.x2;
	this.ay2 = this.y2;
	this.bx2 = this.x2+(sqrt(3)*this.l);
	this.by2 = this.y2-this.l;
	this.cx2 = this.x2+(sqrt(3)*this.l);
	this.cy2 = this.y2+this.l;
	this.v02 = [this.cx2 - this.ax2, this.cy2 - this.ay2];
	this.v12 = [this.bx2 - this.ax2, this.by2 - this.ay2];
	this.v22 = [this.px2 - this.ax2, this.py2 - this.ay2];

	//compute dot products
	this.dot002 = (this.v02[0]*this.v02[0] + this.v02[1]*this.v02[1]);
	this.dot012 = (this.v02[0]*this.v12[0] + this.v02[1]*this.v12[1]);
	this.dot022 = (this.v02[0]*this.v22[0] + this.v02[1]*this.v22[1]);
	this.dot112 = (this.v12[0]*this.v12[0] + this.v12[1]*this.v12[1]);
	this.dot122 = (this.v12[0]*this.v22[0] + this.v12[1]*this.v22[1]);

	//compute barycentric coordinates
	this.invDenom2 = 1 / (this.dot002 * this.dot112 - this.dot012 * this.dot012);
	this.u2 = (this.dot112 * this.dot022 - this.dot012 * this.dot122) * this.invDenom2;
	this.v2 = (this.dot002 * this.dot122 - this.dot012 * this.dot022) * this.invDenom2;

	//check if point is in triangle
	this.hover2 = ((this.u2 >= 0) && (this.v2 >= 0) && (this.u2 + this.v2 < 1));
	if(this.hover2 === true) {
		fill(this.c2);
		triangle(0,0,(sqrt(3)*this.l), -this.l,(sqrt(3)*this.l),this.l)
	} else {
		noFill();
	}
	pop();
}


// ction windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


