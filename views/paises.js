import { ArgentinaMap } from "./ArgentinaMap.js"

export const Paises = () => {

    const div = document.createElement('div');
    div.classList.add("ctn-map")
    div.innerHTML = ArgentinaMap
    
    return div

}