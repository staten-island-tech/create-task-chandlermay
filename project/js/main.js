import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';

const i = 0
function clearScreen(){
    DOMselectors.container.innerHTML = ""
}

function createCard(i){ 
const card = `
    <h1 id="name">Who Am I?</h1>
    <img class="img" alt="character-image" src="${characters[i].displayIcon}">
    <input type="text">
    `
    DOMselectors.container.insertAdjacentHTML("afterbegin", card); 
}

createCard(0);