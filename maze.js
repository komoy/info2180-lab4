//Exercise 1
window.onload=load
var loser = false; // when the user hits a wall

function load()
{
	let boundary= document.getElementById("boundary1");

	boundary.onmouseover=function()
	{
		
		this.className=this.className+" youlose";

	}
	//Exercise2
	let allBoundary=document.querySelectorAll(".boundary");

	for (var i =0; i< allBoundary.length;  i++) {
		allBoundary[i].onmouseover=redOnHover;
	}
	//Exercise3
	


    document.getElementById("start").onclick = startClick;
    document.getElementById("end").onmouseover = overEnd;
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
}

function overBoundary() {
     loser = true;
	var status=document.getelementbyId("start");
	status.textContent = "You lose!";
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].className = "boundary youlose";
    }
}

function startClick() {
    loser = false;
	var status=document.getelementbyId("end");
	status.textContent = "Find the end!";
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].className = "boundary";
    }
}
//EX5
function overEnd() {
	var status=document.getelementbyId("status");
    if(loser) {
	    
        status.textContent=" You lost !";
    } else {
        status.textContent="You win!";
    }
}
	
	 function redOnHover()
		{ let allBoundary=document.querySelectorAll(".boundary");
			for (var i=0; i < allBoundary.length; i++) 
			{
				allBoundary[i].className+=" youlose";
			}
		}


