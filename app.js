g.clear();
var x1=10;
var x2=105;
var x3=190;
var y1;
var y2;
var y3;

function drawWatchTicks(column1,column2,column3){
  var i;
  for(i=0;i<25;i=i+4){
    g.drawString(i,column1,i/24*240);
  }
  for(i=0;i<61;i=i+8){
    g.drawString(i,column2,i/60*240);
  }
  for(i=0;i<61;i=i+8){
  g.drawString(i,column3,i/60*240);
  }
}

function textCircle(x,y,string){
  g.drawCircle(x+3,y,11);
  g.setColor(0,0,0);
  g.fillCircle(x+3,y,10);
  g.setColor(250,250,250);
  g.drawString(string,x-3,y-3,1);
}

i=0;
setInterval(function(){
  var t = new Date();
  var h = t.getHours();
  var m = t.getMinutes();
  var s = t.getSeconds();
  g.clear();
  g.setFont("4x6",1);
  drawWatchTicks(x1,x2,x3);
  y1 = h/24*240;
  y2 = m/60*240;
  y3 = s/60*240;
  g.drawLine(x1+12,y1,x2-5,y2);
  g.drawLine(x2+12,y2,x3-5,y3);
  g.setFont("4x6",2);
  textCircle(x1,h/24*240,h);
  textCircle(x2,m/60*240,m);
  textCircle(x3,s/60*240,s);
  i = i+4;
},1000);
