/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/grafikMotoru.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/eventemt/src/CoreObject.js":
/*!*************************************************!*\
  !*** ./node_modules/eventemt/src/CoreObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class CoreObject {\r\n    constructor () {\r\n        this.listenerList = {}\r\n        this.onceListeners = {}\r\n    }\r\n\r\n    listenerCount (event) {\r\n        let listenerCountVar = 0\r\n        try {\r\n            for (let i = 0; i < this.listenerList[event].length; i++) {\r\n                if (this.listenerList[event][i] !== undefined) {\r\n                    listenerCountVar++\r\n                }\r\n            }\r\n        } catch (err) {\r\n            //\r\n        }\r\n        return listenerCountVar\r\n    }\r\n\r\n    on (event, ...params) {\r\n        // her bir parametre bir fonksiyondur. event hangi aksiyon olduğunu belirtir.\r\n        params.forEach(function (func) {\r\n            // listenin içerisinde undefined değer varmı kontrolü yapılıyor . varsa yeni fonksiyon o adrese yazılıyor.\r\n            let checkUndefined = false\r\n            let indexUndefined\r\n            try {\r\n                checkUndefined = this.listenerList[event].includes(undefined)\r\n                if (checkUndefined) {\r\n                    indexUndefined = this.listenerList[event].indexOf(undefined)\r\n                }\r\n            } catch (err) {\r\n                //\r\n            }\r\n            if (event in this.listenerList) {\r\n                if (!checkUndefined) {\r\n                    this.listenerList[event].push(func)\r\n                } else {\r\n                    // undefined içeren adrese ekleniyor.\r\n                    this.listenerList[event][indexUndefined] = func\r\n                }\r\n            } else {\r\n                this.listenerList[event] = [func]\r\n            }\r\n        }, this)\r\n    }\r\n\r\n    emit (event, ...params) {\r\n        // bu kısımda evente verilmiş olan fonksiyonlara göre parametreler alınır\r\n        // mutualParams değişkeni bütün fonksiyonlara gönderilecek olan değişkenleri içerir liste haline parametre olarak alınır\r\n        // params bir dictionary'dir. her bir fonksiyonun ismine göre parametre listeleri içerir.\r\n        try {\r\n            this.listenerList[event].forEach(function (func) {\r\n                const indexFunc = this.listenerList[event].indexOf(func)\r\n                if (typeof (func) === 'function') {\r\n                    func(...params)\r\n                }\r\n                // bir onceListener listesi var bir kez çağırılacak fonksiyonların listenerList deki index değerleri bu listede tutuluyor\r\n                // bu listedeki indexlerden biri çalıştırıldı ise fonksiyon siliniyor\r\n                try {\r\n                    if (this.onceListeners[event].includes(indexFunc)) {\r\n                        this.listenerList[event][indexFunc] = undefined\r\n                        var veri = this.onceListeners[event].indexOf(indexFunc)\r\n                        this.onceListeners[event] = this.onceListeners[event].filter(function (index) {\r\n                            return index > veri || index < veri\r\n                        })\r\n                    }\r\n                } catch (err) {\r\n                    //\r\n                }\r\n            }, this)\r\n        } catch (err) {\r\n            //\r\n        }\r\n    }\r\n\r\n    remove (event, fonk) {\r\n        // bir event verilir ve fonksiyon isimleri içeren bir liste verilir.\r\n        for (let i = 0; i < this.listenerList[event].length; i++) {\r\n            if (fonk === this.listenerList[event][i]) {\r\n                this.listenerList[event][i] = undefined\r\n            }\r\n        }\r\n    }\r\n\r\n    once (event, ...params) {\r\n        params.forEach(function (func) {\r\n            if (event in this.listenerList) {\r\n                // listenin içerisinde undefined değer varmı kontrolü yapılıyor . varsa yeni fonksiyon o adrese yazılıyor.\r\n                let checkUndefined = false\r\n                let indexUndefined\r\n                try {\r\n                    checkUndefined = this.listenerList[event].includes(undefined)\r\n                    if (checkUndefined) {\r\n                        indexUndefined = this.listenerList[event].indexOf(undefined)\r\n                    }\r\n                } catch (err) {\r\n                    //\r\n                }\r\n                if (!checkUndefined) {\r\n                    this.listenerList[event].push(func)\r\n                } else {\r\n                    this.listenerList[event][indexUndefined] = func\r\n                }\r\n                // onceListeners listesine ekleniyor.\r\n                if (event in this.onceListeners) {\r\n                    this.onceListeners[event].push(this.listenerList[event].indexOf(func))\r\n                } else {\r\n                    this.onceListeners[event] = [this.listenerList[event].indexOf(func)]\r\n                }\r\n            } else {\r\n                this.listenerList[event] = [func]\r\n                this.onceListeners[event] = [0]\r\n            }\r\n        }, this)\r\n    }\r\n}\r\n\r\nmodule.exports = {\r\n    CoreObject: CoreObject\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/eventemt/src/CoreObject.js?");

/***/ }),

