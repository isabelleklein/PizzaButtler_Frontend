$("head").append('<script type="text/javascript" src="../javascript/RestInterface.js"></script>');
var rest = RestInterface;
var userID = localStorage.getItem("userID");

if(userID != null) {
    rest.setParameters("POST", "user/logout", userID, function (data) {
        localStorage.removeItem("userID");
    });
}

$(document).ready(function () {
    $('#logout').click(function (e) {
        e.preventDefault();

        if(userID != null) {
            rest.fakeSend("http://localhost/mock/logout.json");


            $('#overlay').show('slow',
                function () {
                    $('#containerLogOut').fadeIn('fast');
                }
            );
            window.setTimeout(weiterleiten, 3000);
        }

    });

    function weiterleiten() {
        window.location.href = "./index.html"
    };
});