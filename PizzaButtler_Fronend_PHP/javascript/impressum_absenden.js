/**
 * @author Isabelle Klein
 * @Version 2.1
 */


/** Übermittlung der eingegebenen Daten an das Backend **/

$(document).ready(function() {
	var $impressum = $('#impressum');
	/** Aktionsinformationen für den Absenden-Button **/
	

	
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
     

});



