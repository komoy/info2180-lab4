/*window.onload=load

function load()
{
	let boundary=document.getElementsByClassName("boundary");

	for (var i =0; i< boundary.length;  i++) {
		boundary[i].onmouseover= function(){
			this.className=this.className+" youlose";
		}
	}


}*/

//Exercise 1
window.onload=load

function load()
{
	let boundary= document.getElementById("boundary1");

	boundary.onmouseover=function()
	{
		
		this.className=this.className+" youlose";

	}
	//Exercise2
	let allBoundary=document.querySelectorAll(".boundary")

	for (var i =0; i< allBoundary.length;  i++) {
		allBoundary[i].onmouseover=redOnHover;
	}
	
	 function redOnHover(){
			for (var i=0; i < allBoundary.length; i++) {
				allBoundary[i].className+=" youlose";
			}
		}
		//


}

