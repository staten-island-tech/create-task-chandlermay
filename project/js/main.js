import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';

for (let i=0 ; i < characters.length; i++) {
DOMselectors.begin.addEventListener("click",function(){
    DOMselectors.planetcontainer.innerHTML = "";
    const card = `
    <h1 id="charactername">Who am I?</h1>
    <img class="characterimg" alt="characterpicture" src="${character[i].displayIcon}">
    <input class="textbox" type="text">
    `
    DOMselectors.planetcontainer.insertAdjacentHMTL("afterbegin", card);
})
}