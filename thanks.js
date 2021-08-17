var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://giphy.com/search/?q=nohey', true);
xhr.onload = function () {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
