    
$(function() {
	$('#openx').click(
	        function() {
	        	console.log("1");
	            $('#overlay').show('slow', 
	                function() {
	                    $('#container').fadeIn('slow');
	                    $('#changeText').html('Dynamischer Inhalt');
	                }
	            );
	        }
	    );
	$('#closex').click(
	            function() {
	                $('#container').hide('slow', 
	                     function() {
	                          $('#overlay').fadeOut();          
	                     }    
	                );
	            }
	        );

});