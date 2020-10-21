var fr,mr;
function setup() {
  createCanvas(800,400);
  fr=createSprite(100, 200, 50, 50);
  mr=createSprite(700,200,50,50);
  fr.shapeColor="green";
  mr.shapeColor="red";
  fr.velocityX=4;
  mr.velocityX=4;
  fr.debug=true;
  mr.debug=true;
  tr=createSprite(400, 100, 50, 50);
  br=createSprite(400,300,50,50);
  tr.shapeColor="green";
  br.shapeColor="red";
  tr.velocityY=4;
  br.velocityY=-4;
  tr.debug=true;
  br.debug=true;
}
function draw(){
background(250,250,0)
bounceOff(fr,mr);
bounceOff(tr,br);
drawSprites();
}
function bounceOff(o1,o2){
if(o1.x-o2.x<o1.width/2+o2.width/2
&& o2.x-o1.x<o1.width/2+o2.width/2){
o1.velocityX=0-o1.velocityX
o2.velocityX=0-o2.velocityX

}
if(o1.y-o2.y<o1.height/2+o2.height/2
    && o2.y-o1.y<o1.height/2+o2.height/2){
    o1.velocityY=0-o1.velocityY
    o2.velocityY=0-o2.velocityY

    }
}