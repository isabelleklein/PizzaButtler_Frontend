var rest;
$(document).ready(function() {
	setClickListeners();
	
	$.validate({
		form: '#login',
		onSuccess: function(){sendLogin();}
	});
	
	$('#login').submit(function(e) {return false;});
});

function sendLogin(){
	var jsObj = $('#login').serializeObject();
			
	rest = new RestInterface();
			
	rest.setParameters("POST", "user/login", jsObj, loginSuccess, loginFailure);
	rest.send();
}

function loginSuccess(userData){
	// User oder Pizzeria wurden angemeldet
	if(typeof(userData) !== 'undefined')
	{
		if (typeof(userData.userID) !== 'undefined' ||
			typeof(userData.restaurantID) !== 'undefined'){
			
			Cookies.remove("gastID");
	
			var expireTime = ($('#cbmerken').prop('checked'))? 7 : 0.2;
					
			if(typeof(userData.userID) !== 'undefined')	
				Cookies.set("userID", userData.userID, {expires: expireTime});
			else if(typeof(userData.restaurantID) !== 'undefined')
				Cookies.set("restaurantID", userData.restaurantID, {expires: expireTime});
			else
				alert("Weder User noch Pizzeria wurde erkannt");

			location.reload();
		}
	}
	// Anmeldung fehlgeschlagen
	else{
		window.alert("Login misslungen! Bitte prüfen Sie Ihre Eingabedaten.");
	}
}

// Aufruf ist gescheitert (Server down / Netzwerfehler)
function loginFailure(){
	window.alert("Login misslungen! Bitte prüfen Sie Ihre Eingabedaten.");
}


function setClickListeners(){
	$('#openx').click(function() {
	    $('#overlay').show('slow', function() {
	        $('#containerx').fadeIn('slow');
	        $('#changeText').html('Dynamischer Inhalt');
	    });
	});
    $('#delivery_userlogin').click(function() {
		$('#overlay').show('slow', function() {
			$('#containerx').fadeIn('slow');
			$('#changeText').html('Dynamischer Inhalt');
		});
	});
	$('#closex').click(function() {
		$('#containerx').hide('slow', function() {
			$('#overlay').fadeOut();          
		});
	});
}