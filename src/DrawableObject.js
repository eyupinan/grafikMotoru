import { DisplayContainer } from './DisplayContainer'
export class DrawableObject extends DisplayContainer {
    constructor () {
        super()
    }
    setAngle (x, y) {
        this.angles[this.angles.length] = [x, y, 1]
    }

    getAngles () {
        return this.angles
    }

    setPosition (x, y) {
        this.ownX = x
        this.ownY = y
        try{
        this.x = this._parent.getPosition()[0] + x
        this.y = this._parent.getPosition()[1] + y
        }catch(err){
        this.x=x;
        this.y=y;
        }
        for (let i = 0; i < this._children.length; i++) {
            this._children[i].setPosition(this._children[i].getOwnPosition()[0], this._children[i].getOwnPosition()[1])
        }
    }

    getOwnPosition () {
        return [this.ownX, this.ownY]
    }

    getPosition () {
        return [this.x, this.y]
    }
    setParent (obj) {
        this._parent = obj
    }
    getDegree () {
        return this.degree
    }
    setRotate (degree) {
        this.degree = degree
        const center = this.center()
        const position = this.getPosition()
        const centerRelated = [center[0] - position[0], position[1] - center[1]]
        const rad = this.degreesToRadians(degree)
        const sonuc1 = this.matrixMultiply(this.angles, [[1, 0, 0],
            [0, 1, 0],
            [-1 * centerRelated[0], centerRelated[1], 1]])
        const sonuc2 = this.matrixMultiply(sonuc1, [[Math.cos(rad), -1 * Math.sin(rad), 0],
            [Math.sin(rad), Math.cos(rad), 0],
            [0, 0, 1]])
        this.rotatedAngles = this.matrixMultiply(sonuc2, [[1, 0, 0],
            [0, 1, 0],
            [centerRelated[0], -1 * centerRelated[1], 1]])
    }
    center () {
        let totalX = 0
        let totalY = 0
        for (let i = 0; i < this.angles.length; i++) {
            totalX = totalX + this.angles[i][0]
            totalY = totalY + this.angles[i][1]
        }
        const center = [this.getPosition()[0] + (totalX / this.angles.length), this.getPosition()[1] + (totalY / this.angles.length)]
        this.centerPosition = center
        return center
    }

    matrixMultiply (a, b) {
        var aNumRows = a.length; var aNumCols = a[0].length
        var bNumCols = b[0].length
        var m = new Array(aNumRows)
        for (var r = 0; r < aNumRows; ++r) {
            m[r] = new Array(bNumCols)
            for (var c = 0; c < bNumCols; ++c) {
                m[r][c] = 0
                for (var i = 0; i < aNumCols; ++i) {
                    m[r][c] += a[r][i] * b[i][c]
                }
            }
        }
        return m
    }

    degreesToRadians (degrees) {
        var pi = Math.PI
        return degrees * (pi / 180)
    }
    set Degree(degree){
        this.degree=degree;
        for (let i=0;i<this._children.length;i++){
            this._children[i].Degree=this._children[i].Degree + 3
        }
        
    }
    get Degree(){
        return this.degree
    }
    checkOver (x, y,context) {// mouse cismin üzerinde olup olmadığını kontrol ediyor
        const angles = this.rotatedAngles
        context.beginPath()
        try {
            context.moveTo(this.getPosition()[0] + angles[0][0], this.getPosition()[1] + angles[0][1])
            for (let i = 1; i < angles.length; i++) {
                context.lineTo(this.getPosition()[0] + angles[i][0], this.getPosition()[1] + angles[i][1])
            }
            context.lineTo(this.getPosition()[0] + angles[0][0], this.getPosition()[1] + angles[0][1])
            if (context.isPointInPath(x, y)) {
                this.emit('onmouseover')
                this.onmouseover = true
            } else {
                if (this.onmouseover === true) {
                    this.emit('onmouseleft')
                    this.onmouseover = false
                }
            }
            for (let i = 0; i < this._children.length; i++) {
                this._children[i].checkOver(x, y,context)
            }
        } catch (err) {
            //console.log(err)
        }
    }
    
}
