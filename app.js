E.setTimeZone(1);
g.clear();
var x1=40;
var x2=105;
var x3=170;
var y1;
var y2;
var y3;
var reverseSec = false;

function drawWatchTicks(column1,column2,column3){
  var ySec;
  var i;
  g.setColor(0.8,0.8,0.8);
  for(i=0;i<25;i=i+4){
    g.drawString(("0" + i).substr(-2),column1,i/24*240);
  }
  for(i=0;i<61;i=i+8){
    g.drawString(("0" + i).substr(-2),column2,i/60*240);
  }
  for(i=0;i<61;i=i+8){
    if(reverseSec==true){
      ySec = 240-i/60*240;
      }
    else{
      ySec = i/60*240;
      }
  g.drawString(("0" + i).substr(-2),column3,ySec);
  }
}

function textCircle(x,y,string){
  g.setColor(0.2,0.2,0.2);
  g.fillCircle(x+3,y,15);
  g.setColor(1,1,1);
  g.drawString(("0" + string).substr(-2),x-3,y-3,1);
}

i=0;
setInterval(function(){
  var t = new Date();
  var h = t.getHours();
  var m = t.getMinutes();
  var s = t.getSeconds();
  if(s == 0){reverseSec = !reverseSec;}
  g.clear();
  g.setFont("4x6",1);
  y1 = h/24*240;
  y2 = m/60*240;
  if(reverseSec){
    y3 = 240-s/60*240;
  }
  else{
    y3 = s/60*240;
  }
  g.setColor(0.2,0.2,0.2);
  trianglePath = [x1,y1,x2,y2,x3,y3];
  g.fillPoly(trianglePath,true);
  drawWatchTicks(x1,x2,x3);
  g.setFont("4x6",2);
  textCircle(x1,y1,h);
  textCircle(x2,y2,m);
  textCircle(x3,y3,s);
  i = i+4;
},1000);
