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
    } else {
DOMselectors.name.innerHTML = "Not quite, try again.";
    }
}

function createCard(i) {
    clearScreen();
    const card = `
    <p id="name">Who Am I?</p>
    <img class="img" alt="character-image" src="${characters[i].displayIcon}">
    <input type="text" id ="response">
    <button class="submit">Submit</button>
    `
    DOMselectors.container.insertAdjacentHTML("afterbegin", card);

}

//   DOMselectors.submit.addEventListener("click", checkGuess);  

createCard(i);
checkGuess();