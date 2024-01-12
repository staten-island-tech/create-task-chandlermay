import '../style.css';
import { DOMselectors } from './doms';

function clearScreen(){
    DOMselectors.body.innerHTML = "";
}
DOMselectors.land.addEventListener("click", function(){
    clearScreen();
    const card = `
    <div class="planetcontainer">
    <h1 id="name">Landing...</h1>
    <img class="planetimg" alt="planet-image" src="https://media.istockphoto.com/id/688602556/video/spaceship-landing-on-planet-mars.jpg?s=640x640&k=20&c=qVFWpHnKcQMTJ3kP4P115CRytXr6JY1UjRKeu9yQV8c=">
    <ul class="elist">
    <button id="forest">Explore the forest</button>
    <button id="mountains">Explore the mountains</button>
    <button id="savannah">Explore the savannah</button>
    </ul>
</div>
    `
    DOMselectors.body.insertAdjacentHTML("afterbegin", card);
})