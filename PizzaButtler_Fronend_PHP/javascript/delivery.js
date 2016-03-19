$(document).ready(function(){
	var userID = Cookies.get('userID');
    if(typeof userID != 'undefined') {
        document.getElementById("eingeloggt").style.display = "none";
    } else {
         document.getElementById("eingeloggt").style.display = "";
    }
});