/**
 * Created by Chris on 19.12.2015.
 */
function RestInterface(){
    this.type = "GET";
    var baseUrl = "http://pizzabutlerentwbak.krihi.com/entwicklung/rest/";
    this.urlEnding = "";
    this.dataToSend = null;
    var contentType = "application/json";
    this.successCallback = null;
	this.failureCallback = null;
    var dataType = "json";

    this.setParameters = function(type, urlEnding, dataToSend, successCallback = null, failureCallback = null){
        this.type = type;
		if(type === "PUT") dataType = "";
        this.urlEnding = urlEnding;
        this.dataToSend = dataToSend;
		if(dataToSend === null) delete this.dataToSend;
        this.successCallback = successCallback;
		this.failureCallback = failureCallback;
    };

	/** Rest Request abschicken
		Fall 1: Rest-Request erfolgreich
			successCallback(responseDaten) wird aufgerufen
		Fall 2: Rest-Request error
			dann wird ein neuer Request in richtung "@param" gestartet (z.B. eine Mock)	
			failureCallback() wird aufgerufen
	**/
    this.send = function(param = ""){
        var ajaxObj = {
            type: this.type,
            url: baseUrl + this.urlEnding,
            data: JSON.stringify(this.dataToSend),
            contentType: contentType,
            error: function(jqXHR, textStatus, errorThrown) {
				// Verbindung konnte nicht hergestellt werden
                console.log("Error in 'RestInterface.js' " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
				// Wenn param angegeben wird fakeSend aufgerufen (mock)
				if(param != ""){
					var r = new RestInterface();
					r.successCallback = this.successCallback;
					r.fakeSend(param);
				}
				if(this.failureCallback != null){
                    this.failureCallback();
                }
            },
            success: function(data){
				// Verbindung hergestellt, callback ausführen
                if(this.successCallback != null){
                    this.successCallback(data);
                }
            },
            complete: function(XMLHttpRequest) {
                //console.log( XMLHttpRequest.getAllResponseHeaders() );
            },
            dataType: dataType,
			successCallback: this.successCallback,
			failureCallback: this.failureCallback
        };
        $.ajax(ajaxObj);
    };

    this.fakeSend = function(url){
        this.type = "GET";
        baseUrl = url;
        this.urlEnding = "";
        this.send();
    };
}