// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "<style>\n    * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n\n    .box {\n    position: relative;\n}\n    .head {\n    position: absolute;\n    height: 210px;\n    width: 210px;\n    left: 200px;\n    top: 100px;\n    border-radius: 50%;\n    background: #218ec9;\n    position: relative;\n    animation: move-head 4s linear 0s infinite alternate;\n}\n    .face {\n    position: absolute;\n    height: 180px;\n    width: 180px;\n    border-radius: 50%;\n    background: white;\n    left: 14px;\n    top: 30px;\n}\n    .eye {\n    position: absolute;\n    z-index: 1;\n    border: 1px solid grey;\n    height: 50px;\n    width: 45px;\n    background: white;\n    border-radius: 50%;\n    transform: translateX(-4px);\n}\n    .eye.left {\n    left: 60px;\n    top: 24px;\n}\n    .eye.right {\n    left: 108px;\n    top: 24px;\n}\n    .eye::before {\n    content: '';\n    display: block;\n    border: 7px solid black;\n    height: 6px;\n    width: 3px;\n    background: white;\n    border-radius: 50%;\n    position: relative;\n    left: -8px;\n    top: 14px;\n    margin: 0 auto;\n    animation: move-eyes 2s linear 0s infinite alternate;\n}\n    .nose{\n    border: 10px solid red;\n    height: 26px;\n    width: 26px;\n    position: absolute;\n    left: 90px ;\n    top: 60px;\n    border-radius: 50%;\n    z-index: 2;\n    background: white;\n}\n    .mouth{\n    position: relative;\n    height: 64px;\n    width: 126px;\n    border-bottom-left-radius: 64px;\n    border-bottom-right-radius: 64px;\n    background: #b11635;\n    z-index: 4;\n    left: 42px;\n    top: 130px;\n    overflow: hidden;\n}\n    .mouth>.heart>.right {\n    position: absolute;\n    height: 70px;\n    width: 52px;\n    transform: rotate(25deg);\n    background: #ca2533;\n    border-radius: 50% 50% 0 0;\n    left: 54px;\n    top: 18px;\n}\n    .mouth>.heart>.left {\n    position: absolute;\n    height: 70px;\n    width: 52px;\n    transform: rotate(-25deg);\n    background: #ca2533;\n    border-radius: 50% 50% 0 0;\n    left:18px;\n    top: 18px;\n}\n    .bread>.line{\n    position: absolute;\n    height: 56px;\n    width: 3px;\n    background: black;\n    left: 102px;\n    top: 80px;\n}\n    .bread>.line1{\n    position: absolute;\n    height: 60px;\n    width: 2px;\n    background: black;\n    transform: rotate(100deg);\n    left: 58px;\n    top: 54px;\n}\n    .bread>.line2{\n    position: absolute;\n    height: 56px;\n    width: 2px;\n    background: black;\n    transform: rotate(90deg);\n    left: 58px;\n    top: 74px;\n}\n    .bread>.line3{\n    position: absolute;\n    height: 60px;\n    width: 2px;\n    background: black;\n    transform: rotate(80deg);\n    left: 58px;\n    top: 90px;\n}\n    .bread>.line4{\n    position: absolute;\n    height: 60px;\n    width: 2px;\n    background: black;\n    transform: rotate(80deg);\n    left: 148px;\n    top: 54px;\n}\n    .bread>.line5{\n    position: absolute;\n    height: 56px;\n    width: 2px;\n    background: black;\n    transform: rotate(90deg);\n    left: 146px;\n    top: 74px;\n}\n    .bread>.line6{\n    position: absolute;\n    height: 60px;\n    width: 2px;\n    background: black;\n    transform: rotate(100deg);\n    left: 148px;\n    top: 90px;\n}\n    @keyframes move-eyes {\n    from{left: -8px}\n    to{left: 8px}\n}\n    @keyframes move-head {\n    0%{top: 100px}\n    50%{top: 200px}\n    100%{top: 100px}\n}\n</style>";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
demo.innerHTML = _css.default.substring(0, n);
demo2.innerText = _css.default.substring(0, n);
var time = 100;
var player = {
  run: function run() {
    n += 1;

    if (n > _css.default.length) {
      window.clearInterval(id);
      return;
    }

    window.scrollTo(0, 9999999);
    demo.innerHTML = _css.default.substring(0, n);
    demo2.innerText = _css.default.substring(0, n);
    demo2.scrollTop = 999999;
  },
  play: function play() {
    player.pause();
    return setInterval(player.run, time);
  },
  pause: function pause() {
    window.clearInterval(id);
  },
  slow: function slow() {
    player.pause();
    time = 300;
    id = player.play();
  },
  normal: function normal() {
    player.pause();
    time = 100;
    id = player.play();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    id = player.play();
  }
};
var id = player.play();

document.querySelector('#btnPause').onclick = function () {
  player.pause();
};

document.querySelector('#btnPlay').onclick = function () {
  id = player.play();
};

document.querySelector('#btnSlow').onclick = player.slow;
document.querySelector('#btnNormal').onclick = player.normal;
document.querySelector('#btnFast').onclick = player.fast;
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.32ffe87b.js.map