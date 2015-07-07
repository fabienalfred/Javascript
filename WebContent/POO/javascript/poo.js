//var Contact = function(nom){
//	this.nom = nom;
//	this.sayHello = function(){
//		console.log("Hello "+nom+"!");
//	};
//};
//
//var c = new Contact("Fab");
//c.sayHello();
//
//var Client = function(nom){
//Contact.call(this, nom);
//	this.cb = "8618783873";
//}
//
//var c2 = new Client("John");
//c2.sayHello();


var Ville = function(nom, region, departement, latitude, longitude){
	this.nom = nom;
	this.region = region;
	this.departement = departement;
	this.latitude = latitude;
	this.longitude = longitude;
}

Ville.prototype.afficher = function(){
	console.log(this);
}

var v = new Ville("Montigny", "Ile-de-France", "Yvelines", "10", "20");
v.afficher();