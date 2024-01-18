import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';

DOMselectors.begin.addEventListener("click",function(){
    DOMselectors.planetcontainer.innerHTML = "";
    const pic = random(characters.displayIndex);
    const card = `
    <h1 id="charactername">Who am I?</h1>
    <img class="characterimg" alt="characterpicture" src="${pic}">
    <input class="textbox" type="text">
    `
    DOMselectors.planetcontainer.insertAdjacentHMTL("afterbegin", card);
})