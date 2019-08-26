import { DisplayContainer } from './DisplayContainer'
export class Engine extends DisplayContainer {
    constructor (...options) {
        super()
        this.frameCount=0;
        this.lastFrameCount=0;
        this.autoRender=true
        this.canvasbackgroundColor="#f1f1f1"
        this.newTime = 0
        this.lastTime = 0
        this.element=document.getElementById("fps")
        this.renderVerify = false
        const defaultWidth = 1200
        const defaultHeight = 600
        this.mousePosition = [0, 0]
        this.frameCalculator()
        try {
            if (options[0]===undefined){
                this.width=defaultWidth
                this.height=defaultHeight
                this.canvasCreater()
            }
            else if (typeof(options[0])==="number" && typeof(options[1])==="number"){
                this.width=options[0]
                this.height=options[1]
                this.canvasCreater(options[2])
            }
            else if (typeof(options[0])==="object" || typeof(options[0])==="string" ){
                this.width=defaultWidth
                this.height=defaultHeight
                this.canvasCreater(options[0])
            }
            
        } catch (err) {
            console.log('canvas oluşturulurken bir sorunla karşılaşıldı!')
        }
        
        this.canvas.onmousemove = (mouseEvent) => this.findMouseCoords(mouseEvent, this.canvas)
        this.updateScreen()
    }
    
    canvasCreater (canvasParameter) {
        if (canvasParameter===undefined){
            this.canvas = document.createElement('canvas')
        }
        else if(typeof(canvasParameter)==="string"){
            this.canvas=document.getElementById(canvasParameter)
        }
        else if(typeof(canvasParameter)==="object"){
            this.canvas=canvasParameter
        }
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.canvas.style.backgroundColor=this.canvasbackgroundColor
        this.context = this.canvas.getContext('2d')
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
    }

    updateScreen () { // bu fonksiyon her frame de context'i temizler mouse konumunu yakalar ve update fonksiyonunu çağırır
        try {
            this.frameCount++
            this.clear()
            this.renderVerify = this.update(this.context)
            this.checkMouseOver(this.mousePosition[0], this.mousePosition[1])  
            this.element.innerHTML=this.frameRate

        } catch (err) {
             //console.log(err)
        }
        requestAnimationFrame(() => this.updateScreen())
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
    get backgroundColor(){
        return this.canvasbackgroundColor
    }
    set backgroundColor(color){
        
        if (typeof(color)==="number"){
            color=this._toColor(color)
        }
        this.canvasbackgroundColor=color
        this.canvas.style.backgroundColor=this.canvasbackgroundColor
    }
    frameCalculator(){
        setInterval(()=>{
            console.log(this.frameCount+"-"+this.lastFrameCount)
            this._frameRate=this.frameCount-this.lastFrameCount
            this.lastFrameCount=this.frameCount
        },1000)
    }
    get frameRate(){
        return this._frameRate
    }
    _toColor(num) {
        console.log("geldi to color")
        num >>>= 0;
        var b = num & 0xFF,
            g = (num & 0xFF00) >>> 8,
            r = (num & 0xFF0000) >>> 16,
            a = ( (num & 0xFF000000) >>> 24 ) / 255 ;
        let color="rgb(" + [r, g, b].join(",") + ")"; 
        console.log(color)
        return color;
    }
}
