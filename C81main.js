canvas= document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(100,100,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    mouse_X=e.clientX-canvas.offsetLeft;
    mouse_Y=e.clientY-canvas.offsetTop;
    circle(mouse_X, mouse_Y);

}

function circle(mouse_X, mouse_Y){
    ctx.beginPath();
 ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_X,mouse_Y,40,0,2*Math.PI);
ctx.stroke();
}
function c(){
    console.log("hi");
    ctx.clearRect(0,0,canvas.width,canvas.height);

}