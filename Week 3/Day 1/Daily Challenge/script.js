// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: add a new class to each planet).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planet = ["Earth", "Venus", "Mars", "Jupiter", "Uranus", "Mercury"];

let title = document.createElement("h1");
title.style.color = "white";
let text = document.createTextNode("Planets of the Solar System");
title.appendChild(text);
document.body.appendChild(title);


for ( let p in planet ){
    let newPlanet = document.createElement('div');
    newPlanet.id = planet[p]; newPlanet.className = "planet";
    newPlanet.style.color = "white";
    newPlanet.style.marginLeft = "auto";
    newPlanet.style.marginRight = "auto";
    newPlanet.style.padding = "20px";
    newPlanet.innerHTML = planet[p];
    document.body.appendChild(newPlanet);
}