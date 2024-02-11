function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//selec buttons
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

//state buttons
start.disabled = false;
stop.disabled = true;

//timer
let timerId;
//last color generated
let lastColor;

//event listener
start.addEventListener('click', () => {
  start.disabled = true;
  stop.disabled = false;
  timerId = setInterval(() => {
    lastColor = getRandomHexColor();
    document.body.style.background = lastColor;
  }, 1000);
});

stop.addEventListener('click', () => {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(timerId);
  document.body.style.background = lastColor || "white";
});

// // Creating  div
const container = document.createElement('div');
document.body.appendChild(container);
container.appendChild(start);
container.appendChild(stop);
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.height = '80vh';
container.style.gap = '25px';


// Styling the buttons
start.style.fontSize = '35px';
start.style.padding = '20px 35px';
start.style.boxShadow = '0 8px 10px rgba(0, 0, 0, 0.1)';
start.style.transition = 'transform 0.2s'; // Adaugă o tranziție pentru o animație mai fină

start.addEventListener('mousedown', () => {
  start.style.transform = 'translateY(20px)'; // Coboara butonul când este apăsat
});

start.addEventListener('mouseup', () => {
  start.style.transform = 'translateY(0)'; // Resetarea transformării când butonul este eliberat
});

stop.style.fontSize = '35px';
stop.style.padding = '20px 35px';
stop.style.boxShadow = '0 8px 10px rgba(0, 0, 0, 0.1)';
stop.style.transition = 'transform 0.2s';

stop.addEventListener('mousedown', () => {
  stop.style.transform = 'translateY(20px)';
});

stop.addEventListener('mouseup', () => {
  stop.style.transform = 'translateY(0)';
});
