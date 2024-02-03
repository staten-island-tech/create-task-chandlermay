import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';

let i = 0
let done = false

function clearScreen() {
    DOMselectors.container.innerHTML = ""
    DOMselectors.input.value = ""
}

function createCard(i) {
    clearScreen();
    const card = `
    <img class="img" alt="character-image" src="${characters[i].displayIcon}">
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

// while (i<8){
//     console.log(`"${8-i} questions left"`);
//     if (i>8) break;
// }

//netlify link, video, pdf of full code, pdf of personal choices 