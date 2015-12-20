/**
 * Created by Chris on 19.12.2015.
 */
var RestInterface = {
    type: "GET",
    baseUrl: "http://pizzabutlerentwbak.krihi.com/entwicklung/rest/",
    urlEnding: "",
    dataToSend: null,
    contentType: "application/json",
    successCallback: null,
    dataType: "json",

    setParameters: function(type, urlEnding, dataToSend, successCallback){
        this.type = type;
        this.urlEnding = urlEnding;
        this.dataToSend = dataToSend;
        this.successCallback = successCallback;
    },

    send: function(){
        var ajaxObj = {
            type: RestInterface.type,
            url: RestInterface.baseUrl + RestInterface.urlEnding,
            data: JSON.stringify(RestInterface.dataToSend),
            contentType: RestInterface.contentType,
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error in 'RestInterface.js' " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
            },
            success: function(data){
                if(RestInterface.successCallback != null){
                    RestInterface.successCallback(data)
                }
                else {console.log("Callback ist null")}
            },
            complete: function(XMLHttpRequest) {
                console.log( XMLHttpRequest.getAllResponseHeaders() );
            },
            dataType: RestInterface.dataType
        };

        $.ajax(ajaxObj);
    },

    fakeSend: function(url){
        this.type = "GET";
        this.baseUrl = url;
        this.urlEnding = "";
        this.send();
    }
}