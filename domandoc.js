var parsed = psl.parse('developers.giphy.com');
console.log(parsed.domain);
var parsed = psl.parse(location.hostname);
console.log(parsed.domain);
var url = "https://developers.giphy.com/dashboard";
url = url.split("/")[2]; // Get the hostname
var parsed = psl.parse(url); // Parse the domain
document.getElementById("output").textContent = parsed.domain;
