let history = document.getElementById("history");
let nowjob = document.getElementById("now-job");
let hobby = document.getElementById("hobby");
history.addEventListener('click',popup,false);
nowjob.addEventListener('click',popup,false);
hobby.addEventListener('click',popup,false);

function popup(){
  alert("開発中...")
}
