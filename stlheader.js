var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://giphy.com/', true);
xhr.withCredentials = true;
xhr.send(null);
