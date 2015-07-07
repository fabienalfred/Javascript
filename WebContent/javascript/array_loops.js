/**
 * 
 */

var tableau = [];
function testArray(){
	"use strict"
	var MAX = 100;
	
	var i=0;
	while(i<MAX){
		tableau[i] = Math.floor((Math.random()*100)+1);
		i++;
	}
	document.getElementById("show").innerHTML = "" ;
	document.getElementById("divButton").innerHTML = "Tableau créé ! "
		+ "<input type='button' value='Croissant' name='displayButton' id='displayForButton' onclick='displayFor(tableau);'/>"
		+ "<input type='button' value='Décroissant' name='displayReverseButton' id='displayReverseButton' onclick='displayReverse(tableau);'/>"
		+ "<input type='button' value='Pairs' name='displayEvenButton' id='displayEvenForButton' onclick='displayEven(tableau);'/>" ;
}

function display(tableau){
	"use strict"
	var i = 0;
	var div = document.getElementById("show") ;
	div.innerHTML = "";
	while(i<tableau.length){
		div.innerHTML += "Case " + (i+1) + " : " + tableau[i] + "</br>" ;
		i++;
	}
}

function displayFor(tableau){
	"use strict"
	var div = document.getElementById("show") ;
	div.innerHTML = "";
	for(var i=0 ; i<tableau.length ; i++){
		div.innerHTML += "Case " + (i+1) + " : " + tableau[i] + "</br>" ;
	}
// 	for (var num in tableau){
// 		div.innerHTML += tableau[num] + "</br>" ;
// 	}
}

function displayEven(tableau){
	"use strict"
	var div = document.getElementById("show") ;
	div.innerHTML = "";
	var nombres = "" ;
	var nbPairs = 0 , nbImpairs = 0 ;
	for(var i=0 ; i<tableau.length ; i++){
		if(tableau[i]%2==0){
			nbPairs++ ;
			nombres += "Case " + (i+1) + " : " + tableau[i] + "</br>" ;
		} else{
			nbImpairs++;
		}
	}
	div.innerHTML = nbPairs + " nombres pairs + " + nbImpairs + " nombres impairs</br>" + nombres ;
}

function displayReverse(tableau){
	"use strict"
	var i = tableau.length-1;
	var div = document.getElementById("show") ;
	div.innerHTML = "";
	while(i>=0){
		div.innerHTML += "Case " + (i) + " : " + tableau[i] + "</br>" ;
		i--;
	}
}

window.onload = function(){
	document.getElementById("test").onclick=testArray ;
}