$(document).ready(function(){
	var userID = Cookies.get('userID');
	if(typeof userID != 'undefined') {
		$('.head_right').html("<button class='header_button' id='logout'>Logout</button><br>\
								<a href='user.php'><button class='header_button'>Meine Daten</button></a>");
	}
});