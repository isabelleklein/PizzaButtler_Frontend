/**
 * @author Dominik Terlau
 * @Version 2.1
 */
$("head").append('<script type="text/javascript" src="./javascript/RestInterface.js"></script>');

var rest = RestInterface;

/** Übermittlung der eingegebenen Daten an das Backend **/

$(document).ready(function() {
	var $registrieren = $('#registrieren');
	/** Aktionsinformationen für den Absenden-Button **/
	
	$('#absenden').click(function(e) {
		console.log("Abschicken Button wurde geklickt");
		if(checkForm() === true) {
			e.preventDefault();
			/** cancel form submit **/
			var jsObj = $registrieren.serializeObject();

			rest.setParameters("POST", "user", jsObj, success);
			rest.fakeSend("http://localhost:63342/PizzaButtler_Frontend/PizzaButtler_Fronend_PHP/mock/postUser.json");
		}
	});
	
    $('#open').click(
        function() {
            $('#overlay').show('slow', 
                function() {
                    $('#container').fadeIn('slow');
                    $('#changeText').html('Dynamischer Inhalt');
                }
            );
        }
    ); 
    
     $('#close').click(
        function() {
            $('#container').hide('slow', 
                 function() {
                      $('#overlay').fadeOut();          
                 }    
            );
        }
    );

	var success = function(data) {
		/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
		console.log(data);
		if (data == 0) {
			console.log("if-Abschnitt durchlaufen");
			$('#container').hide('slow',
				function () {
					$('#overlay').fadeOut();
				}
			);
		}
		else if (data == -1) {
			document.getElementById("fehlerAbsenden").innerHTML = "Ein oder mehr Eingabedaten sind ungültig";
			document.getElementById("fehlerAbsenden").style.display = "inline";
			console.log("if-Abschnitt durchlaufen");
		}
		else if (data == -2) {
			document.getElementById("fehlerAbsenden").innerHTML = "Die Email-Adresse wird bereits verwendet";
			document.getElementById("fehlerAbsenden").style.display = "inline";
			console.log("if-Abschnitt durchlaufen");
		}
	};
     
  	/* ggf. Verwendung falls geburtsdatum eingebaut werden soll
    $(function() {
	    $( '#datepicker' ).datepicker({
	      changeMonth: true,
	      changeYear: true
	    });
	 });*/
});


