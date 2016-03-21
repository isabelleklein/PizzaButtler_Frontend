$(document).ready(function(){
	var userID = Cookies.get('userID');
    if(typeof userID != 'undefined') {
        document.getElementById("eingeloggt").style.display = "none";
    } else {
         document.getElementById("eingeloggt").style.display = "";
    }
});

$(function() {
    $("#delivery_next").click(function(){
			window.location.href = "./warenkorb.php";
		});
    
	$("input[type='radio'][name='lieferart']").change(
	        function() {
                if($("input[type='radio'][name='lieferart']:checked").val() == "abholung") {
                    document.getElementById("delivery_data").style.display = "none";
                    document.getElementById("eingeloggt").style.display = "none";
                } else {
                    document.getElementById("delivery_data").style.display = "";
                    document.getElementById("eingeloggt").style.display = "";
                }
	        }
	    );     
});

