
let heroiBase =  {
    vida: 100,
    atackNormal: 20,
    jump: null,
    bigodada: 50,
}

let heroiWolfFormBase = {
    vida: heroiBase.vida + 50,
    atackNormal: heroiBase.atackNormal + 20,
    jump: heroiBase.jump,
    bigodada: heroiBase.bigodada+30,
    Garrada: 100

}

let inimigoBase = {
    vida: 150,
    atackNormal: 15,
    invertida: 30,
} 

export {heroiBase, heroiWolfFormBase, inimigoBase}