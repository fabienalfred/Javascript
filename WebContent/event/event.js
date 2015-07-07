var elt = null;
var offsetX = 0;
var offsetY = 0;


function infosEvent(event){
	console.log(event.target.id);
	console.log(event.type);
	console.log("screen : "+event.screenX+" - "+event.screenY);
	console.log("client : "+event.clientX+" - "+event.clientY);
	console.log("page : "+event.pageX+" - "+event.pageY);
	console.log("offset : "+event.offsetX+" - "+event.offsetY);
}

function start(event){
	if(event.target.className=="box"){
		elt = event.target;
		offsetX = event.offsetX==undefined?event.layerX:event.offsetX;
		offsetY = event.offsetY==undefined?event.layerY:event.offsetY;
		console.log("START " + elt.className);
	}
	else if(event.target.className=="resize"){
		elt = event.target;
		console.log("START " + elt.className);
	}
}
function stop(event){
	if(elt!=null){
		console.log("STOP " + elt.className);
		elt=null;
	}
}
function deplacer(event){
	if(elt!=null && elt.className=="box"){
		console.log("d&d "+event.pageX+ " - "+event.pageY);
		elt.style.left = (event.pageX - offsetX)+"px";
		elt.style.top = (event.pageY - offsetY)+"px";
	}else if(elt!=null && elt.className=="resize"){
		var larg = event.pageX - parseInt(elt.parentNode.style.left);
		var haut = event.pageY - parseInt(elt.parentNode.style.top);
		console.log("resize : "+larg+ " - "+haut);
		elt.parentNode.style.width = larg+"px";
		elt.parentNode.style.height = haut+"px";
	}
}

function test(event){
	this.parentNode.style.width = "100px";
	this.parentNode.style.height = "100px";
}
document.addEventListener("DOMContentLoaded", function(){
	document.addEventListener("mousedown", start, false);
	document.addEventListener("mouseup", stop, false);
	document.addEventListener("mousemove", deplacer, false);

},false);