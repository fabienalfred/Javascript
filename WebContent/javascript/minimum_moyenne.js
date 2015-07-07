/**
 * 
 */

function gestionTableau(){
	"use strict"
	var tab = [];
	var MAX = document.getElementById("length").value;
	if(isNaN(MAX)){
		alert("Ce n'est pas un nombre !");
		return ;
	}
	fillTable(tab, MAX) ;
	var min = minimum(tab);
	var moy = moyenne(tab);
	

	document.getElementById("show").innerHTML = "Minimum : <div id='divMin'></div>"
		+ "Moyenne : <div id='divMoy'></div></br>"
		+ "Tableau :<div id='showTable'></div>"
	
	var divMin = document.getElementById("divMin") ;
	var divMoy = document.getElementById("divMoy") ;
	divMin.innerHTML = min;
	divMoy.innerHTML = moy;
	displayTable(tab,"showTable");
}

function fillTable(tab, max){
	for(var i=0 ; i<max ; i++){
		tab[i] = Math.floor((Math.random()*100)+1);
	}
	return tab;
}

function displayTable(tab, id){
	var divTable = document.getElementById(id);
	for(var i=0 ; i<tab.length ; i++){
		divTable.innerHTML += tab[i] + "</br>";
	}
}

function minimum(tab){
	var min=tab[0];
	for(var i=1 ; i<tab.length ; i++){
		if(tab[i]<min)
			min=tab[i] ; 
	}
	return min;
}

function moyenne(tab){
	var moyenne=0;
	for(var i=0 ; i<tab.length ; i++){
		moyenne += tab[i];
	}
	return moyenne/tab.length;
}

window.onload = function(){
	document.getElementById("test").onclick=gestionTableau;
}