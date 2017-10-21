//Exercise 1
window.onload=load

function load()
{
	let boundary= document.getElementById("boundary1");

	boundary.onmouseover=function()
	{
		
		this.className=this.className+" youlose";

	}
