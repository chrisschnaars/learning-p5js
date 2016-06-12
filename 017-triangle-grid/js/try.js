// painting and erasing with an ellipse

var a = 100;
var b = 300;
var x = 0;
var y = 0;
var isOverTriangle = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(100);
	fill(0);
	noStroke();
	triangle(-a,-a,-a,a,a+(sqrt(sq(a*2)-sq(a)))-a,0);

	//figure out vectors
	var px = mouseX;
	var py = mouseY;
	var ax = -a;
	var ay = -a;
	var bx = -a;
	var by = a;
	var cx = x + (sqrt(3)*a);
	var cy = y;
	var v0 = [cx - ax, cy - ay];
	var v1 = [bx - ax, by - ay];
	var v2 = [px - ax, py - ay];

	//compute dot products
	var dot00 = (v0[0]*v0[0] + v0[1]*v0[1]);
	var dot01 = (v0[0]*v1[0] + v0[1]*v1[1]);
	var dot02 = (v0[0]*v2[0] + v0[1]*v2[1]);
	var dot11 = (v1[0]*v1[0] + v1[1]*v1[1]);
	var dot12 = (v1[0]*v2[0] + v1[1]*v2[1]);

	//compute barycentric coordinates
	var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
	var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
	var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

	//check if point is in triangle
	if((u >= 0) && (v >= 0) && (u + v < 1)) {
		fill(255);
		triangle(-a,-a,-a,a,a+(sqrt(sq(a*2)-sq(a)))-a,0);
	} 





}