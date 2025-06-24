function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 70; i++) {
    var rn = Math.floor(Math.random() * 10); 
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){1
 var timerint = setInterval(function(){
    if(timer>0){
      timer--;
document.querySelector("#Timerval").textContent= timer;
    }
    else{
    
 
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML= "";
    }

  },1000);
}
function getNewhit(){
  var rn=  Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = rn ;
}
function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;

}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
 var clickednumber = console.log(Number( details.target.textContent));
 if(clickednumber === hitrn){
  increaseScore();
  makeBubble();
  getNewhit();
 }
})

var timer=60;
 var hitrn = 0 ;
 var score = 0;
runTimer();
makeBubble();
hitval();
increaseScore();