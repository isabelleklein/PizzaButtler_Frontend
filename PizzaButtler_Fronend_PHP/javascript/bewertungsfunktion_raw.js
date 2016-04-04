function bewertungsFunktion(){
    // Wenn man die Maus auf einem Stern hat, diesen und alle Sterne davor erhellen
    $(".stern").mouseover(function(){
        // Nummer des aktuellen Sterns herausfinden (in der id gespeichert)
        var nummer = parseInt($(this).attr('id'));

        // Alle Sterne bis zum aktuellen hell machen
        for(var i = nummer; i > 0; i--){
            $("#"+ i).attr('src', ($("#contextPath").html() + "/resources/Media/hellerStern.png"));
        }
    })

    // Maus vom Stern herunter genommen
    .mouseout(function(){
        // Alle Sterne wieder verdunkeln
        for(var i = 1; i < $(".stern").length + 1; i++){
            $("#" + i).attr('src', ($("#contextPath").html() + "/resources/Media/dunklerStern.png"));
        }
    })

    // Angeklickt -> Bewertung abgeben
    .click(function(){
        // Nummer = Bewertung des aktuellen Sterns herausfinden (in der id gespeichert)
        var bewertung = parseInt($(this).attr('id'));
        var serienId  = parseInt($("#serienId").html());

        $.post($("#contextPath").html() + "/bewerteSerie",
                {bewertung: bewertung, serienId: serienId},
                function(result){
                    // Bewertung erfolgreich: Gegebene Bewertung ausgeben und Bewertungsfunktion "deaktivieren"
                    //                                                    (indem die Bilder überschrieben werden)
                    if(result[0] == true){
                        $("#zuBewerten").html('<p>Bewertung erfolgreich</p><p><img src="'+ $("#contextPath").html() + '/resources/Media/' + bewertung +'.0Sterne.png" /> </p>');
                    }
                    else{
                        $("#zuBewerten").html("<p>Bewertung konnte leider nicht durchgeführt werden</p>");
                    }
                }
        );
    });
}