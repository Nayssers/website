var url = "https://developers.giphy.com/dashboard/";
url = url.split("/")[2]; // Get the hostname
var parsed = psl.parse(url); // Parse the domain
document.getElementById("output").textContent = parsed.domain;
