/**
 * @license
 * mmle-namespace
 * Copyright (c) 2016 Paul Young
 * Released under MIT license.
 */
(function() {
  'use strict';
  var root = this;

  /**
   * Make my life easier
   * get/set any namespace from object
   *
   * @param {*} obj The object to manipulate with.
   * @param {String} path The path of the property to get/set.
   * @param {*} [val=undefined] The value to set.
   * @param {Boolean} [allowOverwrite] Specify allowing overwrite when value is already existed.
   * @returns {*} returns value if we got any value.
   */
  var namespace = function(obj, path, val, allowOverwrite) {
    if (typeof path !== 'string' || path.length === 0) {
      throw new Error('Invalid namespace: ' + path + '.');
    }

    var temp = _getter(obj, path);

    if (_isDefined(temp.target[temp.lastKey])) {
      if (_isDefined(val)) {
        if (allowOverwrite) {
          temp.target[temp.lastKey] = val;
        } else {
          throw new Error(path + ' is already existed in the namespace.');
        }
      }
    } else {
      temp.target[temp.lastKey] = val;
    }

    return temp.target[temp.lastKey];
  };

  function _isDefined(t) {
    return typeof t !== 'undefined';
  }

  function _isObject(t) {
    return t !== null && typeof t === 'object';
  }

  // a helper to get object state
  function _getter(obj, path) {
    var keys = path.split('.');
    var length = keys.length;
    var target = obj;

    for (var i = 0; i < length - 1; i++) {
      target[keys[i]] = _isObject(target[keys[i]]) ? target[keys[i]] : {};
      target = target[keys[i]];
    }

    return {
      target: target,
      lastKey: keys[length - 1]
    };
  }

  // exports to global
  (function _exports(_moduleName, _module) {
    if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = _module;
      }
      exports[_moduleName] = _module;
    } else {
      root.mmle = root.mmle || {};
      root.mmle[_moduleName] = _module;
    }
  })('namespace', namespace);

}).call(this);
