$(document).ready(function(){
	var userID = Cookies.get('userID');
	if(typeof userID != 'undefined') {
		$('.head_right_buttons').html("<button class='header_button' id='logout'>Logout</button>\
								<a href='user.php'><button id='meine_Daten' class='header_button'>Meine Daten</button></a>");
	}
});