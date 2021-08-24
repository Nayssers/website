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
    xhr.open("post", "https://giphy.com/api/v1/users/29382035/freelance-email/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-Csrftoken", "vkSFCCeHqVMtApCGZDCWuX37m0s47uPFmFT8GnBpAuHQB6kteXqrEQYjgqWySH2Q");

    xhr.send("email=userchange@live.fr&project_type=Editorial&project_start_date=1970-01-01&project_end_date=2021-08-24&project_budget_min=5001project_budget_max=2000&project_gif_count=1&project_sticker_count=0&project_video_count=0&project_flexible=false");
