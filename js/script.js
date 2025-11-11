"use strict";
// Variabler
const akvarieMandenClosedImg = document.getElementById("akvariemanden-closed-mouth");


// Afspiller snakke animation til akvariemanden når man klikker på ham
if (akvarieMandenClosedImg) {
    akvarieMandenClosedImg.addEventListener("click", () => {
       akvarieMandenClosedImg.src = "../video/akvariemanden-gif.gif";

    // Stopper snakke animationen efter 10 sekunder 
       setTimeout(() => {
        akvarieMandenClosedImg.src = "../img/akvariemanden-lukket-mund.png";
       }, 10000);
    });
}