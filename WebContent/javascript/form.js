function verify(){
	var user = document.getElementById("user").value;
	var password = document.getElementById("pswd").value;
	var check = false;
	
	if(user=="")
		document.getElementById("err_user").style.visibility= "visible";

	if(password=="")
		document.getElementById("err_pswd").style.visibility= "visible";
	
	if(user!="" && password!="")
		check = true;
	
	if(!check){
		event.preventDefault();
		return false ;
	}
}

window.onload = function(){
	document.getElementById("idSubmit").onclick=verify;
}