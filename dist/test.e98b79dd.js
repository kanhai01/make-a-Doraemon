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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "<style>\n    * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n\n    .box {\n    position: relative;\n}\n    .head {\n    position: absolute;\n    height: 210px;\n    width: 210px;\n    left: 200px;\n    top: 100px;\n    border-radius: 50%;\n    background: #218ec9;\n    position: relative;\n    animation: move-head 4s linear 0s infinite alternate;\n}\n    .face {\n    position: absolute;\n    height: 180px;\n    width: 180px;\n    border-radius: 50%;\n    background: white;\n    left: 14px;\n    top: 30px;\n}\n    .eye {\n    position: absolute;\n    z-index: 1;\n    border: 1px solid grey;\n    height: 50px;\n    width: 45px;\n    background: white;\n    border-radius: 50%;\n    transform: translateX(-4px);\n}\n    .eye.left {\n    left: 60px;\n    top: 24px;\n}\n    .eye.right {\n    left: 108px;\n    top: 24px;\n}\n    .eye::before {\n    content: '';\n    display: block;\n    border: 7px solid black;\n    height: 6px;\n    width: 3px;\n    background: white;\n    border-radius: 50%;\n    position: relative;\n    left: -8px;\n    top: 14px;\n    margin: 0 auto;\n    animation: move-eyes 2s linear 0s infinite alternate;\n}\n    .nose{\n    border: 10px solid red;\n    height: 26px;\n    width: 26px;\n    position: absolute;\n    left: 90px ;\n    top: 60px;\n    border-radius: 50%;\n    z-index: 2;\n    background: white;\n}\n    .mouth{\n    position: relative;\n    height: 64px;\n    width: 126px;\n    border-bottom-left-radius: 64px;\n    border-bottom-right-radius: 64px;\n    background: #b11635;\n    z-index: 4;\n    left: 42px;\n    top: 130px;\n    overflow: hidden;\n}\n    .mouth>.heart>.right {\n    position: absolute;\n    height: 70px;\n    width: 52px;\n    transform: rotate(25deg);\n    background: #ca2533;\n    border-radius: 50% 50% 0 0;\n    left: 54px;\n    top: 18px;\n}\n    .mouth>.heart>.left {\n    position: absolute;\n    height: 70px;\n    width: 52px;\n    transform: rotate(-25deg);\n    background: #ca2533;\n    border-radius: 50% 50% 0 0;\n    left:18px;\n    top: 18px;\n}\n    .bread>.line{\n    position: absolute;\n    height: 56px;\n    width: 3px;\n    background: black;\n    left: 102px;\n    top: 80px;\n}\n    .bread>.line1{\n    position: absolute;\n    height: 60px;\n    width: 2px;\n    background: black;\n    transform: rotate(100deg);\n    left: 58px;\n    top: 54px;\n}\n    .bread>.line2{\n    position: absolute;\n    height: 56px;\n    width: 2px;\n    background: black;\n    transform: rotate(90deg);\n    left: 58px;\n    top: 74px;\n}\n    .bread>.line3{\n    position: absolute;\n    height: 60px;\n    width: 2px;\n    background: black;\n    transform: rotate(80deg);\n    left: 58px;\n    top: 90px;\n}\n    .bread>.line4{\n    position: absolute;\n    height: 60px;\n    width: 2px;\n    background: black;\n    transform: rotate(80deg);\n    left: 148px;\n    top: 54px;\n}\n    .bread>.line5{\n    position: absolute;\n    height: 56px;\n    width: 2px;\n    background: black;\n    transform: rotate(90deg);\n    left: 146px;\n    top: 74px;\n}\n    .bread>.line6{\n    position: absolute;\n    height: 60px;\n    width: 2px;\n    background: black;\n    transform: rotate(100deg);\n    left: 148px;\n    top: 90px;\n}\n    @keyframes move-eyes {\n    from{left: -8px}\n    to{left: 8px}\n}\n    @keyframes move-head {\n    0%{top: 100px}\n    50%{top: 200px}\n    100%{top: 100px}\n}\n</style>";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
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
},{"./css.js":"css.js"}],"C:/Users/周仙/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56589" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/周仙/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map