function setup() {
  createCanvas(500,500)
background(50,0,1400)
  
}

function draw() {
  noStroke(0);
  fill(0,0,random(100,350),50)
  ellipse(random(0,width),random(0,height),50,50 )
  fill(random(100,350),random(100,350),0,50)
  ellipse(random(0,width),random(0,height),50,50)
  fill(random(100,350),0,0)
  ellipse(random(0,width),random(0,height),10,10)

}