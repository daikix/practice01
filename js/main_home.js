let history = document.getElementById("history");
let nowjob = document.getElementById("now-job");
let hobby = document.getElementById("hobby");
let back = document.getElementById("hobby_back");
let newicon = document.getElementById("newicon");
let body = document.body;
history.addEventListener('click',popup,false);
nowjob.addEventListener('click',popup,false);
hobby.addEventListener('click',function(){
  body.classList.add("open");
},false);
back.addEventListener('click',function(){
  body.classList.remove("open");
},false);
window.addEventListener("scroll",showElement);

setInterval(function(){
  newicon.classList.toggle("blink");
},200);

function showElement(){
  if(body.classList.contains("open")){
    let element = document.getElementsByClassName("js-fadein");
    let showTiming = window.innerHeight > 768 ? 380:40;
    let scrollY = window.pageYOffset;
    let windowH = window.innerHeight;

    for(let i=0;i<element.length;i++){
      let elemClientRect = element[i].getBoundingClientRect();
      let elemY = scrollY + elemClientRect.top;
      if(scrollY + windowH - showTiming > elemY){
        element[i].classList.add("is-show");
      }
    }
  }
}

function popup(){
  alert("開発中...")
}
