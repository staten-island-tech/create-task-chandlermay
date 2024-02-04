import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';

let i = 0

function clearScreen() {
    DOMselectors.container.innerHTML = ""
    DOMselectors.input.value = ""
}

function getRandom(){
    return Math.floor(Math.random() * characters.length);
}

function createCard() {
    clearScreen();
    const randomIndex = getRandom();
    const card = `
    <img class="img" alt="character-image" src="${characters[randomIndex].displayIcon}">
    `
    DOMselectors.container.insertAdjacentHTML("afterbegin", card);
    i = randomIndex;
}

function checkGuess() {
    const userGuess = DOMselectors.input.value;
    const correctGuess = characters[i].name.toLowerCase();

    if (userGuess === correctGuess) {
createCard();
    } else {
DOMselectors.name.innerHTML = "Not quite, try again.";
    }
}

createCard();

document.querySelector("#button").addEventListener("click", function(){
   checkGuess();
})


//netlify link, video, pdf of full code, pdf of personal choices 