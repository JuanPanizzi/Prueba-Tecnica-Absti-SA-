import { ArgentinaMap } from "./ArgentinaMap.js"

export const Argentina = () => {

    const titleArg = `
    <h1>Posicionese <br> sobre el mapa</h1>
     <p>Y descubra Argentina</p>
    `

    const section = document.createElement('section');
    section.classList.add('section-argentina');

    const divTitle = document.createElement('div');
    divTitle.classList.add('title-argentina')
    divTitle.innerHTML = titleArg;

    const div = document.createElement('div');
    div.classList.add("ctn-map")
    div.innerHTML = ArgentinaMap
    

    section.appendChild(divTitle);
    section.appendChild(div);

    return section;

}