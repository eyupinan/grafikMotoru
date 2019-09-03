import { DrawableObject } from './DrawableObject'
export class Ucgen extends DrawableObject {
    constructor (options) {
        super()
        const boyut = 120
        this.boyut = boyut
        if (options===undefined){options={}}
        if (options.yaricap!==undefined){this._yariCap=options.yaricap}
        if(options.autoRender!==undefined){this.autoRender=options.autoRender}
        if(options.frameRate!==undefined){this.frameRate=this.frameRate}
        if(options.color!=undefined){this.color=options.color}
        if (options.size!==undefined){this.boyut=options.size}
    }
    setSize(size){
        this.boyut=size
    }
    setAngles(){
        super.setAngles(0, 0)
        super.setAngles(this.boyut, 0)
        super.setAngles(this.boyut / 2, (this.boyut / 2) * Math.sqrt(3))
        
    }

    
}
