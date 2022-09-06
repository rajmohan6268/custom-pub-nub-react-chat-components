import * as React from 'react';
import React__default, { useCallback, useEffect, Component, useRef, useState, useMemo } from 'react';
import { usePubNub } from 'pubnub-react';

function isFilePayload(message) {
    return message.file !== undefined;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var jotai = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var SUSPENSE_PROMISE = Symbol();
var isSuspensePromise = function isSuspensePromise(promise) {
  return !!promise[SUSPENSE_PROMISE];
};
var isSuspensePromiseAlreadyCancelled = function isSuspensePromiseAlreadyCancelled(suspensePromise) {
  return !suspensePromise[SUSPENSE_PROMISE].c;
};
var cancelSuspensePromise = function cancelSuspensePromise(suspensePromise) {
  var _suspensePromise$SUSP, _suspensePromise$SUSP2;

  (_suspensePromise$SUSP = (_suspensePromise$SUSP2 = suspensePromise[SUSPENSE_PROMISE]).c) == null ? void 0 : _suspensePromise$SUSP.call(_suspensePromise$SUSP2);
};
var isEqualSuspensePromise = function isEqualSuspensePromise(oldSuspensePromise, newSuspensePromise) {
  var oldOriginalPromise = oldSuspensePromise[SUSPENSE_PROMISE].o;
  var newOriginalPromise = newSuspensePromise[SUSPENSE_PROMISE].o;
  return oldOriginalPromise === newOriginalPromise || oldSuspensePromise === newOriginalPromise || isSuspensePromise(oldOriginalPromise) && isEqualSuspensePromise(oldOriginalPromise, newSuspensePromise);
};
var createSuspensePromise = function createSuspensePromise(promise) {
  var objectToAttach = {
    o: promise,
    c: null
  };
  var suspensePromise = new Promise(function (resolve) {
    objectToAttach.c = function () {
      objectToAttach.c = null;
      resolve();
    };

    promise.then(objectToAttach.c, objectToAttach.c);
  });
  suspensePromise[SUSPENSE_PROMISE] = objectToAttach;
  return suspensePromise;
};

var hasInitialValue = function hasInitialValue(atom) {
  return 'init' in atom;
};

var READ_ATOM = 'r';
var WRITE_ATOM = 'w';
var COMMIT_ATOM = 'c';
var SUBSCRIBE_ATOM = 's';
var RESTORE_ATOMS = 'h';
var DEV_SUBSCRIBE_STATE = 'n';
var DEV_GET_MOUNTED_ATOMS = 'l';
var DEV_GET_ATOM_STATE = 'a';
var DEV_GET_MOUNTED = 'm';
var createStore = function createStore(initialValues) {
  var _ref4;

  var committedAtomStateMap = new WeakMap();
  var mountedMap = new WeakMap();
  var pendingMap = new Map();
  var stateListeners;
  var mountedAtoms;

  if (process.env.NODE_ENV !== "production") {
    stateListeners = new Set();
    mountedAtoms = new Set();
  }

  if (initialValues) {
    for (var _iterator = _createForOfIteratorHelperLoose(initialValues), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          atom = _step$value[0],
          value = _step$value[1];
      var atomState = {
        v: value,
        r: 0,
        d: new Map()
      };

      if (process.env.NODE_ENV !== "production") {
        Object.freeze(atomState);

        if (!hasInitialValue(atom)) {
          console.warn('Found initial value for derived atom which can cause unexpected behavior', atom);
        }
      }

      committedAtomStateMap.set(atom, atomState);
    }
  }

  var suspensePromiseCacheMap = new WeakMap();

  var addSuspensePromiseToCache = function addSuspensePromiseToCache(version, atom, suspensePromise) {
    var cache = suspensePromiseCacheMap.get(atom);

    if (!cache) {
      cache = new Map();
      suspensePromiseCacheMap.set(atom, cache);
    }

    suspensePromise.then(function () {
      if (cache.get(version) === suspensePromise) {
        cache.delete(version);

        if (!cache.size) {
          suspensePromiseCacheMap.delete(atom);
        }
      }
    });
    cache.set(version, suspensePromise);
  };

  var cancelAllSuspensePromiseInCache = function cancelAllSuspensePromiseInCache(atom) {
    var versionSet = new Set();
    var cache = suspensePromiseCacheMap.get(atom);

    if (cache) {
      suspensePromiseCacheMap.delete(atom);
      cache.forEach(function (suspensePromise, version) {
        cancelSuspensePromise(suspensePromise);
        versionSet.add(version);
      });
    }

    return versionSet;
  };

  var versionedAtomStateMapMap = new WeakMap();

  var getVersionedAtomStateMap = function getVersionedAtomStateMap(version) {
    var versionedAtomStateMap = versionedAtomStateMapMap.get(version);

    if (!versionedAtomStateMap) {
      versionedAtomStateMap = new Map();
      versionedAtomStateMapMap.set(version, versionedAtomStateMap);
    }

    return versionedAtomStateMap;
  };

  var getAtomState = function getAtomState(version, atom) {
    if (version) {
      var versionedAtomStateMap = getVersionedAtomStateMap(version);

      var _atomState = versionedAtomStateMap.get(atom);

      if (!_atomState) {
        _atomState = getAtomState(version.p, atom);

        if (_atomState) {
          if ('p' in _atomState) {
            _atomState.p.then(function () {
              return versionedAtomStateMap.delete(atom);
            });
          }

          versionedAtomStateMap.set(atom, _atomState);
        }
      }

      return _atomState;
    }

    return committedAtomStateMap.get(atom);
  };

  var setAtomState = function setAtomState(version, atom, atomState) {
    if (process.env.NODE_ENV !== "production") {
      Object.freeze(atomState);
    }

    if (version) {
      var versionedAtomStateMap = getVersionedAtomStateMap(version);
      versionedAtomStateMap.set(atom, atomState);
    } else {
      var prevAtomState = committedAtomStateMap.get(atom);
      committedAtomStateMap.set(atom, atomState);

      if (!pendingMap.has(atom)) {
        pendingMap.set(atom, prevAtomState);
      }
    }
  };

  var createReadDependencies = function createReadDependencies(version, prevReadDependencies, dependencies) {
    if (prevReadDependencies === void 0) {
      prevReadDependencies = new Map();
    }

    if (!dependencies) {
      return prevReadDependencies;
    }

    var readDependencies = new Map();
    var changed = false;
    dependencies.forEach(function (atom) {
      var _getAtomState;

      var revision = ((_getAtomState = getAtomState(version, atom)) == null ? void 0 : _getAtomState.r) || 0;
      readDependencies.set(atom, revision);

      if (prevReadDependencies.get(atom) !== revision) {
        changed = true;
      }
    });

    if (prevReadDependencies.size === readDependencies.size && !changed) {
      return prevReadDependencies;
    }

    return readDependencies;
  };

  var setAtomValue = function setAtomValue(version, atom, value, dependencies, suspensePromise) {
    var atomState = getAtomState(version, atom);

    if (atomState) {
      if (suspensePromise && (!('p' in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }

      if ('p' in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }

    var nextAtomState = {
      v: value,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };

    if (!atomState || !('v' in atomState) || !Object.is(atomState.v, value)) {
      ++nextAtomState.r;

      if (nextAtomState.d.has(atom)) {
        nextAtomState.d = new Map(nextAtomState.d).set(atom, nextAtomState.r);
      }
    } else if (nextAtomState.d !== atomState.d && (nextAtomState.d.size !== atomState.d.size || !Array.from(nextAtomState.d.keys()).every(function (a) {
      return atomState.d.has(a);
    }))) {
      Promise.resolve().then(function () {
        flushPending(version);
      });
    }

    setAtomState(version, atom, nextAtomState);
    return nextAtomState;
  };

  var setAtomReadError = function setAtomReadError(version, atom, error, dependencies, suspensePromise) {
    var atomState = getAtomState(version, atom);

    if (atomState) {
      if (suspensePromise && (!('p' in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }

      if ('p' in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }

    var nextAtomState = {
      e: error,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version, atom, nextAtomState);
    return nextAtomState;
  };

  var setAtomSuspensePromise = function setAtomSuspensePromise(version, atom, suspensePromise, dependencies) {
    var atomState = getAtomState(version, atom);

    if (atomState && 'p' in atomState) {
      if (isEqualSuspensePromise(atomState.p, suspensePromise)) {
        return atomState;
      }

      cancelSuspensePromise(atomState.p);
    }

    addSuspensePromiseToCache(version, atom, suspensePromise);
    var nextAtomState = {
      p: suspensePromise,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version, atom, nextAtomState);
    return nextAtomState;
  };

  var setAtomPromiseOrValue = function setAtomPromiseOrValue(version, atom, promiseOrValue, dependencies) {
    if (promiseOrValue instanceof Promise) {
      var suspensePromise = createSuspensePromise(promiseOrValue.then(function (value) {
        setAtomValue(version, atom, value, dependencies, suspensePromise);
        flushPending(version);
      }).catch(function (e) {
        if (e instanceof Promise) {
          if (isSuspensePromise(e)) {
            return e.then(function () {
              readAtomState(version, atom, true);
            });
          }

          return e;
        }

        setAtomReadError(version, atom, e, dependencies, suspensePromise);
        flushPending(version);
      }));
      return setAtomSuspensePromise(version, atom, suspensePromise, dependencies);
    }

    return setAtomValue(version, atom, promiseOrValue, dependencies);
  };

  var setAtomInvalidated = function setAtomInvalidated(version, atom) {
    var atomState = getAtomState(version, atom);

    if (atomState) {
      var nextAtomState = _extends({}, atomState, {
        i: atomState.r
      });

      setAtomState(version, atom, nextAtomState);
    } else if (process.env.NODE_ENV !== "production") {
      console.warn('[Bug] could not invalidate non existing atom', atom);
    }
  };

  var readAtomState = function readAtomState(version, atom, force) {
    if (!force) {
      var _atomState2 = getAtomState(version, atom);

      if (_atomState2) {
        if (_atomState2.r !== _atomState2.i && 'p' in _atomState2 && !isSuspensePromiseAlreadyCancelled(_atomState2.p)) {
          return _atomState2;
        }

        _atomState2.d.forEach(function (_, a) {
          if (a !== atom) {
            if (!mountedMap.has(a)) {
              readAtomState(version, a);
            } else {
              var aState = getAtomState(version, a);

              if (aState && aState.r === aState.i) {
                readAtomState(version, a);
              }
            }
          }
        });

        if (Array.from(_atomState2.d).every(function (_ref) {
          var a = _ref[0],
              r = _ref[1];
          var aState = getAtomState(version, a);
          return aState && 'v' in aState && aState.r === r;
        })) {
          return _atomState2;
        }
      }
    }

    var dependencies = new Set();

    try {
      var promiseOrValue = atom.read(function (a) {
        dependencies.add(a);
        var aState = a === atom ? getAtomState(version, a) : readAtomState(version, a);

        if (aState) {
          if ('e' in aState) {
            throw aState.e;
          }

          if ('p' in aState) {
            throw aState.p;
          }

          return aState.v;
        }

        if (hasInitialValue(a)) {
          return a.init;
        }

        throw new Error('no atom init');
      });
      return setAtomPromiseOrValue(version, atom, promiseOrValue, dependencies);
    } catch (errorOrPromise) {
      if (errorOrPromise instanceof Promise) {
        var suspensePromise = createSuspensePromise(errorOrPromise);
        return setAtomSuspensePromise(version, atom, suspensePromise, dependencies);
      }

      return setAtomReadError(version, atom, errorOrPromise, dependencies);
    }
  };

  var readAtom = function readAtom(readingAtom, version) {
    var atomState = readAtomState(version, readingAtom);
    return atomState;
  };

  var addAtom = function addAtom(addingAtom) {
    var mounted = mountedMap.get(addingAtom);

    if (!mounted) {
      mounted = mountAtom(addingAtom);
    }

    return mounted;
  };

  var canUnmountAtom = function canUnmountAtom(atom, mounted) {
    return !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom));
  };

  var delAtom = function delAtom(deletingAtom) {
    var mounted = mountedMap.get(deletingAtom);

    if (mounted && canUnmountAtom(deletingAtom, mounted)) {
      unmountAtom(deletingAtom);
    }
  };

  var invalidateDependents = function invalidateDependents(version, atom) {
    var mounted = mountedMap.get(atom);
    mounted == null ? void 0 : mounted.t.forEach(function (dependent) {
      if (dependent !== atom) {
        setAtomInvalidated(version, dependent);
        invalidateDependents(version, dependent);
      }
    });
  };

  var writeAtomState = function writeAtomState(version, atom, update) {
    var isSync = true;

    var writeGetter = function writeGetter(a, options) {
      var aState = readAtomState(version, a);

      if ('e' in aState) {
        throw aState.e;
      }

      if ('p' in aState) {
        if (options != null && options.unstable_promise) {
          return aState.p.then(function () {
            return writeGetter(a, options);
          });
        }

        if (process.env.NODE_ENV !== "production") {
          console.info('Reading pending atom state in write operation. We throw a promise for now.', a);
        }

        throw aState.p;
      }

      if ('v' in aState) {
        return aState.v;
      }

      if (process.env.NODE_ENV !== "production") {
        console.warn('[Bug] no value found while reading atom in write operation. This is probably a bug.', a);
      }

      throw new Error('no value found');
    };

    var setter = function setter(a, v) {
      var promiseOrVoid;

      if (a === atom) {
        if (!hasInitialValue(a)) {
          throw new Error('atom not writable');
        }

        var versionSet = cancelAllSuspensePromiseInCache(a);
        versionSet.forEach(function (cancelledVersion) {
          if (cancelledVersion !== version) {
            setAtomPromiseOrValue(cancelledVersion, a, v);
          }
        });
        setAtomPromiseOrValue(version, a, v);
        invalidateDependents(version, a);
      } else {
        promiseOrVoid = writeAtomState(version, a, v);
      }

      if (!isSync) {
        flushPending(version);
      }

      return promiseOrVoid;
    };

    var promiseOrVoid = atom.write(writeGetter, setter, update);
    isSync = false;
    version = undefined;
    return promiseOrVoid;
  };

  var writeAtom = function writeAtom(writingAtom, update, version) {
    var promiseOrVoid = writeAtomState(version, writingAtom, update);
    flushPending(version);
    return promiseOrVoid;
  };

  var isActuallyWritableAtom = function isActuallyWritableAtom(atom) {
    return !!atom.write;
  };

  var mountAtom = function mountAtom(atom, initialDependent) {
    var mounted = {
      t: new Set(initialDependent && [initialDependent]),
      l: new Set()
    };
    mountedMap.set(atom, mounted);

    if (process.env.NODE_ENV !== "production") {
      mountedAtoms.add(atom);
    }

    var atomState = readAtomState(undefined, atom);
    atomState.d.forEach(function (_, a) {
      var aMounted = mountedMap.get(a);

      if (aMounted) {
        aMounted.t.add(atom);
      } else {
        if (a !== atom) {
          mountAtom(a, atom);
        }
      }
    });

    if (isActuallyWritableAtom(atom) && atom.onMount) {
      var setAtom = function setAtom(update) {
        return writeAtom(atom, update);
      };

      var onUnmount = atom.onMount(setAtom);

      if (onUnmount) {
        mounted.u = onUnmount;
      }
    }

    return mounted;
  };

  var unmountAtom = function unmountAtom(atom) {
    var _mountedMap$get;

    var onUnmount = (_mountedMap$get = mountedMap.get(atom)) == null ? void 0 : _mountedMap$get.u;

    if (onUnmount) {
      onUnmount();
    }

    mountedMap.delete(atom);

    if (process.env.NODE_ENV !== "production") {
      mountedAtoms.delete(atom);
    }

    var atomState = getAtomState(undefined, atom);

    if (atomState) {
      atomState.d.forEach(function (_, a) {
        if (a !== atom) {
          var mounted = mountedMap.get(a);

          if (mounted) {
            mounted.t.delete(atom);

            if (canUnmountAtom(a, mounted)) {
              unmountAtom(a);
            }
          }
        }
      });
    } else if (process.env.NODE_ENV !== "production") {
      console.warn('[Bug] could not find atom state to unmount', atom);
    }
  };

  var mountDependencies = function mountDependencies(atom, atomState, prevReadDependencies) {
    var dependencies = new Set(atomState.d.keys());
    prevReadDependencies == null ? void 0 : prevReadDependencies.forEach(function (_, a) {
      if (dependencies.has(a)) {
        dependencies.delete(a);
        return;
      }

      var mounted = mountedMap.get(a);

      if (mounted) {
        mounted.t.delete(atom);

        if (canUnmountAtom(a, mounted)) {
          unmountAtom(a);
        }
      }
    });
    dependencies.forEach(function (a) {
      var mounted = mountedMap.get(a);

      if (mounted) {
        mounted.t.add(atom);
      } else if (mountedMap.has(atom)) {
        mountAtom(a, atom);
      }
    });
  };

  var flushPending = function flushPending(version) {
    if (version) {
      var versionedAtomStateMap = getVersionedAtomStateMap(version);
      versionedAtomStateMap.forEach(function (atomState, atom) {
        if (atomState !== committedAtomStateMap.get(atom)) {
          var mounted = mountedMap.get(atom);
          mounted == null ? void 0 : mounted.l.forEach(function (listener) {
            return listener(version);
          });
        }
      });
      return;
    }

    while (pendingMap.size) {
      var pending = Array.from(pendingMap);
      pendingMap.clear();
      pending.forEach(function (_ref2) {
        var atom = _ref2[0],
            prevAtomState = _ref2[1];
        var atomState = getAtomState(undefined, atom);

        if (atomState && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(atom, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }

        var mounted = mountedMap.get(atom);
        mounted == null ? void 0 : mounted.l.forEach(function (listener) {
          return listener();
        });
      });
    }

    if (process.env.NODE_ENV !== "production") {
      stateListeners.forEach(function (l) {
        return l();
      });
    }
  };

  var commitVersionedAtomStateMap = function commitVersionedAtomStateMap(version) {
    var versionedAtomStateMap = getVersionedAtomStateMap(version);
    versionedAtomStateMap.forEach(function (atomState, atom) {
      var prevAtomState = committedAtomStateMap.get(atom);

      if (atomState.r > ((prevAtomState == null ? void 0 : prevAtomState.r) || 0) || 'v' in atomState && atomState.r === (prevAtomState == null ? void 0 : prevAtomState.r) && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
        committedAtomStateMap.set(atom, atomState);

        if (atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(atom, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
      }
    });
  };

  var commitAtom = function commitAtom(_atom, version) {
    if (version) {
      commitVersionedAtomStateMap(version);
    }

    flushPending(undefined);
  };

  var subscribeAtom = function subscribeAtom(atom, callback) {
    var mounted = addAtom(atom);
    var listeners = mounted.l;
    listeners.add(callback);
    return function () {
      listeners.delete(callback);
      delAtom(atom);
    };
  };

  var restoreAtoms = function restoreAtoms(values, version) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(values), _step2; !(_step2 = _iterator2()).done;) {
      var _step2$value = _step2.value,
          _atom2 = _step2$value[0],
          _value = _step2$value[1];

      if (hasInitialValue(_atom2)) {
        setAtomPromiseOrValue(version, _atom2, _value);
        invalidateDependents(version, _atom2);
      }
    }

    flushPending(version);
  };

  if (process.env.NODE_ENV !== "production") {
    var _ref3;

    return _ref3 = {}, _ref3[READ_ATOM] = readAtom, _ref3[WRITE_ATOM] = writeAtom, _ref3[COMMIT_ATOM] = commitAtom, _ref3[SUBSCRIBE_ATOM] = subscribeAtom, _ref3[RESTORE_ATOMS] = restoreAtoms, _ref3[DEV_SUBSCRIBE_STATE] = function (l) {
      stateListeners.add(l);
      return function () {
        stateListeners.delete(l);
      };
    }, _ref3[DEV_GET_MOUNTED_ATOMS] = function () {
      return mountedAtoms.values();
    }, _ref3[DEV_GET_ATOM_STATE] = function (a) {
      return committedAtomStateMap.get(a);
    }, _ref3[DEV_GET_MOUNTED] = function (a) {
      return mountedMap.get(a);
    }, _ref3;
  }

  return _ref4 = {}, _ref4[READ_ATOM] = readAtom, _ref4[WRITE_ATOM] = writeAtom, _ref4[COMMIT_ATOM] = commitAtom, _ref4[SUBSCRIBE_ATOM] = subscribeAtom, _ref4[RESTORE_ATOMS] = restoreAtoms, _ref4;
};
var createStoreForExport = function createStoreForExport(initialValues) {
  var store = createStore(initialValues);

  var get = function get(atom) {
    var atomState = store[READ_ATOM](atom);

    if ('e' in atomState) {
      throw atomState.e;
    }

    if ('p' in atomState) {
      return undefined;
    }

    return atomState.v;
  };

  var asyncGet = function asyncGet(atom) {
    return new Promise(function (resolve, reject) {
      var atomState = store[READ_ATOM](atom);

      if ('e' in atomState) {
        reject(atomState.e);
      } else if ('p' in atomState) {
        resolve(atomState.p.then(function () {
          return asyncGet(atom);
        }));
      } else {
        resolve(atomState.v);
      }
    });
  };

  var set = function set(atom, update) {
    return store[WRITE_ATOM](atom, update);
  };

  var sub = function sub(atom, callback) {
    return store[SUBSCRIBE_ATOM](atom, callback);
  };

  return {
    get: get,
    asyncGet: asyncGet,
    set: set,
    sub: sub,
    SECRET_INTERNAL_store: store
  };
};

var createScopeContainer = function createScopeContainer(initialValues, unstable_createStore) {
  var store = unstable_createStore ? unstable_createStore(initialValues).SECRET_INTERNAL_store : createStore(initialValues);
  return {
    s: store
  };
};
var ScopeContextMap = new Map();
var getScopeContext = function getScopeContext(scope) {
  if (!ScopeContextMap.has(scope)) {
    ScopeContextMap.set(scope, React__default.createContext(createScopeContainer()));
  }

  return ScopeContextMap.get(scope);
};

var atomToPrintable = function atomToPrintable(atom) {
  return atom.debugLabel || atom.toString();
};

var stateToPrintable = function stateToPrintable(_ref) {
  var store = _ref[0],
      atoms = _ref[1];
  return Object.fromEntries(atoms.flatMap(function (atom) {
    var _store$DEV_GET_MOUNTE, _store$DEV_GET_ATOM_S;

    var mounted = (_store$DEV_GET_MOUNTE = store[DEV_GET_MOUNTED]) == null ? void 0 : _store$DEV_GET_MOUNTE.call(store, atom);

    if (!mounted) {
      return [];
    }

    var dependents = mounted.t;
    var atomState = ((_store$DEV_GET_ATOM_S = store[DEV_GET_ATOM_STATE]) == null ? void 0 : _store$DEV_GET_ATOM_S.call(store, atom)) || {};
    return [[atomToPrintable(atom), _extends({}, 'e' in atomState && {
      error: atomState.e
    }, 'p' in atomState && {
      promise: atomState.p
    }, 'v' in atomState && {
      value: atomState.v
    }, {
      dependents: Array.from(dependents).map(atomToPrintable)
    })]];
  }));
};

var useDebugState = function useDebugState(scopeContainer) {
  var store = scopeContainer.s;

  var _useState = React__default.useState([]),
      atoms = _useState[0],
      setAtoms = _useState[1];

  React__default.useEffect(function () {
    var _store$DEV_SUBSCRIBE_;

    var callback = function callback() {
      var _store$DEV_GET_MOUNTE2;

      setAtoms(Array.from(((_store$DEV_GET_MOUNTE2 = store[DEV_GET_MOUNTED_ATOMS]) == null ? void 0 : _store$DEV_GET_MOUNTE2.call(store)) || []));
    };

    var unsubscribe = (_store$DEV_SUBSCRIBE_ = store[DEV_SUBSCRIBE_STATE]) == null ? void 0 : _store$DEV_SUBSCRIBE_.call(store, callback);
    callback();
    return unsubscribe;
  }, [store]);
  React__default.useDebugValue([store, atoms], stateToPrintable);
};

var Provider = function Provider(_ref) {
  var children = _ref.children,
      initialValues = _ref.initialValues,
      scope = _ref.scope,
      unstable_createStore = _ref.unstable_createStore,
      unstable_enableVersionedWrite = _ref.unstable_enableVersionedWrite;

  var _useState = React__default.useState(),
      version = _useState[0],
      setVersion = _useState[1];

  React__default.useEffect(function () {
    if (version) {
      scopeContainerRef.current.s[COMMIT_ATOM](null, version);
      delete version.p;
    }
  }, [version]);
  var scopeContainerRef = React__default.useRef();

  if (!scopeContainerRef.current) {
    scopeContainerRef.current = createScopeContainer(initialValues, unstable_createStore);

    if (unstable_enableVersionedWrite) {
      scopeContainerRef.current.w = function (write) {
        setVersion(function (parentVersion) {
          var nextVersion = parentVersion ? {
            p: parentVersion
          } : {};
          write(nextVersion);
          return nextVersion;
        });
      };
    }
  }

  if (process.env.NODE_ENV !== "production" && !unstable_enableVersionedWrite) {
    useDebugState(scopeContainerRef.current);
  }

  var ScopeContainerContext = getScopeContext(scope);
  return React__default.createElement(ScopeContainerContext.Provider, {
    value: scopeContainerRef.current
  }, children);
};

var keyCount = 0;
function atom(read, write) {
  var key = "atom" + ++keyCount;
  var config = {
    toString: function toString() {
      return key;
    }
  };

  if (typeof read === 'function') {
    config.read = read;
  } else {
    config.init = read;

    config.read = function (get) {
      return get(config);
    };

    config.write = function (get, set, update) {
      return set(config, typeof update === 'function' ? update(get(config)) : update);
    };
  }

  if (write) {
    config.write = write;
  }

  return config;
}

function useAtomValue(atom, scope) {
  var ScopeContext = getScopeContext(scope);

  var _useContext = React__default.useContext(ScopeContext),
      store = _useContext.s;

  var getAtomValue = React__default.useCallback(function (version) {
    var atomState = store[READ_ATOM](atom, version);

    if ('e' in atomState) {
      throw atomState.e;
    }

    if ('p' in atomState) {
      throw atomState.p;
    }

    if ('v' in atomState) {
      return atomState.v;
    }

    throw new Error('no atom value');
  }, [store, atom]);

  var _useReducer = React__default.useReducer(React__default.useCallback(function (prev, nextVersion) {
    var nextValue = getAtomValue(nextVersion);

    if (Object.is(prev[1], nextValue) && prev[2] === atom) {
      return prev;
    }

    return [nextVersion, nextValue, atom];
  }, [getAtomValue, atom]), undefined, function () {
    var initialVersion = undefined;
    var initialValue = getAtomValue(initialVersion);
    return [initialVersion, initialValue, atom];
  }),
      _useReducer$ = _useReducer[0],
      version = _useReducer$[0],
      value = _useReducer$[1],
      atomFromUseReducer = _useReducer$[2],
      rerenderIfChanged = _useReducer[1];

  if (atomFromUseReducer !== atom) {
    rerenderIfChanged(undefined);
  }

  React__default.useEffect(function () {
    var unsubscribe = store[SUBSCRIBE_ATOM](atom, rerenderIfChanged);
    rerenderIfChanged(undefined);
    return unsubscribe;
  }, [store, atom]);
  React__default.useEffect(function () {
    store[COMMIT_ATOM](atom, version);
  });
  React__default.useDebugValue(value);
  return value;
}

function useSetAtom(atom, scope) {
  var ScopeContext = getScopeContext(scope);

  var _useContext = React__default.useContext(ScopeContext),
      store = _useContext.s,
      versionedWrite = _useContext.w;

  var setAtom = React__default.useCallback(function (update) {
    if (process.env.NODE_ENV !== "production" && !('write' in atom)) {
      throw new Error('not writable atom');
    }

    var write = function write(version) {
      return store[WRITE_ATOM](atom, update, version);
    };

    return versionedWrite ? versionedWrite(write) : write();
  }, [store, versionedWrite, atom]);
  return setAtom;
}

function useAtom(atom, scope) {
  if ('scope' in atom) {
    console.warn('atom.scope is deprecated. Please do useAtom(atom, scope) instead.');
    scope = atom.scope;
  }

  return [useAtomValue(atom, scope), useSetAtom(atom, scope)];
}

exports.Provider = Provider;
exports.SECRET_INTERNAL_getScopeContext = getScopeContext;
exports.atom = atom;
exports.unstable_createStore = createStoreForExport;
exports.useAtom = useAtom;
exports.useAtomValue = useAtomValue;
exports.useSetAtom = useSetAtom;
});

var lodash_clonedeep = createCommonjsModule(function (module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;
});

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol$1 = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var lodash_set = set;

var ThemeAtom = jotai.atom("light");
var CurrentChannelAtom = jotai.atom("");
var SubscribeChannelsAtom = jotai.atom([]);
var SubscribeChannelGroupsAtom = jotai.atom([]);
var UsersMetaAtom = jotai.atom([]);
var MessagesAtom = jotai.atom({});
var PaginationAtom = jotai.atom({});
var TypingIndicatorAtom = jotai.atom({});
var TypingIndicatorTimeoutAtom = jotai.atom(10);
var RetryFunctionAtom = jotai.atom({
    function: function () { return null; },
});
var ErrorFunctionAtom = jotai.atom({
    function: function () { return null; },
});
var CurrentChannelMessagesAtom = jotai.atom(function (get) { return (get(MessagesAtom) ? get(MessagesAtom)[get(CurrentChannelAtom)] || [] : []); }, function (get, set, value) {
    var _a;
    return set(MessagesAtom, Object.assign({}, get(MessagesAtom), (_a = {}, _a[get(CurrentChannelAtom)] = value, _a)));
});
var CurrentChannelPaginationAtom = jotai.atom(function (get) { return get(PaginationAtom)[get(CurrentChannelAtom)] || false; }, function (get, set, value) {
    var _a;
    return set(PaginationAtom, Object.assign({}, get(PaginationAtom), (_a = {}, _a[get(CurrentChannelAtom)] = value, _a)));
});
var CurrentChannelTypingIndicatorAtom = jotai.atom(function (get) { return get(TypingIndicatorAtom)[get(CurrentChannelAtom)] || {}; }, function (get, set, value) {
    var _a;
    return set(TypingIndicatorAtom, Object.assign({}, get(TypingIndicatorAtom), (_a = {}, _a[get(CurrentChannelAtom)] = value, _a)));
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = "/*\n* Global color variables for light and dark theme\n* Warning! When hexToRGB is used on a color, the variable can only be used with rgba color function\n* inside of the actual CSS. To goal of this is to introduce alpha channels on some of the colors\n*/\n:root {\n  --chat--light__background--1: #f0f3f7;\n  --chat--light__background--2: #ffffff;\n  --chat--light__background--3: #eaeef3;\n  --chat--light__background--4: #01bd4c;\n  --chat--light__background--5-rgb: 239, 58, 67;\n  --chat--light__background--6: rgba(28, 28, 28, 0.8);\n  --chat--light__color--1: #585858;\n  --chat--light__color--2: #999999;\n  --chat--light__color--2-rgb: 153, 153, 153;\n  --chat--light__color--3: #eeeeee;\n  --chat--light__border--1: #ced6e0;\n  --chat--light__border--2: #bcc6d1;\n  --chat--light__hover--1: #de2440;\n  --chat--light__hover--2: #e4e9f0;\n  --chat--light__hover--3: #e9eef4;\n  --chat--light__hover--4: #e1e8f0;\n  --chat--dark__background--1: #1c1c28;\n  --chat--dark__background--2: #2a2a39;\n  --chat--dark__background--2-rgb: 42, 42, 57;\n  --chat--dark__background--4: #01bd4c;\n  --chat--dark__background--5: 239, 58, 67;\n  --chat--dark__background--6: rgba(240, 243, 247, 0.8);\n  --chat--dark__color--1: rgba(228, 228, 235, 0.8);\n  --chat--dark__color--2: #999999;\n  --chat--dark__color--3: #111111;\n  --chat--dark__border--1: #28293d;\n  --chat--dark__hover--1: #de2440;\n  --chat--dark__hover--2: #232333;\n  --chat--dark__hover--4: #555770;\n  --chat--dark__hover--4-rgb: 85, 87, 112;\n}\n\n/*\n* Style elements common to all components\n*/\n:root {\n  --tooltip__transition: all 0.3s ease;\n  --tooltip__background: var(--chat--light__background--6);\n  --tooltip__borderRadius: 5px;\n  --tooltip__color: var(--chat--light__color--3);\n  --tooltip__margin: 8px;\n  --tooltip__padding: 5px;\n  --tooltip__minWidth: 100px;\n  --tooltip__arrow__size: 4px;\n  --tooltip__arrow__margin: 0px;\n}\n\n.pn-tooltip {\n  position: relative;\n}\n.pn-tooltip:before, .pn-tooltip:after {\n  bottom: 100%;\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  transform: translateX(-50%);\n  transition: var(--tooltip__transition);\n  visibility: hidden;\n}\n.pn-tooltip:before {\n  background: var(--tooltip__background);\n  border-radius: var(--tooltip__borderRadius);\n  color: var(--tooltip__color);\n  content: attr(data-tooltip);\n  margin-bottom: var(--tooltip__margin);\n  padding: var(--tooltip__padding);\n  text-align: center;\n  min-width: var(--tooltip__minWidth);\n  z-index: 5;\n}\n.pn-tooltip:after {\n  border: var(--tooltip__arrow__size) solid;\n  margin-bottom: var(--tooltip__arrow__margin);\n  border-color: var(--tooltip__background) transparent transparent transparent;\n  content: \"\";\n}\n.pn-tooltip:hover:before, .pn-tooltip:hover:after {\n  visibility: visible;\n  opacity: 1;\n}\n\n.pn-msg-list--dark .pn-tooltip,\n.pn-msg-list--support-dark .pn-tooltip,\n.pn-msg-list--event-dark .pn-tooltip,\n.pn-msg-input--dark .pn-tooltip,\n.pn-msg-input--event-dark .pn-tooltip,\n.pn-msg-input--support-dark .pn-tooltip,\n.pn-member-list--dark .pn-tooltip,\n.pn-member-list--event-dark .pn-tooltip,\n.pn-member-list--support-dark .pn-tooltip,\n.pn-channel-list--dark .pn-tooltip,\n.pn-channel-list--event-dark .pn-tooltip,\n.pn-channel-list--support-dark .pn-tooltip,\n.pn-typing-indicator--dark .pn-tooltip,\n.pn-typing-indicator--event-dark .pn-tooltip,\n.pn-typing-indicator--support-dark .pn-tooltip {\n  --tooltip__background: var(--chat--dark__background--6);\n  --tooltip__color: var(--chat--dark__color--3);\n}";
styleInject(css_248z$5);

/**
 * Chat provider is used to configure various common options and feed the components with data.
 * It expects at least a "current" channel to display within components.
 *
 * Chat itself is supposed to be wrapped with a PubNubProvider component that is a part of the
 * PubNub React SDK. You should use it to pre-configure your PubNub instance. Please see Getting
 * Started page for details.
 */
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { error: null };
        return _this;
    }
    Chat.getDerivedStateFromError = function (error) {
        return { error: error };
    };
    Chat.prototype.componentDidCatch = function (error) {
        if (this.props.onError)
            this.props.onError(error);
    };
    Chat.prototype.render = function () {
        return (React__default.createElement(jotai.Provider, null,
            React__default.createElement(ChatInternal, __assign({}, this.props))));
    };
    Chat.defaultProps = {
        channels: [],
        channelGroups: [],
        theme: "light",
        enablePresence: true,
        typingIndicatorTimeout: 10,
        users: [],
        retryOptions: {
            maxRetries: 1,
            timeout: 0,
            exponentialFactor: 1,
        },
        onError: function () { return null; },
    };
    return Chat;
}(Component));
/**
 *
 *  Internal Chat wrapper with all business logic
 *
 */
var ChatInternal = function (props) {
    var pubnub = usePubNub();
    var _a = jotai.useAtom(MessagesAtom), setMessages = _a[1];
    var _b = jotai.useAtom(ThemeAtom), setTheme = _b[1];
    var _c = jotai.useAtom(ErrorFunctionAtom), setErrorFunction = _c[1];
    var _d = jotai.useAtom(RetryFunctionAtom), setRetryFunction = _d[1];
    var _e = jotai.useAtom(TypingIndicatorAtom), setTypingIndicator = _e[1];
    var _f = jotai.useAtom(TypingIndicatorTimeoutAtom), setTypingIndicatorTimeout = _f[1];
    var _g = jotai.useAtom(UsersMetaAtom), setUsersMeta = _g[1];
    var _h = jotai.useAtom(CurrentChannelAtom), currentChannel = _h[0], setCurrentChannel = _h[1];
    var _j = jotai.useAtom(SubscribeChannelsAtom), channels = _j[0], setChannels = _j[1];
    var _k = jotai.useAtom(SubscribeChannelGroupsAtom), channelGroups = _k[0], setChannelGroups = _k[1];
    /**
     * Destructure props to easily pass them to dependency arrays
     */
    var childrenProp = props.children, themeProp = props.theme, currentChannelProp = props.currentChannel, channelsProp = props.channels, channelGroupsProp = props.channelGroups, enablePresenceProp = props.enablePresence, usersProp = props.users, typingIndicatorTimeoutProp = props.typingIndicatorTimeout, retryOptionsProp = props.retryOptions, onMessageProp = props.onMessage, onSignalProp = props.onSignal, onMessageActionProp = props.onMessageAction, onPresenceProp = props.onPresence, onUserProp = props.onUser, onChannelProp = props.onChannel, onMembershipProp = props.onMembership, onFileProp = props.onFile, onStatusProp = props.onStatus, onErrorProp = props.onError;
    /**
     * Helpers
     */
    var retryOnError = useCallback(function (fn) { return __awaiter(void 0, void 0, void 0, function () {
        var maxRetries, timeout, exponentialFactor, _loop_1, i, state_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    maxRetries = retryOptionsProp.maxRetries, timeout = retryOptionsProp.timeout, exponentialFactor = retryOptionsProp.exponentialFactor;
                    _loop_1 = function (i) {
                        var _b, error_1;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 2, , 4]);
                                    _b = {};
                                    return [4 /*yield*/, fn()];
                                case 1: return [2 /*return*/, (_b.value = _c.sent(), _b)];
                                case 2:
                                    error_1 = _c.sent();
                                    if (maxRetries === i + 1)
                                        throw error_1;
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, timeout * Math.pow(exponentialFactor, i)); })];
                                case 3:
                                    _c.sent();
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < maxRetries)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(i)];
                case 2:
                    state_1 = _a.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [retryOptionsProp]);
    /**
     * Event handlers
     */
    var handleMessage = useCallback(function (message) {
        try {
            setMessages(function (messages) {
                var messagesClone = lodash_clonedeep(messages) || {};
                messagesClone[message.channel] = messagesClone[message.channel] || [];
                messagesClone[message.channel].push(message);
                return messagesClone;
            });
            if (onMessageProp)
                onMessageProp(message);
        }
        catch (e) {
            onErrorProp(e);
        }
    }, [onMessageProp, onErrorProp, setMessages]);
    var handleSignalEvent = useCallback(function (signal) {
        try {
            if (["typing_on", "typing_off"].includes(signal.message.type)) {
                setTypingIndicator(function (indicators) {
                    var indicatorsClone = lodash_clonedeep(indicators);
                    var value = signal.message.type === "typing_on" ? signal.timetoken : null;
                    lodash_set(indicatorsClone, [signal.channel, signal.publisher], value);
                    return indicatorsClone;
                });
            }
            if (onSignalProp)
                onSignalProp(signal);
        }
        catch (e) {
            onErrorProp(e);
        }
    }, [onSignalProp, onErrorProp, setTypingIndicator]);
    var handlePresenceEvent = useCallback(function (event) {
        try {
            if (onPresenceProp)
                onPresenceProp(event);
        }
        catch (e) {
            onErrorProp(e);
        }
    }, [onPresenceProp, onErrorProp]);
    var handleObjectsEvent = useCallback(function (event) {
        try {
            if (event.message.type === "membership" && onMembershipProp)
                onMembershipProp(event);
            if (event.message.type === "channel" && onChannelProp)
                onChannelProp(event);
            if (event.message.type === "uuid" && onUserProp)
                onUserProp(event);
        }
        catch (e) {
            onErrorProp(e);
        }
    }, [onMembershipProp, onChannelProp, onUserProp, onErrorProp]);
    var handleAction = useCallback(function (action) {
        try {
            setMessages(function (messages) {
                var _a, _b;
                if (!messages || !messages[action.channel])
                    return;
                var channel = action.channel, event = action.event;
                var _c = action.data, type = _c.type, value = _c.value, actionTimetoken = _c.actionTimetoken, messageTimetoken = _c.messageTimetoken, uuid = _c.uuid;
                var messagesClone = lodash_clonedeep(messages);
                var message = messagesClone[channel].find(function (m) { return m.timetoken === messageTimetoken; });
                var actions = ((_b = (_a = message === null || message === void 0 ? void 0 : message.actions) === null || _a === void 0 ? void 0 : _a[type]) === null || _b === void 0 ? void 0 : _b[value]) || [];
                if (message && event === "added") {
                    var newActions = __spreadArray(__spreadArray([], actions, true), [{ uuid: uuid, actionTimetoken: actionTimetoken }], false);
                    lodash_set(message, ["actions", type, value], newActions);
                }
                if (message && event === "removed") {
                    var newActions = actions.filter(function (a) { return a.actionTimetoken !== actionTimetoken; });
                    newActions.length
                        ? lodash_set(message, ["actions", type, value], newActions)
                        : delete message.actions[type][value];
                }
                return messagesClone;
            });
            if (onMessageActionProp)
                onMessageActionProp(action);
        }
        catch (e) {
            onErrorProp(e);
        }
    }, [onMessageActionProp, onErrorProp, setMessages]);
    var handleFileEvent = useCallback(function (event) {
        try {
            setMessages(function (messages) {
                var file = event.file, message = event.message, payload = __rest(event, ["file", "message"]);
                var newMessage = __assign(__assign({}, payload), { message: { file: file, message: message }, messageType: 4 });
                var messagesClone = lodash_clonedeep(messages) || {};
                messagesClone[newMessage.channel] = messagesClone[newMessage.channel] || [];
                messagesClone[newMessage.channel].push(newMessage);
                return messagesClone;
            });
            if (onFileProp)
                onFileProp(event);
        }
        catch (e) {
            onErrorProp(e);
        }
    }, [onFileProp, onErrorProp, setMessages]);
    var handleStatusEvent = useCallback(function (event) {
        try {
            if (onStatusProp)
                onStatusProp(event);
        }
        catch (e) {
            onErrorProp(e);
        }
    }, [onStatusProp, onErrorProp]);
    /**
     * Lifecycle: load updateable props
     */
    useEffect(function () {
        setUsersMeta(usersProp);
    }, [usersProp, setUsersMeta]);
    useEffect(function () {
        setTheme(themeProp);
    }, [themeProp, setTheme]);
    useEffect(function () {
        setCurrentChannel(currentChannelProp);
    }, [currentChannelProp, setCurrentChannel]);
    useEffect(function () {
        setChannels(channelsProp);
    }, [channelsProp, setChannels]);
    useEffect(function () {
        setChannelGroups(channelGroupsProp);
    }, [channelGroupsProp, setChannelGroups]);
    useEffect(function () {
        setTypingIndicatorTimeout(typingIndicatorTimeoutProp);
    }, [typingIndicatorTimeoutProp, setTypingIndicatorTimeout]);
    useEffect(function () {
        setErrorFunction({ function: function (error) { return onErrorProp(error); } });
    }, [onErrorProp, setErrorFunction]);
    useEffect(function () {
        setRetryFunction({ function: function (fn) { return retryOnError(fn); } });
    }, [retryOnError, setRetryFunction]);
    /**
     * Lifecycle: use currentChannel for subscriptions when neither channels or channelGroups is passed
     */
    useEffect(function () {
        if (!currentChannel)
            return;
        if (!channels.includes(currentChannel) && !channelsProp.length && !channelGroupsProp.length) {
            setChannels(__spreadArray(__spreadArray([], channels, true), [currentChannel], false));
        }
    }, [currentChannel, channels, channelsProp.length, channelGroupsProp.length, setChannels]);
    /**
     * Lifecycle: setup correct subscriptions based on channels and channelGroups
     */
    useEffect(function () {
        if (!channels.length && !channelGroups.length)
            return;
        var currentSubscriptions = pubnub.getSubscribedChannels();
        var currentGroups = pubnub.getSubscribedChannelGroups();
        try {
            var newChannels = channels.filter(function (c) { return !currentSubscriptions.includes(c); });
            var oldChannels = currentSubscriptions.filter(function (c) { return !channels.includes(c); });
            var newGroups = channelGroups.filter(function (c) { return !currentGroups.includes(c); });
            var oldGroups = currentGroups.filter(function (c) { return !channelGroups.includes(c); });
            if (newChannels.length || newGroups.length) {
                pubnub.subscribe({
                    channels: newChannels,
                    channelGroups: newGroups,
                    withPresence: enablePresenceProp,
                });
            }
            if (oldChannels.length || oldGroups.length) {
                pubnub.unsubscribe({
                    channels: oldChannels,
                    channelGroups: oldGroups,
                });
            }
        }
        catch (e) {
            onErrorProp(e);
        }
    }, [channels, channelGroups, enablePresenceProp, onErrorProp, pubnub]);
    /**
     * Lifecycle: setup event listeners
     */
    useEffect(function () {
        if (!pubnub)
            return;
        var listener = {
            message: function (m) { return handleMessage(m); },
            messageAction: function (m) { return handleAction(m); },
            presence: function (e) { return handlePresenceEvent(e); },
            objects: function (e) { return handleObjectsEvent(e); },
            signal: function (e) { return handleSignalEvent(e); },
            file: function (e) { return handleFileEvent(e); },
            status: function (e) { return handleStatusEvent(e); },
        };
        try {
            pubnub.addListener(listener);
        }
        catch (e) {
            onErrorProp(e);
        }
        return function () {
            if (pubnub && pubnub.removeListener) {
                pubnub.removeListener(listener);
            }
        };
    }, [
        pubnub,
        handleMessage,
        handleAction,
        handlePresenceEvent,
        handleObjectsEvent,
        handleSignalEvent,
        handleFileEvent,
        handleStatusEvent,
        onErrorProp,
    ]);
    /**
     * Lifecycle: add telemetry config to PubNub instance
     */
    useEffect(function () {
        if (!pubnub)
            return;
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        pubnub._config._addPnsdkSuffix("chat-components", "RCC/0.12.0");
    }, [pubnub]);
    return React__default.createElement(React__default.Fragment, null, childrenProp);
};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var getNameInitials = function (name) {
    if (!name || !name.length)
        return "";
    var nameSplit = name.split(" ");
    var initials = nameSplit.length == 1 ? nameSplit[0].substring(0, 2) : nameSplit[0][0] + nameSplit[1][0];
    return initials.toUpperCase();
};
var getPredefinedColor = function (uuid) {
    if (!uuid || !uuid.length)
        return;
    var colors = ["#80deea", "#9fa7df", "#aed581", "#ce93d8", "#ef9a9a", "#ffab91", "#ffe082"];
    var sum = uuid
        .split("")
        .map(function (c) { return c.charCodeAt(0); })
        .reduce(function (a, b) { return a + b; });
    return colors[sum % colors.length];
};
var useOuterClick = function (callback) {
    var callbackRef = useRef();
    var innerRef = useRef();
    useEffect(function () {
        callbackRef.current = callback;
    });
    useEffect(function () {
        var handleClick = function (e) {
            if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target))
                callbackRef.current(e);
        };
        document.addEventListener("click", handleClick);
        return function () {
            document.removeEventListener("click", handleClick);
        };
    }, []);
    return innerRef;
};

