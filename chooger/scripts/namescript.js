const nameElement = document.getElementById('name');

const texts = [
    "Cͨ", "Cͨhͪ", "Cͨhͪoͦ", "Cͨhͪoͦoͦ", "Cͨhͪoͦoͦg̃", "Cͨhͪoͦoͦg̃eͤ", "Cͨhͪoͦoͦg̃eͤrͬ", "Cͨhͪoͦoͦg̃eͤrͬ!", 
    "#hͪoͦoͦg̃eͤrͬ!", "#hͪoͦoͦ#rͬ!", "#hͪoͦ#g̃#rͬ!", "#hͪ##g̃#rͬ!", "#hͪ##g̃#rͬ#", "#hͪ####rͬ#",
    "#h######", "########", "########", "Cͨhͪoͦoͦg̃eͤrͬ!", "########", "Cͨhͪoͦoͦg̃eͤrͬ!", "########", "Cͨhͪoͦoͦg̃eͤrͬ!", "########", "########", "########", "########"
];

let currentIndex = 0;
const interval = 500;

function updateText() {
    nameElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateText, interval);