

let elem = document.getElementById("party_btn");
let flg = true;
let mouseleaveflg = false;
elem.addEventListener('mouseover',movement,false)
elem.addEventListener('mouseleave',function(event){
  mouseleaveflg = true;
},false)

function movement(){
  let tid = setInterval(function(){
    if(flg){
      let width = elem.clientWidth;
      let height = elem.clientHeight;
      let randomcolor = "#";
      for(let i=0;i<6;i++){
        randomcolor += (16*Math.random()|0).toString(16);
      }
      if(width > 265){
        flg = false;
      }
      width += -58;
      height += -38;
      elem.style.width = String(width) + "px";
      elem.style.height = String(height) + "px";
      elem.style.color = randomcolor;
      document.body.style.backgroundColor = randomcolor;
    }else{
      let width = elem.clientWidth;
      let height = elem.clientHeight;
      let randomcolor = "#";
      for(let i=0;i<6;i++){
        randomcolor += (16*Math.random()|0).toString(16);
      }
      if(width <= 260){
        flg = true;
      }
      width += -62;
      height += -42;
      elem.style.width = String(width) + "px";
      elem.style.height = String(height) + "px";
      elem.style.color = randomcolor;
      document.body.style.backgroundColor = randomcolor;
    }

    if(mouseleaveflg){
      clearInterval(tid);
      mouseleaveflg = false;
      elem.style.width = "200px";
      elem.style.height = "17px";
      elem.style.color = "#000"
      document.body.style.backgroundColor = "#eeeeee";
    }
  },10)
}
