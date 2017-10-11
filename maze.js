window.onload=load

function load()
{
	let boundary=document.getElementsByClassName("boundary");

	for (var i =0; i< boundary.length;  i++) {
		boundary[i].onmouseover= function(){
			this.className=this.className+" youlose";
		}
	}


}