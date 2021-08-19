var http = new XMLHttpRequest();
var xhr = new XMLHttpRequest();
var url = 'https://giphy.com/api/v1/users/38283249/';
var params = 'username=hello9089&display_name=&email=userchange@live.fr';
http.open('PATCH', url, true);
xhr.withCredentials = true;

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);
