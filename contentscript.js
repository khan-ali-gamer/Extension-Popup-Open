var myDiv = document.querySelectorAll('.r a');
var Division= document.createElement("IFRAME");
Division.className = "Mview";
document.body.appendChild(Division);
var box=document.querySelector('.Mview');


for(var i=0;i<myDiv.length;i++)
{
    myDiv[i].addEventListener("mouseover", myFunction);
    myDiv[i].addEventListener("mouseout", function(){box.style.display="none";});
}
box.addEventListener("mouseover", function(){this.style.display="block";});
box.addEventListener("mouseout", function(){this.style.display="none";});

function myFunction()
{
    var position = this.getBoundingClientRect();
    var x = Number(position.width)+Number(position.left)-125;
    var y = Number(position.top) + Number(window.scrollY)-175;
    box.style.left=String(x)+"px";
    box.style.top=String(y)+"px";
    box.src=this.href;
    box.style.display="block";
}
