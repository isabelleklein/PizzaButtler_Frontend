var rest;

/** Übermittlung der eingegebenen Daten an das Backend **/
$(document).ready(function() {
	/** Aktionsinformationen für den Absenden-Button **/
	
	$('#absenden_pwvergessen').click(function(e) {
		//if(checkForm()==true)
		//{
			e.preventDefault(); /** cancel form submit **/
			
			var email = {"email":$("#email_pwvergessen").val()};
			rest = new RestInterface();
			rest.setParameters("POST", "resetPassword", email, pwSendSuccess);
			rest.send("./mock/pwVergessen.json");
		//}
	});
	
    $('#open_pwvergessen').click(
        function() {
            $('#overlay').show('slow', 
                function() {
                    $('#container_pwvergessen').fadeIn('slow');
                    $('#changeText').html('Dynamischer Inhalt');
                    $('#containerx').hide('slow');
                }
            );
        }
    );
    
     $('.close_pwvergessen').click(
        function() {
            $('#container_pwvergessen').hide('slow', 
                 function() {
                    $('#overlay').fadeOut();          
                 }    
            );
        }
    );
    
    // wird das hier benötigt?
  	/*$(function() {
	    $( '#datepicker' ).datepicker({
	      changeMonth: true,
	      changeYear: true
	    });
	 });*/
     
});

function dataAbrufen(){
	var userID = Cookies.get("userID");
	if(typeof userID != 'undefined') {
		rest = new RestInterface();
		rest.setParameters("GET", "user/" + userID, null, pwaendern);
		rest.send();
		rest.send("./mock/getUser.json");
	}
}

function pwaendern(data){
		var email = {"email": data.email};
		console.log(email);
		rest = new RestInterface();
		rest.setParameters("POST", "resetPassword", email, pwAendSuccess);
		rest.send("./mock/pwVergessen.json");
}

function pwAendSuccess(data){
	if(data == 0) {
		window.alert("Passwort erfolgreich angefordert. Du erhälst demnächst eine E-Mail mit deinem neuen Passwort.");
	}
		else if(data == -1){
			window.alert("Ein oder mehr Eingabedaten sind ungültig");
		}
}

/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
function pwSendSuccess(data) {  
		if(data == 0) {
			console.log("if-Abschnitt durchlaufen");
			$('#container_pwvergessen').hide('slow',
				function() {
					$('#overlay').fadeOut();
				}
			);
		}
		else if(data == -1) {
			document.getElementById("fehlerAbsenden").innerHTML = "Ein oder mehr Eingabedaten sind ungültig";
			document.getElementById("fehlerAbsenden").style.display="inline";
			console.log("if-Abschnitt durchlaufen");
		}
		else if(data == -2) {
			document.getElementById("fehlerAbsenden").innerHTML = "Die Email-Adresse wird bereits verwendet";
			document.getElementById("fehlerAbsenden").style.display="inline";
			console.log("if-Abschnitt durchlaufen");
		}
	}


