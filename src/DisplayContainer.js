import { CoreObject } from 'eventemt'
export class DisplayContainer extends CoreObject {
    constructor () {
        super()
        this.autoRender=true
        this.frameRate=0;
        this.deltaTime = 0
        this._children = []
        this._parent = null
        this.degree = 0
        this.rotatedAngles = []
        this.angles = []
        this.name = ''
        this.x = 0
        this.y = 0
        this.ownX = 0
        this.ownY = 0
        this.onmouseover = false
        this.color = '#0ff0f0'
        this.centerPosition = [0, 0]
    }

    render (context) {
        try {
            var finished = false

            this.setRotate(this.degree)

            context.beginPath()
            context.fillStyle = this.color

            context.moveTo(this.getPosition()[0] + this.rotatedAngles[0][0], this.getPosition()[1] + this.rotatedAngles[0][1])
            for (let i = 1; i < this.rotatedAngles.length; i++) {
                context.lineTo(this.getPosition()[0] + this.rotatedAngles[i][0], this.getPosition()[1] + this.rotatedAngles[i][1])
                if (i === this.rotatedAngles.length - 1) {
                    finished = true
                }
            }
            context.lineTo(this.getPosition()[0] + this.rotatedAngles[0][0], this.getPosition()[1] + this.rotatedAngles[0][1])
            context.fillStyle = this.color
            context.fill()
        } catch (err) {
            finished = true
        }
        if (finished === true) {
            return true
        }
    }

    add (displayObject) {
        this._children.push(displayObject)
        displayObject._parent = this
        displayObject.setPosition(displayObject.getOwnPosition()[0], displayObject.getOwnPosition()[1])
    }

    remove (displayObject) {
        const verify = this._children.includes(displayObject)
        if (verify === true) {
            const veri = this._children.indexOf(displayObject)
            const newChildren = []
            for (let i = 0; i < this._children.length; i++) {
                if (veri !== i) {
                    newChildren.push(this._children[i])
                }
            }
            this._children = newChildren
        }

        // console.log(this._children)
    }

    get numChildren () {
        return this._children.length
    }

    get parent () {
        return this._parent
    }

    update (context) {
        this.lastTime = new Date().getTime()
        var finished
        if (this.autoRender===true){
            finished = this.render(context)
        
        let verify = false
        const verifyList = []
        if (this._children.length === 0) {
            verify = true
        }
        for (let i = 0; i < this._children.length; i++) {
            verifyList[i] = this._children[i].update(context)
        }
        verify = verifyList.every(function (value) {
            return value === true
        })
        if (verify === true && finished === true) {
            this.newTime = new Date().getTime()
            this.deltaTime = this.newTime - this.lastTime
            this.frameRate=1000/this.deltaTime
            
            
            return true
        }}
        else{
            return true
        }
    }

    getPosition () {
        return [0, 0]
    }
    
}
