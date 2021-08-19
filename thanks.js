var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://giphy.com/upload/', true);
xhr.withCredentials = true;
xhr.send(null);
