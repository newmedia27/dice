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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gamer/index.js":
/*!****************************!*\
  !*** ./src/gamer/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gamer; });\nfunction Gamer(name, score, winCount) {\r\n    this.name = name;\r\n    this.score = score;\r\n    this.winCount = winCount;\r\n}\r\n\r\nGamer.prototype.getScore = function () {\r\n    return this.score\r\n}\r\nGamer.prototype.setScore = function (score) {\r\n    this.score = score\r\n}\r\nGamer.prototype.resetScore = function () {\r\n    this.score = 0\r\n}\r\n\n\n//# sourceURL=webpack:///./src/gamer/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gamer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamer */ \"./src/gamer/index.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player/index.js\");\n\r\n\r\n\r\n\r\nconst RESET_VALUE = 2;\r\n\r\nlet activePlayer = 0;\r\nlet current = 0;\r\nconst LIMIT = 100;\r\nlet playerNumber = 0;\r\nconst diceElement = document.querySelectorAll('.dice');\r\n\r\nconst limit = document.querySelector('.limit__content');\r\n\r\nlimit.value = LIMIT;\r\n\r\nlet players = [];\r\n\r\n\r\nconst initGame = () => {\r\n    document.querySelector('#current-0').textContent = 0;\r\n    document.querySelector('#current-1').textContent = 0;\r\n    document.querySelector('#score-0').textContent = 0;\r\n    document.querySelector('#score-1').textContent = 0;\r\n    diceElement.forEach(e => e.style.display = 'none');\r\n    players = Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"initPlayer\"])(['player1', 'player2'], playerNumber);\r\n    players.forEach((e, i) => {\r\n        document.querySelector(`#name-${i}`).textContent = e.name\r\n        e.resetScore();\r\n    })\r\n\r\n\r\n}\r\n\r\ninitGame();\r\n\r\n\r\nlimit.addEventListener('input', function ({target: {value}}) {\r\n    if (+value.match(/^\\d+$/)) {\r\n        limit.value = +value;\r\n        limit.focus()\r\n        limit.value.selectionStart = limit.value.length\r\n    } else {\r\n        limit.value = null;\r\n    }\r\n})\r\n\r\nlimit.addEventListener('blur', ({target: {value}}) => {\r\n    if (value.length <= 0 || value == 0) {\r\n        limit.value = 100\r\n    }\r\n\r\n})\r\n\r\n\r\ndocument.querySelector('.btn-roll').addEventListener('click', function () {\r\n    let dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];\r\n\r\n    dice.forEach((e, i) => diceElement[i].src = `dice-${e}.png`)\r\n\r\n    diceElement.forEach(e => e.style.display = 'block');\r\n\r\n    if (diceValidate(dice, RESET_VALUE)) {\r\n        current += sumDice(dice);\r\n        document.getElementById('current-' + activePlayer).textContent = current;\r\n\r\n        if (players[activePlayer].getScore() + current >= +limit.value) {\r\n            players[activePlayer].winCount = 1;\r\n            alert(` ${players[activePlayer].name} won!!!`);\r\n            const winnerArr = getWinnerStore();\r\n            if (winnerArr && winnerArr.length && winnerArr.some(e => e.name === players[activePlayer].name)) {\r\n\r\n                winnerArr.forEach(e => {\r\n                    if (e.name === players[activePlayer].name) {\r\n                        e.winCount += players[activePlayer].winCount\r\n                    }\r\n                })\r\n            } else {\r\n                winnerArr.push(players[activePlayer])\r\n            }\r\n\r\n            localStorage.setItem('winner', JSON.stringify(winnerArr));\r\n        }\r\n\r\n    } else {\r\n        changePlayer();\r\n    }\r\n});\r\n\r\nconst diceValidate = (arr, reset) => {\r\n    if (arr.some(e => e === reset)) {\r\n        return false\r\n    }\r\n    const filter = arr.filter((e, i) => arr.indexOf(e) === i);\r\n    return filter.length > 1;\r\n}\r\n\r\nconst sumDice = (arr) => {\r\n    return arr.reduce((res, e) => (res + e), 0)\r\n}\r\n\r\nconst changePlayer = () => {\r\n    current = 0;\r\n    document.getElementById('current-' + activePlayer).textContent = 0;\r\n    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');\r\n    activePlayer = +!activePlayer;\r\n    diceElement.forEach(e => e.style.display = 'none');\r\n    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');\r\n}\r\n\r\ndocument.querySelector('.btn-hold').addEventListener('click', function () {\r\n\r\n    players[activePlayer].setScore(players[activePlayer].score += current);\r\n    document.querySelector(`#score-${activePlayer}`).textContent = players[activePlayer].score;changePlayer(activePlayer);\r\n});\r\n\r\n\r\ndocument.querySelector('.btn-new').addEventListener('click', function () {\r\n    initGame();\r\n});\r\ndocument.querySelector('.btn-win').addEventListener('click', function () {\r\n    const winner = getWinnerStore();\r\n    if (winner.length) {\r\n        winner.sort((a, b) => b.winCount - a.winCount)\r\n        const list = winner.sort().map(e => (`${e.name} - ${e.winCount}\\n\\r`))\r\n        alert(list)\r\n    } else {\r\n        alert(`Тут пока пусто`)\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player/index.js":
/*!*****************************!*\
  !*** ./src/player/index.js ***!
  \*****************************/
/*! exports provided: initPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPlayer\", function() { return initPlayer; });\n/* harmony import */ var _gamer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gamer */ \"./src/gamer/index.js\");\n/* harmony import */ var _winner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../winner */ \"./src/winner/index.js\");\n\r\n\r\n\r\nconst initPlayer = (arr,playerNumber) => {\r\n\r\n    return arr.reduce((array, e, i) => {\r\n        let result = prompt(e + 'you name', '')\r\n        if (array && array.some(item => item.name === result)) {\r\n            return [...array, new _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Player ` + ++playerNumber, 0, 0)]\r\n        }\r\n        if (result && Object(_winner__WEBPACK_IMPORTED_MODULE_1__[\"validatePlayer\"])(result)) {\r\n            return [...array, new _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](result, 0, 0)]\r\n        } else if (!result) {\r\n            return [...array, new _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Player ` + ++playerNumber, 0, 0)]\r\n        } else {\r\n            if (confirm('Это точно ВЫ?')) {\r\n                return [...array, new _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](result, 0, 0)]\r\n            }\r\n        }\r\n\r\n\r\n    }, [])\r\n}\r\n\n\n//# sourceURL=webpack:///./src/player/index.js?");

/***/ }),

/***/ "./src/winner/index.js":
/*!*****************************!*\
  !*** ./src/winner/index.js ***!
  \*****************************/
/*! exports provided: getWinnerStore, validatePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWinnerStore\", function() { return getWinnerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validatePlayer\", function() { return validatePlayer; });\nconst getWinnerStore = () => {\r\n\r\n    if (localStorage.getItem('winner')) {\r\n        return JSON.parse(localStorage.getItem('winner'));\r\n    } else {\r\n        return [];\r\n    }\r\n}\r\nconst validatePlayer = (str) => {\r\n    return !(getWinnerStore().length && getWinnerStore().some(e => e.name === str));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/winner/index.js?");

/***/ })

/******/ });