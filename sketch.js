function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(600, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  console.log(a.x-b.x);

  a.x = World.mouseX;
  a.y = World.mouseY;

  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2)
  {
    a.shapeColor = "red";
    b.shapeColor = "red";
  }else{
    a.shapeColor = "gray";
    b.shapeColor = "gray";
  }

  drawSprites();
}