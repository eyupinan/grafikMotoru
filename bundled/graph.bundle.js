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
/******/ 	return __webpack_require__(__webpack_require__.s = "./deneme.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./deneme.js":
/*!*******************!*\
  !*** ./deneme.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Engine */ \"./src/Engine.js\");\n/* harmony import */ var _src_DrawableObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/DrawableObject */ \"./src/DrawableObject.js\");\n/* harmony import */ var _src_Kare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Kare */ \"./src/Kare.js\");\n/* harmony import */ var _src_Ucgen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Ucgen */ \"./src/Ucgen.js\");\n\n\n\n\nconst ornek = new _src_Kare__WEBPACK_IMPORTED_MODULE_2__[\"Kare\"]()\nornek.name = 'kare'\nornek.setPosition(100, 150)\nornek.setSize(160)\nornek.setAngles()\nornek.setRotate(0)\nornek.color = 'blue'\nornek.on('onmouseover', () => {\n    ornek.Degree=ornek.Degree + 3\n})\nconst ornek2 = new _src_Ucgen__WEBPACK_IMPORTED_MODULE_3__[\"Ucgen\"]()\nornek2.setPosition(30, 40)\nornek2.setRotate(135)\nornek2.color = 'RGBA(255,0,0,0.7)'\nornek2.on('onmouseover', () => {\n    ornek2.degree = ornek2.degree - 3.1\n})\nconst ornek3 = new _src_Kare__WEBPACK_IMPORTED_MODULE_2__[\"Kare\"]()\nornek3.setPosition(35, 10)\nornek3.setSize(50)\nornek3.setAngles()\nornek3.setRotate(80)\nornek3.color = 'yellow'\nornek3.on('onmouseover', () => {\n    ornek3.degree = ornek3.degree + 6\n})\nlet objectList=[]\nfor (let i=0;i<1000;i++){\n    let ornek5 = new _src_Kare__WEBPACK_IMPORTED_MODULE_2__[\"Kare\"]()\n    ornek5.name = 'kare'\n    ornek5.setPosition(300, 150)\n    ornek5.setSize(160)\n    ornek5.setAngles()\n    ornek5.setRotate(30)\n    ornek5.color = 'blue'\n    objectList.push(ornek5)\n}\nconst engine = new _src_Engine__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"]()\nengine.add(ornek);\nornek.add(ornek2)\nornek2.add(ornek3)\nfor (let i=0;i<objectList.length;i++){\n    engine.add(objectList[i])\n    \n}\n\n\nconsole.log(ornek2._parent)\nfunction fonk () {\n    ornek.setPosition(ornek.getOwnPosition()[0] + 30, ornek.getOwnPosition()[1] + 30)\n}\nfunction fonk2 () {\n    ornek2.setPosition(ornek2.getOwnPosition()[0] + 5, ornek2.getOwnPosition()[1] + 5)\n}\nfunction fonk3 () {\n    ornek3.setPosition(ornek3.getOwnPosition()[0] + 5, ornek3.getOwnPosition()[1] + 5)\n}\nfunction fonk4(){\n    ornek.remove(ornek2);\n}\nwindow.fonk = fonk\nwindow.fonk2 = fonk2\nwindow.fonk3 = fonk3\nwindow.fonk4=fonk4\n\n//# sourceURL=webpack:///./deneme.js?");

/***/ }),

