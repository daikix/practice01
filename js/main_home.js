let history = document.getElementById("history");
let nowjob = document.getElementById("now-job");
let hobby = document.getElementById("hobby");
let back = document.getElementById("hobby_back");
let body = document.body;
history.addEventListener('click',popup,false);
nowjob.addEventListener('click',popup,false);
hobby.addEventListener('click',function(){
  body.classList.toggle("open");
},false);
back.addEventListener('click',function(){
  body.classList.remove("open");
},false);

function popup(){
  alert("開発中...")
}
