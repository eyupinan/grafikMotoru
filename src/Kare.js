import { DrawableObject } from './DrawableObject'
export class Kare extends DrawableObject {
    constructor () {
        super()
        const boyut = 50
        this.boyut = boyut
        super.setPosition(20, 20)
    }

    setSize (boyut) {
        this.boyut = boyut
    }

    setAngles () {
        super.setAngle(0, 0)
        super.setAngle(this.boyut, 0)
        super.setAngle(this.boyut, this.boyut)
        super.setAngle(0, this.boyut)
    }

    draw () {
        super.draw()
    }
}