/***/ "./node_modules/eventemt/src/CoreObject.js":
/*!*************************************************!*\
  !*** ./node_modules/eventemt/src/CoreObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class CoreObject {\r\n    constructor () {\r\n        this.listenerList = {}\r\n        this.onceListeners = {}\r\n    }\r\n\r\n    listenerCount (event) {\r\n        let listenerCountVar = 0\r\n        try {\r\n            for (let i = 0; i < this.listenerList[event].length; i++) {\r\n                if (this.listenerList[event][i] !== undefined) {\r\n                    listenerCountVar++\r\n                }\r\n            }\r\n        } catch (err) {\r\n            //\r\n        }\r\n        return listenerCountVar\r\n    }\r\n\r\n    on (event, ...params) {\r\n        // her bir parametre bir fonksiyondur. event hangi aksiyon olduğunu belirtir.\r\n        params.forEach(function (func) {\r\n            // listenin içerisinde undefined değer varmı kontrolü yapılıyor . varsa yeni fonksiyon o adrese yazılıyor.\r\n            let checkUndefined = false\r\n            let indexUndefined\r\n            try {\r\n                checkUndefined = this.listenerList[event].includes(undefined)\r\n                if (checkUndefined) {\r\n                    indexUndefined = this.listenerList[event].indexOf(undefined)\r\n                }\r\n            } catch (err) {\r\n                //\r\n            }\r\n            if (event in this.listenerList) {\r\n                if (!checkUndefined) {\r\n                    this.listenerList[event].push(func)\r\n                } else {\r\n                    // undefined içeren adrese ekleniyor.\r\n                    this.listenerList[event][indexUndefined] = func\r\n                }\r\n            } else {\r\n                this.listenerList[event] = [func]\r\n            }\r\n        }, this)\r\n    }\r\n\r\n    emit (event, ...params) {\r\n        // bu kısımda evente verilmiş olan fonksiyonlara göre parametreler alınır\r\n        // mutualParams değişkeni bütün fonksiyonlara gönderilecek olan değişkenleri içerir liste haline parametre olarak alınır\r\n        // params bir dictionary'dir. her bir fonksiyonun ismine göre parametre listeleri içerir.\r\n        try {\r\n            this.listenerList[event].forEach(function (func) {\r\n                const indexFunc = this.listenerList[event].indexOf(func)\r\n                if (typeof (func) === 'function') {\r\n                    func(...params)\r\n                }\r\n                // bir onceListener listesi var bir kez çağırılacak fonksiyonların listenerList deki index değerleri bu listede tutuluyor\r\n                // bu listedeki indexlerden biri çalıştırıldı ise fonksiyon siliniyor\r\n                try {\r\n                    if (this.onceListeners[event].includes(indexFunc)) {\r\n                        this.listenerList[event][indexFunc] = undefined\r\n                        var veri = this.onceListeners[event].indexOf(indexFunc)\r\n                        this.onceListeners[event] = this.onceListeners[event].filter(function (index) {\r\n                            return index > veri || index < veri\r\n                        })\r\n                    }\r\n                } catch (err) {\r\n                    //\r\n                }\r\n            }, this)\r\n        } catch (err) {\r\n            //\r\n        }\r\n    }\r\n\r\n    remove (event, fonk) {\r\n        // bir event verilir ve fonksiyon isimleri içeren bir liste verilir.\r\n        for (let i = 0; i < this.listenerList[event].length; i++) {\r\n            if (fonk === this.listenerList[event][i]) {\r\n                this.listenerList[event][i] = undefined\r\n            }\r\n        }\r\n    }\r\n\r\n    once (event, ...params) {\r\n        params.forEach(function (func) {\r\n            if (event in this.listenerList) {\r\n                // listenin içerisinde undefined değer varmı kontrolü yapılıyor . varsa yeni fonksiyon o adrese yazılıyor.\r\n                let checkUndefined = false\r\n                let indexUndefined\r\n                try {\r\n                    checkUndefined = this.listenerList[event].includes(undefined)\r\n                    if (checkUndefined) {\r\n                        indexUndefined = this.listenerList[event].indexOf(undefined)\r\n                    }\r\n                } catch (err) {\r\n                    //\r\n                }\r\n                if (!checkUndefined) {\r\n                    this.listenerList[event].push(func)\r\n                } else {\r\n                    this.listenerList[event][indexUndefined] = func\r\n                }\r\n                // onceListeners listesine ekleniyor.\r\n                if (event in this.onceListeners) {\r\n                    this.onceListeners[event].push(this.listenerList[event].indexOf(func))\r\n                } else {\r\n                    this.onceListeners[event] = [this.listenerList[event].indexOf(func)]\r\n                }\r\n            } else {\r\n                this.listenerList[event] = [func]\r\n                this.onceListeners[event] = [0]\r\n            }\r\n        }, this)\r\n    }\r\n}\r\n\r\nmodule.exports = {\r\n    CoreObject: CoreObject\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/eventemt/src/CoreObject.js?");

/***/ }),

/***/ "./src/DisplayContainer.js":
/*!*********************************!*\
  !*** ./src/DisplayContainer.js ***!
  \*********************************/
