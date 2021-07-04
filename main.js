canvas = document.getElementById("myCanvas");
var color1 = "Blue";
var color2 = "Black";
var  color3 = "Red";
var color4 = "Yellow";
var color5 = "Green";
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "Grey";
ctx.lineWidth = "4";
ctx.rect(150 ,143 ,430 ,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = "5";
ctx.arc(250 ,  210 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = "5";
ctx.arc(350 ,  210 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = "5";
ctx.arc(450 ,  210 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = "5";
ctx.arc(300 ,  250 , 40 , 0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = "5";
ctx.arc(400 ,  250 , 40 , 0 , 2*Math.PI);
ctx.stroke();