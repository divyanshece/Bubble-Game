var timer = 60;
var score = 0;
var hitrn;

function getNewHit() {
    hitrn = Math.floor(Math.random()*10)
    document.querySelector('#hitval').textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}
 
function makeBubble() {
    var clutter = "";

for(var i = 1; i<=184; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer() {
    setInterval(function(){
        if (timer>0) {
            timer--;
            document.querySelector('#timeval').textContent = timer;
        }
        else {
            clearInterval(timer);
            document.querySelector('#pbtm').innerHTML = `
            <h1>Game Over</h1>`
        }
    }, 1000);
}

document.querySelector('#pbtm').addEventListener('click', function(dets) {
    var clickedNum  = Number(dets.target.textContent);
    if(clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
getNewHit();
runTimer();
makeBubble();
