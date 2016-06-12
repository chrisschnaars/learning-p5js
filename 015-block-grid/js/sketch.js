// 015: BLOCK GRID
// a display-sized grid of blocks that can be used for drawing
// each block has a hover state, and a click will turn on a color


var blocks = [];	// declare array
var w = 60;	// width of the blcosk
var totalCounter;	// total number of blocks in the grid



function setup() {
  createCanvas(windowWidth, windowHeight);

  // calculate how many blocks can fit wide
  var horizontalCounter = (width/w)+(w-1);  // widht of screen divided by width of block
  var verticalCounter = (height/w)+(w-1);   // height of screen divided by height of block
  totalCounter = int(horizontalCounter * verticalCounter);

  var index = 0;


  // initialize ball objects
  for (var xx = 0; xx < horizontalCounter; xx++) {	
  	for( var yy=0; yy < verticalCounter; yy++) {
  		blocks[index++] = new Block((xx*w), (yy*w));
  	}	
  } 
}


function draw() {
	background(255);

	// draw the ball objects
	for (var i = 0; i < totalCounter; i++) {
    	blocks[i].display();
    }
}

function mousePressed() {
	for (var i = 0; i < totalCounter; i++) {
    	blocks[i].draw();
    }
}


// Triangle Class
function Block(_xPos, _yPos) {
	this.w = w;	// size of one block side
	this.c = 255;	// default color of block
	this.xPos = _xPos;
	this.yPos = _yPos;
	this.on = false;	// boolean to indicate if the block is painted (true) or blank (false)
}


// draw if mouse pressed
Block.prototype.draw = function() {
		if (mouseX > (this.xPos) && mouseX < (this.xPos)+this.w && mouseY > (this.yPos) && mouseY < (this.yPos)+this.w) {
			if (this.on == false) {
				this.c = color('#EF63A4');	// color the block pink
				this.on = true;	// change variable to on
			} else {
				this.c = 255;
				this.on = false;
			}
		}
}


// draw the triangle
Block.prototype.display = function() {
		fill(this.c);
		stroke(0);
		rect(this.xPos, this.yPos, this.w, this.w);
}


