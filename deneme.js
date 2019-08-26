import {Engine} from './src/Engine'
import {DrawableObject} from './src/DrawableObject'
import {Kare} from './src/Kare'
import {Ucgen} from './src/Ucgen'
function baslat(){
    const ornek = new Kare()
    ornek.name = 'kare'
    ornek.setPosition(100, 150)
    ornek.setSize(160)
    ornek.setAngles()
    ornek.setRotate(0)
    ornek.color = 'blue'
    ornek.on('onmouseover', () => {
        ornek.Degree=ornek.Degree + 3
    })
    const ornek2 = new Ucgen()
    ornek2.setPosition(30, 40)
    ornek2.setRotate(135)
    ornek2.color = 'RGBA(255,0,0,0.7)'
    ornek2.on('onmouseover', () => {
        ornek2.degree = ornek2.degree - 3.1
    })
    
    var canvas=document.createElement("canvas")
    const engine = new Engine(1200,500,canvas)
    engine.add(ornek);
    ornek.add(ornek2)  
}
function fonk () {
    ornek.setPosition(ornek.getOwnPosition()[0] + 30, ornek.getOwnPosition()[1] + 30)
}
function fonk2 () {
    ornek2.setPosition(ornek2.getOwnPosition()[0] + 5, ornek2.getOwnPosition()[1] + 5)
}
function fonk3 () {
    ornek3.setPosition(ornek3.getOwnPosition()[0] + 5, ornek3.getOwnPosition()[1] + 5)
}
function fonk4(){
    ornek.remove(ornek2);
}
window.baslat=baslat
window.fonk = fonk
window.fonk2 = fonk2
window.fonk3 = fonk3
window.fonk4=fonk4
window.Engine=Engine
window.DrawableObject=DrawableObject
window.Kare=Kare
window.Ucgen=Ucgen