// VARIAVEIS

const heroi = document.getElementById('kaique')
const wall = document.getElementById("wall")
const grama = document.getElementById("grama")
const mapa = document.getElementById("mapa")
export{heroi,grama,mapa,wall}

function gerarPosKaique(){

  let largWall = grama.offsetWidth/2
  let altWall = grama.offsetHeight/2

  heroi.style.left=largWall/2+30 + "px"
  heroi.style.top=parseInt(altWall)/2+30 + "px"
  console.log(heroi.offsetTop)

}

function gerarPosMapa(){

    let largmapa = mapa.offsetWidth 
    let altmapa = mapa.offsetHeight

    grama.style.left=-1*(heroi.offsetLeft-largmapa/2)+"px"
    grama.style.top=-1*(heroi.offsetTop-altmapa/2)+"px"
  }





// DEFININDO POSIÇÃO DO KAIQUE



  window.addEventListener("load",(evt)=>{
    gerarPosKaique()
    gerarPosMapa()
    evt.preventDefault()

  })


  // DEFININDO MOVIMENTO DO KAIQUE

const movimento = {
  up :(heroi,grama)=>{
    let posAtual = parseInt(getComputedStyle(heroi).top)
    heroi.style.top=posAtual-15+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).top)
    grama.style.top=posGramaAtual+15+"px"
  },
  down :(heroi,grama)=>{
    let posAtual = parseInt(getComputedStyle(heroi).top)
    heroi.style.top=posAtual+15+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).top)
    grama.style.top=posGramaAtual-15+"px"
  },
  left :(heroi,grama)=>{

    let posAtual = parseInt(getComputedStyle(heroi).left)
    heroi.style.left=posAtual-15+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).left)
    grama.style.left=posGramaAtual+15+"px"
  },
  right :(heroi,grama)=>{
    let posAtual = parseInt(getComputedStyle(heroi).left)
    heroi.style.left=posAtual+15+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).left)
    grama.style.left=posGramaAtual-15+"px"
  }
}

document.addEventListener("keydown",(evt)=>{
  if(evt.code==="ArrowUp"){
    movimento.up(heroi,grama)
    if(parseInt(getComputedStyle(heroi).top)<=-5){
      heroi.style.top=-5+"px"
      grama.style.top=-1296+"px"
    }
  }
  if(evt.code=="ArrowLeft"){
    movimento.left(heroi,grama)
    if(parseInt(getComputedStyle(heroi).left)<=-5){
      heroi.style.left=-5+"px"
      grama.style.left=-969+"px"
    }

  }
  if(evt.code=="ArrowRight"){
    movimento.right(heroi,grama)
    if(parseInt(getComputedStyle(heroi).left)>=3415){
      heroi.style.left=3415+"px"
      grama.style.left=-4389+"px"
    }

  }
  if(evt.code=="ArrowDown"){
    movimento.down(heroi,grama)
    if(parseInt(getComputedStyle(heroi).top)>=3415){
      heroi.style.top=3415+"px"
      grama.style.top=-4716+"px"
    }

  }
})