/***/ "./src/Circle.js":
/*!***********************!*\
  !*** ./src/Circle.js ***!
  \***********************/
/*! exports provided: Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Circle\", function() { return Circle; });\n/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ \"./src/DrawableObject.js\");\n\r\nclass Circle extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__[\"DrawableObject\"] {\r\n    constructor (options) {\r\n        super()\r\n        this._yariCap=20\r\n\r\n        super.setPosition(20, 20)\r\n        if (options===undefined){options={}}\r\n        if (options.yaricap!==undefined){this._yariCap=options.yaricap}\r\n    }\r\n    set yariCap(yaricap){\r\n        this._yariCap=yaricap\r\n    }\r\n    get yariCap(){\r\n        return this._yariCap\r\n    }\r\n    \r\n    setAngles () {\r\n        this.centerCircle=[this._yariCap,this._yariCap]\r\n        for (let i=0;i<360;i){\r\n             super.setAngle(this.centerCircle[0]+(this._yariCap*Math.sin(this.degreesToRadians(i))),this.centerCircle[1]-(this._yariCap*Math.cos(this.degreesToRadians(i))))\r\n            i=i+5\r\n            }\r\n        \r\n    }\r\n    resize(){\r\n        this.clearAngles()\r\n        this.setAngles()\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack:///./src/Circle.js?");

/***/ }),

/***/ "./src/DisplayContainer.js":
/*!*********************************!*\
  !*** ./src/DisplayContainer.js ***!
  \*********************************/
