import { DrawableObject } from './DrawableObject'
export class Kare extends DrawableObject {
    constructor (options) {
        super()
        
        const boyut = 50
        this.boyut = boyut
        if (options===undefined){options={}}
        if (options.yaricap!==undefined){this._yariCap=options.yaricap}
        if (options.autoRender!==undefined){this.autoRender=options.autoRender}
        if (options.frameRate!==undefined){this.frameRate=this.frameRate}
        if (options.color!==undefined){this.color=options.color}
        if (options.size!==undefined){this.boyut=options.size}
        super.setPosition(20, 20)
        this.setAngles()
    }

    setSize (boyut) {
        this.boyut = boyut
        this.setAngles()
    }

    setAngles () {
        this.clearAngles()
        super.setAngles(0, 0)
        super.setAngles(this.boyut, 0)
        super.setAngles(this.boyut, this.boyut)
        super.setAngles(0, this.boyut)
    }

   
}