var css_248z$4 = "/* ************************\n** Variables\n** ********************* */\n:root {\n  --msg-input__background: var(--chat--light__background--1);\n  --msg-input__padding: 10px 18px;\n  --msg-input__emoji-picker__bottom: 14px;\n  --msg-input__emoji-picker__left: 10px;\n  --msg-input__icon__color: var(--chat--light__color--2);\n  --msg-input__icon__margin: 0 18px 0 0;\n  --msg-input__icon__fontSize: 13px;\n  --msg-input__send__background: transparent;\n  --msg-input__send__border: none;\n  --msg-input__send__borderRadius: 5px;\n  --msg-input__send__color: var(--chat--light__color--2);\n  --msg-input__send--active__color: var(--chat--light__hover--1);\n  --msg-input__send__fontFamily: inherit;\n  --msg-input__send__fontSize: 13px;\n  --msg-input__send__fontWeight: bold;\n  --msg-input__send__margin: 0 0 0 18px;\n  --msg-input__send__minWidth: 0;\n  --msg-input__send__padding: 0;\n  --msg-input--disabled__placeholder__color: rgba(var(--chat--light__color--2-rgb), 0.5);\n  --msg-input__placeholder__color: var(--chat--light__color--2);\n  --msg-input__textarea--focus__border: 1px solid transparent;\n  --msg-input__textarea--focus__outline: none;\n  --msg-input__textarea__background: var(--chat--light__hover--2);\n  --msg-input--disabled__textarea__background: var(--chat--light__background--3);\n  --msg-input__textarea__border: 1px solid transparent;\n  --msg-input--disabled__textarea__border: 1px solid transparent;\n  --msg-input__textarea__borderRadius: 20px;\n  --msg-input__textarea__boxShadow: none;\n  --msg-input__textarea__color: var(--chat--light__color--1);\n  --msg-input__textarea__fontFamily: inherit;\n  --msg-input__textarea__fontSize: 13px;\n  --msg-input__textarea__height: 32px;\n  --msg-input__textarea__lineHeight: 18px;\n  --msg-input__textarea__outline: none;\n  --msg-input__textarea__padding: 6px 14px 8px;\n  --msg-input__textarea__resize: none;\n  --msg-input__textarea__width: 100%;\n  --msg-input__textarea__overflow: hidden;\n}\n\n/* ************************\n** Styles\n** ********************* */\n.pn-msg-input {\n  background: var(--msg-input__background);\n  padding: var(--msg-input__padding);\n}\n.pn-msg-input__wrapper {\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n.pn-msg-input__textarea {\n  background: var(--msg-input__textarea__background);\n  border-radius: var(--msg-input__textarea__borderRadius);\n  border: var(--msg-input__textarea__border);\n  box-shadow: var(--msg-input__textarea__boxShadow);\n  box-sizing: border-box;\n  color: var(--msg-input__textarea__color);\n  font-family: var(--msg-input__textarea__fontFamily);\n  font-size: var(--msg-input__textarea__fontSize);\n  height: var(--msg-input__textarea__height);\n  line-height: var(--msg-input__textarea__lineHeight);\n  outline: var(--msg-input__textarea__outline);\n  padding: var(--msg-input__textarea__padding);\n  resize: var(--msg-input__textarea__resize);\n  width: var(--msg-input__textarea__width);\n  overflow: var(--msg-input__textarea__overflow);\n}\n.pn-msg-input__textarea:focus-within {\n  outline: var(--msg-input__textarea--focus__outline);\n  border: var(--msg-input__textarea--focus__border);\n}\n.pn-msg-input__textarea::placeholder {\n  color: var(--msg-input__placeholder__color);\n}\n.pn-msg-input__send {\n  background: var(--msg-input__send__background);\n  border-radius: var(--msg-input__send__borderRadius);\n  border: var(--msg-input__send__border);\n  color: var(--msg-input__send__color);\n  cursor: pointer;\n  flex-shrink: 0;\n  font-family: var(--msg-input__send__fontFamily);\n  font-size: var(--msg-input__send__fontSize);\n  font-weight: var(--msg-input__send__fontWeight);\n  margin: var(--msg-input__send__margin);\n  min-width: var(--msg-input__send__minWidth);\n  outline: none;\n  padding: var(--msg-input__send__padding);\n  white-space: nowrap;\n}\n.pn-msg-input__send--active {\n  color: var(--msg-input__send--active__color);\n}\n.pn-msg-input__emoji-picker {\n  bottom: var(--msg-input__emoji-picker__bottom);\n  left: var(--msg-input__emoji-picker__left);\n  position: absolute;\n}\n.pn-msg-input__icons {\n  align-items: center;\n  display: flex;\n}\n.pn-msg-input__icons > * {\n  cursor: pointer;\n  color: var(--msg-input__icon__color);\n  font-size: var(--msg-input__icon__fontSize);\n  margin: var(--msg-input__icon__margin);\n}\n.pn-msg-input__fileLabel {\n  cursor: pointer;\n}\n.pn-msg-input__fileInput {\n  display: none;\n}\n\n.pn-msg-input--disabled .pn-msg-input__textarea {\n  background: var(--msg-input--disabled__textarea__background);\n  border: var(--msg-input--disabled__textarea__border);\n  cursor: not-allowed;\n}\n.pn-msg-input--disabled .pn-msg-input__textarea::placeholder {\n  color: var(--msg-input--disabled__placeholder__color);\n}\n\n/* ************************\n** Themes\n** ********************* */\n.pn-msg-input--dark,\n.pn-msg-input--event-dark,\n.pn-msg-input--support-dark {\n  --msg-input__background: var(--chat--dark__background--1);\n  --msg-input__icon__color: var(--chat--dark__color--2);\n  --msg-input__send__color: var(--chat--dark__color--2);\n  --msg-input__send--active__color: var(--chat--dark__hover--1);\n  --msg-input--disabled__placeholder__color: rgba(var(--chat--dark__hover--4-rgb), 0.5);\n  --msg-input__placeholder__color: var(--chat--dark__hover--4);\n  --msg-input__textarea__background: var(--chat--dark__background--2);\n  --msg-input--disabled__textarea__background: rgba(var(--chat--dark__background--2-rgb), 0.5);\n  --msg-input__textarea__color: var(--chat--dark__color--1);\n}";
styleInject(css_248z$4);

