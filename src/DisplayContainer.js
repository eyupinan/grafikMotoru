import { CoreObject } from 'eventemt'
export class DisplayContainer extends CoreObject {
    constructor () {
        super()
        this.autoRender = true
        this._frameRate = 0
        this.deltaTime = 0
        this._children = []
        this._parent = null
        this.degree = 0
        this.rotatedAngles = []
        this.angles = []
        this.edges=[]
        this.name = ''
        this.x = 0
        this.y = 0
        this.ownX = 0
        this.ownY = 0
        this.onmouseover = false
        this.color = '#0ff0f0'
        this.centerPosition = [0, 0]
        this.strokeColor="red"
        this.strokeSwitch=false
        this.fillSwitch=true
    }

    /*render (context) {
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
            context.strokeStyle="red"
            context.stroke()
        } catch (err) {
            finished = true
        }
        if (finished === true) {
            return true
        }
    }*/
    render(context){
        try {
            var finished = false
            let yedek=this.rotatedAngles

            try{
            this.setRotate(this.degree)
            }
            catch(err){
                //console.log(err)
                this.rotatedAngles=yedek
            }
            if(this.edges[0]!==undefined){
                try{
                if (this.rotatedAngles.length===0){
                    finished=true
                }
                let konum=this.edges[0][0]
                this.paths=[]
                let path=[]
                this.kenarCizimi(konum,path)
                finished=true
                for (let k=0;k<this.paths.length;k++){
                    let adres=this.paths[k][0]
                    context.beginPath()
                    context.moveTo(this.getPosition()[0] + this.rotatedAngles[adres][0], this.getPosition()[1] + this.rotatedAngles[adres][1])
                    for(let y=1;y<this.paths[k].length;y++){
                        let adres=this.paths[k][y]
                        context.lineTo(this.getPosition()[0] + this.rotatedAngles[adres][0], this.getPosition()[1] + this.rotatedAngles[adres][1])

                    }
                    if (this.fillSwitch===true){
                        context.fillStyle = this.color
                        context.fill()
                        }
                    if(this.strokeSwitch===true){
                    context.strokeStyle=this.strokeColor
                    context.stroke()}

                }
                

                                             
            }catch(err){
                    finished=true}
            }
            if (this.edges[0]===undefined){
                context.beginPath()

                context.moveTo(this.getPosition()[0] + this.rotatedAngles[0][0], this.getPosition()[1] + this.rotatedAngles[0][1])
                for (let i = 1; i < this.rotatedAngles.length; i++) {
                    context.lineTo(this.getPosition()[0] + this.rotatedAngles[i][0], this.getPosition()[1] + this.rotatedAngles[i][1])
                    if (i === this.rotatedAngles.length - 1) {
                        finished = true
                    }
                }
                context.lineTo(this.getPosition()[0] + this.rotatedAngles[0][0], this.getPosition()[1] + this.rotatedAngles[0][1])
                if (this.fillSwitch===true){
                context.fillStyle = this.color
                context.fill()
                }
                if(this.strokeSwitch===true){
                    context.strokeStyle=this.strokeColor
                    context.stroke()
                }
                
            }
            
        } catch (err) {
            finished = true
        }
        if (finished === true) {
            return true
        }
    }
    kenarCizimi(konum,path){
            
                if(!path.includes(konum)){
                    path.push(konum)
                    let verify=false
                    for (let q=0;q<this.edges.length;q++){
                        if(this.edges[q][0]===konum){
                            let newPath=[]
                            for (let z=0;z<path.length;z++){
                                newPath.push(path[z])
                            }
                            verify=true
                            this.kenarCizimi(this.edges[q][1],newPath)
                            

                        }
                    }
                    if(verify===false){
                        this.paths.push(path)
                    }
                }
                else{
                    path.push(konum)
                    this.paths.push(path);
                }
            






            /*if(this.doneList.includes(konum)){
                return true
            }
            let t;
            t=this.edges[konum][1]
            //context.lineTo(this.getPosition()[0] + this.rotatedAngles[t][0], this.getPosition()[1] + this.rotatedAngles[t][1])
            this.doneList.push(konum)
            let verify=false
            for(let o=0;o<this.edges.length;o++){
                if(this.edges[o][0]===t){
                    konum=o
                    verify=true
                    this.kenarCizimi(context,konum)
                }
            }   
            if (verify===false){
                return true
            } */
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
        if (this.autoRender === true) {
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
                this.deltaTime = (this.newTime - this.lastTime) + 1
                return true
            }
        } else {
            return true
        }
    }

    getPosition () {
        return [0, 0]
    }
    
}
