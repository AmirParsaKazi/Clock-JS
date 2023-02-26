var second ;
var minute ;
var hour ;
var theme = true;//theme 1
var time;
var degHour;
GetValue();

function Seconder() {
    let deg = (time.getSeconds() * 6);
    document.getElementById("SecondCount").style.transform = "rotate("+deg+"deg)";
}

function Minutes() {
    let deg = (time.getMinutes() * 6);
    document.getElementById("MinuteCount").style.transform = "rotate("+deg+"deg)";
    Hours();
    let deg2 = degHour + (time.getMinutes()* 0.5);
    document.getElementById("HourCount").style.transform = "rotate("+deg2+"deg)";
}

function Hours() {
    if (time.getHours() > 12) {
        AmPm.innerHTML = "PM";
        degHour = ((time.getHours()-12) * 30);
    }
    else{
        AmPm.innerHTML = "AM";
        degHour = (time.getHours() * 30);
    }
}

var realTime = setInterval(function() {
    time =new Date();
    Seconder();
    Minutes();
},500);
var userTime;



function TimerUprising() {
    GetValue();
    second += 1;
    CheckUprising();
    CheckDisplayNPrint();
    GetYourTime();
}

// startSetTimeout1 = setTimeout(TimerUprising,1000);

function CheckUprising(){
    if (second == 60) {
        second = 0;
        minute += 1;
        if (minute == 60) {
            minute = 0;
            hour += 1;
            if (hour == 24) {
                hour = 0;
            }
        }
    }
}


function GetYourTime() {
    let deg = 0;

    deg = (second * 6);
    document.getElementById("SecondCount").style.transform = "rotate("+deg+"deg)";


    deg = (minute * 6);
    document.getElementById("MinuteCount").style.transform = "rotate("+deg+"deg)";
    
        
    if (hour > 12) {
        AmPm.innerHTML = "PM";
        deg = ((hour-12) * 30);
    }
    else{
        AmPm.innerHTML = "AM";
        deg = (hour * 30);
    }
    let deg2 = deg + (minute * 0.5);
    document.getElementById("HourCount").style.transform = "rotate("+deg2+"deg)";
    
}


function GetValue() {
    second = parseInt(document.getElementById("SetSecoond").value);
    minute = parseInt(document.getElementById("SetMinute").value);
    hour = parseInt(document.getElementById("SetHour").value);
}

function OrderTime() {
    document.getElementById("nowTime").style.visibility = "visible";
    document.getElementById("nowTime").style.opacity = "1";
    GetValue();
    clearInterval(realTime);
    clearInterval(userTime);
    if (second > 59) {
        minute = minute + (second/60);
        second %=60;
    }
    if (minute > 59) {
        hour = hour + (minute/60);
        minute %=60;
    }
    if (hour > 23) {
        hour %= 24;
    }
    debugger;
    second = Math.floor(second);
    minute = Math.floor(minute);
    hour = Math.floor(hour);
    CheckDisplayNPrint();
    userTime = setInterval(TimerUprising,1000);
}

function NOWTime() {
    document.getElementById("nowTime").style.visibility = "hidden";
    document.getElementById("nowTime").style.opacity = "0";
    clearInterval(realTime);
    clearInterval(userTime);
   var realTime = setInterval(function() {
    time =new Date();
    Seconder();
    Minutes();
    },500);
    second = 0;
    minute = 0;
    hour = 0;
    CheckDisplayNPrint();
}

function CheckDisplayNPrint() {
    if (second<10) {
        second = "0" + second;
    }
    if (minute<10) {
        minute = "0" + minute;
    }
    if (hour<10) {
        hour = "0" + hour;
    }

    document.getElementById("SetSecoond").value = second;
    document.getElementById("SetMinute").value = minute;
    document.getElementById("SetHour").value = hour;
}





function ChengeTheme() {
    let scarfs = document.getElementsByClassName("CountBasic");
    let clockBody =document.getElementsByClassName("ClockBody");
    let num1 =document.getElementsByClassName("num1");
    let centralPoint =document.getElementsByClassName("CentralPoint");
    let AmPmtheme =document.getElementById("AmPm");
    let bodyBack = document.getElementsByTagName("Body");
    let themeBut = document.getElementById("Themes");
    let getTimes = document.getElementsByClassName("SeterTime");
    let noeBut = document.getElementById("nowTime");
    if (theme == true) {
        scarfs[0].style.backgroundColor= "#1e212d";
        scarfs[1].style.backgroundColor= "#b68973";
        scarfs[2].style.backgroundColor= "#eabf9f";

        clockBody[0].style.backgroundColor = "#faf3e0";
        clockBody[0].style.borderColor = "#1e212d";

        for (let index = 0; index < num1.length; index++) {
            num1[index].style.backgroundColor = "#1e212d";
        }
       
        centralPoint[0].style.backgroundColor = "#1e212d";
    
        AmPmtheme.style.backgroundColor = "#1e212d";
        AmPmtheme.style.color = "#eabf9f";
        
        noeBut.style.backgroundColor = "#1e212d";
        noeBut.style.color = "#eabf9f";

        for (let index = 0; index < getTimes.length; index++) {
            getTimes[index].style.backgroundColor = "#faf3e0";
            getTimes[index].style.color = "#1e212d";
        }
    
        bodyBack[0].style.backgroundImage = "linear-gradient(45deg, #1e212d, #faf3e0)";
        
        themeBut.innerHTML = "Dark";
        themeBut.style.color = "#322f3d";
        themeBut.style.backgroundColor = "#4b5d67";
        theme = false;//Theme 2
    }
    else{
        scarfs[0].style.backgroundColor= "#322f3d";
        scarfs[1].style.backgroundColor= "#59405c";
        scarfs[2].style.backgroundColor= "#87556f";

        clockBody[0].style.backgroundColor = "#4b5d67";
        clockBody[0].style.borderColor = "#322f3d";
        
        for (let index = 0; index < num1.length; index++) {
            num1[index].style.backgroundColor = "#322f3d";
        }
       
        centralPoint[0].style.backgroundColor = "#322f3d";
    
        AmPmtheme.style.backgroundColor = "#322f3d";
        AmPmtheme.style.color = "#87556f";
        
        noeBut.style.backgroundColor = "#322f3d";
        noeBut.style.color = "#87556f";

        for (let index = 0; index < getTimes.length; index++) {
            getTimes[index].style.backgroundColor = "#4b5d67";
            getTimes[index].style.color = "#322f3d";
        }

        bodyBack[0].style.backgroundImage = "linear-gradient(45deg, #322f3d, #4b5d67)";

        themeBut.innerHTML = "Light";
        themeBut.style.color = "#1e212d";
        themeBut.style.backgroundColor = "#faf3e0";
        theme = true;
    }

}
