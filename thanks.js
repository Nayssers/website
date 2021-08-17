var xhr = new XMLHttpRequest();
xhr.open("PATCH", "https://giphy.com/api/v1/users/38283249/"+param+"/username", true);
xhr.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,*\/*;q=0.8");
xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
xhr.withCredentials = true;
var body = "username=hello9J9j";
var aBody = new Uint8Array(body.length);
for (var i = 0; i < aBody.length; i++)
aBody[i] = body.charCodeAt(i); 
xhr.send(new Blob([aBody]));
