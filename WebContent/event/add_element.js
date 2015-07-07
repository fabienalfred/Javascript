function addElement(){
	var node = document.createElement("div");
	node.setAttribute("class","box");
	document.getElementById("body").appendChild(node);
	
	var n1 = document.createElement("div");
	n1.setAttribute("class","resize");
	node.appendChild(n1);
	
	document.getElementById("body").appendChild(node);
}
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("addBoxId").addEventListener("click", addElement, false);

},false);