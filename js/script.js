"use strict";
// Variabler
const akvarieMandenClosedImg = document.getElementById("akvariemanden-closed-mouth");
const klikMigBtn = document.querySelector(".akvariemand-start-tekstboks");
const akvariemandTaleBoks = document.querySelector(".akvariemand-slut-tekstboks");

// Henter lyden til akvariemanden
const akvarieMandenSound = new Audio();
akvarieMandenSound.src = "../audio/akvariemand-introduktion-audio.mp3";

// Afspiller snakke animation og lyd til akvariemanden når man klikker på ham
if (akvarieMandenClosedImg) {
    akvarieMandenClosedImg.addEventListener("click", () => {
       akvarieMandenClosedImg.src = "../video/akvariemanden-gif.gif";
       akvarieMandenSound.play();

    // Gør "klik på mig" knappen usynlig mens han snakker
        klikMigBtn.classList.add("is-not-visible");

    // Gør akvariemandens taleboks synlig mens han snakker 
        akvariemandTaleBoks.classList.add("is-visible");

    // Stopper snakke animationen efter 15 sekunder 
       setTimeout(() => {
        akvarieMandenClosedImg.src = "../img/akvariemanden-lukket-mund.png";
        // Gør "klik på mig" knappen synlig når han er færdig med at snakke
            klikMigBtn.classList.remove("is-not-visible");
        
        // Gør akvariemandens taleboks usynlig når han er færdig med at snakke
            akvariemandTaleBoks.classList.remove("is-visible");
       }, 16000);
   
    });
}



// Samme funktioner som ovenstående bare tilføjet til "klik på mig" knappen så man kan
// klikke på den eller akvariemanden for at få ham til at snakke

if (klikMigBtn) {
    klikMigBtn.addEventListener("click", () => {
           akvarieMandenClosedImg.src = "../video/akvariemanden-gif.gif";
       akvarieMandenSound.play();

    // Gør "klik på mig" knappen usynlig mens han snakker
        klikMigBtn.classList.add("is-not-visible");

    // Gør akvariemandens taleboks synlig mens han snakker 
        akvariemandTaleBoks.classList.add("is-visible");

    // Stopper snakke animationen efter 15 sekunder 
       setTimeout(() => {
        akvarieMandenClosedImg.src = "../img/akvariemanden-lukket-mund.png";
        // Gør "klik på mig" knappen synlig når han er færdig med at snakke
            klikMigBtn.classList.remove("is-not-visible");
        
        // Gør akvariemandens taleboks usynlig når han er færdig med at snakke
            akvariemandTaleBoks.classList.remove("is-visible");
       }, 16000);
    });
}
document.addEventListener('DOMContentLoaded', () => {
  const bubblesContainer = document.querySelector('.bubbles');
  for (let i = 0; i < 18; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Generer en tilfældig position for boblen horisontalt
    const randomLeft = Math.random() * 100; // 0 til 100%
    bubble.style.left = `${randomLeft}vw`; // Sæt venstre position i vw

    // Generer en tilfældig startposition vertikalt
    const randomBottom = Math.random() * 80; // 0 til 80vh
    bubble.style.bottom = `${randomBottom}vh`; // Sæt bundt position i vh

    bubblesContainer.appendChild(bubble);
  }
});
