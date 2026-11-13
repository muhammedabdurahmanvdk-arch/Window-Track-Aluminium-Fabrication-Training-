var WA="919037284173",views=["home","about","course","gallery","contact"];
function enc(t){return "https://wa.me/"+WA+"?text="+encodeURIComponent(t)}
document.getElementById("wa1").href=enc("Hello, I would like to enquire about the Aluminium Fabrication Technician Training.");
document.getElementById("wa2").href=enc("Hello, I would like to enquire about your course.");
function route(){var h=(location.hash||"#home").slice(1);if(views.indexOf(h)<0)h="home";
views.forEach(function(v){document.getElementById("v-"+v).classList.toggle("on",v===h)});
document.querySelectorAll("#nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+h)});window.scrollTo(0,0)}
window.addEventListener("hashchange",route);route();
document.getElementById("send").onclick=function(){
var n=document.getElementById("n").value.trim(),p=document.getElementById("p").value.trim(),e=document.getElementById("err");
if(!n||!p){e.textContent="Please enter your name and phone number.";return}e.textContent="";
var t="New admission enquiry\nName: "+n+"\nPhone: "+p+"\nPlace: "+document.getElementById("pl").value+"\nQualification: "+document.getElementById("q").value+"\nMessage: "+document.getElementById("m").value;
window.open(enc(t),"_blank")};