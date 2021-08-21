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
    xhr.open("post", "https://developers.giphy.com/dashboard/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send("csrfmiddlewaretoken=SWlKcqCNCkXNlLht0N1lSLGiUXUFTknxAJFCpYu9P8ewM30oAiPZovBre2jBrE58&name=gg&description=dddoo&sdk=false&terms=true");
