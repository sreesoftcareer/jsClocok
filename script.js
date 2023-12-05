let  hrs = document.getElementById("hrs");
let  min = document.getElementById("mins");
let  sec = document.getElementById("secs");


setInterval(() =>{
let currentTime = new Date();
  
document.getElementById('hrs').innerHTML= currentTime.getHours();
document.getElementById('mins').innerHTML= currentTime.getMinutes();
document.getElementById('secs').innerHTML= currentTime.getSeconds();

},1000)