function setup() {
  createCanvas(800,500)
}

function draw() {

 
 background("#f2f3f4")
  
 //riduci e centra
 scale(80/100,80/100)
 translate(-25,0)
 
 //pavimento
 fill("#d8d8d8");
 rect(0,400,1100,300)

 
 //P5 Robot:
 
push()


translate(-95,25)
scale(1+(1/7),1+(1/7))
 
  //Ombra:
  fill(0,0,0,50);
  noStroke()
  ellipse(264,435,250,20)
 
  //colli
  stroke("#666666");
  strokeWeight(6);
  line(266,257,266,162);
  line(276,257,276,162);
  line(286,257,286,162);
  
  line(276,306,356,209);
  line(281,312,362,214);
  
  line(240,260,220,225);
  line(230,260,210,225);
  
 //antenne 1
 
 line(276,155,246,112)
 line(276,155,306,56)
 line(276,155,342,170)

push();

scale((4/5),(4/5))
translate(200,85)

//antenne 2
 line(276,155,246,112)
 line(276,155,306,56)
 line(276,155,342,170)
 
pop()

push()

scale((4/5),(4/5))
translate(-35,100)

 //antenne 3
 line(276,155,246,112)
 line(276,155,306,56)
 line(276,155,342,170)
 
pop()

//sfera sotto
 noStroke();
 fill("#666666");
 ellipse(264,377,65,65);
 
 //corpo
 fill("#1c1c1c");
 rect(219,257,90,120);

 fill("#999999");
 rect(219,274,90,6);

//testa 1
 fill("#1c1c1c");
 ellipse(276,155,90,90);

//occhi
 fill("#ffffff");
 ellipse(288,150,28,28);
 fill("#545454");
 ellipse(294,150,6,6);
 fill("#999999");
 ellipse(263,148,10,10);
 ellipse(296,140,8,8);
 ellipse(305,162,6,6);

push()

scale((4/5),(4/5))
translate(200,85)

//testa 2
 fill("#1c1c1c");
 ellipse(276,155,90,90);
 

//occhi
 fill("#ffffff");
 ellipse(288,150,28,28);
 fill("#545454");
 ellipse(294,150,6,6);
 fill("#999999");
 ellipse(263,148,10,10);
 ellipse(296,140,8,8);
 ellipse(305,162,6,6);
 
pop()

push()

scale((4/5),(4/5))
translate(-35,100)

//testa 3
 fill("#1c1c1c");
 ellipse(276,155,90,90);

//occhi
 fill("#ffffff");
 ellipse(288,150,28,28);
 fill("#000000");
 ellipse(294,150,6,6);
 fill("#999999");
 ellipse(263,148,10,10);
 ellipse(296,140,8,8);
 ellipse(305,162,6,6);
pop()

pop()
 

 
//Wall-E:

push()

translate(250, 0);

 //Ombra:
  fill(0,0,0,100);
  noStroke()
  ellipse(180+85+35,522,280,25)
  
 //Carat:
  strokeWeight(6);
  stroke("#140700");


  //Cingoli SX:
  fill("#8e7a6f");
  rect(180,420,55,100);
  line(180,440,180+55,440)
  line(180,460,180+55,460)
  line(180,480,180+55,480)
  line(180,500,180+55,500)
  
  //mano Sx Sotto
  fill("#e4d1bb");
  ellipse(180+55,420-30,30,30)
  ellipse(180+55+130,420-30,30,30)
  
  //corpo:
  fill("#fad565");
  rect(180+55,420-40,130,100);
  fill("#949494");
  rect(180+55,420-30-35,130,35);
  
  push()
  //Cingoli DX:
  translate(185, 0);
  fill("#8e7a6f");
  rect(180,420,55,100);
  line(180,440,180+55,440)
  line(180,460,180+55,460)
  line(180,480,180+55,480)
  line(180,500,180+55,500)
  pop()
  
  //mano Sx
  fill("#e4d1bb");
  rect(180+55,420-30,30,15)
  rect(180+55,420-30-15,30,15)
  
  //mano Dx
  fill("#e4d1bb");
  rect(180+55+100,420-30,30,15)
  rect(180+55+100,420-30-15,30,15)
   
  //collo
  fill("#fad565");
  rect(180+55+60-2,420-30-35-80,15,80)
  fill("#fad565");
  rect(180+55+60-25,420-30-35-10,60,10)
  fill("#949494");
  rect(180+55+60+15-25,420-30-35-10-80,30,11)
  //rect()
   
  //occhi Sx:
  fill("#949494");
  rect(210,420-30-35-10-80,80,45,45,0,180,45)
  fill("#000000");
  ellipse(180+85,287,34,34)
   
  //occhi Dx:
  fill("#949494");
  rect(210+80+20,420-30-35-10-80,80,45,0,45,180,45)
  fill("#000000");
  ellipse(180+85+70,287,34,34)
   
  pop()
  
  
  //Eva

 stroke("#140700");
 strokeWeight(4);
 translate(750, 150);
 scale(1+(1/2),1+(1/2))

 angleMode(DEGREES)
 
 //Corpo
 
 fill("#e9eaeb")
 push()
 noStroke();
 quad(60, 55, 100, 55, 130, 80, 30, 80);
 pop();
 arc(80, 80, 100, 250, 0, 180, OPEN);
 arc(100, 80, 60, 50, 270, 0, OPEN);
 arc(60, 80, 60, 50, 180, 270, OPEN);
 line(60,55,100,55)

 //Braccio Sx
  push()
  translate(125,125)
  rotate(100)
  fill("#e9eaeb")
  arc(0, 0, 100, 28, 180, 0, OPEN);
  arc(0, 0, 100, 15, 0, 180, OPEN);
  pop()
  
  //Braccio Dx
  push()
  translate(35,125)
  rotate(-100)
  fill("#e9eaeb")
  arc(0, 0, 100, 28, 180, 0, OPEN);
  arc(0, 0, 100, 15, 0, 180, OPEN);
  pop()

 //Testa

 arc(80, 19, 80, 78, 180, 0, OPEN);
 arc(80, 19, 80, 50, 0, 180, OPEN);
 
 fill("#4c4c4d")
 noStroke()
 arc(80, 19, 60, 55, 180, 0, OPEN);
 arc(80, 19, 60, 28, 0, 180, OPEN);
 
 //Occhio Sx:
 fill("#2c6a9f")
 noStroke()
 arc(67, 13, 20, 15, 180, 0, OPEN);
 arc(67, 13, 20, 18, 0, 180, OPEN);
 fill("#4c4c4d")
 arc(67, 22, 25, 18, 180, 0, OPEN);

 
 //Occhio Dx:
 fill("#2c6a9f")
 noStroke()
 arc(93, 13, 20, 15, 180, 0, OPEN);
 arc(93, 13, 20, 18, 0, 180, OPEN);
 fill("#4c4c4d")
 arc(93, 22, 25, 18, 180, 0, OPEN);
 
  
 //Ombra:
 fill(0,0,0,60);
 noStroke();
 ellipse(78,248,148,18)
 
  
}