var _path$6;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function SvgEmoji(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    overflow: "visible",
    preserveAspectRatio: "none",
    viewBox: "0 0 24 24",
    width: 20,
    height: 20
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
    fill: "currentColor",
    vectorEffect: "non-scaling-stroke"
  })));
}

var _path$5, _path2$2;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function SvgFile(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    height: 20,
    viewBox: "0 0 24 24",
    width: 20,
    fill: "currentColor"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"
  })));
}

var _path$4;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function SvgImage(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    overflow: "visible",
    preserveAspectRatio: "none",
    viewBox: "0 0 24 24",
    width: 20,
    height: 20
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z",
    fill: "currentColor",
    vectorEffect: "non-scaling-stroke"
  })));
}

var _path$3;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function SvgXCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.404 12.596a6.5 6.5 0 119.192-9.192 6.5 6.5 0 01-9.192 9.192zM2.344 2.343a8 8 0 1011.313 11.314A8 8 0 002.343 2.343zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"
  })));
}

var _circle;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function SvgSpinner(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      margin: "auto",
      background: "0 0"
    },
    width: 20,
    height: 20,
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    display: "block"
  }, props), _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 50,
    cy: 50,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 15,
    r: 43,
    strokeDasharray: "117.80972450961724 41.269908169872416"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    repeatCount: "indefinite",
    dur: "0.641025641025641s",
    values: "0 50 50;360 50 50",
    keyTimes: "0;1"
  }))));
}

var _path$2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function SvgAirplane(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    overflow: "visible",
    preserveAspectRatio: "none",
    viewBox: "0 0 24 24",
    width: 20,
    height: 20
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    vectorEffect: "non-scaling-stroke",
    d: "M2 21l21-9L2 3v7l15 2-15 2z"
  })));
}

/**
 * Allows users to compose messages using text and emojis
 * and automatically publish them on PubNub channels upon sending.
 */
var MessageInput = function (props) {
    var pubnub = usePubNub();
    var _a = useState(props.draftMessage || ""), text = _a[0], setText = _a[1];
    var _b = useState(null), file = _b[0], setFile = _b[1];
    var _c = useState(false), emojiPickerShown = _c[0], setEmojiPickerShown = _c[1];
    var _d = useState(false), typingIndicatorSent = _d[0], setTypingIndicatorSent = _d[1];
    var _e = useState(), picker = _e[0], setPicker = _e[1];
    var _f = useState(false), loader = _f[0], setLoader = _f[1];
    var users = jotai.useAtom(UsersMetaAtom)[0];
    var theme = jotai.useAtom(ThemeAtom)[0];
    var channel = jotai.useAtom(CurrentChannelAtom)[0];
    var onErrorObj = jotai.useAtom(ErrorFunctionAtom)[0];
    var onError = onErrorObj.function;
    var typingIndicatorTimeout = jotai.useAtom(TypingIndicatorTimeoutAtom)[0];
    var inputRef = useRef(null);
    var fileRef = useRef(null);
    var pickerRef = useOuterClick(function () {
        if (event.target.closest(".pn-msg-input__emoji-toggle"))
            return;
        setEmojiPickerShown(false);
    });
    /*
    /* Helper functions
    */
    var autoSize = function () {
        var input = inputRef.current;
        if (!input)
            return;
        setTimeout(function () {
            input.style.cssText = "height: auto;";
            input.style.cssText = "height: ".concat(input.scrollHeight, "px;");
        }, 0);
    };
    var isValidInputText = function () {
        return !!text.trim().length;
    };
    /*
    /* Commands
    */
    var sendMessage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var message, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, 6, 7]);
                    if (!file && !isValidInputText())
                        return [2 /*return*/];
                    message = __assign(__assign({ id: v4(), text: file ? "" : text, type: file ? "" : "default" }, (props.senderInfo && { sender: users.find(function (u) { return u.id === pubnub.getUUID(); }) })), { createdAt: new Date().toISOString() });
                    setLoader(true);
                    if (!file) return [3 /*break*/, 2];
                    return [4 /*yield*/, pubnub.sendFile({ channel: channel, file: file, message: message })];
                case 1:
                    _a.sent();
                    props.onSend && props.onSend(file);
                    return [3 /*break*/, 4];
                case 2:
                    if (!text) return [3 /*break*/, 4];
                    if (props.onBeforeSend)
                        message = props.onBeforeSend(message) || message;
                    return [4 /*yield*/, pubnub.publish({ channel: channel, message: message })];
                case 3:
                    _a.sent();
                    props.onSend && props.onSend(message);
                    _a.label = 4;
                case 4:
                    if (props.typingIndicator)
                        stopTypingIndicator();
                    clearInput();
                    return [3 /*break*/, 7];
                case 5:
                    e_1 = _a.sent();
                    onError(e_1);
                    return [3 /*break*/, 7];
                case 6:
                    setLoader(false);
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var startTypingIndicator = function () { return __awaiter(void 0, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            if (typingIndicatorSent)
                return [2 /*return*/];
            try {
                setTypingIndicatorSent(true);
                message = { message: { type: "typing_on" }, channel: channel };
                pubnub.signal(message);
            }
            catch (e) {
                onError(e);
            }
            return [2 /*return*/];
        });
    }); };
    var stopTypingIndicator = function () { return __awaiter(void 0, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            if (!typingIndicatorSent)
                return [2 /*return*/];
            try {
                setTypingIndicatorSent(false);
                message = { message: { type: "typing_off" }, channel: channel };
                pubnub.signal(message);
            }
            catch (e) {
                onError(e);
            }
            return [2 /*return*/];
        });
    }); };
    var clearInput = function () {
        setFile(null);
        setText("");
        autoSize();
        fileRef.current.value = null;
    };
    /*
    /* Event handlers
    */
    var handleEmojiInsertion = function (emoji) {
        try {
            if (!("native" in emoji))
                return;
            setText(function (text) { return text + emoji.native; });
            setEmojiPickerShown(false);
        }
        catch (e) {
            onError(e);
        }
    };
    var handleKeyPress = function (event) {
        try {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        }
        catch (e) {
            onError(e);
        }
    };
    var handleInputChange = function (event) {
        try {
            var textArea = event.target;
            var newText = textArea.value;
            if (props.typingIndicator && newText.length)
                startTypingIndicator();
            if (props.typingIndicator && !newText.length)
                stopTypingIndicator();
            props.onChange && props.onChange(newText);
            autoSize();
            setText(newText);
        }
        catch (e) {
            onError(e);
        }
    };
    var handleFileChange = function (event) {
        try {
            var file_1 = event.target.files[0];
            setFile(file_1);
            setText(file_1.name);
        }
        catch (e) {
            onError(e);
        }
    };
    /*
    /* Lifecycle
    */
    useEffect(function () {
        if (React__default.isValidElement(props.emojiPicker)) {
            setPicker(React__default.cloneElement(props.emojiPicker, { onSelect: handleEmojiInsertion }));
        }
    }, [props.emojiPicker]);
    useEffect(function () {
        var timer = null;
        if (typingIndicatorSent) {
            timer = setTimeout(function () {
                setTypingIndicatorSent(false);
            }, (typingIndicatorTimeout - 1) * 1000);
        }
        return function () { return clearTimeout(timer); };
    }, [typingIndicatorSent]);
    /*
    /* Renderers
    */
    var renderFileUpload = function () {
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", null,
                React__default.createElement("label", { htmlFor: "file-upload", className: "pn-msg-input__fileLabel", title: "Add a file" }, props.fileUpload === "image" ? React__default.createElement(SvgImage, null) : React__default.createElement(SvgFile, null)),
                React__default.createElement("input", { accept: props.fileUpload === "image" ? "image/*" : "*", className: "pn-msg-input__fileInput", "data-testid": "file-upload", id: "file-upload", onChange: handleFileChange, ref: fileRef, type: "file" })),
            file && (React__default.createElement("div", { title: "Remove the file", onClick: clearInput },
                React__default.createElement(SvgXCircle, null)))));
    };
    var renderEmojiPicker = function () {
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", { onClick: function () { return setEmojiPickerShown(true); }, title: "Add an emoji" },
                React__default.createElement(SvgEmoji, null)),
            emojiPickerShown && (React__default.createElement("div", { className: "pn-msg-input__emoji-picker", ref: pickerRef }, picker))));
    };
    return (React__default.createElement("div", { className: "pn-msg-input pn-msg-input--".concat(theme, " ").concat(props.disabled ? "pn-msg-input--disabled" : "") },
        React__default.createElement("div", { className: "pn-msg-input__wrapper" },
            React__default.createElement("div", { className: "pn-msg-input__icons" },
                React__default.createElement("div", { className: "pn-msg-input__emoji-toggle" }, !props.disabled && props.emojiPicker && renderEmojiPicker()),
                !props.disabled && props.fileUpload && renderFileUpload(),
                props.extraActionsRenderer && props.extraActionsRenderer()),
            React__default.createElement("textarea", { className: "pn-msg-input__textarea", "data-testid": "message-input", disabled: props.disabled || !!file, onChange: function (e) { return handleInputChange(e); }, onKeyPress: function (e) { return handleKeyPress(e); }, placeholder: props.placeholder, ref: inputRef, rows: 1, value: text }),
            !props.hideSendButton && !props.disabled && (React__default.createElement("button", { className: "pn-msg-input__send ".concat(isValidInputText() && "pn-msg-input__send--active"), disabled: loader || props.disabled, onClick: function () { return sendMessage(); }, title: "Send" }, loader ? React__default.createElement(SvgSpinner, null) : props.sendButton)))));
};
MessageInput.defaultProps = {
    disabled: false,
    fileUpload: undefined,
    hideSendButton: false,
    placeholder: "Send message",
    sendButton: React__default.createElement(SvgAirplane, null),
    senderInfo: false,
    typingIndicator: false,
};

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });




