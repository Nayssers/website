var http = new XMLHttpRequest();
var url = 'https://www.giphy.com/ajax/gif/update';
var params = 'gif_id=dk8319804f0G5hbENe&key=delete_gif&value=true';
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);
