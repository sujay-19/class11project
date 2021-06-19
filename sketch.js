var jaxon,jaxon_running
var pathimage,path
var edges,edges2

function preload(){
  //pre-load images
    jaxon_running=loadAnimation("Runner-1.png","Runner-2.png")
    pathimage=loadImage("path.png")
    }

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200,400,400)
  path.addImage(pathimage)
  path.velocityY=4


  jaxon=createSprite(310,360)
  jaxon.addAnimation("running",jaxon_running)
  jaxon.scale=0.05

  edges=createSprite(60,200,20,400)
  edges.visible=false

  edges2=createSprite(345,200,20,400)
  edges2.visible=false

 jaxon.collide(edges||edges2)
 
}

function draw() {
  background("brown");
 
  if (path.y>400) {
    path.y=height/2
  }
  drawSprites()

}
