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