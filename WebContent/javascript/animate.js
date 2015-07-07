/**
 * 
 */

var timer = null ;
var numImg = 0 ;
var interval = 100;

function animate(){
	document.getElementById("idJuggler").src = "images/juggler"+numImg+".gif" ;
	numImg++ ;
	if(numImg>4)
		numImg=0;
}

function start(){
	if(timer!=null)
		return
	timer = setInterval(animate,interval);
}

function slow(){
	if(interval>10){
		stop();
		interval += 10;
		start();
	}
}

function fast(){
	stop();
	interval -= 10;
	start();
}

function stop(){
	if(timer!=null){
		clearInterval(timer);
		timer=null;
	}
}

window.onload = function(){
	document.getElementById("idStart").onclick = start ;
	document.getElementById("idSlow").onclick = slow ;
	document.getElementById("idFast").onclick = fast ;
	document.getElementById("idStop").onclick = stop ;
}