var RESET = Symbol();

function atomWithReset(initialValue) {
  var anAtom = jotai.atom(initialValue, function (get, set, update) {
    if (update === RESET) {
      set(anAtom, initialValue);
    } else {
      set(anAtom, typeof update === 'function' ? update(get(anAtom)) : update);
    }
  });
  return anAtom;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var WRITE_ATOM = 'w';
var RESTORE_ATOMS = 'h';

function useResetAtom(anAtom, scope) {
  var ScopeContext = jotai.SECRET_INTERNAL_getScopeContext(scope);
  var store = React__default.useContext(ScopeContext).s;
  var setAtom = React__default.useCallback(function () {
    return store[WRITE_ATOM](anAtom, RESET);
  }, [store, anAtom]);
  return setAtom;
}

function useReducerAtom(anAtom, reducer, scope) {
  var _useAtom = jotai.useAtom(anAtom, scope),
      state = _useAtom[0],
      setState = _useAtom[1];

  var dispatch = React__default.useCallback(function (action) {
    setState(function (prev) {
      return reducer(prev, action);
    });
  }, [setState, reducer]);
  return [state, dispatch];
}

function atomWithReducer(initialValue, reducer) {
  var anAtom = jotai.atom(initialValue, function (get, set, action) {
    return set(anAtom, reducer(get(anAtom), action));
  });
  return anAtom;
}

function atomFamily(initializeAtom, areEqual) {
  var shouldRemove = null;
  var atoms = new Map();

  var createAtom = function createAtom(param) {
    var item;

    if (areEqual === undefined) {
      item = atoms.get(param);
    } else {
      for (var _iterator = _createForOfIteratorHelperLoose(atoms), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            value = _step$value[1];

        if (areEqual(key, param)) {
          item = value;
          break;
        }
      }
    }

    if (item !== undefined) {
      if (shouldRemove != null && shouldRemove(item[1], param)) {
        atoms.delete(param);
      } else {
        return item[0];
      }
    }

    var newAtom = initializeAtom(param);
    atoms.set(param, [newAtom, Date.now()]);
    return newAtom;
  };

  createAtom.remove = function (param) {
    if (areEqual === undefined) {
      atoms.delete(param);
    } else {
      for (var _iterator2 = _createForOfIteratorHelperLoose(atoms), _step2; !(_step2 = _iterator2()).done;) {
        var _step2$value = _step2.value,
            key = _step2$value[0];

        if (areEqual(key, param)) {
          atoms.delete(key);
          break;
        }
      }
    }
  };

  createAtom.setShouldRemove = function (fn) {
    shouldRemove = fn;
    if (!shouldRemove) return;

    for (var _iterator3 = _createForOfIteratorHelperLoose(atoms), _step3; !(_step3 = _iterator3()).done;) {
      var _step3$value = _step3.value,
          key = _step3$value[0],
          value = _step3$value[1];

      if (shouldRemove(value[1], key)) {
        atoms.delete(key);
      }
    }
  };

  return createAtom;
}

var getWeakCacheItem = function getWeakCacheItem(cache, deps) {
  do {
    var _deps = deps,
        dep = _deps[0],
        rest = _deps.slice(1);

    var entry = cache.get(dep);

    if (!entry) {
      return;
    }

    if (!rest.length) {
      return entry[1];
    }

    cache = entry[0];
    deps = rest;
  } while (deps.length);
};

var setWeakCacheItem = function setWeakCacheItem(cache, deps, item) {
  do {
    var _deps2 = deps,
        dep = _deps2[0],
        rest = _deps2.slice(1);

    var entry = cache.get(dep);

    if (!entry) {
      entry = [new WeakMap()];
      cache.set(dep, entry);
    }

    if (!rest.length) {
      entry[1] = item;
      return;
    }

    cache = entry[0];
    deps = rest;
  } while (deps.length);
};

var createMemoizeAtom = function createMemoizeAtom() {
  var cache = new WeakMap();

  var memoizeAtom = function memoizeAtom(createAtom, deps) {
    var cachedAtom = getWeakCacheItem(cache, deps);

    if (cachedAtom) {
      return cachedAtom;
    }

    var createdAtom = createAtom();
    setWeakCacheItem(cache, deps, createdAtom);
    return createdAtom;
  };

  return memoizeAtom;
};

var memoizeAtom$4 = createMemoizeAtom();
function selectAtom(anAtom, selector, equalityFn) {
  if (equalityFn === void 0) {
    equalityFn = Object.is;
  }

  return memoizeAtom$4(function () {
    var refAtom = jotai.atom(function () {
      return {};
    });
    var derivedAtom = jotai.atom(function (get) {
      var slice = selector(get(anAtom));
      var ref = get(refAtom);

      if ('prev' in ref && equalityFn(ref.prev, slice)) {
        return ref.prev;
      }

      ref.prev = slice;
      return slice;
    });
    return derivedAtom;
  }, [anAtom, selector, equalityFn]);
}

function useAtomCallback(callback, scope) {
  var anAtom = React__default.useMemo(function () {
    return jotai.atom(null, function (get, set, _ref) {
      var arg = _ref[0],
          resolve = _ref[1],
          reject = _ref[2];

      try {
        resolve(callback(get, set, arg));
      } catch (e) {
        reject(e);
      }
    });
  }, [callback]);
  var invoke = jotai.useSetAtom(anAtom, scope);
  return React__default.useCallback(function (arg) {
    var isSync = true;
    var settled = {};
    var promise = new Promise(function (resolve, reject) {
      invoke([arg, function (v) {
        if (isSync) {
          settled = {
            v: v
          };
        } else {
          resolve(v);
        }
      }, function (e) {
        if (isSync) {
          settled = {
            e: e
          };
        } else {
          reject(e);
        }
      }]);
    });
    isSync = false;

    if ('e' in settled) {
      throw settled.e;
    }

    if ('v' in settled) {
      return settled.v;
    }

    return promise;
  }, [invoke]);
}

var memoizeAtom$3 = createMemoizeAtom();

var deepFreeze = function deepFreeze(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  Object.freeze(obj);
  var propNames = Object.getOwnPropertyNames(obj);

  for (var _iterator = _createForOfIteratorHelperLoose(propNames), _step; !(_step = _iterator()).done;) {
    var name = _step.value;
    var value = obj[name];
    deepFreeze(value);
  }

  return obj;
};

function freezeAtom(anAtom) {
  return memoizeAtom$3(function () {
    var frozenAtom = jotai.atom(function (get) {
      return deepFreeze(get(anAtom));
    }, function (_get, set, arg) {
      return set(anAtom, arg);
    });
    return frozenAtom;
  }, [anAtom]);
}
function freezeAtomCreator(createAtom) {
  return function () {
    var anAtom = createAtom.apply(void 0, arguments);
    var origRead = anAtom.read;

    anAtom.read = function (get) {
      return deepFreeze(origRead(get));
    };

    return anAtom;
  };
}

var memoizeAtom$2 = createMemoizeAtom();

var isWritable = function isWritable(atom) {
  return !!atom.write;
};

var isFunction = function isFunction(x) {
  return typeof x === 'function';
};

function splitAtom(arrAtom, keyExtractor) {
  return memoizeAtom$2(function () {
    var mappingCache = new WeakMap();

    var getMapping = function getMapping(arr, prev) {
      var mapping = mappingCache.get(arr);

      if (mapping) {
        return mapping;
      }

      var prevMapping = prev && mappingCache.get(prev);
      var atomList = [];
      var keyList = [];
      arr.forEach(function (item, index) {
        var key = keyExtractor ? keyExtractor(item) : index;
        keyList[index] = key;
        var cachedAtom = prevMapping && prevMapping.atomList[prevMapping.keyList.indexOf(key)];

        if (cachedAtom) {
          atomList[index] = cachedAtom;
          return;
        }

        var read = function read(get) {
          var ref = get(refAtom);
          var currArr = get(arrAtom);
          var mapping = getMapping(currArr, ref.prev);
          var index = mapping.keyList.indexOf(key);

          if (index < 0 || index >= currArr.length) {
            var prevItem = arr[getMapping(arr).keyList.indexOf(key)];

            if (prevItem) {
              return prevItem;
            }

            throw new Error('splitAtom: index out of bounds for read');
          }

          return currArr[index];
        };

        var write = function write(get, set, update) {
          var ref = get(refAtom);
          var arr = get(arrAtom);
          var mapping = getMapping(arr, ref.prev);
          var index = mapping.keyList.indexOf(key);

          if (index < 0 || index >= arr.length) {
            throw new Error('splitAtom: index out of bounds for write');
          }

          var nextItem = isFunction(update) ? update(arr[index]) : update;
          set(arrAtom, [].concat(arr.slice(0, index), [nextItem], arr.slice(index + 1)));
        };

        atomList[index] = isWritable(arrAtom) ? jotai.atom(read, write) : jotai.atom(read);
      });

      if (prevMapping && prevMapping.keyList.length === keyList.length && prevMapping.keyList.every(function (x, i) {
        return x === keyList[i];
      })) {
        mapping = prevMapping;
      } else {
        mapping = {
          atomList: atomList,
          keyList: keyList
        };
      }

      mappingCache.set(arr, mapping);
      return mapping;
    };

    var refAtom = jotai.atom(function () {
      return {};
    });

    var read = function read(get) {
      var ref = get(refAtom);
      var arr = get(arrAtom);
      var mapping = getMapping(arr, ref.prev);
      ref.prev = arr;
      return mapping.atomList;
    };

    var write = function write(get, set, action) {
      if ('read' in action) {
        console.warn('atomToRemove is deprecated. use action with type');
        action = {
          type: 'remove',
          atom: action
        };
      }

      switch (action.type) {
        case 'remove':
          {
            var index = get(splittedAtom).indexOf(action.atom);

            if (index >= 0) {
              var arr = get(arrAtom);
              set(arrAtom, [].concat(arr.slice(0, index), arr.slice(index + 1)));
            }

            break;
          }

        case 'insert':
          {
            var _index = action.before ? get(splittedAtom).indexOf(action.before) : get(splittedAtom).length;

            if (_index >= 0) {
              var _arr = get(arrAtom);

              set(arrAtom, [].concat(_arr.slice(0, _index), [action.value], _arr.slice(_index)));
            }

            break;
          }

        case 'move':
          {
            var index1 = get(splittedAtom).indexOf(action.atom);
            var index2 = action.before ? get(splittedAtom).indexOf(action.before) : get(splittedAtom).length;

            if (index1 >= 0 && index2 >= 0) {
              var _arr2 = get(arrAtom);

              if (index1 < index2) {
                set(arrAtom, [].concat(_arr2.slice(0, index1), _arr2.slice(index1 + 1, index2), [_arr2[index1]], _arr2.slice(index2)));
              } else {
                set(arrAtom, [].concat(_arr2.slice(0, index2), [_arr2[index1]], _arr2.slice(index2, index1), _arr2.slice(index1 + 1)));
              }
            }

            break;
          }
      }
    };

    var splittedAtom = isWritable(arrAtom) ? jotai.atom(read, write) : jotai.atom(read);
    return splittedAtom;
  }, keyExtractor ? [arrAtom, keyExtractor] : [arrAtom]);
}

function atomWithDefault(getDefault) {
  var EMPTY = Symbol();
  var overwrittenAtom = jotai.atom(EMPTY);
  var anAtom = jotai.atom(function (get) {
    var overwritten = get(overwrittenAtom);

    if (overwritten !== EMPTY) {
      return overwritten;
    }

    return getDefault(get);
  }, function (get, set, update) {
    if (update === RESET) {
      return set(overwrittenAtom, EMPTY);
    }

    return set(overwrittenAtom, typeof update === 'function' ? update(get(anAtom)) : update);
  });
  return anAtom;
}

var memoizeAtom$1 = createMemoizeAtom();
function waitForAll(atoms) {
  var createAtom = function createAtom() {
    var unwrappedAtoms = unwrapAtoms(atoms);
    var derivedAtom = jotai.atom(function (get) {
      var promises = [];
      var values = unwrappedAtoms.map(function (anAtom, index) {
        try {
          return get(anAtom);
        } catch (e) {
          if (e instanceof Promise) {
            promises[index] = e;
          } else {
            throw e;
          }
        }
      });

      if (promises.length) {
        throw Promise.all(promises);
      }

      return wrapResults(atoms, values);
    });
    return derivedAtom;
  };

  if (Array.isArray(atoms)) {
    return memoizeAtom$1(createAtom, atoms);
  }

  return createAtom();
}

var unwrapAtoms = function unwrapAtoms(atoms) {
  return Array.isArray(atoms) ? atoms : Object.getOwnPropertyNames(atoms).map(function (key) {
    return atoms[key];
  });
};

var wrapResults = function wrapResults(atoms, results) {
  return Array.isArray(atoms) ? results : Object.getOwnPropertyNames(atoms).reduce(function (out, key, idx) {
    var _extends2;

    return _extends({}, out, (_extends2 = {}, _extends2[key] = results[idx], _extends2));
  }, {});
};

function createJSONStorage(getStringStorage) {
  var lastStr;
  var lastValue;
  return {
    getItem: function getItem(key) {
      var parse = function parse(str) {
        str = str || '';

        if (lastStr !== str) {
          lastValue = JSON.parse(str);
          lastStr = str;
        }

        return lastValue;
      };

      var str = getStringStorage().getItem(key);

      if (str instanceof Promise) {
        return str.then(parse);
      }

      return parse(str);
    },
    setItem: function setItem(key, newValue) {
      return getStringStorage().setItem(key, JSON.stringify(newValue));
    },
    removeItem: function removeItem(key) {
      return getStringStorage().removeItem(key);
    }
  };
}
var defaultStorage = createJSONStorage(function () {
  return localStorage;
});

defaultStorage.subscribe = function (key, callback) {
  var storageEventCallback = function storageEventCallback(e) {
    if (e.key === key && e.newValue) {
      callback(JSON.parse(e.newValue));
    }
  };

  window.addEventListener('storage', storageEventCallback);
  return function () {
    window.removeEventListener('storage', storageEventCallback);
  };
};

function atomWithStorage(key, initialValue, storage) {
  if (storage === void 0) {
    storage = defaultStorage;
  }

  var getInitialValue = function getInitialValue() {
    try {
      var _value = storage.getItem(key);

      if (_value instanceof Promise) {
        return _value.catch(function () {
          return initialValue;
        });
      }

      return _value;
    } catch (_unused) {
      return initialValue;
    }
  };

  var baseAtom = jotai.atom(storage.delayInit ? initialValue : getInitialValue());

  baseAtom.onMount = function (setAtom) {
    var unsub;

    if (storage.subscribe) {
      unsub = storage.subscribe(key, setAtom);
      setAtom(getInitialValue());
    }

    if (storage.delayInit) {
      var _value2 = getInitialValue();

      if (_value2 instanceof Promise) {
        _value2.then(setAtom);
      } else {
        setAtom(_value2);
      }
    }

    return unsub;
  };

  var anAtom = jotai.atom(function (get) {
    return get(baseAtom);
  }, function (get, set, update) {
    if (update === RESET) {
      set(baseAtom, initialValue);
      return storage.removeItem(key);
    }

    var newValue = typeof update === 'function' ? update(get(baseAtom)) : update;
    set(baseAtom, newValue);
    return storage.setItem(key, newValue);
  });
  return anAtom;
}
function atomWithHash(key, initialValue, options) {
  var serialize = (options == null ? void 0 : options.serialize) || JSON.stringify;
  var deserialize = (options == null ? void 0 : options.deserialize) || JSON.parse;

  var _subscribe = (options == null ? void 0 : options.subscribe) || function (callback) {
    window.addEventListener('hashchange', callback);
    return function () {
      window.removeEventListener('hashchange', callback);
    };
  };

  var hashStorage = _extends({
    getItem: function getItem(key) {
      var searchParams = new URLSearchParams(location.hash.slice(1));
      var storedValue = searchParams.get(key);

      if (storedValue === null) {
        throw new Error('no value stored');
      }

      return deserialize(storedValue);
    },
    setItem: function setItem(key, newValue) {
      var searchParams = new URLSearchParams(location.hash.slice(1));
      searchParams.set(key, serialize(newValue));

      if (options != null && options.replaceState) {
        history.replaceState(null, '', '#' + searchParams.toString());
      } else {
        location.hash = searchParams.toString();
      }
    },
    removeItem: function removeItem(key) {
      var searchParams = new URLSearchParams(location.hash.slice(1));
      searchParams.delete(key);

      if (options != null && options.replaceState) {
        history.replaceState(null, '', '#' + searchParams.toString());
      } else {
        location.hash = searchParams.toString();
      }
    }
  }, (options == null ? void 0 : options.delayInit) && {
    delayInit: true
  }, {
    subscribe: function subscribe(key, setValue) {
      var callback = function callback() {
        var searchParams = new URLSearchParams(location.hash.slice(1));
        var str = searchParams.get(key);

        if (str !== null) {
          setValue(deserialize(str));
        } else {
          setValue(initialValue);
        }
      };

      return _subscribe(callback);
    }
  });

  return atomWithStorage(key, initialValue, hashStorage);
}

function atomWithObservable(createObservable, options) {
  var observableResultAtom = jotai.atom(function (get) {
    var _observable$Symbol$ob, _observable;

    var observable = createObservable(get);
    var itself = (_observable$Symbol$ob = (_observable = observable)[Symbol.observable]) == null ? void 0 : _observable$Symbol$ob.call(_observable);

    if (itself) {
      observable = itself;
    }

    var dataAtom = jotai.atom(options != null && options.initialValue ? getInitialValue(options) : firstValueFrom(observable));

    var setData = function setData() {
      throw new Error('setting data without mount');
    };

    var dataListener = function dataListener(data) {
      setData(data);
    };

    var errorListener = function errorListener(error) {
      setData(Promise.reject(error));
    };

    var subscription = null;

    dataAtom.onMount = function (update) {
      setData = update;

      if (!subscription) {
        subscription = observable.subscribe(dataListener, errorListener);
      }

      return function () {
        var _subscription;

        (_subscription = subscription) == null ? void 0 : _subscription.unsubscribe();
        subscription = null;
      };
    };

    return {
      dataAtom: dataAtom,
      observable: observable
    };
  });
  var observableAtom = jotai.atom(function (get) {
    var _get = get(observableResultAtom),
        dataAtom = _get.dataAtom;

    return get(dataAtom);
  }, function (get, _set, data) {
    var _get2 = get(observableResultAtom),
        observable = _get2.observable;

    if ('next' in observable) {
      observable.next(data);
    } else {
      throw new Error('observable is not subject');
    }
  });
  return observableAtom;
}

function getInitialValue(options) {
  var initialValue = options.initialValue;
  return initialValue instanceof Function ? initialValue() : initialValue;
}

function firstValueFrom(source) {
  return new Promise(function (resolve, reject) {
    var resolved = false;
    var subscription = source.subscribe({
      next: function next(value) {
        resolve(value);
        resolved = true;

        if (subscription) {
          subscription.unsubscribe();
        }
      },
      error: reject,
      complete: function complete() {
        reject();
      }
    });

    if (resolved) {
      subscription.unsubscribe();
    }
  });
}

var hydratedMap = new WeakMap();
function useHydrateAtoms(values, scope) {
  var ScopeContext = jotai.SECRET_INTERNAL_getScopeContext(scope);
  var scopeContainer = React__default.useContext(ScopeContext);
  var store = scopeContainer.s;
  var hydratedSet = getHydratedSet(scopeContainer);
  var tuplesToRestore = [];

  for (var _iterator = _createForOfIteratorHelperLoose(values), _step; !(_step = _iterator()).done;) {
    var tuple = _step.value;
    var atom = tuple[0];

    if (!hydratedSet.has(atom)) {
      hydratedSet.add(atom);
      tuplesToRestore.push(tuple);
    }
  }

  if (tuplesToRestore.length) {
    store[RESTORE_ATOMS](tuplesToRestore);
  }
}

function getHydratedSet(scopeContainer) {
  var hydratedSet = hydratedMap.get(scopeContainer);

  if (!hydratedSet) {
    hydratedSet = new WeakSet();
    hydratedMap.set(scopeContainer, hydratedSet);
  }

  return hydratedSet;
}

var memoizeAtom = createMemoizeAtom();
var LOADING = {
  state: 'loading'
};
function loadable(anAtom) {
  return memoizeAtom(function () {
    var loadableAtomCache = new WeakMap();
    var catchAtom = jotai.atom(function (get) {
      var promise;

      try {
        var data = get(anAtom);

        var _loadableAtom = jotai.atom({
          state: 'hasData',
          data: data
        });

        return _loadableAtom;
      } catch (error) {
        if (error instanceof Promise) {
          promise = error;
        } else {
          var _loadableAtom2 = jotai.atom({
            state: 'hasError',
            error: error
          });

          return _loadableAtom2;
        }
      }

      var cached = loadableAtomCache.get(promise);

      if (cached) {
        return cached;
      }

      var loadableAtom = jotai.atom(LOADING, function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(get, set) {
          var _data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return get(anAtom, {
                    unstable_promise: true
                  });

                case 3:
                  _data = _context.sent;
                  set(loadableAtom, {
                    state: 'hasData',
                    data: _data
                  });
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  set(loadableAtom, {
                    state: 'hasError',
                    error: _context.t0
                  });

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 7]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());

      loadableAtom.onMount = function (init) {
        init();
      };

      loadableAtomCache.set(promise, loadableAtom);
      return loadableAtom;
    });
    var derivedAtom = jotai.atom(function (get) {
      var loadableAtom = get(catchAtom);
      return get(loadableAtom);
    });
    return derivedAtom;
  }, [anAtom]);
}

Object.defineProperty(exports, 'useAtomValue', {
  enumerable: true,
  get: function () { return jotai.useAtomValue; }
});
Object.defineProperty(exports, 'useUpdateAtom', {
  enumerable: true,
  get: function () { return jotai.useSetAtom; }
});
exports.RESET = RESET;
exports.atomFamily = atomFamily;
exports.atomWithDefault = atomWithDefault;
exports.atomWithHash = atomWithHash;
exports.atomWithObservable = atomWithObservable;
exports.atomWithReducer = atomWithReducer;
exports.atomWithReset = atomWithReset;
exports.atomWithStorage = atomWithStorage;
exports.createJSONStorage = createJSONStorage;
exports.freezeAtom = freezeAtom;
exports.freezeAtomCreator = freezeAtomCreator;
exports.loadable = loadable;
exports.selectAtom = selectAtom;
exports.splitAtom = splitAtom;
exports.useAtomCallback = useAtomCallback;
exports.useHydrateAtoms = useHydrateAtoms;
exports.useReducerAtom = useReducerAtom;
exports.useResetAtom = useResetAtom;
exports.waitForAll = waitForAll;
});

