// Aqui será desenvolvido o derradeiro entre o heroi kaique e seus inimigos

import { heroi, wall } from "./script.js";

window.addEventListener("load", ()=>{
    let inimigos = [...document.querySelectorAll(".inimigo")]
    inimigos.forEach((el)=>{
        console.log(el)
        let encontro = new Promise((resolve, reject) => {
        
            setInterval(()=>{
                let inimigoLeft = parseInt( getComputedStyle(el).left)
                let inimigoTop = parseInt(getComputedStyle(el).top)
                let heroiTop =  parseInt(getComputedStyle(heroi).top)
                let heroiLeft =  parseInt(getComputedStyle(heroi).left)
                if(inimigoLeft==heroiLeft){
                    resolve("Deu namoro")
                }
            },200)
         
            })
            encontro.then((res)=>{
                console.log(res)
            })
        })
    
})
