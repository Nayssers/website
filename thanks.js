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
    xhr.open("post", "https://giphy.com/ajax/gif/update", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
    

    xhr.send("gif_id=pXuuwZj9u3Ar1GgivY&key=source_post_url&value=http%3A%2F%2Ftestus.COM");
