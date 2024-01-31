import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';

const i = 0

function clearScreen() {
    DOMselectors.container.innerHTML = ""
}

function clearLine() {
    DOMselectors.response.value = ""
}


function checkGuess() {
    const userGuess = DOMselectors.response.value;
    const correctGuess = characters[i].name.toLowerCase();

    if (userGuess === correctGuess) {
i++;
clearScreen();
createCard(i);
clearLine();
    } else {
clearScreen();
DOMselectors.container.insertAdjacentHTML("afterbegin", "Not exactly...try again.");
clearLine();
    }
}

function createCard(i) {
    clearScreen();
    const card = `
    <h1 id="name">Who Am I?</h1>
    <img class="img" alt="character-image" src="${characters[i].displayIcon}">
    <input type="text" id ="response">
    <button class="submit">Submit</button>
    `
    DOMselectors.container.insertAdjacentHTML("afterbegin", card);
  DOMselectors.submit.addEventListener("click", checkGuess);  
}



createCard(i);