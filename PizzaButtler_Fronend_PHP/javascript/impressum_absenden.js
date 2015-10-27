/**
 * @author Isabelle Klein
 * @Version 2.1
 */


/** Übermittlung der eingegebenen Daten an das Backend **/

$(document).ready(function() {
	var $impressum = $('#impressum');
	/** Aktionsinformationen für den Absenden-Button **/
	

	
    $('#open_impressum').click(
        function() {
            $('#overlay').show('slow', 
                function() {
                    $('#container_impressum').fadeIn('slow');
                    $('#changeText').html('Dynamischer Inhalt');
                }
            );
        }
    ); 
    
     $('.close_impressum').click(
        function() {
            $('#container_impressum').hide('slow', 
                 function() {
                      $('#overlay').fadeOut();          
                 }    
            );
        }
    );
     

});



