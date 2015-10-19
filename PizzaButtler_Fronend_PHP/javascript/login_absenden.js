    
$(function() {
	$('#openx').click(
	        function() {
	        	console.log("1");
	            $('#overlay').show('slow', 
	                function() {
	                    $('#containerx').fadeIn('slow');
	                    $('#changeText').html('Dynamischer Inhalt');
	                }
	            );
	        }
	    );
	$('#closex').click(
	            function() {
	                $('#containerx').hide('slow', 
	                     function() {
	                          $('#overlay').fadeOut();          
	                     }    
	                );
	            }
	        );

});