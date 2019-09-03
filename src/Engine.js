import { DisplayContainer } from './DisplayContainer'
export class Engine extends DisplayContainer {
    constructor (options) {
        super()
        this.count=0;
        this.frameCount = 0
        this.lastFrameCount = 0
        this.autoRender = true
        this.canvasbackgroundColor = '#f1f1f1'
        this.newTime = 0
        this.lastTime = 0
         this.element=document.getElementById("fps")
        this.renderVerify = false
        this.width = 1200
        this.height = 600
        this.mousePosition = [0, 0]
        //this.frameCalculator()
        let canvasArg
        if (options === undefined) { options = {} }
        if (options.width !== undefined) { this.width = options.width }
        if (options.height !== undefined) { this.height = options.height }
        if (options.canvas !== undefined) { canvasArg = options.canvas }
        if (options.autoRender !== undefined) { this.autoRender = options.autoRender }
        if (options.frameRate !== undefined) { this._frameRate = options.frameRate }
        if (options.backgroundColor !== undefined) { this.canvasbackgroundColor = options.backgroundColor }
        this.canvasCreater(canvasArg)
        console.log(this._frameRate)
        this.canvas.onmousemove = (mouseEvent) => this.findMouseCoords(mouseEvent, this.canvas)
        this.updateScreen()
    }

    canvasCreater (canvasParameter) {
        if (canvasParameter === undefined) {
            this.canvas = document.createElement('canvas')
        } else if (typeof (canvasParameter) === 'string') {
            this.canvas = document.getElementById(canvasParameter)
        } else if (typeof (canvasParameter) === 'object') {
            this.canvas = canvasParameter
        }
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.canvas.style.backgroundColor = this.canvasbackgroundColor
        this.context = this.canvas.getContext('2d')
        try{
        document.body.insertBefore(this.canvas, document.body.childNodes[0])}
        catch(err){
            console.log(err)
        }
    }

    updateScreen () { // bu fonksiyon her frame de context'i temizler mouse konumunu yakalar ve update fonksiyonunu çağırır
        try {
            this.count++;
            
            this.frameCount++
            this.clear()
            this.renderVerify = this.update(this.context)
            this.checkMouseOver(this.mousePosition[0], this.mousePosition[1])
            if (this.renderVerify === true) {
                requestAnimationFrame(() => this.updateScreen())
            }
            this.element.innerHTML = 'fps: ' + this.frameRate
        } catch (err) {
            // console.log(err)
        }
    }

    checkMouseOver (x, y) {
        for (let i = 0; i < this._children.length; i++) {
            this._children[i].checkOver(x, y, this.context)
        }
    }

    findMouseCoords (mouseEvent, canvas) {
        var xpos
        var ypos
        if (mouseEvent) {
            // FireFox
            var rect = canvas.getBoundingClientRect()
            xpos = mouseEvent.pageX
            ypos = mouseEvent.pageY
        } else {
            // IE
            xpos = window.event.x + document.body.scrollLeft - 2
            ypos = window.event.y + document.body.scrollTop - 2
        }
        xpos = xpos - rect.left
        ypos = ypos - rect.top
        // console.log(xpos, ypos)
        this.mousePosition = [xpos, ypos]
    }

    clear () {
        this.context.clearRect(0, 0, this.width, this.height)
    }

    get backgroundColor () {
        return this.canvasbackgroundColor
    }

    set backgroundColor (color) {
        if (typeof (color) === 'number') {
            color = this._toColor(color)
        }
        this.canvasbackgroundColor = color
        this.canvas.style.backgroundColor = this.canvasbackgroundColor
    }

    frameCalculator () {
        setInterval(() => {
            this._frameRate = this.frameCount - this.lastFrameCount
            this.lastFrameCount = this.frameCount
        }, 1000)
    }

    get frameRate () {
        return this._frameRate
    }

    _toColor (num) {
        console.log('geldi to color')
        num >>>= 0
        var b = num & 0xFF
        var g = (num & 0xFF00) >>> 8
        var r = (num & 0xFF0000) >>> 16
        const color = 'rgb(' + [r, g, b].join(',') + ')'
        console.log(color)
        return color
    }
}
