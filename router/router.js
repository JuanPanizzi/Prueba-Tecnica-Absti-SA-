import { Home } from "../views/home.js";
import { Maravillas } from "../views/maravillas.js";
import { Paises } from "../views/paises.js";


export const router =  (urlHash) => {

    console.log(urlHash)

    let mainRoot = document.getElementById('mainRoot');
    mainRoot.innerHTML = '';

    switch(urlHash){
        case "": {
            mainRoot.style.backgroundImage = "url('../assets/puente.jpg')"
            return mainRoot.appendChild(Home()); 
        }
        case "#/maravillas":{
            mainRoot.style.backgroundImage = "url('../assets/coliseo.jpg')";
            return mainRoot.appendChild(Maravillas())
        }
        case "#/paises":{
            mainRoot.style.backgroundImage = "url('')";
            return mainRoot.appendChild(Paises())
        }
    }
}