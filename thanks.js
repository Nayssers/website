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
    xhr.open("patch", "https://devportal-new.giphy.com/dashboard/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send("description=hellomoto&name=hihihi&&name=ok&terms=true&csrfmiddlewaretoken=2m6JbbMyheMZxntLv1Z9IKcEbbRtRcan0ms2rob3vkY8x8vs83Xb3DrpHLQKRLHP&filename=2m6JbbMyheMZxntLv1Z9IKcEbbRtRcan0ms2rob3vkY8x8vs83Xb3DrpHLQKRLHP");
