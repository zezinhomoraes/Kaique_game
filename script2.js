import { heroi, grama, mapa,wall } from "./script.js";
console.log(grama.offsetWidth)
console.log(wall.offsetHeight)





   function gerarInimigo(wall){
        for(let i = 0; i < 20; i++){
            let inimigo = document.createElement("div")
            let posX=Math.floor(Math.random()*wall.offsetWidth-80)
            let posY=Math.floor(Math.random()*wall.offsetHeight-80)
            if(posX<=-5){
                posX=-5
            }
            if(posY<=-5){
                posY=-5
            }

            inimigo.setAttribute("class","inimigo")
            inimigo.setAttribute("id","inimigo")

            wall.appendChild(inimigo)
            inimigo.style.left=posX+"px"
            inimigo.style.top=posY+"px"
        }
    }

    function movimentoInimigo(inimigo){
       inimigo.forEach(element => {



            function movY(){
                let dir = Math.floor(Math.random()*2+1)
                if(dir == 1){dir=+1}else if(dir == 2){dir=-1}
                let mov = setInterval(()=>{
                    element.style.top=parseInt(getComputedStyle(element).top)+dir*(15)+"px"
                },200)
                setTimeout(()=>{
                    clearInterval(mov)
                    movX()
                },3000)
            }
            function movX(){
                let dir = Math.floor(Math.random()*2+1)
                if(dir == 1){dir=+1}else if(dir == 2){dir=-1}
                let movs = setInterval(()=>{
                    element.style.left=parseInt(getComputedStyle(element).left)+dir*(15)+"px"
                },200)
                setTimeout(()=>{
                    clearInterval(movs)
                    // movimentoInimigo([...document.querySelectorAll(".inimigo")])
                    movY()
                },3000)
            }
            movY()
           
           
        });
    }

    window.addEventListener("load",(evt)=>{
        gerarInimigo(wall)
        movimentoInimigo([...document.querySelectorAll(".inimigo")])
    })
