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
	let allBoundary=document.querySelectorAll(".boundary");

	for (var i =0; i< allBoundary.length;  i++) {
		allBoundary[i].onmouseover=redOnHover;
	}
	//Exercise3
	var loser = false; // when the user hits a wall


    document.getElementById("start").onclick = startClick;
    document.getElementById("end").onmouseover = overEnd;
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
}

function overBoundary() {
    var loser = true;
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].className = "boundary youlose";
    }
}

function startClick() {
   var loser = false;
    var boundaries = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].className = "boundary";
    }
}

function overEnd() {
	var loser;
    if(loser) {
        alert(" You lost !");
    } else {
        alert("You win!");
    }
}
	
	 function redOnHover()
		{ let allBoundary=document.querySelectorAll(".boundary");
			for (var i=0; i < allBoundary.length; i++) 
			{
				allBoundary[i].className+=" youlose";
			}
		}