/*! exports provided: DisplayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayContainer\", function() { return DisplayContainer; });\n/* harmony import */ var eventemt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemt */ \"./node_modules/eventemt/src/CoreObject.js\");\n/* harmony import */ var eventemt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemt__WEBPACK_IMPORTED_MODULE_0__);\n\nclass DisplayContainer extends eventemt__WEBPACK_IMPORTED_MODULE_0__[\"CoreObject\"] {\n    constructor () {\n        super()\n        this.deltaTime = 0\n        this._children = []\n        this._parent = null\n        this.degree = 0\n        this.rotatedAngles = []\n        this.angles = []\n        this.name = ''\n        this.x = 0\n        this.y = 0\n        this.ownX = 0\n        this.ownY = 0\n        this.onmouseover = false\n        this.color = '#0ff0f0'\n        this.centerPosition = [0, 0]\n    }\n\n    render (context) {\n        try {\n            var finished = false\n\n            this.setRotate(this.degree)\n\n            context.beginPath()\n            context.fillStyle = this.color\n\n            context.moveTo(this.getPosition()[0] + this.rotatedAngles[0][0], this.getPosition()[1] + this.rotatedAngles[0][1])\n            for (let i = 1; i < this.rotatedAngles.length; i++) {\n                context.lineTo(this.getPosition()[0] + this.rotatedAngles[i][0], this.getPosition()[1] + this.rotatedAngles[i][1])\n                if (i === this.rotatedAngles.length - 1) {\n                    finished = true\n                }\n            }\n            context.lineTo(this.getPosition()[0] + this.rotatedAngles[0][0], this.getPosition()[1] + this.rotatedAngles[0][1])\n            context.fillStyle = this.color\n            context.fill()\n        } catch (err) {\n            finished = true\n        }\n        if (finished === true) {\n            return true\n        }\n    }\n\n    add (displayObject) {\n        this._children.push(displayObject)\n        displayObject._parent = this\n        displayObject.setPosition(displayObject.getOwnPosition()[0], displayObject.getOwnPosition()[1])\n    }\n\n    remove (displayObject) {\n        const verify = this._children.includes(displayObject)\n        if (verify === true) {\n            const veri = this._children.indexOf(displayObject)\n            const newChildren = []\n            for (let i = 0; i < this._children.length; i++) {\n                if (veri !== i) {\n                    newChildren.push(this._children[i])\n                }\n            }\n            this._children = newChildren\n        }\n\n        // console.log(this._children)\n    }\n\n    get numChildren () {\n        return this._children.length\n    }\n\n    get parent () {\n        return this._parent\n    }\n\n    update (context) {\n        this.lastTime = new Date().getTime()\n        const finished = this.render(context)\n        let verify = false\n        const verifyList = []\n        if (this._children.length === 0) {\n            verify = true\n        }\n        for (let i = 0; i < this._children.length; i++) {\n            verifyList[i] = this._children[i].update(context)\n        }\n        verify = verifyList.every(function (value) {\n            return value === true\n        })\n        if (verify === true && finished === true) {\n            this.newTime = new Date().getTime()\n            this.deltaTime = this.newTime - this.lastTime\n            return true\n        }\n    }\n\n    getPosition () {\n        return [0, 0]\n    }\n}\n\n\n//# sourceURL=webpack:///./src/DisplayContainer.js?");

/***/ }),

/***/ "./src/DrawableObject.js":
/*!*******************************!*\
  !*** ./src/DrawableObject.js ***!
  \*******************************/
