var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
                console.log(xhr.responseText);
            } else {
                console.log("Request was unsuccessful: " + xhr.status);
            }
        }
    };
    xhr.withCredentials = true;
    xhr.open("put", "https://giphy.com/api/v1/users/38283249/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send("username=Thanksaaalot1&email=2checkout@live.com&display_name=testmeplsSokey");
