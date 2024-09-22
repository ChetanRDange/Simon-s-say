let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"]
let start = false;
let level = 0;
let h2 = document.querySelector("h2")
let higest=[];

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game is started")
        start = true;
        levelup();
    }

})

document.addEventListener("touchstart", function () {
    if (start == false) {
        console.log("game is started")
        start = true;
        levelup();
    }

})

function levelup() {
    userseq=[];
    level++;
    if(higest.length<=level)
    {
        higest.push(level);
    }
    h2.innerText = `Level ${level}`
    let randindx = Math.floor(Math.random() * 3)
    let randcolor = btns[randindx];
    let randbtn = document.querySelector(`.${randcolor}`)
    //random btn choose
    // console.log(randindx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor)
    console.log(gameseq);
    gameflash(randbtn)
}

function check(index) {
    if (userseq[index] === gameseq[index]) {
        if (userseq.length == gameseq.length) {
           setTimeout( levelup(),1000);
        }

    }
    else {
        h2.innerHTML = `Game Over! <b>Your Score was :${level} </b> <br> Press any key to start. <h3>Highest score is ${higest.length}</h3>`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"

        },150)
        reset();
    }
}


function gameflash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


function btnpress() {
    let btn = this;
    userflash(btn)
    // console.log(this)
    usercolor = btn.getAttribute("id");
    // console.log(usercolor)
    userseq.push(usercolor);

    check(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress)
}

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}