/*! exports provided: DisplayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayContainer\", function() { return DisplayContainer; });\n/* harmony import */ var eventemt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemt */ \"./node_modules/eventemt/src/CoreObject.js\");\n/* harmony import */ var eventemt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemt__WEBPACK_IMPORTED_MODULE_0__);\n\r\nclass DisplayContainer extends eventemt__WEBPACK_IMPORTED_MODULE_0__[\"CoreObject\"] {\r\n    constructor () {\r\n        super()\r\n        this.autoRender = true\r\n        this._frameRate = 0\r\n        this.deltaTime = 0\r\n        this._children = []\r\n        this._parent = null\r\n        this.degree = 0\r\n        this.rotatedAngles = []\r\n        this.angles = []\r\n        this.name = ''\r\n        this.x = 0\r\n        this.y = 0\r\n        this.ownX = 0\r\n        this.ownY = 0\r\n        this.onmouseover = false\r\n        this.color = '#0ff0f0'\r\n        this.centerPosition = [0, 0]\r\n    }\r\n\r\n    render (context) {\r\n        try {\r\n            var finished = false\r\n\r\n            this.setRotate(this.degree)\r\n\r\n            context.beginPath()\r\n            context.fillStyle = this.color\r\n\r\n            context.moveTo(this.getPosition()[0] + this.rotatedAngles[0][0], this.getPosition()[1] + this.rotatedAngles[0][1])\r\n            for (let i = 1; i < this.rotatedAngles.length; i++) {\r\n                context.lineTo(this.getPosition()[0] + this.rotatedAngles[i][0], this.getPosition()[1] + this.rotatedAngles[i][1])\r\n                if (i === this.rotatedAngles.length - 1) {\r\n                    finished = true\r\n                }\r\n            }\r\n            context.lineTo(this.getPosition()[0] + this.rotatedAngles[0][0], this.getPosition()[1] + this.rotatedAngles[0][1])\r\n            context.fillStyle = this.color\r\n            context.fill()\r\n        } catch (err) {\r\n            finished = true\r\n        }\r\n        if (finished === true) {\r\n            return true\r\n        }\r\n    }\r\n\r\n    add (displayObject) {\r\n        this._children.push(displayObject)\r\n        displayObject._parent = this\r\n        displayObject.setPosition(displayObject.getOwnPosition()[0], displayObject.getOwnPosition()[1])\r\n    }\r\n\r\n    remove (displayObject) {\r\n        const verify = this._children.includes(displayObject)\r\n        if (verify === true) {\r\n            const veri = this._children.indexOf(displayObject)\r\n            const newChildren = []\r\n            for (let i = 0; i < this._children.length; i++) {\r\n                if (veri !== i) {\r\n                    newChildren.push(this._children[i])\r\n                }\r\n            }\r\n            this._children = newChildren\r\n        }\r\n\r\n        // console.log(this._children)\r\n    }\r\n\r\n    get numChildren () {\r\n        return this._children.length\r\n    }\r\n\r\n    get parent () {\r\n        return this._parent\r\n    }\r\n\r\n    update (context) {\r\n        this.lastTime = new Date().getTime()\r\n        var finished\r\n        if (this.autoRender === true) {\r\n            finished = this.render(context)\r\n\r\n            let verify = false\r\n            const verifyList = []\r\n            if (this._children.length === 0) {\r\n                verify = true\r\n            }\r\n            for (let i = 0; i < this._children.length; i++) {\r\n                verifyList[i] = this._children[i].update(context)\r\n            }\r\n            verify = verifyList.every(function (value) {\r\n                return value === true\r\n            })\r\n            if (verify === true && finished === true) {\r\n                this.newTime = new Date().getTime()\r\n                this.deltaTime = (this.newTime - this.lastTime) + 1\r\n                return true\r\n            }\n        } else {\r\n            return true\r\n        }\r\n    }\r\n\r\n    getPosition () {\r\n        return [0, 0]\r\n    }\n}\r\n\n\n//# sourceURL=webpack:///./src/DisplayContainer.js?");

/***/ }),

/***/ "./src/DrawableObject.js":
/*!*******************************!*\
  !*** ./src/DrawableObject.js ***!
  \*******************************/
