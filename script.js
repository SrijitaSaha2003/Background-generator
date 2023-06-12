var color1=document.getElementById('c1');
var color2=document.getElementById('c2');
var text=document.querySelector('h3');
var body=document.querySelector('body');
function addbg(){
	body.style.background="linear-gradient( to right,"+color1.value+","+color2.value+")";
	text.textContent=body.style.background;
}
color1.addEventListener("input",addbg);
color2.addEventListener("input",addbg);
