var myDiv = document.querySelectorAll('.r a');
var Division= document.createElement("IFRAME");
Division.className = "Mview";
document.body.appendChild(Division);
var box=document.querySelector('.Mview');
box.style.transition = "all 1.5s";

for(var i=0;i<myDiv.length;i++)
{
    myDiv[i].addEventListener("mouseover", myFunction);
}

function myFunction()
{
    var position = this.getBoundingClientRect();
    var x = Number(position.width)+Number(position.left);
    var y = Number(position.top) + Number(window.scrollY)-175;
    if(x>620) x-=100;
    box.style.left=String(x)+"px";
    box.style.top=String(y)+"px";
    box.src=this.href;
    var timer = setTimeout("slide()",750); 
	this.onmouseout = function() {  clearTimeout(timer); } 
}
function slide()
{
	box.style.display="block";
}
