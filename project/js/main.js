import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';

function clearScreen(){
    DOMselectors.container.innerHTML = ""
}

DOMselectors.begin.addEventListener("click",function(){
    clearScreen();
    for (let i = 0; i < characters.length; i++){
    const card = `
    <h1 id="name">Who Am I?</h1>
    <img class="img" alt="character-image" src="${characters[i].displayIcon}">
    <input type="text">
    `
    DOMselectors.container.insertAdjacentHTML("afterbegin", card)
}})