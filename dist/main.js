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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gamer; });\nfunction Gamer(name, score, winCount) {\n    this.name = name;\n    this.score = score;\n    this.winCount = winCount;\n}\n\nGamer.prototype.getScore = function () {\n    return this.score\n}\nGamer.prototype.setScore = function (score) {\n    this.score = score\n}\nGamer.prototype.resetScore = function () {\n    this.score = 0\n}\n\n\n//# sourceURL=webpack:///./src/gamer/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gamer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamer */ \"./src/gamer/index.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player/index.js\");\n\n\n\n\nconst RESET_VALUE = 2;\n\nlet activePlayer = 0;\nlet current = 0;\nconst LIMIT = 100;\nlet playerNumber = 0;\nconst diceElement = document.querySelectorAll('.dice');\n\nconst limit = document.querySelector('.limit__content');\n\nlimit.value = LIMIT;\n\nlet players = [];\n\n\nconst initGame = () => {\n    document.querySelector('#current-0').textContent = 0;\n    document.querySelector('#current-1').textContent = 0;\n    document.querySelector('#score-0').textContent = 0;\n    document.querySelector('#score-1').textContent = 0;\n    diceElement.forEach(e => e.style.display = 'none');\n    players = Object(_player__WEBPACK_IMPORTED_MODULE_1__[\"initPlayer\"])(['player1', 'player2'], playerNumber);\n    players.forEach((e, i) => {\n        document.querySelector(`#name-${i}`).textContent = e.name\n        e.resetScore();\n    })\n\n\n}\n\ninitGame();\n\n\nlimit.addEventListener('input', function ({target: {value}}) {\n    if (+value.match(/^\\d+$/)) {\n        limit.value = +value;\n        limit.focus()\n        limit.value.selectionStart = limit.value.length\n    } else {\n        limit.value = null;\n    }\n})\n\nlimit.addEventListener('blur', ({target: {value}}) => {\n    if (value.length <= 0 || value == 0) {\n        limit.value = 100\n    }\n\n})\n\n\ndocument.querySelector('.btn-roll').addEventListener('click', function () {\n    let dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];\n\n    dice.forEach((e, i) => diceElement[i].src = `dice-${e}.png`)\n\n    diceElement.forEach(e => e.style.display = 'block');\n\n    if (diceValidate(dice, RESET_VALUE)) {\n        current += sumDice(dice);\n        document.getElementById('current-' + activePlayer).textContent = current;\n\n        if (players[activePlayer].getScore() + current >= +limit.value) {\n            players[activePlayer].winCount = 1;\n            alert(` ${players[activePlayer].name} won!!!`);\n            const winnerArr = getWinnerStore();\n            if (winnerArr && winnerArr.length && winnerArr.some(e => e.name === players[activePlayer].name)) {\n\n                winnerArr.forEach(e => {\n                    if (e.name === players[activePlayer].name) {\n                        e.winCount += players[activePlayer].winCount\n                    }\n                })\n            } else {\n                winnerArr.push(players[activePlayer])\n            }\n\n            localStorage.setItem('winner', JSON.stringify(winnerArr));\n        }\n\n    } else {\n        changePlayer();\n    }\n});\n\nconst diceValidate = (arr, reset) => {\n    if (arr.some(e => e === reset)) {\n        return false\n    }\n    const filter = arr.filter((e, i) => arr.indexOf(e) === i);\n    return filter.length > 1;\n}\n\nconst sumDice = (arr) => {\n    return arr.reduce((res, e) => (res + e), 0)\n}\n\nconst changePlayer = () => {\n    current = 0;\n    document.getElementById('current-' + activePlayer).textContent = 0;\n    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');\n    activePlayer = +!activePlayer;\n    diceElement.forEach(e => e.style.display = 'none');\n    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');\n}\n\ndocument.querySelector('.btn-hold').addEventListener('click', function () {\n\n    players[activePlayer].setScore(players[activePlayer].score += current);\n    document.querySelector(`#score-${activePlayer}`).textContent = players[activePlayer].score;changePlayer(activePlayer);\n});\n\n\ndocument.querySelector('.btn-new').addEventListener('click', function () {\n    initGame();\n});\ndocument.querySelector('.btn-win').addEventListener('click', function () {\n    const winner = getWinnerStore();\n    if (winner.length) {\n        winner.sort((a, b) => b.winCount - a.winCount)\n        const list = winner.sort().map(e => (`${e.name} - ${e.winCount}\\n\\r`))\n        alert(list)\n    } else {\n        alert(`Тут пока пусто`)\n    }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player/index.js":
/*!*****************************!*\
  !*** ./src/player/index.js ***!
  \*****************************/
/*! exports provided: initPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPlayer\", function() { return initPlayer; });\n/* harmony import */ var _gamer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gamer */ \"./src/gamer/index.js\");\n/* harmony import */ var _winner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../winner */ \"./src/winner/index.js\");\n\n\n\nconst initPlayer = (arr,playerNumber) => {\n\n    return arr.reduce((array, e, i) => {\n        let result = prompt(e + 'you name', '')\n        if (array && array.some(item => item.name === result)) {\n            return [...array, new _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Player ` + ++playerNumber, 0, 0)]\n        }\n        if (result && Object(_winner__WEBPACK_IMPORTED_MODULE_1__[\"validatePlayer\"])(result)) {\n            return [...array, new _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](result, 0, 0)]\n        } else if (!result) {\n            return [...array, new _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Player ` + ++playerNumber, 0, 0)]\n        } else {\n            if (confirm('Это точно ВЫ?')) {\n                return [...array, new _gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](result, 0, 0)]\n            }\n        }\n\n\n    }, [])\n}\n\n\n//# sourceURL=webpack:///./src/player/index.js?");

/***/ }),

/***/ "./src/winner/index.js":
/*!*****************************!*\
  !*** ./src/winner/index.js ***!
  \*****************************/
/*! exports provided: getWinnerStore, validatePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWinnerStore\", function() { return getWinnerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validatePlayer\", function() { return validatePlayer; });\nconst getWinnerStore = () => {\n\n    if (localStorage.getItem('winner')) {\n        return JSON.parse(localStorage.getItem('winner'));\n    } else {\n        return [];\n    }\n}\nconst validatePlayer = (str) => {\n    return !(getWinnerStore().length && getWinnerStore().some(e => e.name === str));\n}\n\n\n//# sourceURL=webpack:///./src/winner/index.js?");

/***/ })

/******/ });