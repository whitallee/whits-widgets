<<<<<<< HEAD
let [ms, s, m, h] = [0, 0, 0, 0];
let swTime = document.querySelector(".clock-time");
let counter = null;
let stopped = null;

document.getElementById("sw-toggle").onclick = function(){
    document.getElementById("sw-toggle").classList.toggle("sw-stop");
    if(stopped) {
        counter = setInterval(playTimer, 10);
        document.getElementById("sw-toggle").innerHTML = "Stop";
        stopped = false;
    }
    else if(counter!==null){
        clearInterval(counter);
        document.getElementById("sw-toggle").innerHTML = "Start";
        stopped = true;
    }
    else {
        counter = setInterval(playTimer, 10);
        document.getElementById("sw-toggle").innerHTML = "Stop";
        stopped = false;
    }
};

function playTimer(){
    document.getElementById("sw-hours").innerHTML = h < 10 ? "0" + h : h;
    document.getElementById("sw-minutes").innerHTML = m < 10 ? "0" + m : m;
    document.getElementById("sw-seconds").innerHTML = s < 10 ? "0" + s : s;
    document.getElementById("sw-milliseconds").innerHTML = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    ms+=10;
    if(ms == 1000){
        ms = 0;
        s++;
        if(s == 60){
            s = 0;
            m++;
            if(m == 60){
                m = 0;
                h++;
            }
        }
    }
}

document.getElementById("sw-reset").onclick = function(){
    [ms, s, m, h] = [0, 0, 0, 0];
    document.getElementById("sw-hours").innerHTML = "00";
    document.getElementById("sw-minutes").innerHTML = "00";
    document.getElementById("sw-seconds").innerHTML = "00";
    document.getElementById("sw-milliseconds").innerHTML = "000";
=======
let [ms, s, m, h] = [0, 0, 0, 0];
let swTime = document.querySelector(".clock-time");
let counter = null;
let stopped = null;

document.getElementById("sw-toggle").onclick = function(){
    document.getElementById("sw-toggle").classList.toggle("sw-stop");
    if(stopped) {
        counter = setInterval(playTimer, 10);
        document.getElementById("sw-toggle").innerHTML = "Stop";
        stopped = false;
    }
    else if(counter!==null){
        clearInterval(counter);
        document.getElementById("sw-toggle").innerHTML = "Start";
        stopped = true;
    }
    else {
        counter = setInterval(playTimer, 10);
        document.getElementById("sw-toggle").innerHTML = "Stop";
        stopped = false;
    }
};

function playTimer(){
    document.getElementById("sw-hours").innerHTML = h < 10 ? "0" + h : h;
    document.getElementById("sw-minutes").innerHTML = m < 10 ? "0" + m : m;
    document.getElementById("sw-seconds").innerHTML = s < 10 ? "0" + s : s;
    document.getElementById("sw-milliseconds").innerHTML = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    ms+=10;
    if(ms == 1000){
        ms = 0;
        s++;
        if(s == 60){
            s = 0;
            m++;
            if(m == 60){
                m = 0;
                h++;
            }
        }
    }
}

document.getElementById("sw-reset").onclick = function(){
    [ms, s, m, h] = [0, 0, 0, 0];
    document.getElementById("sw-hours").innerHTML = "00";
    document.getElementById("sw-minutes").innerHTML = "00";
    document.getElementById("sw-seconds").innerHTML = "00";
    document.getElementById("sw-milliseconds").innerHTML = "000";
>>>>>>> 064d5ec30a537a1da428d256f6d8ffd9d56f3700
}