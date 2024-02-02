import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';

const i = 0

function clearScreen() {
    DOMselectors.container.innerHTML = ""
}

function createCard(i) {
    clearScreen();
    const card = `
    <p id="name">Who Am I?</p>
    <img class="img" alt="character-image" src="${characters[i].displayIcon}">
    <form>
        <input type="text" id ="input">
    </form>
    <button id="button">Submit</button>
    `
    DOMselectors.container.insertAdjacentHTML("afterbegin", card);
}
function checkGuess() {
    const userGuess = DOMselectors.input.value;
    const correctGuess = characters[i].name.toLowerCase();

    if (userGuess === correctGuess) {
i++;
clearScreen();
createCard(i);
    } else {
DOMselectors.name.innerHTML = "Not quite, try again.";
    }
}

createCard(i);

document.querySelector("#button").addEventListener("click", function(){
   checkGuess();
})
//netlify link, video, pdf of full code, pdf of personal choices 