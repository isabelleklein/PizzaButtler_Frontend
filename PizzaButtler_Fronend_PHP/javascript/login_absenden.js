    
$(function() {
	var $registrieren = $('#login');   
	$('#absenden').click(function(e){
		console.log("Login Button wurde geklickt");
		if(checkForm()==true)
		{
		e.preventDefault(); /** cancel form submit **/
		var jsObj = 
	})

$('#open').click(
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