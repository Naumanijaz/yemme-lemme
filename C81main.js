var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){ctx.beginPath();
    ctx.strokeStyle="red";
    var mousex=e.clientX-canvas.offsetLeft;
    var mousey=e.clientY-canvas.offsetTop;
    ctx.lineWidth=2;ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
} 