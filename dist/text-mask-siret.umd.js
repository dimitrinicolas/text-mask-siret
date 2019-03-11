(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.textMaskSiret = {}));
}(this, function (exports) { 'use strict';

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var sirenMask = [].concat(_toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)));
  var siretMask = [].concat(_toConsumableArray(sirenMask), [' '], _toConsumableArray(Array(5).fill(/\d/)));

  exports.sirenMask = sirenMask;
  exports.siretMask = siretMask;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
