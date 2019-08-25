import { DisplayContainer } from './DisplayContainer'
export class Engine extends DisplayContainer {
    constructor (...options) {
        super()
        this.newTime = 0
        this.lastTime = 0
        this.renderVerify = false
        const defaultWidth = 1200
        const defaultHeight = 600
        this.mousePosition = [0, 0]
        try {
            if ((typeof (options[0]) === 'object') || (typeof (options[0]) === 'string')) {
                if (typeof (options[0] === 'string')) {
                    this.canvas = options[0]
                    this.context = this.canvas.getContext('2d')
                } else if (typeof (options[0] === 'string')) {
                    this.canvas = document.getElementById(options[0])
                    this.context = this.canvas.getContext('2d')
                }
                if ((typeof (options[1]) !== 'undefined') && (typeof (options[2]) !== 'undefined')) {
                    this.width = options[1]
                    this.height = options[2]
                } else {
                    this.width = defaultWidth
                    this.height = defaultHeight
                }
            } else if (typeof (options[0]) === 'undefined') {
                this.width = defaultWidth
                this.height = defaultHeight
                this.canvasCreater()
            } else if (typeof (options[0]) === 'number') {
                this.width = options[0]
                if (typeof (options[1]) === 'number') {
                    this.height = options[1]
                }
                this.canvasCreater()
            }
        } catch (err) {
            console.log('canvas oluşturulurken bir sorunla karşılaşıldı!')
        }
        this.canvas.onmousemove = (mouseEvent) => this.findMouseCoords(mouseEvent, this.canvas)
        this.updateScreen()
    }

    canvasCreater () {
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.context = this.canvas.getContext('2d')
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
    }

    updateScreen () { // bu fonksiyon her frame de context'i temizler mouse konumunu yakalar ve update fonksiyonunu çağırır
        try {
            this.clear()
            this.renderVerify = this.update(this.context)
            this.checkMouseOver(this.mousePosition[0], this.mousePosition[1])
            Element = document.getElementById('gecikme')
            Element.innerHTML = 'gecikme: ' + this.deltaTime
            Element = document.getElementById('objnum')
            Element.innerHTML = 'obje sayısı: ' + this.numChildren
            // console.log("gecikme:"+this.deltaTime)
            requestAnimationFrame(() => this.updateScreen())
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
}
