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
			
	rest.setParameters("POST", "login", jsObj, loginSuccess, loginFailure);
	rest.send();
	//rest.send("./mock/loginSuccess.json");
}

function loginSuccess(userData){
	// User oder Pizzeria wurden angemeldet
	if (typeof(userData.userID) !== 'undefined' ||
		typeof(userData.restaurantID) !== 'undefined'){

		var expireTime = ($('#cbmerken').prop('checked'))? 7 : 0.2;
				
		//$('#div_ajaxResponse').text( returnCode );
		if(typeof(userData.userID) !== 'undefined')	
		{
			console.log("Privatkunde");
			console.log(userData.userID);
			Cookies.set("userID", userData.userID, {expires: expireTime});
		}
		else if(typeof(userData.restaurantID) !== 'undefined')
		{
			console.log("Restaurant");
			console.log(userData.restaurantID);
			Cookies.set("restaurantID", userData.restaurantID, {expires: expireTime});
		}
		else{
			alert("Weder User noch Pizzeria wurde erkannt");
		}
		location.reload();
	}
	// Anmeldung fehlgeschlagen
	else{
		console.log("Fehler: Falsche Eingaben / Nicht vorhanden");
	}
}

// Aufruf ist gescheitert (Server down / Netzwerfehler)
function loginFailure(){
	console.log("Verbindungsfehler");
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