/*! exports provided: DrawableObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawableObject\", function() { return DrawableObject; });\n/* harmony import */ var _DisplayContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayContainer */ \"./src/DisplayContainer.js\");\n\r\nclass DrawableObject extends _DisplayContainer__WEBPACK_IMPORTED_MODULE_0__[\"DisplayContainer\"] {\r\n    constructor () {\r\n        super()\r\n    }\r\n\r\n    setAngle (x, y) {\r\n        this.angles[this.angles.length] = [x, y, 1]\r\n    }\r\n    clearAngles(){\r\n        this.angles=[]\r\n    }\r\n    getAngles () {\r\n        return this.angles\r\n    }\r\n\r\n    setPosition (x, y) {\r\n        this.ownX = x\r\n        this.ownY = y\r\n        try {\r\n            this.x = this._parent.getPosition()[0] + x\r\n            this.y = this._parent.getPosition()[1] + y\r\n        } catch (err) {\r\n            this.x = x\r\n            this.y = y\r\n        }\r\n        for (let i = 0; i < this._children.length; i++) {\r\n            this._children[i].setPosition(this._children[i].getOwnPosition()[0], this._children[i].getOwnPosition()[1])\r\n        }\r\n    }\r\n\r\n    getOwnPosition () {\r\n        return [this.ownX, this.ownY]\r\n    }\r\n\r\n    getPosition () {\r\n        return [this.x, this.y]\r\n    }\r\n\r\n    setParent (obj) {\r\n        this._parent = obj\r\n    }\r\n\r\n    getDegree () {\r\n        return this.degree\r\n    }\r\n\r\n    setRotate (degree) {\r\n        this.degree = degree\r\n        const center = this.center()\r\n        const position = this.getPosition()\r\n        const centerRelated = [center[0] - position[0], position[1] - center[1]]\r\n        const rad = this.degreesToRadians(degree)\r\n        const sonuc1 = this.matrixMultiply(this.angles, [[1, 0, 0],\r\n            [0, 1, 0],\r\n            [-1 * centerRelated[0], centerRelated[1], 1]])\r\n        const sonuc2 = this.matrixMultiply(sonuc1, [[Math.cos(rad), -1 * Math.sin(rad), 0],\r\n            [Math.sin(rad), Math.cos(rad), 0],\r\n            [0, 0, 1]])\r\n        this.rotatedAngles = this.matrixMultiply(sonuc2, [[1, 0, 0],\r\n            [0, 1, 0],\r\n            [centerRelated[0], -1 * centerRelated[1], 1]])\r\n    }\r\n\r\n    center () {\r\n        let totalX = 0\r\n        let totalY = 0\r\n        for (let i = 0; i < this.angles.length; i++) {\r\n            totalX = totalX + this.angles[i][0]\r\n            totalY = totalY + this.angles[i][1]\r\n        }\r\n        const center = [this.getPosition()[0] + (totalX / this.angles.length), this.getPosition()[1] + (totalY / this.angles.length)]\r\n        this.centerPosition = center\r\n        return center\r\n    }\r\n\r\n    matrixMultiply (a, b) {\r\n        var aNumRows = a.length; var aNumCols = a[0].length\r\n        var bNumCols = b[0].length\r\n        var m = new Array(aNumRows)\r\n        for (var r = 0; r < aNumRows; ++r) {\r\n            m[r] = new Array(bNumCols)\r\n            for (var c = 0; c < bNumCols; ++c) {\r\n                m[r][c] = 0\r\n                for (var i = 0; i < aNumCols; ++i) {\r\n                    m[r][c] += a[r][i] * b[i][c]\r\n                }\r\n            }\r\n        }\r\n        return m\r\n    }\r\n\r\n    degreesToRadians (degrees) {\r\n        var pi = Math.PI\r\n        return degrees * (pi / 180)\r\n    }\r\n\r\n    set Degree (degree) {\r\n        this.degree = degree\r\n        for (let i = 0; i < this._children.length; i++) {\r\n            this._children[i].Degree = this._children[i].Degree + 3\r\n        }\r\n    }\r\n\r\n    get Degree () {\r\n        return this.degree\r\n    }\r\n\r\n    checkOver (x, y, context) { // mouse cismin üzerinde olup olmadığını kontrol ediyor\r\n        const angles = this.rotatedAngles\r\n        context.beginPath()\r\n        try {\r\n            context.moveTo(this.getPosition()[0] + angles[0][0], this.getPosition()[1] + angles[0][1])\r\n            for (let i = 1; i < angles.length; i++) {\r\n                context.lineTo(this.getPosition()[0] + angles[i][0], this.getPosition()[1] + angles[i][1])\r\n            }\r\n            context.lineTo(this.getPosition()[0] + angles[0][0], this.getPosition()[1] + angles[0][1])\r\n            if (context.isPointInPath(x, y)) {\r\n                this.emit('onmouseover')\r\n                this.onmouseover = true\r\n            } else {\r\n                if (this.onmouseover === true) {\r\n                    this.emit('onmouseleft')\r\n                    this.onmouseover = false\r\n                }\r\n            }\r\n            for (let i = 0; i < this._children.length; i++) {\r\n                this._children[i].checkOver(x, y, context)\r\n            }\r\n        } catch (err) {\r\n            // console.log(err)\r\n        }\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/DrawableObject.js?");

/***/ }),

