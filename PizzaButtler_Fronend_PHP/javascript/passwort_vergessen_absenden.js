/**
 * @author Dominik Terlau
 * @Version 2.1
 */
$("head").append('<script type="text/javascript" src="../javascript/RestInterface.js"></script>');
var rest = RestInterface;

/** Übermittlung der eingegebenen Daten an das Backend **/
$(document).ready(function() {
	var $pwvergessen = $('#pwvergessen');
	/** Aktionsinformationen für den Absenden-Button **/
	
	$('#absenden_pwvergessen').click(function(e) {
		console.log("Abschicken Button wurde geklickt");
		if(checkForm()==true)
		{
			e.preventDefault(); /** cancel form submit **/
			var jsObj = $pwvergessen.serializeObject();

			rest.setParameters("POST", "passwortvergessen", jsObj, success);
			rest.fakeSend("http://localhost/mock/pwVergessen.json");
		}
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

	var success = function(data) { 														/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
	console.log(data);
		if(data ==0) {
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
    
    // wird das hier benötigt?
  	/*$(function() {
	    $( '#datepicker' ).datepicker({
	      changeMonth: true,
	      changeYear: true
	    });
	 });*/
});



