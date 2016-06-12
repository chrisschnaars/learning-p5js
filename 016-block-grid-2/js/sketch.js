// 016: BLOCK GRID 2
// advancing the first block grid by adding more shapes, and possibly a hover over state 
// that doesn't slow everything down


var canvas;	// canvas variable
var blocks = [];	// declare array
var w;	// width of the blocks
var totalCount;	// total number of blocks in the grid



function setup() {
  // create canvas
  canvas = createCanvas(window.innerWidth, window.innerHeight);

  // set the width of the blocks
  w = 100;	

  // calculate how many blocks can fit wide
  var xCount = (width/w)+2;  // widht of screen divided by width of block
  var yCount = (height/w)+2;   // height of screen divided by height of block
  totalCount = int(xCount * yCount);

  // set the array to start at position 0
  var index = 0;


  // initialize block objects
  for (var xx = 0; xx < xCount; xx++) {	
  	for( var yy = 0; yy < yCount; yy++) {
  		blocks[index++] = new Block(int(xx)*w, int(yy)*w);
  	}	
  } 
}


function draw() {
	noStroke();
	// draw the ball objects
	for (var i = 0; i < totalCount; i++) {
    	blocks[i].display();	// draw each block
    	blocks[i].over();		// hover behavior

    }
}

function mousePressed() {
	for (var i = 0; i < totalCount; i++) {
    	blocks[i].flip();
    }
}


// Block Class
function Block(_xPos, _yPos) {
	this.xPos = _xPos;	// x position of the block
	this.yPos = _yPos;	// y position of the block
	this.half = w/2;	// half the value of the width
	this.selector = 2;
	this.r = 0 // rotation value
	this.c1 = 255;	// white color
	this.c2 = 0;	// black color 
	this.c3 = ('rgba(0, 209, 145, 0.2)')
	this.hover = false;	// boolean to indicate if the block is painted (true) or blank (false)
}

// change block pattern
Block.prototype.flip = function() {
	if (mouseX >(this.xPos) && mouseX <(this.xPos)+(this.half*2) && mouseY >(this.yPos) && mouseY < (this.yPos)+(this.half*2)) {
		this.selector = this.selector+1;
		if (this.selector === 7) {
			this.selector = 0;
		}
		print(this.selector);
	}
}

// detect hovering
Block.prototype.over = function() {
	if (mouseX>(this.xPos) && mouseX<(this.xPos)+(this.half*2) && mouseY>(this.yPos) && mouseY<(this.yPos)+(this.half*2)) {
    this.hover = true;
  } else {
    this.hover = false;
  }
}


// draw the block
Block.prototype.display = function() {
	push();
	translate(this.xPos, this.yPos);	// use each block's x,y coordinates as (0,0)
	// rectMode(CENTER);
	rotate(this.r);
	if (this.selector === 0) {
		fill(this.c1);
		rect(0,0,this.half*2, this.half*2);
	}
	if (this.selector === 1) {
		fill(this.c1);
		rect(0,0,this.half*2, this.half*2);
		fill(this.c2);
		triangle(0, 0, w, 0, 0, w);
	}
	if (this.selector === 2) {
		fill(this.c1);
		rect(0,0,this.half*2, this.half*2);
		fill(this.c2);
		triangle(w, 0, w, w, 0, w);
	}
	if (this.selector === 3) {
		fill(this.c1);
		rect(0,0,this.half*2, this.half*2);
		fill(this.c2);
		rect(0,0,this.half*2, this.half);
	}
	if (this.selector === 4) {
		fill(this.c1);
		rect(0,0,this.half*2, this.half*2);
		fill(this.c2);
		rect(0,0+this.half,this.half*2, this.half);
	}
	if (this.selector === 5) {
		fill(this.c1);
		rect(0,0,this.half*2, this.half*2);
		fill(this.c2);
		rect(0,0,this.half, this.half*2);
	}
	if (this.selector === 6) {
		fill(this.c1);
		rect(0,0,this.half*2, this.half*2);
		fill(this.c2);
		rect(this.half,0,this.half*2, this.half*2);
	}

	if (this.hover === true) {
		fill(this.c3);
	} else {
		noFill();
	}
	// rectMode(CENTER);
	rect(0,0,this.half*2,this.half*2);
	pop();

}
