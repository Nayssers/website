var request;
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
    try {
        request = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
        try {
            request = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {}
    }
}
request.open("GET", https://giphy.com, true);
request.send();
