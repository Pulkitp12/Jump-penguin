    let score= 0;
    let pumpaudio = new Audio("collect.mp3");
    let jumpaudio = new Audio("jump.mp3");
    document.getElementById("gameover").style.display="block";
    let audio = new Audio("super-mario-bros-4293.mp3");
    audio.play();
    audio.loop=true;
    document.onkeydown = function(e){
    if(e.key=="ArrowUp"){
        
        jumpaudio.play();
        document.getElementById('play').classList.add("upper")
        score=score+1;
        document.querySelector("#scr").textContent="Your Score is " +score;  
    }
    setTimeout(()=>{
        document.getElementById('play').classList.remove("upper")
    },1000)
    if(e.key=="ArrowRight"){
        let a=document.getElementById('play');
        dx = parseInt(window.getComputedStyle(a,null).getPropertyValue("left"));
        if(dx>1400)
        {}
        else{
        a.style.left=dx+110+"px";}
    }
    if(e.key=="ArrowLeft"){
        let a=document.getElementById('play');
        dx = parseInt(window.getComputedStyle(a,null).getPropertyValue("left"));
        if(dx<30)
        {}
        else{
        a.style.left=dx-110+"px";}
    }
}
const rlod=()=>{
    score = 0;
    document.querySelector("#scr").textContent="Your Score is 0";
    document.getElementById("enemies").classList.add("move");
    document.querySelector("#gameover").style.display="none";
    document.getElementById("play").classList.remove("dead");
    let a = document.getElementById('enemies');
    dx = parseInt(window.getComputedStyle(a,null).getPropertyValue("animation-duration"));
    document.getElementById('enemies').style.animationDuration = 5+"s"
    audio.play();
}
// setInterval(()=>{
//     let a = document.getElementById('enemies');
//     dx = parseFloat(window.getComputedStyle(a,null).getPropertyValue("animation-duration"));
//     let m = dx-0.1;
//     a.style.animationDuration=m+"s";
// },4000);

setInterval(()=>{
    let a = document.getElementById("play");
    let b = document.getElementById("enemies");
    dx = parseInt(window.getComputedStyle(a,null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(a,null).getPropertyValue("bottom"));
    ox = parseInt(window.getComputedStyle(b,null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(b,null).getPropertyValue("bottom"));
    if (Math.abs(dx-ox)<70 && Math.abs(dy-oy)<40){
        document.getElementById("enemies").classList.remove("move");
        document.querySelector("#gameover").style.display="block"; 
        audio.pause();
        a.classList.add("dead");
        pumpaudio.play();
        pumpaudio.loop=false;
    }
},100)