/*! exports provided: DrawableObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawableObject\", function() { return DrawableObject; });\n/* harmony import */ var _DisplayContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayContainer */ \"./src/DisplayContainer.js\");\n\nclass DrawableObject extends _DisplayContainer__WEBPACK_IMPORTED_MODULE_0__[\"DisplayContainer\"] {\n    constructor () {\n        super()\n    }\n\n    setAngle (x, y) {\n        this.angles[this.angles.length] = [x, y, 1]\n    }\n\n    getAngles () {\n        return this.angles\n    }\n\n    setPosition (x, y) {\n        this.ownX = x\n        this.ownY = y\n        try {\n            this.x = this._parent.getPosition()[0] + x\n            this.y = this._parent.getPosition()[1] + y\n        } catch (err) {\n            this.x = x\n            this.y = y\n        }\n        for (let i = 0; i < this._children.length; i++) {\n            this._children[i].setPosition(this._children[i].getOwnPosition()[0], this._children[i].getOwnPosition()[1])\n        }\n    }\n\n    getOwnPosition () {\n        return [this.ownX, this.ownY]\n    }\n\n    getPosition () {\n        return [this.x, this.y]\n    }\n\n    setParent (obj) {\n        this._parent = obj\n    }\n\n    getDegree () {\n        return this.degree\n    }\n\n    setRotate (degree) {\n        this.degree = degree\n        const center = this.center()\n        const position = this.getPosition()\n        const centerRelated = [center[0] - position[0], position[1] - center[1]]\n        const rad = this.degreesToRadians(degree)\n        const sonuc1 = this.matrixMultiply(this.angles, [[1, 0, 0],\n            [0, 1, 0],\n            [-1 * centerRelated[0], centerRelated[1], 1]])\n        const sonuc2 = this.matrixMultiply(sonuc1, [[Math.cos(rad), -1 * Math.sin(rad), 0],\n            [Math.sin(rad), Math.cos(rad), 0],\n            [0, 0, 1]])\n        this.rotatedAngles = this.matrixMultiply(sonuc2, [[1, 0, 0],\n            [0, 1, 0],\n            [centerRelated[0], -1 * centerRelated[1], 1]])\n    }\n\n    center () {\n        let totalX = 0\n        let totalY = 0\n        for (let i = 0; i < this.angles.length; i++) {\n            totalX = totalX + this.angles[i][0]\n            totalY = totalY + this.angles[i][1]\n        }\n        const center = [this.getPosition()[0] + (totalX / this.angles.length), this.getPosition()[1] + (totalY / this.angles.length)]\n        this.centerPosition = center\n        return center\n    }\n\n    matrixMultiply (a, b) {\n        var aNumRows = a.length; var aNumCols = a[0].length\n        var bNumCols = b[0].length\n        var m = new Array(aNumRows)\n        for (var r = 0; r < aNumRows; ++r) {\n            m[r] = new Array(bNumCols)\n            for (var c = 0; c < bNumCols; ++c) {\n                m[r][c] = 0\n                for (var i = 0; i < aNumCols; ++i) {\n                    m[r][c] += a[r][i] * b[i][c]\n                }\n            }\n        }\n        return m\n    }\n\n    degreesToRadians (degrees) {\n        var pi = Math.PI\n        return degrees * (pi / 180)\n    }\n\n    set Degree (degree) {\n        this.degree = degree\n        for (let i = 0; i < this._children.length; i++) {\n            this._children[i].Degree = this._children[i].Degree + 3\n        }\n    }\n\n    get Degree () {\n        return this.degree\n    }\n\n    checkOver (x, y, context) { // mouse cismin üzerinde olup olmadığını kontrol ediyor\n        const angles = this.rotatedAngles\n        context.beginPath()\n        try {\n            context.moveTo(this.getPosition()[0] + angles[0][0], this.getPosition()[1] + angles[0][1])\n            for (let i = 1; i < angles.length; i++) {\n                context.lineTo(this.getPosition()[0] + angles[i][0], this.getPosition()[1] + angles[i][1])\n            }\n            context.lineTo(this.getPosition()[0] + angles[0][0], this.getPosition()[1] + angles[0][1])\n            if (context.isPointInPath(x, y)) {\n                this.emit('onmouseover')\n                this.onmouseover = true\n            } else {\n                if (this.onmouseover === true) {\n                    this.emit('onmouseleft')\n                    this.onmouseover = false\n                }\n            }\n            for (let i = 0; i < this._children.length; i++) {\n                this._children[i].checkOver(x, y, context)\n            }\n        } catch (err) {\n            // console.log(err)\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/DrawableObject.js?");

/***/ }),

