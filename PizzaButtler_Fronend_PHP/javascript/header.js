$(document).ready(function(){
	var userID = localStorage.getItem('userID');
	console.log(userID);
	if(userID != null) {
		$('.head_right').html("<button class='header_button' id='logout'>Logout</button>");
	}
});