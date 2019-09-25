var slider;
var angle;
var c;
var w;
function setup() {
  createCanvas(640, 480);
  stroke(255);
  slider = createSlider(0, PI/2.5, PI/4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  c = map(angle, 0, PI/2.5, 0, 123);
  fill(c, c, 0);
  translate(width/2, height);
  branch(100);
}

function branch(len)
{
  w = map(len, 0, 100, 0, 8);
  strokeWeight(w);
  stroke(c, c, 0);
  line(0, 0, 0, -len);
  if(len > 10){
    push();
    translate(0, -len);
    rotate(angle);
    branch(len*0.67)
    pop();
    push();
    translate(0, -len);
    rotate(-angle);
    branch(len*0.67);
    pop();
  }
}