/***/ "./src/Engine.js":
/*!***********************!*\
  !*** ./src/Engine.js ***!
  \***********************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return Engine; });\n/* harmony import */ var _DisplayContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayContainer */ \"./src/DisplayContainer.js\");\n\r\nclass Engine extends _DisplayContainer__WEBPACK_IMPORTED_MODULE_0__[\"DisplayContainer\"] {\r\n    constructor (options) {\r\n        super()\r\n        this.frameCount = 0\r\n        this.lastFrameCount = 0\r\n        this.autoRender = true\r\n        this.canvasbackgroundColor = '#f1f1f1'\r\n        this.newTime = 0\r\n        this.lastTime = 0\r\n         this.element=document.getElementById(\"fps\")\r\n        this.renderVerify = false\r\n        this.width = 1200\r\n        this.height = 600\r\n        this.mousePosition = [0, 0]\r\n        //this.frameCalculator()\r\n        let canvasArg\r\n        if (options === undefined) { options = {} }\r\n        if (options.width !== undefined) { this.width = options.width }\r\n        if (options.height !== undefined) { this.height = options.height }\r\n        if (options.canvas !== undefined) { canvasArg = options.canvas }\r\n        if (options.autoRender !== undefined) { this.autoRender = options.autoRender }\r\n        if (options.frameRate !== undefined) { this._frameRate = options.frameRate }\r\n        if (options.backgroundColor !== undefined) { this.canvasbackgroundColor = options.backgroundColor }\r\n        this.canvasCreater(canvasArg)\r\n        console.log(this._frameRate)\r\n        this.canvas.onmousemove = (mouseEvent) => this.findMouseCoords(mouseEvent, this.canvas)\r\n        this.updateScreen()\r\n    }\r\n\r\n    canvasCreater (canvasParameter) {\r\n        if (canvasParameter === undefined) {\r\n            this.canvas = document.createElement('canvas')\r\n        } else if (typeof (canvasParameter) === 'string') {\r\n            this.canvas = document.getElementById(canvasParameter)\r\n        } else if (typeof (canvasParameter) === 'object') {\r\n            this.canvas = canvasParameter\r\n        }\r\n        this.canvas.width = this.width\r\n        this.canvas.height = this.height\r\n        this.canvas.style.backgroundColor = this.canvasbackgroundColor\r\n        this.context = this.canvas.getContext('2d')\r\n        try{\r\n        document.body.insertBefore(this.canvas, document.body.childNodes[0])}\r\n        catch(err){\r\n            console.log(err)\r\n        }\r\n    }\r\n\r\n    updateScreen () { // bu fonksiyon her frame de context'i temizler mouse konumunu yakalar ve update fonksiyonunu çağırır\r\n        try {\r\n            this.frameCount++\r\n            this.clear()\r\n            this.renderVerify = this.update(this.context)\r\n            this.checkMouseOver(this.mousePosition[0], this.mousePosition[1])\r\n            if (this.renderVerify === true) {\r\n                requestAnimationFrame(() => this.updateScreen())\r\n            }\r\n            this.element.innerHTML = 'fps: ' + this.frameRate\r\n        } catch (err) {\r\n            // console.log(err)\r\n        }\r\n    }\r\n\r\n    checkMouseOver (x, y) {\r\n        for (let i = 0; i < this._children.length; i++) {\r\n            this._children[i].checkOver(x, y, this.context)\r\n        }\r\n    }\r\n\r\n    findMouseCoords (mouseEvent, canvas) {\r\n        var xpos\r\n        var ypos\r\n        if (mouseEvent) {\r\n            // FireFox\r\n            var rect = canvas.getBoundingClientRect()\r\n            xpos = mouseEvent.pageX\r\n            ypos = mouseEvent.pageY\r\n        } else {\r\n            // IE\r\n            xpos = window.event.x + document.body.scrollLeft - 2\r\n            ypos = window.event.y + document.body.scrollTop - 2\r\n        }\r\n        xpos = xpos - rect.left\r\n        ypos = ypos - rect.top\r\n        // console.log(xpos, ypos)\r\n        this.mousePosition = [xpos, ypos]\r\n    }\r\n\r\n    clear () {\r\n        this.context.clearRect(0, 0, this.width, this.height)\r\n    }\r\n\r\n    get backgroundColor () {\r\n        return this.canvasbackgroundColor\r\n    }\r\n\r\n    set backgroundColor (color) {\r\n        if (typeof (color) === 'number') {\r\n            color = this._toColor(color)\r\n        }\r\n        this.canvasbackgroundColor = color\r\n        this.canvas.style.backgroundColor = this.canvasbackgroundColor\r\n    }\r\n\r\n    frameCalculator () {\r\n        setInterval(() => {\r\n            this._frameRate = this.frameCount - this.lastFrameCount\r\n            this.lastFrameCount = this.frameCount\r\n        }, 1000)\r\n    }\r\n\r\n    get frameRate () {\r\n        return this._frameRate\r\n    }\r\n\r\n    _toColor (num) {\r\n        console.log('geldi to color')\r\n        num >>>= 0\r\n        var b = num & 0xFF\r\n        var g = (num & 0xFF00) >>> 8\r\n        var r = (num & 0xFF0000) >>> 16\r\n        const color = 'rgb(' + [r, g, b].join(',') + ')'\r\n        console.log(color)\r\n        return color\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Engine.js?");

