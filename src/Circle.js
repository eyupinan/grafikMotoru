import { DrawableObject } from './DrawableObject'
export class Circle extends DrawableObject {
    constructor (options) {
        super()
        this._yariCap=20

        super.setPosition(20, 20)
        if (options===undefined){options={}}
        if (options.yaricap!==undefined){this._yariCap=options.yaricap}
    }
    set yariCap(yaricap){
        this._yariCap=yaricap
    }
    get yariCap(){
        return this._yariCap
    }
    
    setAngles () {
        this.centerCircle=[this._yariCap,this._yariCap]
        for (let i=0;i<360;i){
             super.setAngle(this.centerCircle[0]+(this._yariCap*Math.sin(this.degreesToRadians(i))),this.centerCircle[1]-(this._yariCap*Math.cos(this.degreesToRadians(i))))
            i=i+5
            }
        
    }
    resize(){
        this.clearAngles()
        this.setAngles()
    }
    
}