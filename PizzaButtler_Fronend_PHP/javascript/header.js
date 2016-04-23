$(document).ready(function(){
	if(typeof Cookies.get('userID') != 'undefined') {
		$('.head_right_button_ersetzen').html("<button class='header_button' id='logout'>Logout</button>\
								<a href='user.php'><button id='meine_Daten' class='header_button'>Meine Daten</button></a>");
	}
	else if(typeof Cookies.get('restaurantID') != 'undefined') {
		$('.head_right_button_ersetzen').html("<button class='header_button' id='logout'>Logout</button>\
								<a href='user_pizzeria.php'><button id='meine_Daten' class='header_button'>Meine Daten</button></a>");
	}
});