import '../style.css';
import { DOMselectors } from './doms';

function clearScreen(){
    DOMselectors.planetcontainer.innerHTML = "";
}
DOMselectors.land.addEventListener("click", function(){
    clearScreen();
    const card = `
    <h1 id="name">Landing...</h1>
    <img class="planetimg" alt="planet-image" src="https://media.istockphoto.com/id/688602556/video/spaceship-landing-on-planet-mars.jpg?s=640x640&k=20&c=qVFWpHnKcQMTJ3kP4P115CRytXr6JY1UjRKeu9yQV8c=">
    <ul class="elist">
    <button id="forest">Explore the forest</button>
    <button id="mountains">Explore the mountains</button>
    <button id="savannah">Explore the savannah</button>
    </ul>
</div>
    `
    DOMselectors.planetcontainer.insertAdjacentHTML("afterbegin", card);
})

DOMselectors.forest.addEventListener("click", function(){
    clearScreen();
    const card = `
    <h1 id="name">Venturing through the forest...</h1>
    <img class="planetimg" alt="planet-image" src="https://afar.brightspotcdn.com/dims4/default/776f594/2147483647/strip/true/crop/1400x933+0+0/resize/1440x960!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F0e%2Fa6%2F64bf7ebeda69617d60dc225d9608%2Foriginal-redwoods-bob-pool-shutterstock-1434129314.jpg">
    `
    DOMselectors.planetcontainer.insertAdjacentHTML("afterbegin", card);
})