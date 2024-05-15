import { Home } from "../views/home.js";
import { Maravillas } from "../views/maravillas.js";
import { Argentina } from "../views/Argentina.js";
import { Error } from "../views/error.js";
import { Viajar } from "../views/Viajar.js";


export const router =  (urlHash) => {


    let mainRoot = document.getElementById('mainRoot');
    mainRoot.innerHTML = '';
    const nav = document.querySelector('nav')

    switch(urlHash){
        case "": {
            mainRoot.style.backgroundImage = "url('../assets/puente.jpg')"
            nav.style.background = ""
            return mainRoot.appendChild(Home()); 
        }
        case "#/maravillas":{
            mainRoot.style.backgroundImage = "url('../assets/coliseo.jpg')";
            nav.style.background = "#ffffff73"
            return mainRoot.appendChild(Maravillas())
        }
        case "#/argentina":{
            mainRoot.style.backgroundImage = "url('../assets/argentina.jpg')";
            nav.style.background = ""
            return mainRoot.appendChild(Argentina())
        }
        case "#/viajar":{
            mainRoot.style.backgroundImage = "url('../assets/globos.jpg')";
            nav.style.background = ""
            return mainRoot.appendChild(Viajar())
        }
        default: {
            return mainRoot.appendChild(Error())
            
        }
    }
}