const nameElement = document.getElementById('name');

const texts = [
    "C", "Ca", "Cap", "Capr", "Capri", "Capri", "Capr", "Cap", "Ca", "C"
];

let currentIndex = 0;
const interval = 350;

function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, interval);
