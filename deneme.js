import {Engine} from './src/Engine'
import {DrawableObject} from './src/DrawableObject'
import {Kare} from './src/Kare'
import {Ucgen} from './src/Ucgen'
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
const ornek3 = new Kare()
ornek3.setPosition(35, 10)
ornek3.setSize(50)
ornek3.setAngles()
ornek3.setRotate(80)
ornek3.color = 'yellow'
ornek3.on('onmouseover', () => {
    ornek3.degree = ornek3.degree + 6
})
let objectList=[]
for (let i=0;i<1000;i++){
    let ornek5 = new Kare()
    ornek5.name = 'kare'
    ornek5.setPosition(300, 150)
    ornek5.setSize(160)
    ornek5.setAngles()
    ornek5.setRotate(30)
    ornek5.color = 'blue'
    objectList.push(ornek5)
}
var canvas=document.createElement("canvas")
//canvas.setAttribute("id","canvas_id")
const engine = new Engine()
engine.add(ornek);
ornek.add(ornek2)
ornek2.add(ornek3)
for (let i=0;i<objectList.length;i++){
    engine.add(objectList[i])
    
}


console.log(ornek2._parent)
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
window.fonk = fonk
window.fonk2 = fonk2
window.fonk3 = fonk3
window.fonk4=fonk4