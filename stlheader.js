var http = new XMLHttpRequest();
var xhr = new XMLHttpRequest();
var url = 'https://devportal-new.giphy.com/dashboard/';
var params = 'description=hellomoto&name=hihihi&&name=ok&terms=true';
http.open('POST', url, true);
xhr.withCredentials = true;

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);
