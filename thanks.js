var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://gipghy.com/search/?q=HEY ', true);
xhr.onload = function () {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
