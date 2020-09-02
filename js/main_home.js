let history = document.getElementById("history");
let nowjob = document.getElementById("now-job");
let hobby = document.getElementById("hobby");
let back = document.getElementById("hobby_back");
let newicon = document.getElementById("newicon");
let body = document.body;

// 職務履歴クリック時イベント
history.addEventListener('click',function(){
  alert(window.pageYOffset)
},false);
// 現職クリック時イベント
nowjob.addEventListener('click',popup,false);
// 趣味クリック時イベント
hobby.addEventListener('click',function(){
  body.classList.add("open");
},false);
// 趣味欄背景クリック時イベント
back.addEventListener('click',function(){
  let element = document.getElementsByClassName("js-fadein");
  for(let i=0;i<element.length;i++){
      element[i].classList.remove("is-show");
  }
  body.classList.remove("open");
},false);
// スクロール時イベント
window.addEventListener("scroll",showElement);
// new icon点滅メソッド
setInterval(function(){
  newicon.classList.toggle("blink");
},200);

// スクロールに合わせて画像を表示
function showElement(){
  if(body.classList.contains("open")){
    let element = document.getElementsByClassName("js-fadein");
    let showTiming = window.innerHeight > 768 ? 350 : 40;

    for(let i=0;i<element.length;i++){
      let elemClientRect = element[i].getBoundingClientRect();
      if(elemClientRect.top < showTiming){
        element[i].classList.add("is-show");
      }
    }
  }
}

function popup(){
  alert("開発中...")
}
