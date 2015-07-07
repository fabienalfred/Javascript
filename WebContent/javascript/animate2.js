var delay = 50;
var stopped = true;
var imageNumber = 0;
var current = 0;
var timer = null;

function animate(){
	var imageFile = "juggler"+current+".gif";
	document.getElementById("idJuggler").src = imageFile;
	current++;
	if(current > 4)
		current = 0;
	timer = setTimeout(animate, delay);
	
}
function start(){
	animate();
	document.getElementById("idStart").disabled=true;
}

function stop(){
	if(timer!=null){
		clearTimeout(timer);
		document.getElementById("idStart").disabled=false;
	}
}

function faster(){
	if(delay>10)
		delay-=10;
}

function slower(){
	delay+=10;
}

window.onload = function() {
	document.getElementById("idStart").onclick = start;
	document.getElementById("idStop").onclick = stop;
	document.getElementById("idSlow").onclick = slower;
	document.getElementById("idFast").onclick = faster;
}