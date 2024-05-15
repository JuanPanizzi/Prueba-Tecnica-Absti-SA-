import { router } from "./router/router.js"

window.addEventListener('load', ()=> {

    
    
    window.addEventListener('hashchange', ()=>{
        router(window.location.hash) 
    })
if(window.location.hash == '') return router(window.location.hash) 

})
