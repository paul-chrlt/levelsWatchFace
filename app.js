g.clear();
var x1=10;
var x2=105;
var x3=190;
var canvaHeight = 220;
E.setTimeZone(1);

function drawWatchTicks(column1,column2,column3){
  var i;
  for(i=0;i<25;i=i+4){
    g.drawString(i,column1,i/24*canvaHeight+2);
  }
  for(i=0;i<61;i=i+8){
    g.drawString(i,column2,i/60*canvaHeight+2);
  }
  for(i=0;i<61;i=i+8){
  g.drawString(i,column3,i/60*canvaHeight+2);
  }
}

function textCircle(x,y,string){
  g.setColor(0,0,0);
  g.fillCircle(x+3,y,14);
  g.setColor(250,250,250);
  g.drawCircle(x+3,y,14);
  g.drawString(string,x-3,y-3,1);
}

i=0;
setInterval(function(){
  var t = Date();
  var h = t.getHours();
  var m = t.getMinutes();
  var s = t.getSeconds();
  g.clear();
  g.setFont("4x6",1);
  drawWatchTicks(x1,x2,x3);
  y1 = h/24*canvaHeight;
  y2 = m/60*canvaHeight;
  y3 = s/60*canvaHeight;
  g.drawLine(x1+16,y1,x2-10,y2);
  g.drawLine(x2+16,y2,x3-10,y3);
  g.setFont("4x6",2);
  textCircle(x1,h/24*canvaHeight,h);
  textCircle(x2,m/60*canvaHeight,m);
  textCircle(x3,s/60*canvaHeight,s);
  i = i+4;
},1000);
