//provo a creare un orologio che va avanti con un refresh di 1 secondo
let now;
const timeElement = document.getElementById("time");

function runningClock() {
    now = new Date();
    timeElement.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}
// provo ad utilizzare un'arrow function
setInterval(() => {
    runningClock()
}, 1000);

//fine prova

//creo il countdown
// prendo l'elemento html dove stampare il countdown
const countDown = document.getElementById("countDown");


//creo la funzione per creare il countdown
function countDownToCorrection() {
    const now = new Date();
    //salvo in una variabile la data di fine del countdown
    const targetDate = new Date("jul 14, 2023 09:30:00");

    // la variabile difference è uguale alla differenza tra la data target e quella attuale
    const difference = targetDate.getTime() - now.getTime();
    //faccio un controllo sulla data target
    console.log(targetDate)
    if (difference < 0) {
        countDown.innerHTML = "Tempo scaduto";
        return;
    }

    let msec = difference;
    const hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    const mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    countDown.innerHTML = hh + ":" + mm + ":" + ss;

}

setInterval(() => {
    countDownToCorrection()
}, 1000);