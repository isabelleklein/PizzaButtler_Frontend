$(document).ready(function() {
	$('#logout').click(function(e) {
		e.preventDefault();
        $.ajax({
            type:"POST",
            url:"../logout.php",
            data:'',
            dataType:'html',
            context:document.body,
            global:false,
            async:false,
            success:function(data){
                console.log(data);
                localStorage.removeItem("logged");
            }
        });
		 $('#overlay').show('slow', 
	                function() {
	                    $('#containerLogOut').fadeIn('fast');
	                }
	            );
		window.setTimeout(weiterleiten,3000);
		
	});
	function weiterleiten()
	{
		window.location.href = "./index.html"
	};
});