import '../style.css';
import { DOMselectors } from './doms';
import { characters } from './endor';
import {shuffle} from './shuffle';
import {number} from './shuffle';

<<<<<<< Updated upstream
=======
// for (let i=0 ; i < characters.length; i++) {}

>>>>>>> Stashed changes
DOMselectors.begin.addEventListener("click",function(){
    DOMselectors.planetcontainer.innerHTML = "";
    shuffle(characters.length);
    alright = shuffle.result;
    const card = `
    <h1 id="charactername">Who am I?</h1>
<<<<<<< Updated upstream
    <img class="characterimg" alt="characterpicture" src="${characters[alright].displayIcon}">
=======
    <img class="characterimg" alt="characterpicture" src="${characters[i].displayIcon}">
>>>>>>> Stashed changes
    <input class="textbox" type="text">
    `
    DOMselectors.planetcontainer.insertAdjacentHMTL("afterbegin", card);
})