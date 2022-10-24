const month = document.querySelector("#month");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const fechaActual = document.querySelector("#fecha-actual");
const horaActual = document.querySelector("#hora-actual");

const navidad = document.querySelector(".navidad")
const halloween = document.querySelector(".halloween")



const getRemainTime = deadline =>{
    let now = new Date();
    let remaintime = (new Date(deadline) - now + 1000)/1000;
        remainSeconds = ('0' + Math.floor(remaintime % 60)).slice(-2);
        remainMinutes = ('0' + Math.floor(remaintime / 60 % 60)).slice(-2);
        remainHours = ('0' + Math.floor(remaintime / 3600 % 24)).slice(-2);
        remainDays = ('0' + Math.floor(remaintime / (3600*24) % 30)).slice(-2);
        remainMonth = ('0' + Math.floor(remaintime / (3600*24*30))).slice(-2);


    return{
        now,
        remaintime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainMonth
    }
}

const countDown = (deadline, finalMessage) =>{
    const timeUpdate = setInterval(() =>{
        let t = getRemainTime(deadline);
        seconds.innerText = t.remainSeconds;
        minutes.innerText = t.remainMinutes;
        hours.innerText = t.remainHours;
        days.innerText = t.remainDays;
        month.innerText = t.remainMonth;

        
        if(t.remaintime <= 1){
            clearInterval(timeUpdate);
            alert(finalMessage);

        }
    },1000);
}

function fecha(){
    setInterval(function(){
        let now = new Date();
        horas = now.getHours();
        minutos = now.getMinutes();
        segundos = now.getSeconds();
    
        // fechaActual.innerText = now;
        horaActual.innerText = horas + " : "+ minutos + " : " + segundos ;
    },1000);
    
}
fecha()

navidad.addEventListener("click", showNavidad);
halloween.addEventListener("click", showHalloween);



function showNavidad() {
    let evento = navidad.value;
    countDown(evento, "feliz Navidad");
}

function showHalloween(){
    let evento = halloween.value;
    countDown(evento, "feliz halloween");
}