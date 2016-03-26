var rest;
$(document).ready(function () {
    $('#logout').click(function (e) {
        e.preventDefault();
		
		var userID = Cookies.get("userID");
		var restaurantID = Cookies.get("restaurantID");
		
        if(typeof userID != 'undefined') {
			rest = new RestInterface();
			rest.setParameters("POST", "user/logout", userID, function (data) {
				Cookies.remove("userID");
				var aktURL = window.location.href.toString();
				aktURL = aktURL.toString().slice(-8);
				console.log("" + aktURL);
				if(aktURL.toString().localeCompare("user.php") != 0){
					location.reload();
				}
				else{
					window.location.href= "./index.php";
				}
			});
			
            rest.fakeSend("./mock/logout.json");
        }
        
        if(typeof restaurantID != 'undefined') {
			rest = new RestInterface();
			rest.setParameters("POST", "user_restaurant/logout", userID, function (data) {
				Cookies.remove("restaurantID");
				var aktURL = window.location.href.toString();
				aktURL = aktURL.toString().slice(-17);
				console.log("" + aktURL);
				if(aktURL.toString().localeCompare("user_pizzeria.php") != 0){
					location.reload();
				}
				else{
					window.location.href= "./index.php";
				}
			});
			
            rest.fakeSend("./mock/logout.json");
        }

    });
});