/***/ }),

/***/ "./src/Kare.js":
/*!*********************!*\
  !*** ./src/Kare.js ***!
  \*********************/
/*! exports provided: Kare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Kare\", function() { return Kare; });\n/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ \"./src/DrawableObject.js\");\n\r\nclass Kare extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__[\"DrawableObject\"] {\r\n    constructor () {\r\n        super()\r\n        const boyut = 50\r\n        this.boyut = boyut\r\n        super.setPosition(20, 20)\r\n        this.setAngles()\r\n    }\r\n\r\n    setSize (boyut) {\r\n        this.boyut = boyut\r\n        this.setAngles()\r\n    }\r\n\r\n    setAngles () {\r\n        this.clearAngles()\r\n        super.setAngle(0, 0)\r\n        super.setAngle(this.boyut, 0)\r\n        super.setAngle(this.boyut, this.boyut)\r\n        super.setAngle(0, this.boyut)\r\n    }\r\n\r\n   \r\n}\r\n\n\n//# sourceURL=webpack:///./src/Kare.js?");

/***/ }),

/***/ "./src/Ucgen.js":
/*!**********************!*\
  !*** ./src/Ucgen.js ***!
  \**********************/
/*! exports provided: Ucgen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ucgen\", function() { return Ucgen; });\n/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ \"./src/DrawableObject.js\");\n\r\nclass Ucgen extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__[\"DrawableObject\"] {\r\n    constructor () {\r\n        super()\r\n        const boyut = 120\r\n        this.boyut = boyut\r\n        super.setAngle(0, 0)\r\n        super.setAngle(boyut, 0)\r\n        super.setAngle(boyut / 2, (boyut / 2) * Math.sqrt(3))\r\n        super.setPosition(20, 20)\r\n    }\r\n\r\n    \r\n}\r\n\n\n//# sourceURL=webpack:///./src/Ucgen.js?");

/***/ }),

/***/ "./src/grafikMotoru.js":
/*!*****************************!*\
  !*** ./src/grafikMotoru.js ***!
  \*****************************/
/*! exports provided: Engine, DisplayContainer, DrawableObject, Kare, Ucgen, Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Engine */ \"./src/Engine.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return _Engine__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"]; });\n\n/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawableObject */ \"./src/DrawableObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DrawableObject\", function() { return _DrawableObject__WEBPACK_IMPORTED_MODULE_1__[\"DrawableObject\"]; });\n\n/* harmony import */ var _DisplayContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayContainer */ \"./src/DisplayContainer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DisplayContainer\", function() { return _DisplayContainer__WEBPACK_IMPORTED_MODULE_2__[\"DisplayContainer\"]; });\n\n/* harmony import */ var _Kare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Kare */ \"./src/Kare.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Kare\", function() { return _Kare__WEBPACK_IMPORTED_MODULE_3__[\"Kare\"]; });\n\n/* harmony import */ var _Ucgen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ucgen */ \"./src/Ucgen.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Ucgen\", function() { return _Ucgen__WEBPACK_IMPORTED_MODULE_4__[\"Ucgen\"]; });\n\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Circle */ \"./src/Circle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Circle\", function() { return _Circle__WEBPACK_IMPORTED_MODULE_5__[\"Circle\"]; });\n\n\r\n\r\n\r\n \r\n\r\n\r\n\r\nwindow.Engine=_Engine__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"]\r\nwindow.DisplayContainer.DisplayContainer\r\nwindow.DrawableObject=_DrawableObject__WEBPACK_IMPORTED_MODULE_1__[\"DrawableObject\"]\r\nwindow.Kare=_Kare__WEBPACK_IMPORTED_MODULE_3__[\"Kare\"]\r\nwindow.Circle=_Circle__WEBPACK_IMPORTED_MODULE_5__[\"Circle\"]\r\nwindow.Ucgen=_Ucgen__WEBPACK_IMPORTED_MODULE_4__[\"Ucgen\"]\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/grafikMotoru.js?");

/***/ })

/******/ });