var globalFoo;

exports.setFoo = function(val) {
	globalFoo = val;
};

exports.returnFoo = function() {
	return globalFoo;
};



// Code from Tutorial

// ~/Documents/projects/NodeJS $ node
// Welcome to Node.js v12.1.0.
// Type ".help" for more information.
> global
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  },
  __filename: '[eval]',
  exports: {},
  __dirname: '.'
}
> var foo = 'this is test'
undefined
> global
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  },
  __filename: '[eval]',
  exports: {},
  __dirname: '.',
  foo: 'this is test'
}
> var modFoo = require('./globalFoo.js');
Thrown:
Error: Cannot find module './globalFoo.js'
Require stack:
- /Users/lukemico/Documents/projects/NodeJS/[eval]
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:610:15)
    at Function.Module._load (internal/modules/cjs/loader.js:526:27)
    at Module.require (internal/modules/cjs/loader.js:666:19)
    at require (internal/modules/cjs/helpers.js:16:16) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/Users/lukemico/Documents/projects/NodeJS/[eval]' ]
}
> var modFoo = require('./globalFoo.js');
undefined
> modFoo.setFoo(42)
undefined
> modFoo.returnFoo()
42
> global
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  },
  __filename: '[eval]',
  exports: {},
  __dirname: '.',
  foo: 'this is test',
  modFoo: { setFoo: [Function], returnFoo: [Function] }
}
