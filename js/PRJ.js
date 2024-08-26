const RESTART = document.querySelector(".restart");
const TEXTAREA = document.querySelector(".textarea");
const TIMER = document.querySelector(".timer");
const Template = document.querySelector("#Template");
const orgText = Template.innerHTML;


//timer
var timer = [0,0,0];
var interval;
var timingruning =0 ; //first type 


function runTimer(){
    let complateTime =leadZero(timer[0])+"  :  "+leadZero(timer[1]) +"  .  "+leadZero(timer[2]); 
    TIMER.innerHTML=complateTime;
    timer[2]++;
    if(timer[2] == 100){
        timer[1]++;
        timer[2]=0;
    }
    if(timer[1] == 60){
        timer[0]++;
        timer[1]=0;
    }   
}
//show 00:00:00
function leadZero(time){
    if(time<=9){
        time="0"+time;
    }
    return time;
}

//start with first keyPressing
function start(){//start
    let textEnteredLenght=TEXTAREA.value.length;
    if(textEnteredLenght==0 & timingruning==0 ){//conditional to start
        interval = setInterval(runTimer,10);
        RESTART.innerHTML = "restart";
        timingruning=1;
    }
}

//check
function speel_check(){
    let textEntered=TEXTAREA.value;
    let originTextMatch=orgText.substring(0,textEntered.length);

    if(textEntered==orgText){
        Template.style.color="green";
        clearInterval(interval);
    }
    else{
        if(textEntered == originTextMatch){
            Template.style.color="yellow";
        }
        else{
            Template.style.color="red";
        }
    }
}

function reset(){
    clearInterval(interval);
    timer = [0,0,0];
    interval = null;
    timingruning =0 ;
    TEXTAREA.value = "";
    TIMER.innerHTML="00 : 00 . 00";
    Template.style.color="black";
    
}


TEXTAREA.addEventListener("keyup",speel_check);
TEXTAREA.addEventListener("keypress",start);
RESTART.addEventListener("click",reset);



//............................................................................

const darkTxt = document.querySelector("#darkTXT");
const dark = document.querySelector("#dark");
const login = document.querySelector("#login");
const about = document.querySelector("#about");
const moon = document.querySelector(".moon");


let m=1;
function mood(){
    if(m==1){
        document.body.classList.toggle('dark-mood');
        m=0;
        darkTxt.innerHTML="Light";
        Template.style.color="black";
        TEXTAREA.style.color="white";
        

    }
    else if(m==0){
        document.body.classList.toggle('dark-mood');
        m=1;
        darkTxt.innerHTML="Dark";
    }
}

dark.addEventListener('click' , mood);