var rest;
$(document).ready(function () {
    $('#logout').click(function (e) {
        e.preventDefault();
		
		var userID = Cookies.get("userID");
		
        if(typeof userID != 'undefined') {
			rest = new RestInterface();
			rest.setParameters("POST", "user/logout", userID, function (data) {
				Cookies.remove("userID");
				var aktURL = window.location.href.toString();
				aktURL = aktURL.toString().slice(-8);
				console.log("" + aktURL);
				if(aktURL.toString().localeCompare("user.php") != 0)
				{
					location.reload();
					//window.location.href= "./index.php";
				}
				else
					window.location.href= "./index.php";
				//window.location.href = "./";
			});
			
            rest.fakeSend("./mock/logout.json");
        }

    });
});