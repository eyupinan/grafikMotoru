import {Engine} from './src/Engine'
import {DrawableObject} from './src/DrawableObject'
import {Kare} from './src/Kare'
import {Ucgen} from './src/Ucgen'
import {Circle} from './src/Circle'
var ornek
var engine
var ornek2
function baslat(){
     ornek = new Kare()
    ornek.name = 'kare'
    ornek.setPosition(100, 150)
    ornek.setSize(160)
    ornek.setAngles()
    ornek.setRotate(0)
    ornek.color = 'blue'
    ornek.on('onmouseover', () => {
        ornek.Degree=ornek.Degree + 3
    })
    ornek2 = new Ucgen()
    ornek2.setPosition(30, 40)
    ornek2.setRotate(135)
    ornek2.color = 'RGBA(255,0,0,0.7)'
    ornek2.on('onmouseover', () => {
        ornek2.degree = ornek2.degree - 3.1
    })
    let objectList=[]
    for (let i=0;i<500;i++){
        let ornek5 = new Kare()
        ornek5.name = 'kare'
        ornek5.setPosition(300, 150)
        ornek5.setSize(160)
        ornek5.setAngles()
        ornek5.setRotate(30)
        ornek5.color = 'blue'
        objectList.push(ornek5)
    }
    objectList[0].on('onmouseover', () => {
        objectList[0].Degree=objectList[0].Degree + 3
    })
    //var canvas=document.createElement("canvas")
    //canvas.setAttribute("id","canvas_id")
    engine = new Engine(1200,500,"canvas_id")
    engine.add(ornek);
    ornek.add(ornek2)
    
    for (let i=0;i<objectList.length;i++){
        engine.add(objectList[i])
        
    }    
}
function fonk () {
    ornek.autoRender=false
}
function fonk2 () {
    ornek.autoRender=true
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
window.Circle=Circle
window.Ucgen=Ucgen