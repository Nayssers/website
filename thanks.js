var xhr = new XMLHttpRequest();
var params = 'email='+postemail;
xhr.open('POST', 'http://giphy.com/api/v1/users/38320143/ ', true);

//Send the proper header information along with the request
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhr.onload = function() {//Call a function when the state changes.
    if(xhr.status == 200) {
        alert(this.responseText);
    }
}
xhr.send(params);
