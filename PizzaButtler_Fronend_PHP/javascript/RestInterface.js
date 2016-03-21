/**
 * Created by Chris on 19.12.2015.
 */
function RestInterface(){
    this.type = "GET";
    var baseUrl = "http://pizzaButlerBackend.krihi.com/";
    this.urlEnding = "";
    this.dataToSend = null;
    var contentType = "application/json";
    this.successCallback = null;
    var dataType = "json";

    this.setParameters = function(type, urlEnding, dataToSend, successCallback){
        this.type = type;
        this.urlEnding = urlEnding;
        this.dataToSend = dataToSend;
        this.successCallback = successCallback;
    };

    this.send = function(param){
        var ajaxObj = {
            type: this.type,
            url: baseUrl + this.urlEnding,
            data: JSON.stringify(this.dataToSend),
            contentType: contentType,
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error in 'RestInterface.js' " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
				var r = new RestInterface();
				r.successCallback = this.successCallback;
				r.fakeSend(param);
            },
            success: function(data){
                if(this.successCallback != null){
                    this.successCallback(data)
                }
                else {console.log("Callback ist null")}
            },
            complete: function(XMLHttpRequest) {
                console.log( XMLHttpRequest.getAllResponseHeaders() );
            },
            dataType: dataType,
			successCallback: this.successCallback
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