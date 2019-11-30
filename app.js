g.clear();
var x1=10;
var x2=105;
var x3=190;
var y1;
var y2;
var y3;

function drawWatchTicks(){
  var i;
  for(i=1;i<25;i++){
    g.drawString(i,x1,i/24*240);
  }
  for(i=1;i<61;i=i+5){
    g.drawString(i,x2,i/60*240);
  }
  for(i=1;i<61;i=i+5){
  g.drawString(i,x3,i/60*240);
  }
}

function textCircle(x,y,string){
  
}

function drawTime(x,y){
  
}

i=0;
setInterval(function(){
  var t = new Date();
  var h = t.getHours();
  var m = t.getMinutes();
  var s = t.getSeconds();
  var time = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
  g.clear();
  drawWatchTicks();
  y1 = h/24*240;
  y2 = m/60*240;
  y3 = s/60*240;
  g.drawLine(x1+12,y1,x2-5,y2);
  g.drawLine(x2+12,y2,x3-5,y3);
  g.drawString(time,90,40);
  i = i+4;
},1000);
