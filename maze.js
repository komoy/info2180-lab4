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
		var loser = false;  // whether the user has hit a wall


    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }

function overBoundary() {
    loser = true;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function startClick() {
    loser = false;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function overEnd() {
    if(loser) {
        alert(" You lost !");
    } else {
        alert("You win!");
    }
}