var _path$1, _path2$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgDownload(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    height: 20,
    viewBox: "0 0 24 24",
    width: 20,
    fill: "currentColor"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4l-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z"
  })));
}

var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgArrowDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    height: 16,
    viewBox: "0 0 24 24",
    width: 16,
    fill: "currentColor"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  })));
}

var css_248z$3 = "/* ************************\n** Variables\n** ********************* */\n:root {\n  --msg-list__background: var(--chat--light__background--1);\n  --msg-list__padding: 0;\n  --msg-list__unread__background: var(--chat--light__color--2);\n  --msg-list__unread__borderRadius: 20px;\n  --msg-list__unread__color: var(--chat--light__background--2);\n  --msg-list__unread__fontSize: 13px;\n  --msg-list__unread__fontWeight: 400;\n  --msg-list__unread__padding: 8px 16px;\n  --msg-list__unread__offset: 50px;\n  --msg-list__spinner__color: var(--chat--light__color--2);\n  --msg-list__spinner__margin: 10px auto;\n  --msg--hover__background: var(--chat--light__hover--3);\n  --msg__alignItems: flex-start;\n  --msg__flexDirection: row;\n  --msg__height: auto;\n  --msg__padding: 10px 16px;\n  --msg__actions--hover__background: transparent;\n  --msg__actions--hover__color: var(--chat--light__hover--1);\n  --msg__actions--hover__border: 1px solid var(--chat--light__border--1);\n  --msg__actions__background: transparent;\n  --msg__actions__border: 1px solid var(--chat--light__border--1);\n  --msg__actions__borderRadius: 15px;\n  --msg__actions__color: var(--chat--light__color--2);\n  --msg__actions__fontSize: 22px;\n  --msg__actions__margin: 0 0 0 4px;\n  --msg__actions__padding: 0 7px;\n  --msg__actions__right: 10px;\n  --msg__actions__top: 10px;\n  --msg__author__color: var(--chat--light__color--1);\n  --msg__author__fontSize: 15px;\n  --msg__author__fontWeight: 500;\n  --msg__author__padding: 0;\n  --msg__avatar__display: flex;\n  --msg__avatar__fontSize: 10px;\n  --msg__avatar__margin: 2px 18px 0 0;\n  --msg__avatar__size: 36px;\n  --msg__avatar__borderRadius: 36px;\n  --msg__bubble__background: transparent;\n  --msg__bubble__boxShadow: none;\n  --msg__bubble__borderRadius: 0;\n  --msg__bubble__color: var(--chat--light__color--1);\n  --msg__bubble__fontSize: 13px;\n  --msg__bubble__fontWeight: 400;\n  --msg__bubble__margin: 0;\n  --msg__bubble__padding: 0;\n  --msg__content__alignItems: flex-start;\n  --msg__content__flexDirection: column;\n  --msg__content__margin: 0;\n  --msg__image__borderRadius: 10px;\n  --msg__image__margin: 15px 0 0;\n  --msg__link__margin: 10px 0 0;\n  --msg__link__padding: 20px;\n  --msg__link-description__color: var(--chat--light__color--2);\n  --msg__link-thumb__maxWidth: 210px;\n  --msg__link-title__color: var(--chat--light__color--1);\n  --msg__main__alignItems: flex-start;\n  --msg__main__flexDirection: column;\n  --msg__main__margin: 0;\n  --msg__main__maxWidth: 60%;\n  --msg__time__display: block;\n  --msg__time__color: var(--chat--light__color--1);\n  --msg__time__fontSize: 11px;\n  --msg__time__fontWeight: 300;\n  --msg__time__padding: 0 10px;\n  --msg__title__alignItems: baseline;\n  --msg__title__display: flex;\n  --msg__title__flexDirection: row;\n  --msg__title__margin: 0 0 10px;\n  --msg__reaction--hover__background: var(--chat--light__hover--4);\n  --msg__reaction--hover__border: 1px solid var(--chat--light__border--2);\n  --msg__reaction--active__background: rgba(var(--chat--light__background--5-rgb), 0.2);\n  --msg__reaction--active__border: 1px solid transparent;\n  --msg__reaction--active--hover__background: rgba(var(--chat--light__background--5-rgb), 0.24);\n  --msg__reaction--active--hover__border: 1px solid rgba(var(--chat--light__background--5-rgb), 0.4);\n  --msg__reaction__background: transparent;\n  --msg__reaction__border: 1px solid var(--chat--light__border--1);\n  --msg__reaction__borderRadius: 15px;\n  --msg__reaction__margin: 10px 5px 0 0;\n  --msg__reaction__padding: 0 7px 0 3px;\n  --msg__reaction__wordSpacing: 2px;\n}\n\n/* ************************\n** Styles\n** ********************* */\n.pn-msg-list {\n  background: var(--msg-list__background);\n  height: 100%;\n  overflow: hidden;\n  padding: var(--msg-list__padding);\n  position: relative;\n  width: 100%;\n}\n.pn-msg-list-scroller {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  overscroll-behavior-y: contain;\n  position: relative;\n  transform: translateZ(0);\n  width: 100%;\n}\n.pn-msg-list__spinner {\n  color: var(--msg-list__spinner__color);\n  margin: var(--msg-list__spinner__margin);\n}\n.pn-msg-list__unread {\n  background: var(--msg-list__unread__background);\n  border-radius: var(--msg-list__unread__borderRadius);\n  color: var(--msg-list__unread__color);\n  cursor: pointer;\n  font-size: var(--msg-list__unread__fontSize);\n  font-weight: var(--msg-list__unread__fontWeight);\n  left: 50%;\n  padding: var(--msg-list__unread__padding);\n  position: fixed;\n  top: var(--msg-list__unread__offset);\n  transform: translateX(50%);\n  z-index: 5;\n}\n.pn-msg-list__unread svg {\n  vertical-align: bottom;\n}\n.pn-msg-list__bottom-ref {\n  flex-shrink: 0;\n  height: 1px;\n  width: 100%;\n}\n.pn-msg-list__spacer {\n  flex: 1 1 auto;\n}\n.pn-msg-list__emoji-picker {\n  position: absolute;\n  right: 50px;\n  z-index: 10;\n}\n.pn-msg-list__emoji-picker-hidden {\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.pn-msg {\n  align-items: var(--msg__alignItems);\n  display: flex;\n  flex-direction: var(--msg__flexDirection);\n  height: var(--msg__height);\n  padding: var(--msg__padding);\n  position: relative;\n}\n.pn-msg:hover {\n  background: var(--msg--hover__background);\n}\n.pn-msg:hover .pn-msg__actions {\n  display: flex;\n}\n.pn-msg__actions {\n  color: var(--msg__actions__color);\n  cursor: pointer;\n  display: none;\n  font-size: var(--msg__actions__fontSize);\n  position: absolute;\n  right: var(--msg__actions__right);\n  top: var(--msg__actions__top);\n}\n.pn-msg__actions > * {\n  background: var(--msg__actions__background);\n  border: var(--msg__actions__border);\n  border-radius: var(--msg__actions__borderRadius);\n  display: flex;\n  margin: var(--msg__actions__margin);\n  padding: var(--msg__actions__padding);\n}\n.pn-msg__actions > *:hover {\n  background: var(--msg__actions--hover__background);\n  border: var(--msg__actions--hover__border);\n  color: var(--msg__actions--hover__color);\n}\n.pn-msg__main {\n  align-items: var(--msg__main__alignItems);\n  display: flex;\n  flex-direction: var(--msg__main__flexDirection);\n  padding: var(--msg__main__margin);\n  max-width: var(--msg__main__maxWidth);\n}\n.pn-msg__content {\n  align-items: var(--msg__content__alignItems);\n  display: flex;\n  flex-direction: var(--msg__content__flexDirection);\n  padding: var(--msg__content__margin);\n}\n.pn-msg__title {\n  align-items: var(--msg__title__alignItems);\n  display: var(--msg__title__display);\n  flex-direction: var(--msg__title__flexDirection);\n  margin: var(--msg__title__margin);\n}\n.pn-msg__bubble {\n  background: var(--msg__bubble__background);\n  box-shadow: var(--msg__bubble__boxShadow);\n  border-radius: var(--msg__bubble__borderRadius);\n  color: var(--msg__bubble__color);\n  display: inline-block;\n  font-size: var(--msg__bubble__fontSize);\n  font-weight: var(--msg__bubble__fontWeight);\n  margin: var(--msg__bubble__margin);\n  padding: var(--msg__bubble__padding);\n  word-break: break-word;\n}\n.pn-msg__author {\n  color: var(--msg__author__color);\n  font-size: var(--msg__author__fontSize);\n  font-weight: var(--msg__author__fontWeight);\n  padding: var(--msg__author__padding);\n}\n.pn-msg__time {\n  display: var(--msg__time__display);\n  color: var(--msg__time__color);\n  font-size: var(--msg__time__fontSize);\n  font-weight: var(--msg__time__fontWeight);\n  padding: var(--msg__time__padding);\n}\n.pn-msg__avatar {\n  align-items: center;\n  border-radius: var(--msg__avatar__borderRadius);\n  color: var(--msg-list__background);\n  display: var(--msg__avatar__display);\n  flex: none;\n  font-size: var(--msg__avatar__fontSize);\n  height: var(--msg__avatar__size);\n  justify-content: center;\n  margin: var(--msg__avatar__margin);\n  width: var(--msg__avatar__size);\n}\n.pn-msg__avatar img {\n  border-radius: var(--msg__avatar__borderRadius);\n  height: 100%;\n  width: 100%;\n}\n.pn-msg__reaction {\n  background: var(--msg__reaction__background);\n  border: var(--msg__reaction__border);\n  border-radius: var(--msg__reaction__borderRadius);\n  color: var(--msg__bubble__color);\n  cursor: pointer;\n  display: inline-block;\n  font-size: var(--msg__bubble__fontSize);\n  font-weight: var(--msg__bubble__fontWeight);\n  margin: var(--msg__reaction__margin);\n  padding: var(--msg__reaction__padding);\n  word-spacing: var(--msg__reaction__wordSpacing);\n}\n.pn-msg__reaction:hover {\n  background: var(--msg__reaction--hover__background);\n  border: var(--msg__reaction--hover__border);\n}\n.pn-msg__reaction--active {\n  background: var(--msg__reaction--active__background);\n  border: var(--msg__reaction--active__border);\n}\n.pn-msg__reaction--active:hover {\n  background: var(--msg__reaction--active--hover__background);\n  border: var(--msg__reaction--active--hover__border);\n}\n.pn-msg__image {\n  border-radius: var(--msg__image__borderRadius);\n  box-shadow: var(--msg__bubble__boxShadow);\n  margin: var(--msg__image__margin);\n  max-width: 100%;\n}\n.pn-msg__link {\n  background: var(--msg__bubble__background);\n  border-radius: var(--msg__bubble__borderRadius);\n  box-shadow: var(--msg__bubble__boxShadow);\n  color: var(--msg__bubble__color);\n  display: flex;\n  font-size: var(--msg__bubble__fontSize);\n  font-weight: var(--msg__bubble__fontWeight);\n  margin: var(--msg__link__margin);\n  overflow: hidden;\n  text-decoration: none;\n}\n.pn-msg__link img {\n  max-width: var(--msg__link-thumb__maxWidth);\n}\n.pn-msg__link > div {\n  padding: var(--msg__link__padding);\n}\n.pn-msg__link-name {\n  font-size: 15px;\n  font-weight: 500;\n  margin: 0;\n}\n.pn-msg__link-name img {\n  margin-right: 10px;\n  max-height: 16px;\n  max-width: 16px;\n  vertical-align: bottom;\n}\n.pn-msg__link-title {\n  color: var(--msg__link-title__color);\n  font-weight: 500;\n  margin: 2px 0;\n}\n.pn-msg__link-description {\n  color: var(--msg__link-description__color);\n  margin: 0;\n}\n.pn-msg__nonImage {\n  color: var(--msg__bubble__color);\n}\n.pn-msg__downloadIcon {\n  color: var(--msg__bubble__color);\n  margin: 0 0 0 8px;\n  vertical-align: middle;\n}\n\n/* ************************\n** Themes\n** ********************* */\n.pn-msg-list--dark,\n.pn-msg-list--support-dark,\n.pn-msg-list--event-dark {\n  --msg-list__background: var(--chat--dark__background--1);\n  --msg-list__unread__background: var(--chat--dark__color--2);\n  --msg-list__unread__color: var(--chat--dark__background--2);\n  --msg-list__spinner__color: var(--chat--dark__color--2);\n  --msg--hover__background: var(--chat--dark__border--1);\n  --msg__actions--hover__color: var(--chat--dark__hover--1);\n  --msg__actions--hover__border: 1px solid var(--chat--dark__background--1);\n  --msg__actions--hover__background: var(--chat--dark__background--1);\n  --msg__actions__background: var(--chat--dark__background--1);\n  --msg__actions__border: 1px solid var(--chat--dark__background--1);\n  --msg__actions__color: var(--chat--dark__color--2);\n  --msg__author__color: var(--chat--dark__color--1);\n  --msg__bubble__color: var(--chat--dark__color--1);\n  --msg__link-description__color: var(--chat--dark__color--2);\n  --msg__link-title__color: var(--chat--dark__color--1);\n  --msg__time__color: var(--chat--dark__color--1);\n  --msg__reaction--hover__background: rgba(var(--chat--dark__hover--4-rgb), 0.3);\n  --msg__reaction--hover__border: 1px solid var(--chat--dark__hover--4);\n  --msg__reaction--active__background: rgba(var(--chat--dark__background--5), 0.3);\n  --msg__reaction--active--hover__background: rgba(var(--chat--dark__background--5), 0.4);\n  --msg__reaction--active--hover__border: 1px solid rgba(var(--chat--dark__background--5), 0.4);\n  --msg__reaction__background: var(--chat--dark__background--1);\n  --msg__reaction__border: 1px solid var(--chat--dark__border--1);\n}\n\n.pn-msg-list--support,\n.pn-msg-list--support-dark {\n  --msg__title__display: none;\n}\n.pn-msg-list--support .pn-msg--own,\n.pn-msg-list--support-dark .pn-msg--own {\n  --msg__flexDirection: row-reverse;\n  --msg__avatar__display: none;\n}\n\n.pn-msg-list--event,\n.pn-msg-list--event-dark {\n  --msg__alignItems: flex-start;\n  --msg__actions__top: 0;\n  --msg__author__fontSize: 13px;\n  --msg__avatar__display: none;\n  --msg__bubble__background: transparent;\n  --msg__bubble__padding: 0;\n  --msg__content__alignItems: center;\n  --msg__content__flexDirection: row;\n  --msg__main__alignItems: baseline;\n  --msg__main__flexDirection: column;\n  --msg__main__maxWidth: 100%;\n  --msg__padding: 7px 12px;\n  --msg__time__display: none;\n  --msg__title__margin: 0 6px 0 0;\n}\n.pn-msg-list--event .pn-msg__author:after,\n.pn-msg-list--event-dark .pn-msg__author:after {\n  content: \":\";\n}";
styleInject(css_248z$3);

/**
 * Fetches historical messages using the scrolling pagination pattern and subscribes to the current
 * channel to stay up to date with new messages.
 *
 * It also displays data in an interactive list, including
 * user names, avatars, the time when a message was sent, and attachments (links, images) and allows to react to
 * messages with emojis and to show those reactions immediately.
 */
