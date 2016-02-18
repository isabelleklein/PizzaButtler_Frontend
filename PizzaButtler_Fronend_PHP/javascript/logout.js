$(document).ready(function () {
    $('#logout').click(function (e) {
        e.preventDefault();
		
		var userID = Cookies.get("userID");
		
        if(typeof userID != 'undefined') {
			var rest = RestInterface;
			rest.setParameters("POST", "user/logout", userID, function (data) {
				Cookies.remove("userID");
				window.location.href = "./";
			});
			
            rest.fakeSend("http://localhost/mock/logout.json");
        }

    });
});