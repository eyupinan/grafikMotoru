import { DrawableObject } from './DrawableObject'
export class Ucgen extends DrawableObject {
    constructor () {
        super()
        const boyut = 120
        this.boyut = boyut
        super.setAngle(0, 0)
        super.setAngle(boyut, 0)
        super.setAngle(boyut / 2, (boyut / 2) * Math.sqrt(3))
        super.setPosition(20, 20)
    }

    draw () {
        super.draw()
    }
}