var MessageList = function (props) {
    var pubnub = usePubNub();
    var channel = jotai.useAtom(CurrentChannelAtom)[0];
    var users = jotai.useAtom(UsersMetaAtom)[0];
    var theme = jotai.useAtom(ThemeAtom)[0];
    var retryObj = jotai.useAtom(RetryFunctionAtom)[0];
    var onErrorObj = jotai.useAtom(ErrorFunctionAtom)[0];
    var messages = jotai.useAtom(CurrentChannelMessagesAtom)[0];
    var paginationEnd = jotai.useAtom(CurrentChannelPaginationAtom)[0];
    var retry = retryObj.function;
    var onError = onErrorObj.function;
    var _a = useState(true), scrolledBottom = _a[0], setScrolledBottom = _a[1];
    var _b = useState([]), prevMessages = _b[0], setPrevMessages = _b[1];
    var _c = useState(0), unreadMessages = _c[0], setUnreadMessages = _c[1];
    var _d = useState(false), fetchingMessages = _d[0], setFetchingMessages = _d[1];
    var _e = useState(), picker = _e[0], setPicker = _e[1];
    var _f = useState(false), emojiPickerShown = _f[0], setEmojiPickerShown = _f[1];
    var _g = useState(null), reactingToMessage = _g[0], setReactingToMessage = _g[1];
    var endRef = useRef(null);
    var listRef = useRef(null);
    var spinnerRef = useRef(null);
    var pickerRef = useOuterClick(function (event) {
        if (event.target.closest(".pn-msg__reactions-toggle"))
            return;
        setEmojiPickerShown(false);
    });
    var listSizeObserver = useRef(new ResizeObserver(function () { return handleListMutations(); }));
    var listMutObserver = useRef(new MutationObserver(function () { return handleListMutations(); }));
    var spinnerIntObserver = useRef(new IntersectionObserver(function (e) { return e[0].isIntersecting === true && fetchMoreHistory(); }));
    var bottomIntObserver = useRef(new IntersectionObserver(function (e) { return handleBottomIntersection(e[0].isIntersecting); }));
    /*
    /* Helper functions
    */
    var getTime = function (timestamp) {
        var ts = String(timestamp);
        var date = new Date(parseInt(ts) / 10000);
        var formatter = new Intl.DateTimeFormat([], { timeStyle: "short" });
        return formatter.format(date);
    };
    var scrollToBottom = function () {
        if (!endRef.current)
            return;
        setScrolledBottom(true);
        endRef.current.scrollIntoView({ block: "end" });
    };
    var setupSpinnerObserver = function () {
        if (!spinnerRef.current)
            return;
        spinnerIntObserver.current.observe(spinnerRef.current);
    };
    var setupBottomObserver = function () {
        if (!endRef.current)
            return;
        bottomIntObserver.current.disconnect();
        bottomIntObserver.current.observe(endRef.current);
    };
    var setupListObservers = function () {
        if (!listRef.current)
            return;
        listSizeObserver.current.disconnect();
        listSizeObserver.current.observe(listRef.current);
        listMutObserver.current.disconnect();
        listMutObserver.current.observe(listRef.current, { childList: true });
    };
    var getUser = function (uuid) {
        return users.find(function (u) { return u.id === uuid; });
    };
    var isOwnMessage = function (uuid) {
        return pubnub.getUUID() === uuid;
    };
    /*
    /* Commands
    */
    var fetchHistory = function () { return __awaiter(void 0, void 0, void 0, function () {
        var history_1, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!props.fetchMessages)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    setFetchingMessages(true);
                    return [4 /*yield*/, retry(function () {
                            return pubnub.fetchMessages({
                                channels: [channel],
                                count: props.fetchMessages,
                                includeMessageActions: true,
                            });
                        })];
                case 2:
                    history_1 = _a.sent();
                    handleHistoryFetch(history_1);
                    scrollToBottom();
                    setupSpinnerObserver();
                    setupBottomObserver();
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _a.sent();
                    onError(e_1);
                    return [3 /*break*/, 5];
                case 4:
                    setFetchingMessages(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    /** useAtomCallback to accesses jotai atoms inside of a Intersection Observer callback */
    var fetchMoreHistory = utils.useAtomCallback(useCallback(function (get) { return __awaiter(void 0, void 0, void 0, function () {
        var channel, retryObj, errorObj, messages, retry, onError, firstMessage, history_2, e_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    channel = get(CurrentChannelAtom);
                    retryObj = get(RetryFunctionAtom);
                    errorObj = get(ErrorFunctionAtom);
                    messages = get(CurrentChannelMessagesAtom);
                    retry = retryObj.function;
                    onError = errorObj.function;
                    firstMessage = (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(".pn-msg");
                    if (!messages.length)
                        return [2 /*return*/];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, retry(function () {
                            return pubnub.fetchMessages({
                                channels: [channel],
                                count: props.fetchMessages,
                                start: (messages === null || messages === void 0 ? void 0 : messages[0].timetoken) || undefined,
                                includeMessageActions: true,
                            });
                        })];
                case 2:
                    history_2 = _b.sent();
                    handleHistoryFetch(history_2);
                    if (firstMessage)
                        firstMessage.scrollIntoView();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _b.sent();
                    onError(e_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }, []));
    var addReaction = function (reaction, messageTimetoken) {
        try {
            pubnub.addMessageAction({
                channel: channel,
                messageTimetoken: messageTimetoken,
                action: {
                    type: "reaction",
                    value: reaction,
                },
            });
        }
        catch (e) {
            onError(e);
        }
    };
    var removeReaction = function (reaction, messageTimetoken, actionTimetoken) {
        try {
            pubnub.removeMessageAction({ channel: channel, messageTimetoken: messageTimetoken, actionTimetoken: actionTimetoken });
        }
        catch (e) {
            onError(e);
        }
    };
    var fetchFileUrl = function (envelope) {
        if (!isFilePayload(envelope.message))
            return envelope;
        try {
            var url = pubnub.getFileUrl({
                channel: envelope.channel,
                id: envelope.message.file.id,
                name: envelope.message.file.name,
            });
            envelope.message.file.url = url;
        }
        catch (e) {
            onError(e);
        }
        finally {
            return envelope;
        }
    };
    /*
    /* Event handlers
    */
    var handleEmojiInsertion = useCallback(function (emoji) {
        try {
            if (!("native" in emoji))
                return;
            addReaction(emoji.native, reactingToMessage);
            setEmojiPickerShown(false);
        }
        catch (e) {
            onError(e);
        }
    }, [reactingToMessage]);
    var handleBottomIntersection = function (isIntersecting) {
        try {
            if (isIntersecting)
                setUnreadMessages(0);
            setScrolledBottom(isIntersecting);
        }
        catch (e) {
            onError(e);
        }
    };
    var handleListMutations = function () {
        try {
            setScrolledBottom(function (scrolledBottom) {
                if (scrolledBottom)
                    scrollToBottom();
                return scrolledBottom;
            });
        }
        catch (e) {
            onError(e);
        }
    };
    var handleHistoryFetch = utils.useAtomCallback(useCallback(function (get, set, response) {
        var channel = get(CurrentChannelAtom);
        var messages = get(CurrentChannelMessagesAtom);
        var newMessages = ((response === null || response === void 0 ? void 0 : response.channels[channel]) || []).map(function (m) {
            return m.messageType === 4 ? fetchFileUrl(m) : m;
        }) || [];
        var allMessages = __spreadArray(__spreadArray([], messages, true), newMessages, true).sort(function (a, b) { return a.timetoken - b.timetoken; });
        setEmojiPickerShown(false);
        setPrevMessages(allMessages);
        set(CurrentChannelMessagesAtom, allMessages);
        set(CurrentChannelPaginationAtom, !allMessages.length || newMessages.length !== props.fetchMessages);
    }, []));
    var handleOpenReactions = function (event, timetoken) {
        try {
            var newPickerTopPosition = listRef.current.scrollTop -
                listRef.current.getBoundingClientRect().top +
                event.target.getBoundingClientRect().y;
            if (newPickerTopPosition > pickerRef.current.offsetHeight) {
                newPickerTopPosition += event.target.getBoundingClientRect().height;
                newPickerTopPosition -= pickerRef.current.offsetHeight;
            }
            pickerRef.current.style.top = "".concat(newPickerTopPosition, "px");
            setEmojiPickerShown(true);
            setReactingToMessage(timetoken);
        }
        catch (e) {
            onError(e);
        }
    };
    /*
    /* Lifecycle
    */
    useEffect(function () {
        if (!pubnub || !channel)
            return;
        if (!(messages === null || messages === void 0 ? void 0 : messages.length))
            fetchHistory();
        setupSpinnerObserver();
        setupListObservers();
    }, [channel]);
    useEffect(function () {
        if (React__default.isValidElement(props.reactionsPicker)) {
            setPicker(React__default.cloneElement(props.reactionsPicker, { onSelect: handleEmojiInsertion }));
        }
    }, [props.reactionsPicker, handleEmojiInsertion]);
    useEffect(function () {
        if (!(messages === null || messages === void 0 ? void 0 : messages.length))
            return;
        var messagesFromListener = messages.length - prevMessages.length;
        if (scrolledBottom)
            scrollToBottom();
        if (!scrolledBottom && messagesFromListener)
            setUnreadMessages(unreadMessages + messagesFromListener);
        setupBottomObserver();
        setPrevMessages(messages);
    }, [messages]);
    /*
    /* Renderers
    */
    var renderWelcomeMessages = function () {
        if (!props.welcomeMessages)
            return;
        return Array.isArray(props.welcomeMessages)
            ? props.welcomeMessages.map(function (m) { return renderItem(m); })
            : renderItem(props.welcomeMessages);
    };
    var renderItem = function (envelope) {
        var uuid = envelope.uuid || envelope.publisher || "";
        var currentUserClass = isOwnMessage(uuid) ? "pn-msg--own" : "";
        var actions = envelope.actions;
        var deleted = !!Object.keys((actions === null || actions === void 0 ? void 0 : actions.deleted) || {}).length;
        var message = isFilePayload(envelope.message) ? envelope.message.message : envelope.message;
        if (deleted)
            return;
        return (React__default.createElement("div", { className: "pn-msg ".concat(currentUserClass), key: envelope.timetoken },
            renderMessage(envelope),
            React__default.createElement("div", { className: "pn-msg__actions" },
                props.extraActionsRenderer && props.extraActionsRenderer(envelope),
                props.reactionsPicker && (message === null || message === void 0 ? void 0 : message.type) !== "welcome" && (React__default.createElement("div", { className: "pn-msg__reactions-toggle", title: "Add a reaction", onClick: function (e) {
                        emojiPickerShown && reactingToMessage === envelope.timetoken
                            ? setEmojiPickerShown(false)
                            : handleOpenReactions(e, envelope.timetoken);
                    } },
                    React__default.createElement(SvgEmoji, null))))));
    };
    var renderMessage = function (envelope) {
        var uuid = envelope.uuid || envelope.publisher || "";
        var time = getTime(envelope.timetoken);
        var isOwn = isOwnMessage(uuid);
        var message = isFilePayload(envelope.message) ? envelope.message.message : envelope.message;
        var user = (message === null || message === void 0 ? void 0 : message.sender) || getUser(uuid);
        var attachments = (message === null || message === void 0 ? void 0 : message.attachments) || [];
        var file = isFilePayload(envelope.message) && envelope.message.file;
        var actions = envelope.actions;
        var editedText = (Object.entries((actions === null || actions === void 0 ? void 0 : actions.updated) || {}).pop() || []).shift();
        if (props.messageRenderer && (props.filter ? props.filter(envelope) : true))
            return props.messageRenderer({ message: envelope, user: user, time: time, isOwn: isOwn, editedText: editedText });
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", { className: "pn-msg__avatar", style: { backgroundColor: getPredefinedColor(uuid) } }, (user === null || user === void 0 ? void 0 : user.profileUrl) ? (React__default.createElement("img", { src: user.profileUrl, alt: "User avatar" })) : (getNameInitials((user === null || user === void 0 ? void 0 : user.name) || uuid))),
            React__default.createElement("div", { className: "pn-msg__main" },
                React__default.createElement("div", { className: "pn-msg__content" },
                    React__default.createElement("div", { className: "pn-msg__title" },
                        React__default.createElement("span", { className: "pn-msg__author" }, (user === null || user === void 0 ? void 0 : user.name) || uuid),
                        React__default.createElement("span", { className: "pn-msg__time" }, time)),
                    (message === null || message === void 0 ? void 0 : message.text) &&
                        (props.bubbleRenderer && (props.filter ? props.filter(envelope) : true) ? (props.bubbleRenderer({ message: envelope, user: user, time: time, isOwn: isOwn, editedText: editedText })) : (React__default.createElement("div", { className: "pn-msg__bubble" }, editedText || (message === null || message === void 0 ? void 0 : message.text))))),
                React__default.createElement("div", { className: "pn-msg__extras" },
                    file && file.name && renderFile(file),
                    attachments.map(renderAttachment),
                    props.enableReactions && renderReactions(envelope)))));
    };
    var renderReactions = function (envelope) {
        var _a;
        var reactions = (_a = envelope.actions) === null || _a === void 0 ? void 0 : _a.reaction;
        if (!reactions)
            return;
        return (React__default.createElement("div", { className: "pn-msg__reactions" }, Object.keys(reactions).map(function (reaction) {
            var instances = reactions[reaction];
            var instancesLimit = 99;
            var instancesLimited = instances.slice(0, instancesLimit);
            var instancesOverLimit = instances.length - instancesLimited.length;
            var userReaction = instances === null || instances === void 0 ? void 0 : instances.find(function (i) { return i.uuid === pubnub.getUUID(); });
            var userNames = instancesLimited.map(function (i) {
                var user = users.find(function (u) { return u.id === i.uuid; });
                return user ? user.name : i.uuid;
            });
            var tooltipContent = "\n            ".concat(userNames.join(", "), "\n            ").concat(instancesOverLimit ? "and ".concat(instancesOverLimit, " more") : "", "\n          ");
            return (React__default.createElement("div", { className: "pn-tooltip pn-msg__reaction ".concat(userReaction ? "pn-msg__reaction--active" : ""), key: reaction, "data-tooltip": tooltipContent, onClick: function () {
                    userReaction
                        ? removeReaction(reaction, envelope.timetoken, userReaction.actionTimetoken)
                        : addReaction(reaction, envelope.timetoken);
                } },
                reaction,
                " ",
                instancesLimited.length,
                instancesOverLimit ? "+" : ""));
        })));
    };
    var renderFile = function (file) {
        return (React__default.createElement("div", { className: "pn-msg__file" }, /\.(svg|gif|jpe?g|tiff?|png|webp|bmp)$/i.test(file.name) ? (React__default.createElement("img", { alt: file.name, className: "pn-msg__image", src: file.url, onLoad: function () {
                if (scrolledBottom)
                    scrollToBottom();
            } })) : (React__default.createElement("div", { className: "pn-msg__bubble" },
            React__default.createElement("a", { className: "pn-msg__nonImage", href: file.url, target: "_blank", rel: "noopener noreferrer", download: true },
                file.name,
                React__default.createElement(SvgDownload, { className: "pn-msg__downloadIcon" }))))));
    };
    var renderAttachment = function (attachment, key) {
        var _a, _b, _c, _d, _e;
        return (React__default.createElement("div", { key: key, className: "pn-msg__attachments" },
            attachment.type === "image" && (React__default.createElement("img", { className: "pn-msg__image", src: (_a = attachment.image) === null || _a === void 0 ? void 0 : _a.source })),
            attachment.type === "link" && (React__default.createElement("a", { className: "pn-msg__link", href: (_b = attachment.provider) === null || _b === void 0 ? void 0 : _b.url, target: "_blank", rel: "noreferrer noopener" },
                React__default.createElement("img", { src: (_c = attachment.image) === null || _c === void 0 ? void 0 : _c.source }),
                React__default.createElement("div", null,
                    React__default.createElement("p", { className: "pn-msg__link-name" },
                        React__default.createElement("img", { src: (_d = attachment.icon) === null || _d === void 0 ? void 0 : _d.source }), (_e = attachment.provider) === null || _e === void 0 ? void 0 :
                        _e.name),
                    React__default.createElement("p", { className: "pn-msg__link-title" }, attachment.title),
                    React__default.createElement("p", { className: "pn-msg__link-description" }, attachment.description))))));
    };
    return (React__default.createElement("div", { className: "pn-msg-list pn-msg-list--".concat(theme) },
        unreadMessages > 0 && (React__default.createElement("div", { className: "pn-msg-list__unread", onClick: function () { return scrollToBottom(); } },
            unreadMessages,
            " new message",
            unreadMessages > 1 ? "s" : "",
            " ",
            React__default.createElement(SvgArrowDown, null))),
        React__default.createElement("div", { className: "pn-msg-list-scroller", onScroll: props.onScroll, ref: listRef },
            !!props.fetchMessages && !paginationEnd && (React__default.createElement("span", { ref: spinnerRef, className: "pn-msg-list__spinner" },
                React__default.createElement(SvgSpinner, null))),
            React__default.createElement("div", { className: "pn-msg-list__spacer" }),
            (!props.fetchMessages || (!fetchingMessages && !messages.length)) &&
                renderWelcomeMessages(),
            messages && messages.map(function (m) { return renderItem(m); }),
            props.children,
            React__default.createElement("div", { className: "pn-msg-list__bottom-ref", ref: endRef }),
            props.reactionsPicker && (React__default.createElement("div", { className: "pn-msg-list__emoji-picker ".concat(!emojiPickerShown && "pn-msg-list__emoji-picker-hidden"), ref: pickerRef }, picker)))));
};
MessageList.defaultProps = {
    enableReactions: false,
    fetchMessages: 0,
};

var css_248z$2 = "/* ************************\n** Variables\n** ********************* */\n:root {\n  --member-list__background: transparent;\n  --member__alignItems: center;\n  --member__cursor: auto;\n  --member__padding: 8px 16px;\n  --member__background: transparent;\n  --member--hover__background: transparent;\n  --member__avatar__color: var(--chat--light__background--2);\n  --member__avatar__display: flex;\n  --member__avatar__fontSize: 10px;\n  --member__avatar__margin: 0 18px 0 0;\n  --member__avatar__size: 36px;\n  --member__avatar__borderRadius: 36px;\n  --member__name__color: var(--chat--light__color--1);\n  --member__name__fontSize: 13px;\n  --member__name__fontWeight: 400;\n  --member__name__margin: 0;\n  --member__name__overflow: hidden;\n  --member__name__padding: 0;\n  --member__name__textOverflow: ellipsis;\n  --member__name__whiteSpace: nowrap;\n  --member__title__color: var(--chat--light__color--2);\n  --member__title__display: block;\n  --member__title__fontSize: 11px;\n  --member__title__fontWeight: 400;\n  --member__title__margin: 0;\n  --member__title__overflow: hidden;\n  --member__title__padding: 7px 0 0;\n  --member__title__textOverflow: ellipsis;\n  --member__title__whiteSpace: nowrap;\n  --member__presence__border: 3px solid var(--chat--light__background--2);\n  --member__presence__borderRadius: 100%;\n  --member__presence__color: var(--chat--light__background--4);\n  --member__presence__left: 48px;\n  --member__presence__position: absolute;\n  --member__presence__size: 8px;\n  --member__presence__top: 34px;\n  --member__actions--hover__background: transparent;\n  --member__actions__background: transparent;\n  --member__actions__borderRadius: 5px;\n  --member__actions__color: var(--chat--light__color--2);\n  --member__actions--hover__color: var(--chat--light__hover--1);\n  --member__actions__fontSize: 18px;\n  --member__actions__margin: 0 0 0 4px;\n  --member__actions__padding: 3px 5px;\n  --member__actions__visibility: hidden;\n}\n\n/* ************************\n** Styles\n** ********************* */\n.pn-member-list {\n  height: 100%;\n  overflow-y: auto;\n  width: 100%;\n  background: var(--member-list__background);\n}\n\n.pn-member {\n  align-items: var(--member__alignItems);\n  background: var(--member__background);\n  cursor: var(--member__cursor);\n  display: flex;\n  padding: var(--member__padding);\n  position: relative;\n}\n.pn-member:hover {\n  background: var(--member--hover__background);\n}\n.pn-member:hover .pn-member__actions {\n  visibility: visible;\n}\n.pn-member__avatar {\n  align-items: center;\n  border-radius: var(--member__avatar__borderRadius);\n  color: var(--member__avatar__color);\n  display: var(--member__avatar__display);\n  font-size: var(--member__avatar__fontSize);\n  flex: none;\n  height: var(--member__avatar__size);\n  justify-content: center;\n  margin: var(--member__avatar__margin);\n  width: var(--member__avatar__size);\n}\n.pn-member__avatar img {\n  border-radius: var(--member__avatar__borderRadius);\n  height: 100%;\n  width: 100%;\n}\n.pn-member__main {\n  flex: 1;\n  min-width: 0;\n}\n.pn-member__name {\n  color: var(--member__name__color);\n  font-size: var(--member__name__fontSize);\n  font-weight: var(--member__name__fontWeight);\n  margin: var(--member__name__margin);\n  overflow: var(--member__name__overflow);\n  padding: var(--member__name__padding);\n  text-align: left;\n  text-overflow: var(--member__name__textOverflow);\n  white-space: var(--member__name__whiteSpace);\n}\n.pn-member__title {\n  color: var(--member__title__color);\n  display: var(--member__title__display);\n  font-size: var(--member__title__fontSize);\n  font-weight: var(--member__title__fontWeight);\n  margin: var(--member__title__margin);\n  overflow: var(--member__title__overflow);\n  padding: var(--member__title__padding);\n  text-align: left;\n  text-overflow: var(--member__title__textOverflow);\n  white-space: var(--member__title__whiteSpace);\n}\n.pn-member__presence {\n  background: var(--member__presence__color);\n  border: var(--member__presence__border);\n  border-radius: var(--member__presence__borderRadius);\n  height: var(--member__presence__size);\n  left: var(--member__presence__left);\n  position: var(--member__presence__position);\n  top: var(--member__presence__top);\n  width: var(--member__presence__size);\n}\n.pn-member__actions {\n  color: var(--member__actions__color);\n  cursor: pointer;\n  display: flex;\n  visibility: var(--member__actions__visibility);\n  font-size: var(--member__actions__fontSize);\n}\n.pn-member__actions > * {\n  background: var(--member__actions__background);\n  border-radius: var(--member__actions__borderRadius);\n  display: flex;\n  margin: var(--member__actions__margin);\n  padding: var(--member__actions__padding);\n}\n.pn-member__actions > *:hover {\n  background: var(--member__actions--hover__background);\n  color: var(--member__actions--hover__color);\n}\n\n/* ************************\n** Themes\n** ********************* */\n.pn-member-list--dark,\n.pn-member-list--event-dark,\n.pn-member-list--support-dark {\n  --member-list__background: var(--chat--dark__background--2);\n  --member__avatar__color: var(--chat--dark__background--2);\n  --member__name__color: var(--chat--dark__color--1);\n  --member__title__color: var(--chat--dark__color--2);\n  --member__presence__border: 3px solid var(--chat--dark__background--2);\n  --member__presence__color: var(--chat--dark__background--4);\n  --member__actions__color: var(--chat--dark__color--2);\n  --member__actions--hover__color: var(--chat--dark__hover--1);\n}";
styleInject(css_248z$2);

/**
 * Renders a list of members.
 *
 * It can represent all users of the application, only members of
 * the current channel, users currently subscribed/present on the channel, or whatever else is passed
 * into it. Custom memberRenderer can be used to modify how the users are rendered. For example
 * you can add presence indicators.
 */
var MemberList = function (props) {
    var pubnub = usePubNub();
    var theme = jotai.useAtom(ThemeAtom)[0];
    /*
    /* Helper functions
    */
    var isOwnMember = function (uuid) {
        return pubnub.getUUID() === uuid;
    };
    var isPresentMember = function (uuid) {
        return props.presentMembers.includes(uuid);
    };
    var memberSorter = function (a, b) {
        if (props.sort)
            return props.sort(a, b);
        if (isOwnMember(a.id))
            return -1;
        if (isOwnMember(b.id))
            return 1;
        if (isPresentMember(a.id) && !isPresentMember(b.id))
            return -1;
        if (isPresentMember(b.id) && !isPresentMember(a.id))
            return 1;
        return a.name.localeCompare(b.name, "en", { sensitivity: "base" });
    };
    var memberFromString = function (member) {
        if (typeof member === "string") {
            return {
                id: member,
                name: member,
            };
        }
        return member;
    };
    /*
    /* Commands
    */
    var clickMember = function (member) {
        if (props.onMemberClicked)
            props.onMemberClicked(member);
    };
    /*
    /* Renderers
    */
    var renderMember = function (member) {
        var _a;
        if (props.memberRenderer)
            return props.memberRenderer(member);
        var youString = isOwnMember(member.id) ? props.selfText : "";
        return (React__default.createElement("div", { key: member.id, className: "pn-member", onClick: function () { return clickMember(member); } },
            React__default.createElement("div", { className: "pn-member__avatar", style: { backgroundColor: getPredefinedColor(member.id) } },
                member.profileUrl ? (React__default.createElement("img", { src: member.profileUrl, alt: "User avatar" })) : (getNameInitials(member.name || member.id)),
                isPresentMember(member.id) && React__default.createElement("i", { className: "pn-member__presence" })),
            React__default.createElement("div", { className: "pn-member__main" },
                React__default.createElement("p", { className: "pn-member__name" },
                    member.name,
                    " ",
                    youString),
                React__default.createElement("p", { className: "pn-member__title" }, (_a = member.custom) === null || _a === void 0 ? void 0 : _a.title)),
            React__default.createElement("div", { className: "pn-member__actions" }, props.extraActionsRenderer && props.extraActionsRenderer(member))));
    };
    return (React__default.createElement("div", { className: "pn-member-list pn-member-list--".concat(theme) },
        props.members.map(memberFromString).sort(memberSorter).map(renderMember),
        React__default.createElement(React__default.Fragment, null, props.children)));
};
MemberList.defaultProps = {
    members: [],
    presentMembers: [],
    onMemberClicked: null,
    selfText: "(You)",
};

var css_248z$1 = "/* ************************\n** Variables\n** ********************* */\n:root {\n  --channel-list__background: var(--chat--light__background--2);\n  --channel__alignItems: center;\n  --channel__padding: 8px 16px;\n  --channel__justifyContent: flex-start;\n  --channel__background: transparent;\n  --channel--hover__background: var(--chat--light__hover--2);\n  --channel--active__background: var(--chat--light__background--1);\n  --channel__thumb__display: block;\n  --channel__thumb__margin: 0 18px 0 0;\n  --channel__thumb__size: 36px;\n  --channel__thumb__borderRadius: 36px;\n  --channel__name__color: var(--chat--light__color--1);\n  --channel--hover__name__color: var(--chat--light__color--1);\n  --channel--active__name__color: var(--chat--light__color--1);\n  --channel__name__fontSize: 13px;\n  --channel__name__fontWeight: 400;\n  --channel__name__margin: 0;\n  --channel__name__overflow: hidden;\n  --channel__name__padding: 0;\n  --channel__name__textOverflow: ellipsis;\n  --channel__name__whiteSpace: nowrap;\n  --channel__description__color: var(--chat--light__color--2);\n  --channel--hover__description__color: var(--chat--light__color--2);\n  --channel--active__description__color: var(--chat--light__color--2);\n  --channel__description__display: block;\n  --channel__description__fontSize: 11px;\n  --channel__description__fontWeight: 400;\n  --channel__description__margin: 0;\n  --channel__description__overflow: hidden;\n  --channel__description__padding: 7px 0 0;\n  --channel__description__textOverflow: ellipsis;\n  --channel__description__whiteSpace: nowrap;\n  --channel__actions--hover__background: transparent;\n  --channel__actions__background: transparent;\n  --channel__actions__borderRadius: 5px;\n  --channel__actions__color: var(--chat--light__color--2);\n  --channel__actions--hover__color: var(--chat--light__hover--1);\n  --channel__actions__fontSize: 18px;\n  --channel__actions__margin: 0 0 0 4px;\n  --channel__actions__padding: 3px 5px;\n  --channel__actions__visibility: hidden;\n}\n\n/* ************************\n** Styles\n** ********************* */\n.pn-channel-list {\n  height: 100%;\n  overflow-y: auto;\n  width: 100%;\n  background: var(--channel-list__background);\n}\n\n.pn-channel {\n  align-items: var(--channel__alignItems);\n  background: var(--channel__background);\n  cursor: pointer;\n  display: flex;\n  justify-content: var(--channel__justifyContent);\n  padding: var(--channel__padding);\n  position: relative;\n}\n.pn-channel:hover {\n  background: var(--channel--hover__background);\n}\n.pn-channel:hover .pn-channel__leave {\n  display: inline;\n}\n.pn-channel:hover .pn-channel__name {\n  color: var(--channel--hover__name__color);\n}\n.pn-channel:hover .pn-channel__description {\n  color: var(--channel--hover__description__color);\n}\n.pn-channel:hover .pn-channel__actions {\n  visibility: visible;\n}\n.pn-channel--active {\n  background: var(--channel--active__background);\n}\n.pn-channel--active .pn-channel__name {\n  color: var(--channel--active__name__color);\n}\n.pn-channel--active .pn-channel__description {\n  color: var(--channel--active__description__color);\n}\n.pn-channel__thumb {\n  border-radius: var(--channel__thumb__borderRadius);\n  display: var(--channel__thumb__display);\n  flex: none;\n  margin: var(--channel__thumb__margin);\n  width: var(--channel__thumb__size);\n}\n.pn-channel__title {\n  flex: 1;\n  min-width: 0;\n}\n.pn-channel__name {\n  color: var(--channel__name__color);\n  font-size: var(--channel__name__fontSize);\n  font-weight: var(--channel__name__fontWeight);\n  margin: var(--channel__name__margin);\n  overflow: var(--channel__name__overflow);\n  padding: var(--channel__name__padding);\n  text-align: left;\n  text-overflow: var(--channel__name__textOverflow);\n  white-space: var(--channel__name__whiteSpace);\n}\n.pn-channel__description {\n  color: var(--channel__description__color);\n  display: var(--channel__description__display);\n  font-size: var(--channel__description__fontSize);\n  font-weight: var(--channel__description__fontWeight);\n  margin: var(--channel__description__margin);\n  overflow: var(--channel__description__overflow);\n  padding: var(--channel__description__padding);\n  text-align: left;\n  text-overflow: var(--channel__description__textOverflow);\n  white-space: var(--channel__description__whiteSpace);\n}\n.pn-channel__actions {\n  color: var(--channel__actions__color);\n  cursor: pointer;\n  display: flex;\n  visibility: var(--channel__actions__visibility);\n  font-size: var(--channel__actions__fontSize);\n}\n.pn-channel__actions > * {\n  background: var(--channel__actions__background);\n  border-radius: var(--channel__actions__borderRadius);\n  display: flex;\n  margin: var(--channel__actions__margin);\n  padding: var(--channel__actions__padding);\n}\n.pn-channel__actions > *:hover {\n  background: var(--channel__actions--hover__background);\n  color: var(--channel__actions--hover__color);\n}\n.pn-channel__leave {\n  color: var(--channel__leave__color);\n  display: none;\n  height: var(--channel__leave__size);\n  position: absolute;\n  right: var(--channel__leave__right);\n  top: var(--channel__leave__top);\n  width: var(--channel__leave__size);\n}\n\n/* ************************\n** Themes\n** ********************* */\n.pn-channel-list--dark,\n.pn-channel-list--event-dark,\n.pn-channel-list--support-dark {\n  --channel-list__background: var(--chat--dark__background--2);\n  --channel--hover__background: var(--chat--dark__hover--2);\n  --channel--active__background: var(--chat--dark__background--1);\n  --channel__name__color: var(--chat--dark__color--1);\n  --channel--hover__name__color: var(--chat--dark__color--1);\n  --channel--active__name__color: var(--chat--dark__color--1);\n  --channel__description__color: var(--chat--dark__color--2);\n  --channel--hover__description__color: var(--chat--dark__color--2);\n  --channel--active__description__color: var(--chat--dark__color--2);\n  --channel__actions__color: var(--chat--dark__color--2);\n  --channel__actions--hover__color: var(--chat--dark__hover--1);\n}";
styleInject(css_248z$1);

/**
 * Renders an interactive list of channels.
 *
 * It can represent all channels of the application, only
 * channels joined by the current user, all channels available to be joined, or whatever else is
 * passed into it. A common pattern in chat applications is to render two instances of the
 * component - one visible all the time to show joined channels, and another one hidden inside a
 * modal with channels available to join. Make sure to handle the onChannelSwitched event to switch
 * the current channel passed to the Chat provider.
 */
var ChannelList = function (props) {
    var currentChannel = jotai.useAtom(CurrentChannelAtom)[0];
    var theme = jotai.useAtom(ThemeAtom)[0];
    /*
    /* Helper functions
    */
    var isChannelActive = function (ch) {
        return currentChannel === ch.id;
    };
    var channelSorter = function (a, b) {
        var _a;
        if (props.sort)
            return props.sort(a, b);
        return (_a = a === null || a === void 0 ? void 0 : a.name) === null || _a === void 0 ? void 0 : _a.localeCompare(b.name, "en", { sensitivity: "base" });
    };
    var channelFromString = function (channel) {
        if (typeof channel === "string") {
            return {
                id: channel,
                name: channel,
            };
        }
        return channel;
    };
    /*
    /* Commands
    */
    var switchChannel = function (channel) {
        if (props.onChannelSwitched)
            props.onChannelSwitched(channel);
    };
    /*
    /* Renderers
    */
    var renderChannel = function (channel) {
        var _a, _b;
        if (props.channelRenderer)
            return props.channelRenderer(channel);
        var channelActive = isChannelActive(channel);
        var activeClass = channelActive ? "pn-channel--active" : "";
        return (React__default.createElement("div", { key: channel.id, className: "pn-channel ".concat(activeClass), onClick: function () { return switchChannel(channel); } },
            ((_a = channel.custom) === null || _a === void 0 ? void 0 : _a.profileUrl) && (React__default.createElement("img", { className: "pn-channel__thumb", src: (_b = channel.custom) === null || _b === void 0 ? void 0 : _b.profileUrl, alt: "Channel thumb" })),
            React__default.createElement("div", { className: "pn-channel__title" },
                React__default.createElement("p", { className: "pn-channel__name" }, channel.name || channel.id),
                channel.description && React__default.createElement("p", { className: "pn-channel__description" }, channel.description)),
            React__default.createElement("div", { className: "pn-channel__actions" }, props.extraActionsRenderer && props.extraActionsRenderer(channel))));
    };
    return (React__default.createElement("div", { className: "pn-channel-list pn-channel-list--".concat(theme) },
        props.channels.map(channelFromString).sort(channelSorter).map(renderChannel),
        React__default.createElement(React__default.Fragment, null, props.children)));
};

var lodash_isequal = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
});

var css_248z = "/* ************************\n** Variables\n** ********************* */\n:root {\n  --typing-indicator__background: var(--chat--light__background--1);\n  --typing-indicator__color: var(--chat--light__color--1);\n  --typing-indicator__display: inline-block;\n  --typing-indicator__fontSize: 11px;\n  --typing-indicator__fontWeight: 300;\n  --typing-indicator__padding: 8px 24px;\n  --typing-indicator__dot__fontSize: 8px;\n  --typing-indicator__dot__margin: 0 3px 0 0;\n  --typing-indicator__dot__animationTravel: -12px;\n  --typing-indicator__dot__animationDuration: 1.3s;\n  --typing-indicator__dot__animationTimeout1: -1.1s;\n  --typing-indicator__dot__animationTimeout2: -0.9s;\n}\n\n/* ************************\n** Styles\n** ********************* */\n.pn-typing-indicator {\n  background: var(--typing-indicator__background);\n  color: var(--typing-indicator__color);\n  display: var(--typing-indicator__display);\n  font-size: var(--typing-indicator__fontSize);\n  font-weight: var(--typing-indicator__fontWeight);\n  padding: var(--typing-indicator__padding);\n}\n\n.pn-typing-indicator-dot {\n  display: inline-block;\n  font-size: var(--typing-indicator__dot__fontSize);\n  margin: var(--typing-indicator__dot__margin);\n  animation: wave var(--typing-indicator__dot__animationDuration) linear infinite;\n}\n.pn-typing-indicator-dot:nth-child(2) {\n  animation-delay: var(--typing-indicator__dot__animationTimeout1);\n}\n.pn-typing-indicator-dot:nth-child(3) {\n  animation-delay: var(--typing-indicator__dot__animationTimeout2);\n}\n\n@keyframes wave {\n  0%, 60%, 100% {\n    transform: initial;\n  }\n  30% {\n    transform: translateY(var(--typing-indicator__dot__animationTravel));\n  }\n}\n.pn-typing-indicator--dark,\n.pn-typing-indicator--event-dark,\n.pn-typing-indicator--support-dark {\n  --typing-indicator__background: var(--chat--dark__background--1);\n  --typing-indicator__color: var(--chat--dark__color--1);\n}";
styleInject(css_248z);

/** Subscribes to events generated by MessageInput to display information about users that are
 * currently typing messages.
 *
 * It can be displayed as a text denoting the user's name, or in a form similar to
 * a message that can be renderer inside MessageList.
 */
var TypingIndicator = function (props) {
    var pubnub = usePubNub();
    var theme = jotai.useAtom(ThemeAtom)[0];
    var users = jotai.useAtom(UsersMetaAtom)[0];
    var typingIndicators = jotai.useAtom(CurrentChannelTypingIndicatorAtom)[0];
    var typingIndicatorTimeout = jotai.useAtom(TypingIndicatorTimeoutAtom)[0];
    var _a = useState([]), activeUUIDs = _a[0], setActiveUUIDs = _a[1];
    var typingIndicatorsRef = useRef(typingIndicators);
    if (!lodash_isequal(typingIndicatorsRef.current, typingIndicators)) {
        typingIndicatorsRef.current = typingIndicators;
    }
    var calculateActiveUUIDs = useCallback(function () {
        var currentActiveUUIDs = Object.keys(typingIndicators).filter(function (id) { return Date.now() - parseInt(typingIndicators[id]) / 10000 < typingIndicatorTimeout * 1000; });
        var currentActiveUUIDsWoCurrent = currentActiveUUIDs.filter(function (id) { return id !== pubnub.getUUID(); });
        setActiveUUIDs(currentActiveUUIDsWoCurrent);
    }, [typingIndicatorsRef.current]);
    var getIndicationString = function () {
        var indicateStr = "";
        if (activeUUIDs.length > 1)
            indicateStr = "Multiple users are typing...";
        if (activeUUIDs.length == 1) {
            var user = users.find(function (u) { return u.id === activeUUIDs[0]; });
            indicateStr = "".concat((user === null || user === void 0 ? void 0 : user.name) || "Unknown User", " is typing...");
        }
        return indicateStr;
    };
    useEffect(function () {
        calculateActiveUUIDs();
        var interval = setInterval(calculateActiveUUIDs, 1000);
        return function () { return clearInterval(interval); };
    }, [calculateActiveUUIDs]);
    var renderUserBubble = function (uuid) {
        var user = users.find(function (u) { return u.id === uuid; });
        return (React__default.createElement("div", { className: "pn-msg", key: uuid },
            React__default.createElement("div", { className: "pn-msg__avatar" },
                (user === null || user === void 0 ? void 0 : user.profileUrl) && React__default.createElement("img", { src: user.profileUrl, alt: "User avatar" }),
                !(user === null || user === void 0 ? void 0 : user.profileUrl) && React__default.createElement("div", { className: "pn-msg__avatar-placeholder" })),
            React__default.createElement("div", { className: "pn-msg__main" },
                React__default.createElement("div", { className: "pn-msg__title" },
                    React__default.createElement("span", { className: "pn-msg__author" }, (user === null || user === void 0 ? void 0 : user.name) || "Unknown User")),
                React__default.createElement("div", { className: "pn-msg__bubble" },
                    React__default.createElement("span", { className: "pn-typing-indicator-dot" }, "\u25CF"),
                    React__default.createElement("span", { className: "pn-typing-indicator-dot" }, "\u25CF"),
                    React__default.createElement("span", { className: "pn-typing-indicator-dot" }, "\u25CF")))));
    };
    return (React__default.createElement(React__default.Fragment, null,
        !props.showAsMessage && !!activeUUIDs.length && (React__default.createElement("div", { className: "pn-typing-indicator pn-typing-indicator--".concat(theme) },
            getIndicationString(),
            "\u00A0")),
        props.showAsMessage && activeUUIDs.map(function (uuid) { return renderUserBubble(uuid); })));
};
TypingIndicator.defaultProps = {
    showAsMessage: false,
};

var lodash_merge = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;
});

