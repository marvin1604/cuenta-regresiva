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

function counterTime(deadline, finalMessage){
    const timeUpdate = setInterval(function(){
    const now = new Date();
    let remaintime = ((new Date(deadline) - now + 800)/1000);
    if(remaintime <= 0){
        remaintime += (3600*24*30*12);
    }
    const remainSeconds = ('0' + Math.floor(remaintime % 60)).slice(-2);
    const remainMinutes = ('0' + Math.floor(remaintime / 60 % 60)).slice(-2);
    const remainHours = ('0' + Math.floor(remaintime / 3600 % 24)).slice(-2);
    const remainDays = ('0' + Math.floor(remaintime / (3600*24) % 30)).slice(-2);
    const remainMonth = ('0' + Math.floor(remaintime / (3600*24*30))).slice(-2);
    seconds.innerText = remainSeconds;
    minutes.innerText = remainMinutes;
    hours.innerText = remainHours;
    days.innerText = remainDays;
    month.innerText = remainMonth;
    navidad.onclick = () =>{
        clearInterval(timeUpdate);
        console.log(deadline, finalMessage);
    }
    añoNuevo.onclick = () =>{
        clearInterval(timeUpdate);
        console.log(deadline, finalMessage);
    }
    buttonDateTime.onclick = () =>{
        clearInterval(timeUpdate);
        console.log(deadline, finalMessage);
    }

    if(remaintime <= 0){
        clearInterval(timeUpdate);
        alert(finalMessage);
        location.reload();
    }

    },1000);
    console.log(deadline);
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
fecha();

navidad.addEventListener("click", showNavidad);
halloween.addEventListener("click", showHalloween);
añoNuevo.addEventListener("click", showAñoNuevo);
buttonDateTime.addEventListener("click", showDateTime);
stop.addEventListener("click", reload );

function showDateTime(){
    counterTime(dateTime.value,"Feliz dia, Llego el dia que tanto esperaste!!!");
    fechaManual.reset();
}

function showNavidad() {
    let evento = navidad.value;
    counterTime(evento, "Feliz Navidad");
}
function showHalloween(){
    let evento = halloween.value;
    counterTime(evento, "Feliz Halloween");
}
function showAñoNuevo(){
    let evento = añoNuevo.value;
    counterTime(evento, "Feliz Año Nuevo");
}
function reload(){
    location.reload();
}