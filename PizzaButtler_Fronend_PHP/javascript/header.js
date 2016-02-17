$(document).ready(function(){
	var userID = Cookies.get('userID');
	if(userID != null) {
		$('.head_right').html("<button class='header_button' id='logout'>Logout</button>");
	}
});