var lodash_mergewith = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = mergeWith;
});

var useMessages = function (options) {
    var pubnub = usePubNub();
    var _a = useState(function () {
        var initial = {};
        options.channels.forEach(function (channel) { return (initial[channel] = []); });
        return initial;
    }), messages = _a[0], setMessages = _a[1];
    var _b = useState(undefined), page = _b[0], setPage = _b[1];
    var _c = useState(false), fetchedAll = _c[0], setFetchedAll = _c[1];
    var _d = useState(), error = _d[0], setError = _d[1];
    var mandatoryOptions = {
        start: page,
    };
    var mergedOptions = lodash_merge(options, mandatoryOptions);
    var command = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, newMessages, earliestMessageTimetokens, lastTimetoken, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (fetchedAll)
                        return [2 /*return*/];
                    return [4 /*yield*/, pubnub.fetchMessages(mergedOptions)];
                case 1:
                    response = _a.sent();
                    newMessages = lodash_mergewith({}, messages, response.channels, mergeMessageArray);
                    earliestMessageTimetokens = Object.values(response.channels)
                        .flatMap(function (ary) { return ary[0]; })
                        .map(function (a) { return a.timetoken; });
                    lastTimetoken = Math.min.apply(Math, earliestMessageTimetokens);
                    setMessages(newMessages);
                    setPage(lastTimetoken - 1);
                    setFetchedAll(!Object.keys(response.channels).length);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    setError(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleMessage = function (message) {
        try {
            setMessages(function (messages) {
                var messagesClone = lodash_clonedeep(messages);
                if (!messagesClone[message.channel])
                    messagesClone[message.channel] = [];
                messagesClone[message.channel].push(message);
                return messagesClone;
            });
        }
        catch (e) {
            setError(e);
        }
    };
    var handleAction = function (action) {
        try {
            if (!messages[action.channel])
                return;
            setMessages(function (messages) {
                var _a, _b;
                var channel = action.channel, event = action.event;
                var _c = action.data, type = _c.type, value = _c.value, actionTimetoken = _c.actionTimetoken, messageTimetoken = _c.messageTimetoken, uuid = _c.uuid;
                var messagesClone = lodash_clonedeep(messages);
                var message = messagesClone[channel].find(function (m) { return m.timetoken === messageTimetoken; });
                var actions = ((_b = (_a = message === null || message === void 0 ? void 0 : message.actions) === null || _a === void 0 ? void 0 : _a[type]) === null || _b === void 0 ? void 0 : _b[value]) || [];
                if (message && event === "added") {
                    var newActions = __spreadArray(__spreadArray([], actions, true), [{ uuid: uuid, actionTimetoken: actionTimetoken }], false);
                    lodash_set(message, ["actions", type, value], newActions);
                }
                if (message && event === "removed") {
                    var newActions = actions.filter(function (a) { return a.actionTimetoken !== actionTimetoken; });
                    newActions.length
                        ? lodash_set(message, ["actions", type, value], newActions)
                        : delete message.actions[type][value];
                }
                return messagesClone;
            });
        }
        catch (e) {
            setError(e);
        }
    };
    var listener = useRef({
        message: handleMessage,
        messageAction: handleAction,
    });
    useEffect(function () {
        command();
        pubnub.addListener(listener.current);
        return function () {
            pubnub.removeListener(listener.current);
        };
    }, [pubnub]);
    return [messages, command, error];
};
var mergeMessageArray = function (oldMessages, newMessages) {
    if (Array.isArray(oldMessages)) {
        return __spreadArray(__spreadArray([], oldMessages, true), newMessages, true).sort(function (a, b) { return a.timetoken - b.timetoken; });
    }
};

var usePresence = function (options) {
    if (options === void 0) { options = {}; }
    var jsonOptions = JSON.stringify(options);
    var pubnub = usePubNub();
    var _a = useState({}), presence = _a[0], setPresence = _a[1];
    var _b = useState(), error = _b[0], setError = _b[1];
    var _c = useState(true), doFetch = _c[0], setDoFetch = _c[1];
    var presenceValues = Object.values(presence);
    var total = presenceValues.map(function (ch) { return ch.occupancy; }).reduce(function (prev, cur) { return prev + cur; }, 0);
    var resetHook = function () {
        setPresence({});
        setError(undefined);
        setDoFetch(true);
    };
    useEffect(function () {
        resetHook();
    }, [jsonOptions]);
    useEffect(function () {
        var ignoreRequest = false;
        if (doFetch)
            fetch();
        function fetch() {
            return __awaiter(this, void 0, void 0, function () {
                var response, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, pubnub.hereNow(JSON.parse(jsonOptions))];
                        case 1:
                            response = _a.sent();
                            if (ignoreRequest)
                                return [2 /*return*/];
                            setDoFetch(false);
                            setPresence(response.channels);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            setDoFetch(false);
                            setError(e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        return function () {
            ignoreRequest = true;
        };
    }, [pubnub, doFetch, jsonOptions]);
    useEffect(function () {
        var listener = {
            presence: function (event) {
                setPresence(function (presence) {
                    var presenceClone = lodash_clonedeep(presence);
                    if (!presenceClone[event.channel])
                        presenceClone[event.channel] = { name: event.channel, occupancy: 0, occupants: [] };
                    var channel = presenceClone[event.channel];
                    if (event.action === "join") {
                        if (!channel.hasOwnProperty("occupants"))
                            channel.occupants = [];
                        channel.occupancy = event.occupancy;
                        if (options.includeUUIDs !== false &&
                            channel.hasOwnProperty("occupants") &&
                            !channel.occupants.find(function (u) { return u.uuid == event.uuid; })) {
                            var state = event.state, uuid = event.uuid;
                            channel.occupants.push({ state: state, uuid: uuid });
                        }
                    }
                    if (["leave", "timeout"].includes(event.action)) {
                        channel.occupancy = event.occupancy;
                        if (options.includeUUIDs !== false &&
                            channel.hasOwnProperty("occupants") &&
                            channel.occupants.find(function (u) { return u.uuid == event.uuid; })) {
                            presenceClone[event.channel].occupants = channel.occupants.filter(function (u) { return u.uuid !== event.uuid; });
                        }
                    }
                    return presenceClone;
                });
            },
        };
        pubnub.addListener(listener);
        return function () {
            pubnub.removeListener(listener);
        };
    }, [pubnub, options.includeUUIDs]);
    return [presence, resetHook, total, error];
};

var useUser = function (options) {
    if (options === void 0) { options = {}; }
    var jsonOptions = JSON.stringify(options);
    var pubnub = usePubNub();
    var _a = useState(null), user = _a[0], setUser = _a[1];
    var _b = useState(), error = _b[0], setError = _b[1];
    var _c = useState(true), doFetch = _c[0], setDoFetch = _c[1];
    var resetHook = function () {
        setUser(null);
        setError(undefined);
        setDoFetch(true);
    };
    useEffect(function () {
        resetHook();
    }, [jsonOptions]);
    useEffect(function () {
        var ignoreRequest = false;
        if (doFetch)
            fetch();
        function fetch() {
            return __awaiter(this, void 0, void 0, function () {
                var response, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, pubnub.objects.getUUIDMetadata(options)];
                        case 1:
                            response = _a.sent();
                            if (ignoreRequest)
                                return [2 /*return*/];
                            setDoFetch(false);
                            setUser(response.data);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            setDoFetch(false);
                            setError(e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        return function () {
            ignoreRequest = true;
        };
    }, [doFetch, options, pubnub.objects]);
    useEffect(function () {
        var listener = {
            objects: function (event) {
                var message = event.message;
                if (message.type !== "uuid")
                    return;
                setUser(function (user) {
                    var userCopy = lodash_clonedeep(user);
                    if (message.data.id == user.id) {
                        Object.assign(userCopy, message.data);
                    }
                    return userCopy;
                });
            },
        };
        pubnub.addListener(listener);
        return function () {
            pubnub.removeListener(listener);
        };
    }, [pubnub]);
    return [user, error];
};

var useSubscribe = function (options) {
    if (options === void 0) { options = {}; }
    var pubnub = usePubNub();
    var unsubscribe = function () {
        pubnub.unsubscribe(options);
    };
    useEffect(function () {
        options.channels = options.channels || [];
        options.channelGroups = options.channelGroups || [];
        var currentSubscriptions = pubnub.getSubscribedChannels() || [];
        var currentGroups = pubnub.getSubscribedChannelGroups() || [];
        var subscribeChannels = options.channels.filter(function (c) { return !currentSubscriptions.includes(c); });
        var unsubscribeChannels = currentSubscriptions.filter(function (c) { return !options.channels.includes(c); });
        var subscribeGroups = options.channelGroups.filter(function (c) { return !currentGroups.includes(c); });
        var unsubscribeGroups = currentGroups.filter(function (c) { return !options.channelGroups.includes(c); });
        if (subscribeChannels.length || subscribeGroups.length) {
            pubnub.subscribe({
                channels: subscribeChannels,
                channelGroups: subscribeGroups,
                withPresence: options.withPresence,
            });
        }
        if (unsubscribeChannels.length || unsubscribeGroups.length) {
            pubnub.unsubscribe({
                channels: unsubscribeChannels,
                channelGroups: unsubscribeGroups,
            });
        }
    }, [JSON.stringify(options.channels), JSON.stringify(options.channelGroups)]);
    return unsubscribe;
};

var useUsers = function (options) {
    if (options === void 0) { options = {}; }
    var pubnub = usePubNub();
    var _a = useState([]), users = _a[0], setUsers = _a[1];
    var _b = useState(0), totalCount = _b[0], setTotalCount = _b[1];
    var _c = useState(""), page = _c[0], setPage = _c[1];
    var _d = useState(), error = _d[0], setError = _d[1];
    var _e = useState(true), doFetch = _e[0], setDoFetch = _e[1];
    var paginatedOptions = lodash_merge({}, options, {
        page: { next: page },
        include: { totalCount: true },
    });
    var fetchMoreUsers = function () {
        setDoFetch(true);
    };
    useEffect(function () {
        var ignoreRequest = false;
        if (doFetch)
            fetchPage();
        function fetchPage() {
            return __awaiter(this, void 0, void 0, function () {
                var response_1, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            if (totalCount && users.length >= totalCount)
                                return [2 /*return*/];
                            return [4 /*yield*/, pubnub.objects.getAllUUIDMetadata(paginatedOptions)];
                        case 1:
                            response_1 = _a.sent();
                            if (ignoreRequest)
                                return [2 /*return*/];
                            setDoFetch(false);
                            setUsers(function (users) { return __spreadArray(__spreadArray([], users, true), response_1.data, true); });
                            setTotalCount(response_1.totalCount);
                            setPage(response_1.next);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            setDoFetch(false);
                            setError(e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        return function () {
            ignoreRequest = true;
        };
    }, [doFetch, paginatedOptions, pubnub.objects, totalCount, users.length]);
    useEffect(function () {
        var listener = {
            objects: function (event) {
                var message = event.message;
                if (message.type !== "uuid")
                    return;
                setUsers(function (users) {
                    var usersCopy = lodash_clonedeep(users);
                    var user = usersCopy.find(function (u) { return u.id === message.data.id; });
                    // Set events are only handled for already fetched users in order to conform to filters and pagination
                    if (user && message.event === "set") {
                        Object.assign(user, message.data);
                    }
                    if (user && message.event === "delete") {
                        usersCopy.splice(usersCopy.indexOf(user), 1);
                    }
                    return usersCopy;
                });
            },
        };
        pubnub.addListener(listener);
        return function () {
            pubnub.removeListener(listener);
        };
    }, [pubnub]);
    return [users, fetchMoreUsers, totalCount, error];
};

var useChannels = function (options) {
    if (options === void 0) { options = {}; }
    var pubnub = usePubNub();
    var _a = useState([]), channels = _a[0], setChannels = _a[1];
    var _b = useState(""), page = _b[0], setPage = _b[1];
    var _c = useState(0), totalCount = _c[0], setTotalCount = _c[1];
    var _d = useState(), error = _d[0], setError = _d[1];
    var _e = useState(true), doFetch = _e[0], setDoFetch = _e[1];
    var paginatedOptions = lodash_merge({}, options, {
        page: { next: page },
        include: { totalCount: true },
    });
    var fetchMoreChannels = function () {
        setDoFetch(true);
    };
    useEffect(function () {
        var ignoreRequest = false;
        if (doFetch)
            fetchPage();
        function fetchPage() {
            return __awaiter(this, void 0, void 0, function () {
                var response_1, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            if (totalCount && channels.length >= totalCount)
                                return [2 /*return*/];
                            return [4 /*yield*/, pubnub.objects.getAllChannelMetadata(paginatedOptions)];
                        case 1:
                            response_1 = _a.sent();
                            if (ignoreRequest)
                                return [2 /*return*/];
                            setDoFetch(false);
                            setChannels(function (channels) { return __spreadArray(__spreadArray([], channels, true), response_1.data, true); });
                            setTotalCount(response_1.totalCount);
                            setPage(response_1.next);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            setDoFetch(false);
                            setError(e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        return function () {
            ignoreRequest = true;
        };
    }, [channels.length, doFetch, paginatedOptions, pubnub.objects, totalCount]);
    useEffect(function () {
        var listener = {
            objects: function (event) {
                var message = event.message;
                if (message.type !== "channel")
                    return;
                setChannels(function (channels) {
                    var channelsCopy = lodash_clonedeep(channels);
                    var channel = channelsCopy.find(function (ch) { return ch.id === event.channel; });
                    // Set events are only handled for already fetched channels in order to conform to filters and pagination
                    if (channel && message.event === "set") {
                        Object.assign(channel, message.data);
                    }
                    if (channel && message.event === "delete") {
                        channelsCopy.splice(channelsCopy.indexOf(channel), 1);
                    }
                    return channelsCopy;
                });
            },
        };
        pubnub.addListener(listener);
        return function () {
            pubnub.removeListener(listener);
        };
    }, [pubnub]);
    return [channels, fetchMoreChannels, totalCount, error];
};

var useChannelMembers = function (options) {
    var jsonOptions = JSON.stringify(options);
    var pubnub = usePubNub();
    var _a = useState([]), members = _a[0], setMembers = _a[1];
    var _b = useState(0), totalCount = _b[0], setTotalCount = _b[1];
    var _c = useState(""), page = _c[0], setPage = _c[1];
    var _d = useState(), error = _d[0], setError = _d[1];
    var _e = useState(true), doFetch = _e[0], setDoFetch = _e[1];
    var paginatedOptions = useMemo(function () {
        return lodash_merge({}, JSON.parse(jsonOptions), {
            page: { next: page },
            include: { totalCount: true },
        });
    }, [page, jsonOptions]);
    var fetchMoreMembers = function () {
        setDoFetch(true);
    };
    var resetHook = function () {
        setMembers([]);
        setTotalCount(0);
        setPage("");
        setError(undefined);
        setDoFetch(true);
    };
    useEffect(function () {
        resetHook();
    }, [jsonOptions]);
    useEffect(function () {
        var ignoreRequest = false;
        if (doFetch)
            fetchPage();
        function fetchPage() {
            return __awaiter(this, void 0, void 0, function () {
                var response_1, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            if (totalCount && members.length >= totalCount)
                                return [2 /*return*/];
                            return [4 /*yield*/, pubnub.objects.getChannelMembers(paginatedOptions)];
                        case 1:
                            response_1 = _a.sent();
                            if (ignoreRequest)
                                return [2 /*return*/];
                            setDoFetch(false);
                            setMembers(function (members) { return __spreadArray(__spreadArray([], members, true), response_1.data.map(function (m) { return m.uuid; }), true); });
                            setTotalCount(response_1.totalCount);
                            setPage(response_1.next);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            setDoFetch(false);
                            setError(e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        return function () {
            ignoreRequest = true;
        };
    }, [totalCount, pubnub.objects, paginatedOptions, members.length, doFetch]);
    useEffect(function () {
        var listener = {
            objects: function (event) {
                var message = event.message;
                if (message.type !== "membership")
                    return;
                setMembers(function (members) {
                    var membersCopy = lodash_clonedeep(members);
                    var member = membersCopy.find(function (u) { return u.id === message.data.uuid.id; });
                    // Make sure the event is for the same channel as the hook
                    if (message.data.channel.id !== paginatedOptions.channel)
                        return membersCopy;
                    // Set events are not handled since there are no events fired for data updates
                    // New memberships are not handled in order to conform to filters and pagination
                    if (member && message.event === "delete") {
                        membersCopy.splice(membersCopy.indexOf(member), 1);
                    }
                    return membersCopy;
                });
            },
        };
        pubnub.addListener(listener);
        return function () {
            pubnub.removeListener(listener);
        };
    }, [pubnub, paginatedOptions.channel]);
    return [members, fetchMoreMembers, resetHook, totalCount, error];
};

var useUserMemberships = function (options) {
    if (options === void 0) { options = {}; }
    var jsonOptions = JSON.stringify(options);
    var pubnub = usePubNub();
    var _a = useState([]), channels = _a[0], setChannels = _a[1];
    var _b = useState(0), totalCount = _b[0], setTotalCount = _b[1];
    var _c = useState(""), page = _c[0], setPage = _c[1];
    var _d = useState(), error = _d[0], setError = _d[1];
    var _e = useState(true), doFetch = _e[0], setDoFetch = _e[1];
    var paginatedOptions = useMemo(function () {
        return lodash_merge({}, JSON.parse(jsonOptions), {
            page: { next: page },
            include: { totalCount: true },
        });
    }, [page, jsonOptions]);
    var fetchMoreMemberships = function () {
        setDoFetch(true);
    };
    var resetHook = function () {
        setChannels([]);
        setTotalCount(0);
        setPage("");
        setError(undefined);
        setDoFetch(true);
    };
    useEffect(function () {
        resetHook();
    }, [jsonOptions]);
    useEffect(function () {
        var ignoreRequest = false;
        if (doFetch)
            fetchPage();
        function fetchPage() {
            return __awaiter(this, void 0, void 0, function () {
                var response_1, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            if (totalCount && channels.length >= totalCount)
                                return [2 /*return*/];
                            return [4 /*yield*/, pubnub.objects.getMemberships(paginatedOptions)];
                        case 1:
                            response_1 = _a.sent();
                            if (ignoreRequest)
                                return [2 /*return*/];
                            setDoFetch(false);
                            setChannels(function (channels) { return __spreadArray(__spreadArray([], channels, true), response_1.data.map(function (m) { return m.channel; }), true); });
                            setTotalCount(response_1.totalCount);
                            setPage(response_1.next);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            setDoFetch(false);
                            setError(e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        return function () {
            ignoreRequest = true;
        };
    }, [totalCount, pubnub.objects, paginatedOptions, channels.length, doFetch]);
    useEffect(function () {
        var listener = {
            objects: function (event) {
                var message = event.message;
                if (message.type !== "membership")
                    return;
                setChannels(function (channels) {
                    var channelsCopy = lodash_clonedeep(channels);
                    var channel = channelsCopy.find(function (u) { return u.id === message.data.channel.id; });
                    var currentUuid = paginatedOptions.uuid || pubnub.getUUID();
                    // Make sure the event is for the same uuid as the hook
                    if (message.data.uuid.id !== currentUuid)
                        return channelsCopy;
                    // Set events are not handled since there are no events fired for data updates
                    // New memberships are not handled in order to conform to filters and pagination
                    if (channel && message.event === "delete") {
                        channelsCopy.splice(channelsCopy.indexOf(channel), 1);
                    }
                    return channelsCopy;
                });
            },
        };
        pubnub.addListener(listener);
        return function () {
            pubnub.removeListener(listener);
        };
    }, [pubnub, paginatedOptions.uuid]);
    return [channels, fetchMoreMemberships, resetHook, totalCount, error];
};

export { ChannelList, Chat, ChatInternal, MemberList, MessageInput, MessageList, TypingIndicator, getNameInitials, getPredefinedColor, isFilePayload, useChannelMembers, useChannels, useMessages, useOuterClick, usePresence, useSubscribe, useUser, useUserMemberships, useUsers };
//# sourceMappingURL=index.es.js.map
