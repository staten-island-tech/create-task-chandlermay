import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';
import {shuffle} from './shuffle';
import {number} from './shuffle';

DOMselectors.begin.addEventListener("click",function(){
    DOMselectors.planetcontainer.innerHTML = "";
    shuffle(characters.length);
    alright = shuffle.result;
    const card = `
    <h1 id="charactername">Who am I?</h1>
    <img class="characterimg" alt="characterpicture" src="${characters[alright].displayIcon}">
    <input class="textbox" type="text">
    `
    DOMselectors.planetcontainer.insertAdjacentHMTL("afterbegin", card);
})