import '../style.css';
import { DOMselectors } from './doms';

function clearScreen(){
    DOMselectors.body.innerHTML = "";
}
DOMselectors.land.addEventListener("click", function(){
    clearScreen();
    const card = `
    
    `
    DOMselectors.body.insertAdjacentHTML("afterbegin", card);
})