const month = document.querySelector("#month");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const fechaActual = document.querySelector("#fecha-actual");
const horaActual = document.querySelector("#hora-actual");

const navidad = document.querySelector(".navidad");
const halloween = document.querySelector(".halloween");
const añoNuevo = document.querySelector(".año-nuevo")
const dateTime = document.querySelector("#date-time");
const buttonDateTime = document.querySelector("#button-date-time");
const fechaManual = document.querySelector("#fecha-manual");
const stop = document.querySelector(".stop");


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
        if(t.remaintime <= 0){
            clearInterval(timeUpdate);
            alert(finalMessage);
            location.reload();
        }
    },1000);
}



function fecha(){
    setInterval(function(){
        let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado","Domingo"];
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let now = new Date();
        horas = now.getHours();
        minutos = now.getMinutes();
        segundos = now.getSeconds();

        diaNumber = now.getDate();
        mes = now.getMonth();
        año = now.getFullYear();

        diaString= now.getDay()-1;

        fechaActual.innerText = dias[diaString] +" " +diaNumber+" de "+meses[mes]+" del "+año;
        horaActual.innerText = ("0"+horas).slice(-2) + " : "+ ("0" + minutos).slice(-2) + " : " + ("0" + segundos).slice(-2) ;
    },1000);
}
fecha()

navidad.addEventListener("click", showNavidad);
halloween.addEventListener("click", showHalloween);
añoNuevo.addEventListener("click", showAñoNuevo);
buttonDateTime.addEventListener("click", showDateTime);
stop.addEventListener("click", reload )


function showDateTime(){
    let evento = dateTime.value;
    console.log(evento);
    countDown(evento,"Feliz dia, Llego el dia que tanto esperaste!!!");
    fechaManual.reset();
}

function showNavidad() {
    let evento = navidad.value;
    countDown(evento, "feliz Navidad");
    // let foto = document.querySelector(".imagen").style = url("<img style='with:10%' src= 'https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_760,h_550/https://sumate.mx/wp-content/uploads/2021/12/Navidad-760x550.jpg'")
    // foto.style.width="200px";
    
}

function showHalloween(){
    let evento = halloween.value;
    countDown(evento, "feliz halloween");
}
function showAñoNuevo(){
    let evento = añoNuevo.value;
    countDown(evento, "Feliz Año Nuevo");
}
function reload(){
    location.reload();
}