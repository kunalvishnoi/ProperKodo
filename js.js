function load(){
var username = document.getElementById("username").value;
var url = "https://api.github.com/users/" + username;
var request = new XMLHttpRequest();

request.onreadystatechange = function(){
if(request.readyState==4)
{
var data = JSON.parse(request.responseText);
document.getElementById("dis").style.display="block";
document.getElementById("name").innerHTML = data.name;
document.getElementById("user").innerHTML = data.login;
document.getElementById("name2").innerHTML = data.name;
document.getElementById("location").innerHTML = data.location;
document.getElementById("loc").innerHTML = data.location;
document.getElementById("bio").innerHTML = data.bio;
document.getElementById("image").src = data.avatar_url;
document.getElementById("image").style.width="50%";
document.getElementById("image").style.height="50%";
}
}
request.open('GET', url, true);
request.send();
}
document.getElementById("print").addEventListener("click", one);
function one() {
  print();
    }
