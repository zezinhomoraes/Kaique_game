// VARIAVEIS

const heroi = document.getElementById('kaique')
const wall = document.getElementById("wall")
const grama = document.getElementById("grama")
const mapa = document.getElementById("mapa")
export{heroi,grama,mapa,wall}

function gerarPosKaique(){

  let largWall = wall.offsetWidth/2
  let altWall = wall.offsetHeight/2

  heroi.style.left=largWall + "px"
  heroi.style.top=altWall + "px"


}

function gerarPosMapa(){

    let largmapa = mapa.offsetWidth 
    let altmapa = mapa.offsetHeight

    grama.style.left=-1*(wall.offsetLeft+heroi.offsetLeft-largmapa/2)+"px"
    grama.style.top=-1*(wall.offsetTop+heroi.offsetTop-altmapa/2)+"px"
    console.log(grama.offsetLeft)
    console.log(grama.offsetTop)
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
    heroi.style.top=posAtual-10+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).top)
    grama.style.top=posGramaAtual+10+"px"
  },
  down :(heroi,grama)=>{
    let posAtual = parseInt(getComputedStyle(heroi).top)
    heroi.style.top=posAtual+10+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).top)
    grama.style.top=posGramaAtual-10+"px"
  },
  left :(heroi,grama)=>{

    let posAtual = parseInt(getComputedStyle(heroi).left)
    heroi.style.left=posAtual-10+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).left)
    grama.style.left=posGramaAtual+10+"px"
  },
  right :(heroi,grama)=>{
    let posAtual = parseInt(getComputedStyle(heroi).left)
    heroi.style.left=posAtual+10+"px"
    let posGramaAtual = parseInt(getComputedStyle(grama).left)
    grama.style.left=posGramaAtual-10+"px"
  }
}

document.addEventListener("keydown",(evt)=>{
  if(evt.code==="ArrowUp"){
    movimento.up(heroi,grama)
    if(parseInt(getComputedStyle(heroi).top)<=0){
      heroi.style.top=0+"px"
      grama.style.top=-1327+"px"
    }
  }
  if(evt.code=="ArrowLeft"){
    movimento.left(heroi,grama)
    if(parseInt(getComputedStyle(heroi).left)<=0){
      heroi.style.left=0+"px"
      grama.style.left=-1000+"px"
    }

  }
  if(evt.code=="ArrowRight"){
    movimento.right(heroi,grama)
    if(parseInt(getComputedStyle(heroi).left)>=3560){
      heroi.style.left=3560+"px"
      grama.style.left=-4560+"px"
    }

  }
  if(evt.code=="ArrowDown"){
    movimento.down(heroi,grama)
    if(parseInt(getComputedStyle(heroi).top)>=3560){
      heroi.style.top=3560+"px"
      grama.style.top=-4887+"px"
    }

  }
})