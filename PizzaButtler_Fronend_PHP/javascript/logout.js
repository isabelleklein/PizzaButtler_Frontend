var rest;
$(document).ready(function () {
    $('#logout').click(function (e) {
        e.preventDefault();
		
		var userID = Cookies.get("userID");
		
        if(typeof userID != 'undefined') {
			rest = new RestInterface();
			rest.setParameters("POST", "user/logout", userID, function (data) {
				Cookies.remove("userID");
				location.reload();
				//window.location.href = "./";
			});
			
            rest.fakeSend("http://localhost/mock/logout.json");
        }

    });
});