/***/ "./src/Engine.js":
/*!***********************!*\
  !*** ./src/Engine.js ***!
  \***********************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return Engine; });\n/* harmony import */ var _DisplayContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayContainer */ \"./src/DisplayContainer.js\");\n\nclass Engine extends _DisplayContainer__WEBPACK_IMPORTED_MODULE_0__[\"DisplayContainer\"] {\n    constructor (...options) {\n        super()\n        this.newTime = 0\n        this.lastTime = 0\n        this.renderVerify = false\n        const defaultWidth = 1200\n        const defaultHeight = 600\n        this.mousePosition = [0, 0]\n        try {\n            if ((typeof (options[0]) === 'object') || (typeof (options[0]) === 'string')) {\n                if (typeof (options[0] === 'string')) {\n                    this.canvas = options[0]\n                    this.context = this.canvas.getContext('2d')\n                } else if (typeof (options[0] === 'string')) {\n                    this.canvas = document.getElementById(options[0])\n                    this.context = this.canvas.getContext('2d')\n                }\n                if ((typeof (options[1]) !== 'undefined') && (typeof (options[2]) !== 'undefined')) {\n                    this.width = options[1]\n                    this.height = options[2]\n                } else {\n                    this.width = defaultWidth\n                    this.height = defaultHeight\n                }\n            } else if (typeof (options[0]) === 'undefined') {\n                this.width = defaultWidth\n                this.height = defaultHeight\n                this.canvasCreater()\n            } else if (typeof (options[0]) === 'number') {\n                this.width = options[0]\n                if (typeof (options[1]) === 'number') {\n                    this.height = options[1]\n                }\n                this.canvasCreater()\n            }\n        } catch (err) {\n            console.log('canvas oluşturulurken bir sorunla karşılaşıldı!')\n        }\n        this.canvas.onmousemove = (mouseEvent) => this.findMouseCoords(mouseEvent, this.canvas)\n        this.updateScreen()\n    }\n\n    canvasCreater () {\n        this.canvas = document.createElement('canvas')\n        this.canvas.width = this.width\n        this.canvas.height = this.height\n        this.context = this.canvas.getContext('2d')\n        document.body.insertBefore(this.canvas, document.body.childNodes[0])\n    }\n\n    updateScreen () { // bu fonksiyon her frame de context'i temizler mouse konumunu yakalar ve update fonksiyonunu çağırır\n        try {\n            this.clear()\n            this.renderVerify = this.update(this.context)\n            this.checkMouseOver(this.mousePosition[0], this.mousePosition[1])\n            Element = document.getElementById('gecikme')\n            Element.innerHTML = 'gecikme: ' + this.deltaTime\n            Element = document.getElementById('objnum')\n            Element.innerHTML = 'obje sayısı: ' + this.numChildren\n            // console.log(\"gecikme:\"+this.deltaTime)\n            requestAnimationFrame(() => this.updateScreen())\n        } catch (err) {\n            // console.log(err)\n        }\n    }\n\n    checkMouseOver (x, y) {\n        for (let i = 0; i < this._children.length; i++) {\n            this._children[i].checkOver(x, y, this.context)\n        }\n    }\n\n    findMouseCoords (mouseEvent, canvas) {\n        var xpos\n        var ypos\n        if (mouseEvent) {\n            // FireFox\n            var rect = canvas.getBoundingClientRect()\n            xpos = mouseEvent.pageX\n            ypos = mouseEvent.pageY\n        } else {\n            // IE\n            xpos = window.event.x + document.body.scrollLeft - 2\n            ypos = window.event.y + document.body.scrollTop - 2\n        }\n        xpos = xpos - rect.left\n        ypos = ypos - rect.top\n        // console.log(xpos, ypos)\n        this.mousePosition = [xpos, ypos]\n    }\n\n    clear () {\n        this.context.clearRect(0, 0, this.width, this.height)\n    }\n}\n\n\n//# sourceURL=webpack:///./src/Engine.js?");

/***/ }),

/***/ "./src/Kare.js":
/*!*********************!*\
  !*** ./src/Kare.js ***!
  \*********************/
/*! exports provided: Kare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Kare\", function() { return Kare; });\n/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ \"./src/DrawableObject.js\");\n\nclass Kare extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__[\"DrawableObject\"] {\n    constructor () {\n        super()\n        const boyut = 50\n        this.boyut = boyut\n        super.setPosition(20, 20)\n    }\n\n    setSize (boyut) {\n        this.boyut = boyut\n    }\n\n    setAngles () {\n        super.setAngle(0, 0)\n        super.setAngle(this.boyut, 0)\n        super.setAngle(this.boyut, this.boyut)\n        super.setAngle(0, this.boyut)\n    }\n\n    draw () {\n        super.draw()\n    }\n}\n\n\n//# sourceURL=webpack:///./src/Kare.js?");

/***/ }),

/***/ "./src/Ucgen.js":
/*!**********************!*\
  !*** ./src/Ucgen.js ***!
  \**********************/
/*! exports provided: Ucgen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ucgen\", function() { return Ucgen; });\n/* harmony import */ var _DrawableObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawableObject */ \"./src/DrawableObject.js\");\n\nclass Ucgen extends _DrawableObject__WEBPACK_IMPORTED_MODULE_0__[\"DrawableObject\"] {\n    constructor () {\n        super()\n        const boyut = 120\n        this.boyut = boyut\n        super.setAngle(0, 0)\n        super.setAngle(boyut, 0)\n        super.setAngle(boyut / 2, (boyut / 2) * Math.sqrt(3))\n        super.setPosition(20, 20)\n    }\n\n    draw () {\n        super.draw()\n    }\n}\n\n\n//# sourceURL=webpack:///./src/Ucgen.js?");

/***/ })

/******/ });