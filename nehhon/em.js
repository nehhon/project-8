

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};



// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;




// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;


// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }


  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {




  read_ = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };




  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}


// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message





// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}




// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  var table = wasmTable;

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < table.length; i++) {
      var item = table.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.


  var ret;
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    ret = freeTableIndexes.pop();
  } else {
    ret = table.length;
    // Grow the table
    try {
      table.grow(1);
    } catch (err) {
      if (!(err instanceof RangeError)) {
        throw err;
      }
      throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
    }
  }

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    table.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    table.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunctionWasm(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

function removeFunction(index) {
  removeFunctionWasm(index);
}









function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};





// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];


if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}




// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}






// Wasm globals

var wasmMemory;
var wasmTable;


//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}


var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}




// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}





// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}



// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var STACK_BASE = 9460784,
    STACKTOP = STACK_BASE,
    STACK_MAX = 4217904;




var TOTAL_STACK = 5242880;

var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 57671680;



// In non-standalone/normal mode, we create the memory here.



// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      ,
      'maximum': 2147483648 / WASM_PAGE_SIZE
    });
  }


if (wasmMemory) {
  buffer = wasmMemory.buffer;
}

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
INITIAL_INITIAL_MEMORY = buffer.byteLength;
updateGlobalBufferAndViews(buffer);


















var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc




// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

var memoryInitializer = null;











function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}





var wasmBinaryFile = 'w.wasm';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(getBinary);
}



// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;




    Module['asm'] = exports;

    wasmTable = Module['asm']['__indirect_function_table'];


    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');


  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }


  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);


      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  1024: function($0, $1, $2, $3) {spAlert2($0,$1,$2,$3)},  
 1051: function($0, $1) {scrSetup($0,$1)},  
 1072: function() {clearleftar()},  
 1087: function($0, $1) {cursor($0,$1)},  
 1110: function($0, $1, $2) {cnsoSPmsg($0,$1,$2);},  
 1139: function($0, $1, $2) {peerSend($0,$1,$2);},  
 1165: function() {rlyCheck()},  
 1176: function($0, $1) {console.log("ss",$0,$1)},  
 1200: function($0) {checkAlive($0)},  
 1215: function($0, $1) {rcrconsole($0,$1)},  
 1236: function($0) {fstdD("SEC55",$0)},  
 1254: function($0, $1, $2) {NHretransmit($0,$1,$2)},  
 1277: function($0, $1, $2, $3, $4, $5, $6, $7, $8) {onlineTable($0,$1,$2,$3,$4,$5,$6,$7,$8);},  
 1332: function($0) {thereIsAnIdiot($0)},  
 1351: function() {SetupGameConfig()},  
 1371: function($0, $1, $2, $3, $4, $5) {onlineTable($0,$1,$2,$3,$4,$5);},  
 1414: function() {mapWindow()},  
 1426: function() {setupPlayermenu()},  
 1444: function($0, $1, $2) {peerSend($0,$1,$2);},  
 1468: function($0, $1, $2, $3) {chat($0,0,$1,$2,$3)},  
 1495: function($0) {presetuprndtable($0)},  
 1516: function($0, $1, $2, $3, $4) {randomMapTable($0,$1,$2,$3,$4);},  
 1558: function($0) {play($0)},  
 1569: function($0, $1, $2) {play($0,$1,$2)},  
 1644: function() {menuDefect();},  
 1658: function($0, $1) {dmgAlert($0,$1)},  
 1676: function() {setupMWmenu();},  
 1695: function($0, $1, $2, $3, $4, $5) {setupTradingmenu($0,$1,$2,$3,$4,$5)},  
 1740: function() {cleanMenuIcons()},  
 1757: function() {setupColorGL()},  
 1774: function($0, $1, $2, $3, $4, $5) {addRNDOBJ($0,$1,$2,$3,$4,$5)},  
 1812: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) {insertInfo($0,$1,$2,$3,$4,0,$5,$6,$7,$8,$9,$10,$11,$12)},  
 1886: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) {insertInfo($0,$1,$2,$3,$4,1,$5,$6,$7,$8,$9,$10,$11,$12)},  
 1971: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) {multiOptions($0,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)},  
 2048: function() {waitlistsetup()},  
 2066: function() {startMovement0()},  
 2087: function() {waitingList()},  
 2101: function() {startGame()},  
 2115: function() {gid("playersinfo").innerHTML="<span style='width:50px;float:left;font-size:11px;color:#dcaa14;text-decoration:overline;'>Score</span><br>"},  
 2256: function($0, $1, $2, $3, $4, $5, $6, $7) {setupPlayerInfo($0,$1,$2,$3,$4,$5,$6,$7)},  
 2308: function() {editorPlayerTable();},  
 2331: function() {activeKingdomSetup();setupColorGL()},  
 2369: function() {editorPlayerTable();activeKingdomSetup();setupColorGL()},  
 2656: function($0, $1, $2, $3, $4) {buttonSetup($0,$1,$2,$3,$4)},  
 2816: function($0, $1, $2, $3) {setup3Dtexture($0,$1,$2,$3)},  
 2851: function() {startGameStep0.check()},  
 2874: function() {svggme2()},  
 2884: function($0, $1) {chFFg($0,$1)},  
 2900: function() {fstdD("SEC56")},  
 2915: function() {nhcleanclose()},  
 2930: function($0) {sresizeBuffer($0);},  
 2953: function($0, $1, $2, $3) {bufferPos($0,$1,$2,$3)},  
 2981: function($0, $1, $2, $3, $4) {bufferPhysics($0,$1,$2,$3,$4)},  
 3017: function($0, $1, $2, $3, $4) {bufferMargin($0,$1,$2,$3,$4)},  
 3046: function($0, $1, $2, $3, $4) {bufferIMG($0,$1,$2,$3,$4)},  
 3078: function($0, $1, $2, $3, $4, $5) {customMapTable($0,$1,$2,$3,$4,$5);},  
 3232: function($0, $1, $2, $3) {changeresources($0,$1,$2,$3)},  
 3266: function($0, $1) {popInfo($0,$1)},  
 3281: function($0, $1) {changePlayerScore($0,$1)},  
 3308: function($0, $1) {EDterrainInfo($0,$1)},  
 3334: function($0, $1) {ms("manage",$0,$1)},  
 3353: function($0, $1) {ms("manage22",$0,$1)},  
 3374: function($0, $1, $2, $3) {locationAlert($0,$1,$2,$3)},  
 3408: function($0) {console.log("cycnfo",$0)},  
 3433: function($0, $1) {console.log("checkcycle",$0,$1)},  
 3468: function() {console.log("SENT")},  
 3488: function($0, $1) {console.log("currentCycle",$0,$1)},  
 3522: function($0) {console.log("recv",$0)},  
 3545: function($0, $1) {setupArrows($0,$1)},  
 3564: function() {showGuide()},  
 3576: function($0, $1) {setupArrows($0,$1);},  
 3600: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) {selectionOne0($0,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)},  
 3696: function($0, $1) {showHealthOne($0,$1)},  
 3720: function() {gid("delunit").style.display="block"},  
 3757: function($0, $1, $2) {selectMulp($0,$1,$2)},  
 3778: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {editProps($0,$1,$2,$3,$4,$5,$6,$7,$8,$9)},  
 3832: function($0, $1, $2, $3, $4, $5, $6, $7) {writeProps($0,$1,$2,$3,$4,$5,$6,$7)},  
 3881: function($0, $1, $2, $3, $4, $5, $6, $7, $8) {writeProps($0,$1,$2,$3,$4,$5,$6,$7,$8)},  
 3956: function() {setupGameMusic()},  
 4000: function($0) {showProgress($0)},  
 4128: function() {stpTupdtr()},  
 4140: function($0, $1) {setupGL($0,$1)},  
 4157: function($0) {setupGL(0,$0)},  
 4173: function($0, $1, $2, $3, $4, $5, $6, $7, $8) {setupEditorPlayerTable($0,$1,$2,$3,$4,$5,$6,$7,$8)},  
 4238: function($0) {pong($0)},  
 4247: function($0) {updateMax($0)},  
 4263: function() {moduleLoaded()},  
 4278: function() {playerWon()},  
 4290: function($0) {updateHealth($0)},  
 4307: function() {popAlert(4)},  
 4319: function($0) {popAlert($0)},  
 4332: function() {gameOver()}
};





// {{PRE_LIBRARY}}


  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function dynCallLegacy(sig, ptr, args) {
      if (args && args.length) {
        return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
      }
      return Module['dynCall_' + sig].call(null, ptr);
    }
  function dynCall(sig, ptr, args) {
      // Without WASM_BIGINT support we cannot directly call function with i64 as
      // part of thier signature, so we rely the dynCall functions generated by
      // wasm-emscripten-finalize
      if (sig.indexOf('j') != -1) {
        return dynCallLegacy(sig, ptr, args);
      }
  
      return wasmTable.get(ptr).apply(null, args)
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  function _atexit(func, arg) {
    }
  function ___cxa_atexit(a0,a1
  ) {
  return _atexit(a0,a1);
  }

  function __emscripten_fetch_free(id) {
    //Note: should just be [id], but indexes off by 1 (see: #8803)
    delete Fetch.xhrs[id-1];
  }

  function _abort() {
      abort();
    }

  function mainThreadEM_ASM(code, sigPtr, argbuf, sync) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }
  function _emscripten_asm_const_async_on_main_thread(code, sigPtr, argbuf) {
      return mainThreadEM_ASM(code, sigPtr, argbuf, 0);
    }

  function _emscripten_asm_const_int(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }

  function _emscripten_asm_const_int_sync_on_main_thread(code, sigPtr, argbuf) {
      return mainThreadEM_ASM(code, sigPtr, argbuf, 1);
    }

  var _emscripten_get_now;_emscripten_get_now = function() { return performance.now(); }
  ;

  function _emscripten_is_main_browser_thread() {
      return !ENVIRONMENT_IS_WORKER;
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
  
  
      // Memory resize rules:
      // 1. When resizing, always produce a resized heap that is at least 16MB (to avoid tiny heap sizes receiving lots of repeated resizes at startup)
      // 2. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 3a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 3b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 4. Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 5. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit was set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      var minHeapSize = 16777216;
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for(var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  var Fetch={xhrs:[],setu64:function(addr, val) {
      HEAPU32[addr >> 2] = val;
      HEAPU32[addr + 4 >> 2] = (val / 4294967296)|0;
    },openDatabase:function(dbname, dbversion, onsuccess, onerror) {
      try {
        var openRequest = indexedDB.open(dbname, dbversion);
      } catch (e) { return onerror(e); }
  
      openRequest.onupgradeneeded = function(event) {
        var db = event.target.result;
        if (db.objectStoreNames.contains('FILES')) {
          db.deleteObjectStore('FILES');
        }
        db.createObjectStore('FILES');
      };
      openRequest.onsuccess = function(event) { onsuccess(event.target.result); };
      openRequest.onerror = function(error) { onerror(error); };
    },staticInit:function() {
      var isMainThread = true;
  
      var onsuccess = function(db) {
        Fetch.dbInstance = db;
  
        if (isMainThread) {
          removeRunDependency('library_fetch_init');
        }
      };
      var onerror = function() {
        Fetch.dbInstance = false;
  
        if (isMainThread) {
          removeRunDependency('library_fetch_init');
        }
      };
      Fetch.openDatabase('emscripten_filesystem', 1, onsuccess, onerror);
  
      if (typeof ENVIRONMENT_IS_FETCH_WORKER === 'undefined' || !ENVIRONMENT_IS_FETCH_WORKER) addRunDependency('library_fetch_init');
    }};
  
  function __emscripten_fetch_xhr(fetch, onsuccess, onerror, onprogress, onreadystatechange) {
    var url = HEAPU32[fetch + 8 >> 2];
    if (!url) {
      onerror(fetch, 0, 'no url specified!');
      return;
    }
    var url_ = UTF8ToString(url);
  
    var fetch_attr = fetch + 112;
    var requestMethod = UTF8ToString(fetch_attr);
    if (!requestMethod) requestMethod = 'GET';
    var userData = HEAPU32[fetch + 4 >> 2];
    var fetchAttributes = HEAPU32[fetch_attr + 52 >> 2];
    var timeoutMsecs = HEAPU32[fetch_attr + 56 >> 2];
    var withCredentials = !!HEAPU32[fetch_attr + 60 >> 2];
    var destinationPath = HEAPU32[fetch_attr + 64 >> 2];
    var userName = HEAPU32[fetch_attr + 68 >> 2];
    var password = HEAPU32[fetch_attr + 72 >> 2];
    var requestHeaders = HEAPU32[fetch_attr + 76 >> 2];
    var overriddenMimeType = HEAPU32[fetch_attr + 80 >> 2];
    var dataPtr = HEAPU32[fetch_attr + 84 >> 2];
    var dataLength = HEAPU32[fetch_attr + 88 >> 2];
  
    var fetchAttrLoadToMemory = !!(fetchAttributes & 1);
    var fetchAttrStreamData = !!(fetchAttributes & 2);
    var fetchAttrPersistFile = !!(fetchAttributes & 4);
    var fetchAttrAppend = !!(fetchAttributes & 8);
    var fetchAttrReplace = !!(fetchAttributes & 16);
    var fetchAttrSynchronous = !!(fetchAttributes & 64);
    var fetchAttrWaitable = !!(fetchAttributes & 128);
  
    var userNameStr = userName ? UTF8ToString(userName) : undefined;
    var passwordStr = password ? UTF8ToString(password) : undefined;
    var overriddenMimeTypeStr = overriddenMimeType ? UTF8ToString(overriddenMimeType) : undefined;
  
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = withCredentials;
    xhr.open(requestMethod, url_, !fetchAttrSynchronous, userNameStr, passwordStr);
    if (!fetchAttrSynchronous) xhr.timeout = timeoutMsecs; // XHR timeout field is only accessible in async XHRs, and must be set after .open() but before .send().
    xhr.url_ = url_; // Save the url for debugging purposes (and for comparing to the responseURL that server side advertised)
    xhr.responseType = 'arraybuffer';
  
    if (overriddenMimeType) {
      xhr.overrideMimeType(overriddenMimeTypeStr);
    }
    if (requestHeaders) {
      for(;;) {
        var key = HEAPU32[requestHeaders >> 2];
        if (!key) break;
        var value = HEAPU32[requestHeaders + 4 >> 2];
        if (!value) break;
        requestHeaders += 8;
        var keyStr = UTF8ToString(key);
        var valueStr = UTF8ToString(value);
        xhr.setRequestHeader(keyStr, valueStr);
      }
    }
    Fetch.xhrs.push(xhr);
    var id = Fetch.xhrs.length;
    HEAPU32[fetch + 0 >> 2] = id;
    var data = (dataPtr && dataLength) ? HEAPU8.slice(dataPtr, dataPtr + dataLength) : null;
    // TODO: Support specifying custom headers to the request.
  
    // Share the code to save the response, as we need to do so both on success
    // and on error (despite an error, there may be a response, like a 404 page).
    // This receives a condition, which determines whether to save the xhr's
    // response, or just 0.
    function saveResponse(condition) {
      var ptr = 0;
      var ptrLen = 0;
      if (condition) {
        ptrLen = xhr.response ? xhr.response.byteLength : 0;
        // The data pointer malloc()ed here has the same lifetime as the emscripten_fetch_t structure itself has, and is
        // freed when emscripten_fetch_close() is called.
        ptr = _malloc(ptrLen);
        HEAPU8.set(new Uint8Array(xhr.response), ptr);
      }
      HEAPU32[fetch + 12 >> 2] = ptr;
      Fetch.setu64(fetch + 16, ptrLen);
    }
  
    xhr.onload = function(e) {
      saveResponse(fetchAttrLoadToMemory && !fetchAttrStreamData);
      var len = xhr.response ? xhr.response.byteLength : 0;
      Fetch.setu64(fetch + 24, 0);
      if (len) {
        // If the final XHR.onload handler receives the bytedata to compute total length, report that,
        // otherwise don't write anything out here, which will retain the latest byte size reported in
        // the most recent XHR.onprogress handler.
        Fetch.setu64(fetch + 32, len);
      }
      HEAPU16[fetch + 40 >> 1] = xhr.readyState;
      HEAPU16[fetch + 42 >> 1] = xhr.status;
      if (xhr.statusText) stringToUTF8(xhr.statusText, fetch + 44, 64);
      if (xhr.status >= 200 && xhr.status < 300) {
        if (onsuccess) onsuccess(fetch, xhr, e);
      } else {
        if (onerror) onerror(fetch, xhr, e);
      }
    };
    xhr.onerror = function(e) {
      saveResponse(fetchAttrLoadToMemory);
      var status = xhr.status; // XXX TODO: Overwriting xhr.status doesn't work here, so don't override anywhere else either.
      Fetch.setu64(fetch + 24, 0);
      Fetch.setu64(fetch + 32, xhr.response ? xhr.response.byteLength : 0);
      HEAPU16[fetch + 40 >> 1] = xhr.readyState;
      HEAPU16[fetch + 42 >> 1] = status;
      if (onerror) onerror(fetch, xhr, e);
    };
    xhr.ontimeout = function(e) {
      if (onerror) onerror(fetch, xhr, e);
    };
    xhr.onprogress = function(e) {
      var ptrLen = (fetchAttrLoadToMemory && fetchAttrStreamData && xhr.response) ? xhr.response.byteLength : 0;
      var ptr = 0;
      if (fetchAttrLoadToMemory && fetchAttrStreamData) {
        // Allocate byte data in Emscripten heap for the streamed memory block (freed immediately after onprogress call)
        ptr = _malloc(ptrLen);
        HEAPU8.set(new Uint8Array(xhr.response), ptr);
      }
      HEAPU32[fetch + 12 >> 2] = ptr;
      Fetch.setu64(fetch + 16, ptrLen);
      Fetch.setu64(fetch + 24, e.loaded - ptrLen);
      Fetch.setu64(fetch + 32, e.total);
      HEAPU16[fetch + 40 >> 1] = xhr.readyState;
      if (xhr.readyState >= 3 && xhr.status === 0 && e.loaded > 0) xhr.status = 200; // If loading files from a source that does not give HTTP status code, assume success if we get data bytes
      HEAPU16[fetch + 42 >> 1] = xhr.status;
      if (xhr.statusText) stringToUTF8(xhr.statusText, fetch + 44, 64);
      if (onprogress) onprogress(fetch, xhr, e);
      if (ptr) {
        _free(ptr);
      }
    };
    xhr.onreadystatechange = function(e) {
      HEAPU16[fetch + 40 >> 1] = xhr.readyState;
      if (xhr.readyState >= 2) {
        HEAPU16[fetch + 42 >> 1] = xhr.status;
      }
      if (onreadystatechange) onreadystatechange(fetch, xhr, e);
    };
    try {
      xhr.send(data);
    } catch(e) {
      if (onerror) onerror(fetch, xhr, e);
    }
  }
  
  function __emscripten_fetch_cache_data(db, fetch, data, onsuccess, onerror) {
    if (!db) {
      onerror(fetch, 0, 'IndexedDB not available!');
      return;
    }
  
    var fetch_attr = fetch + 112;
    var destinationPath = HEAPU32[fetch_attr + 64 >> 2];
    if (!destinationPath) destinationPath = HEAPU32[fetch + 8 >> 2];
    var destinationPathStr = UTF8ToString(destinationPath);
  
    try {
      var transaction = db.transaction(['FILES'], 'readwrite');
      var packages = transaction.objectStore('FILES');
      var putRequest = packages.put(data, destinationPathStr);
      putRequest.onsuccess = function(event) {
        HEAPU16[fetch + 40 >> 1] = 4; // Mimic XHR readyState 4 === 'DONE: The operation is complete'
        HEAPU16[fetch + 42 >> 1] = 200; // Mimic XHR HTTP status code 200 "OK"
        stringToUTF8("OK", fetch + 44, 64);
        onsuccess(fetch, 0, destinationPathStr);
      };
      putRequest.onerror = function(error) {
        // Most likely we got an error if IndexedDB is unwilling to store any more data for this page.
        // TODO: Can we identify and break down different IndexedDB-provided errors and convert those
        // to more HTTP status codes for more information?
        HEAPU16[fetch + 40 >> 1] = 4; // Mimic XHR readyState 4 === 'DONE: The operation is complete'
        HEAPU16[fetch + 42 >> 1] = 413; // Mimic XHR HTTP status code 413 "Payload Too Large"
        stringToUTF8("Payload Too Large", fetch + 44, 64);
        onerror(fetch, 0, error);
      };
    } catch(e) {
      onerror(fetch, 0, e);
    }
  }
  
  function __emscripten_fetch_load_cached_data(db, fetch, onsuccess, onerror) {
    if (!db) {
      onerror(fetch, 0, 'IndexedDB not available!');
      return;
    }
  
    var fetch_attr = fetch + 112;
    var path = HEAPU32[fetch_attr + 64 >> 2];
    if (!path) path = HEAPU32[fetch + 8 >> 2];
    var pathStr = UTF8ToString(path);
  
    try {
      var transaction = db.transaction(['FILES'], 'readonly');
      var packages = transaction.objectStore('FILES');
      var getRequest = packages.get(pathStr);
      getRequest.onsuccess = function(event) {
        if (event.target.result) {
          var value = event.target.result;
          var len = value.byteLength || value.length;
          // The data pointer malloc()ed here has the same lifetime as the emscripten_fetch_t structure itself has, and is
          // freed when emscripten_fetch_close() is called.
          var ptr = _malloc(len);
          HEAPU8.set(new Uint8Array(value), ptr);
          HEAPU32[fetch + 12 >> 2] = ptr;
          Fetch.setu64(fetch + 16, len);
          Fetch.setu64(fetch + 24, 0);
          Fetch.setu64(fetch + 32, len);
          HEAPU16[fetch + 40 >> 1] = 4; // Mimic XHR readyState 4 === 'DONE: The operation is complete'
          HEAPU16[fetch + 42 >> 1] = 200; // Mimic XHR HTTP status code 200 "OK"
          stringToUTF8("OK", fetch + 44, 64);
          onsuccess(fetch, 0, value);
        } else {
          // Succeeded to load, but the load came back with the value of undefined, treat that as an error since we never store undefined in db.
          HEAPU16[fetch + 40 >> 1] = 4; // Mimic XHR readyState 4 === 'DONE: The operation is complete'
          HEAPU16[fetch + 42 >> 1] = 404; // Mimic XHR HTTP status code 404 "Not Found"
          stringToUTF8("Not Found", fetch + 44, 64);
          onerror(fetch, 0, 'no data');
        }
      };
      getRequest.onerror = function(error) {
        HEAPU16[fetch + 40 >> 1] = 4; // Mimic XHR readyState 4 === 'DONE: The operation is complete'
        HEAPU16[fetch + 42 >> 1] = 404; // Mimic XHR HTTP status code 404 "Not Found"
        stringToUTF8("Not Found", fetch + 44, 64);
        onerror(fetch, 0, error);
      };
    } catch(e) {
      onerror(fetch, 0, e);
    }
  }
  
  function __emscripten_fetch_delete_cached_data(db, fetch, onsuccess, onerror) {
    if (!db) {
      onerror(fetch, 0, 'IndexedDB not available!');
      return;
    }
  
    var fetch_attr = fetch + 112;
    var path = HEAPU32[fetch_attr + 64 >> 2];
    if (!path) path = HEAPU32[fetch + 8 >> 2];
    var pathStr = UTF8ToString(path);
  
    try {
      var transaction = db.transaction(['FILES'], 'readwrite');
      var packages = transaction.objectStore('FILES');
      var request = packages.delete(pathStr);
      request.onsuccess = function(event) {
        var value = event.target.result;
        HEAPU32[fetch + 12 >> 2] = 0;
        Fetch.setu64(fetch + 16, 0);
        Fetch.setu64(fetch + 24, 0);
        Fetch.setu64(fetch + 32, 0);
        HEAPU16[fetch + 40 >> 1] = 4; // Mimic XHR readyState 4 === 'DONE: The operation is complete'
        HEAPU16[fetch + 42 >> 1] = 200; // Mimic XHR HTTP status code 200 "OK"
        stringToUTF8("OK", fetch + 44, 64);
        onsuccess(fetch, 0, value);
      };
      request.onerror = function(error) {
        HEAPU16[fetch + 40 >> 1] = 4; // Mimic XHR readyState 4 === 'DONE: The operation is complete'
        HEAPU16[fetch + 42 >> 1] = 404; // Mimic XHR HTTP status code 404 "Not Found"
        stringToUTF8("Not Found", fetch + 44, 64);
        onerror(fetch, 0, error);
      };
    } catch(e) {
      onerror(fetch, 0, e);
    }
  }
  function _emscripten_start_fetch(fetch, successcb, errorcb, progresscb, readystatechangecb) {
    if (typeof noExitRuntime !== 'undefined') noExitRuntime = true; // If we are the main Emscripten runtime, we should not be closing down.
  
    var fetch_attr = fetch + 112;
    var requestMethod = UTF8ToString(fetch_attr);
    var onsuccess = HEAPU32[fetch_attr + 36 >> 2];
    var onerror = HEAPU32[fetch_attr + 40 >> 2];
    var onprogress = HEAPU32[fetch_attr + 44 >> 2];
    var onreadystatechange = HEAPU32[fetch_attr + 48 >> 2];
    var fetchAttributes = HEAPU32[fetch_attr + 52 >> 2];
    var fetchAttrLoadToMemory = !!(fetchAttributes & 1);
    var fetchAttrStreamData = !!(fetchAttributes & 2);
    var fetchAttrPersistFile = !!(fetchAttributes & 4);
    var fetchAttrNoDownload = !!(fetchAttributes & 32);
    var fetchAttrAppend = !!(fetchAttributes & 8);
    var fetchAttrReplace = !!(fetchAttributes & 16);
  
    var reportSuccess = function(fetch, xhr, e) {
      if (onsuccess) wasmTable.get(onsuccess)(fetch);
      else if (successcb) successcb(fetch);
    };
  
    var reportProgress = function(fetch, xhr, e) {
      if (onprogress) wasmTable.get(onprogress)(fetch);
      else if (progresscb) progresscb(fetch);
    };
  
    var reportError = function(fetch, xhr, e) {
      if (onerror) wasmTable.get(onerror)(fetch);
      else if (errorcb) errorcb(fetch);
    };
  
    var reportReadyStateChange = function(fetch, xhr, e) {
      if (onreadystatechange) wasmTable.get(onreadystatechange)(fetch);
      else if (readystatechangecb) readystatechangecb(fetch);
    };
  
    var performUncachedXhr = function(fetch, xhr, e) {
      __emscripten_fetch_xhr(fetch, reportSuccess, reportError, reportProgress, reportReadyStateChange);
    };
  
    var cacheResultAndReportSuccess = function(fetch, xhr, e) {
      var storeSuccess = function(fetch, xhr, e) {
        if (onsuccess) wasmTable.get(onsuccess)(fetch);
        else if (successcb) successcb(fetch);
      };
      var storeError = function(fetch, xhr, e) {
        if (onsuccess) wasmTable.get(onsuccess)(fetch);
        else if (successcb) successcb(fetch);
      };
      __emscripten_fetch_cache_data(Fetch.dbInstance, fetch, xhr.response, storeSuccess, storeError);
    };
  
    var performCachedXhr = function(fetch, xhr, e) {
      __emscripten_fetch_xhr(fetch, cacheResultAndReportSuccess, reportError, reportProgress, reportReadyStateChange);
    };
  
    if (requestMethod === 'EM_IDB_STORE') {
      // TODO(?): Here we perform a clone of the data, because storing shared typed arrays to IndexedDB does not seem to be allowed.
      var ptr = HEAPU32[fetch_attr + 84 >> 2];
      __emscripten_fetch_cache_data(Fetch.dbInstance, fetch, HEAPU8.slice(ptr, ptr + HEAPU32[fetch_attr + 88 >> 2]), reportSuccess, reportError);
    } else if (requestMethod === 'EM_IDB_DELETE') {
      __emscripten_fetch_delete_cached_data(Fetch.dbInstance, fetch, reportSuccess, reportError);
    } else if (!fetchAttrReplace) {
      __emscripten_fetch_load_cached_data(Fetch.dbInstance, fetch, reportSuccess, fetchAttrNoDownload ? reportError : (fetchAttrPersistFile ? performCachedXhr : performUncachedXhr));
    } else if (!fetchAttrNoDownload) {
      __emscripten_fetch_xhr(fetch, fetchAttrPersistFile ? cacheResultAndReportSuccess : reportSuccess, reportError, reportProgress, reportReadyStateChange);
    } else {
      return 0; // todo: free
    }
    return fetch;
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  
  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        return low;
      }};
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }

  var readAsmConstArgsArray=[];
  function readAsmConstArgs(sigPtr, buf) {
      readAsmConstArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      buf >>= 2;
      while (ch = HEAPU8[sigPtr++]) {
        // A double takes two 32-bit slots, and must also be aligned - the backend
        // will emit padding to avoid that.
        var double = ch < 105;
        if (double && (buf & 1)) buf++;
        readAsmConstArgsArray.push(double ? HEAPF64[buf++ >> 1] : HEAP32[buf]);
        ++buf;
      }
      return readAsmConstArgsArray;
    }
Fetch.staticInit();;
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = { "__assert_fail": ___assert_fail, "__cxa_atexit": ___cxa_atexit, "_emscripten_fetch_free": __emscripten_fetch_free, "abort": _abort, "emscripten_asm_const_async_on_main_thread": _emscripten_asm_const_async_on_main_thread, "emscripten_asm_const_int": _emscripten_asm_const_int, "emscripten_asm_const_int_sync_on_main_thread": _emscripten_asm_const_int_sync_on_main_thread, "emscripten_get_now": _emscripten_get_now, "emscripten_is_main_browser_thread": _emscripten_is_main_browser_thread, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "emscripten_start_fetch": _emscripten_start_fetch, "fd_write": _fd_write, "memory": wasmMemory, "setTempRet0": _setTempRet0 };
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10canvasSizejjjj = Module["__Z10canvasSizejjjj"] = function() {
  return (__Z10canvasSizejjjj = Module["__Z10canvasSizejjjj"] = Module["asm"]["_Z10canvasSizejjjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11setupRandomi = Module["__Z11setupRandomi"] = function() {
  return (__Z11setupRandomi = Module["__Z11setupRandomi"] = Module["asm"]["_Z11setupRandomi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z3rndi = Module["__Z3rndi"] = function() {
  return (__Z3rndi = Module["__Z3rndi"] = Module["asm"]["_Z3rndi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9stpTactilb = Module["__Z9stpTactilb"] = function() {
  return (__Z9stpTactilb = Module["__Z9stpTactilb"] = Module["asm"]["_Z9stpTactilb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9setupZoomf = Module["__Z9setupZoomf"] = function() {
  return (__Z9setupZoomf = Module["__Z9setupZoomf"] = Module["asm"]["_Z9setupZoomf"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12checkDelAnimj = Module["__Z12checkDelAnimj"] = function() {
  return (__Z12checkDelAnimj = Module["__Z12checkDelAnimj"] = Module["asm"]["_Z12checkDelAnimj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9onLimits2ii = Module["__Z9onLimits2ii"] = function() {
  return (__Z9onLimits2ii = Module["__Z9onLimits2ii"] = Module["asm"]["_Z9onLimits2ii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6gcyclev = Module["__Z6gcyclev"] = function() {
  return (__Z6gcyclev = Module["__Z6gcyclev"] = Module["asm"]["_Z6gcyclev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11Uint32Arrayj = Module["__Z11Uint32Arrayj"] = function() {
  return (__Z11Uint32Arrayj = Module["__Z11Uint32Arrayj"] = Module["asm"]["_Z11Uint32Arrayj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11Uint16Arrayj = Module["__Z11Uint16Arrayj"] = function() {
  return (__Z11Uint16Arrayj = Module["__Z11Uint16Arrayj"] = Module["asm"]["_Z11Uint16Arrayj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10Uint8Arrayj = Module["__Z10Uint8Arrayj"] = function() {
  return (__Z10Uint8Arrayj = Module["__Z10Uint8Arrayj"] = Module["asm"]["_Z10Uint8Arrayj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9boolArrayt = Module["__Z9boolArrayt"] = function() {
  return (__Z9boolArrayt = Module["__Z9boolArrayt"] = Module["asm"]["_Z9boolArrayt"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7empNamej = Module["__Z7empNamej"] = function() {
  return (__Z7empNamej = Module["__Z7empNamej"] = Module["asm"]["_Z7empNamej"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z5empXYv = Module["__Z5empXYv"] = function() {
  return (__Z5empXYv = Module["__Z5empXYv"] = Module["asm"]["_Z5empXYv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z5knValjjj = Module["__Z5knValjjj"] = function() {
  return (__Z5knValjjj = Module["__Z5knValjjj"] = Module["asm"]["_Z5knValjjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7knAIValjj = Module["__Z7knAIValjj"] = function() {
  return (__Z7knAIValjj = Module["__Z7knAIValjj"] = Module["asm"]["_Z7knAIValjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6equalkj = Module["__Z6equalkj"] = function() {
  return (__Z6equalkj = Module["__Z6equalkj"] = Module["asm"]["_Z6equalkj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12EDchangeTeamjj = Module["__Z12EDchangeTeamjj"] = function() {
  return (__Z12EDchangeTeamjj = Module["__Z12EDchangeTeamjj"] = Module["asm"]["_Z12EDchangeTeamjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12EDchangeNamej = Module["__Z12EDchangeNamej"] = function() {
  return (__Z12EDchangeNamej = Module["__Z12EDchangeNamej"] = Module["asm"]["_Z12EDchangeNamej"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11EDchangeResjjj = Module["__Z11EDchangeResjjj"] = function() {
  return (__Z11EDchangeResjjj = Module["__Z11EDchangeResjjj"] = Module["asm"]["_Z11EDchangeResjjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6chTeamji = Module["__Z6chTeamji"] = function() {
  return (__Z6chTeamji = Module["__Z6chTeamji"] = Module["asm"]["_Z6chTeamji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10changeRaceji = Module["__Z10changeRaceji"] = function() {
  return (__Z10changeRaceji = Module["__Z10changeRaceji"] = Module["asm"]["_Z10changeRaceji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11changeColorjj = Module["__Z11changeColorjj"] = function() {
  return (__Z11changeColorjj = Module["__Z11changeColorjj"] = Module["asm"]["_Z11changeColorjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13setupOnlTablej = Module["__Z13setupOnlTablej"] = function() {
  return (__Z13setupOnlTablej = Module["__Z13setupOnlTablej"] = Module["asm"]["_Z13setupOnlTablej"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13tempointeraddj = Module["__Z13tempointeraddj"] = function() {
  return (__Z13tempointeraddj = Module["__Z13tempointeraddj"] = Module["asm"]["_Z13tempointeraddj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10setupOnlIDjbb = Module["__Z10setupOnlIDjbb"] = function() {
  return (__Z10setupOnlIDjbb = Module["__Z10setupOnlIDjbb"] = Module["asm"]["_Z10setupOnlIDjbb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10pidkingdomj = Module["__Z10pidkingdomj"] = function() {
  return (__Z10pidkingdomj = Module["__Z10pidkingdomj"] = Module["asm"]["_Z10pidkingdomj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6shwRCRj = Module["__Z6shwRCRj"] = function() {
  return (__Z6shwRCRj = Module["__Z6shwRCRj"] = Module["asm"]["_Z6shwRCRj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7onldataj = Module["__Z7onldataj"] = function() {
  return (__Z7onldataj = Module["__Z7onldataj"] = Module["asm"]["_Z7onldataj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12setupVersionjbb = Module["__Z12setupVersionjbb"] = function() {
  return (__Z12setupVersionjbb = Module["__Z12setupVersionjbb"] = Module["asm"]["_Z12setupVersionjbb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8mnameaddv = Module["__Z8mnameaddv"] = function() {
  return (__Z8mnameaddv = Module["__Z8mnameaddv"] = Module["asm"]["_Z8mnameaddv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8idddaminj = Module["__Z8idddaminj"] = function() {
  return (__Z8idddaminj = Module["__Z8idddaminj"] = Module["asm"]["_Z8idddaminj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9shareNamej = Module["__Z9shareNamej"] = function() {
  return (__Z9shareNamej = Module["__Z9shareNamej"] = Module["asm"]["_Z9shareNamej"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8updtpingjj = Module["__Z8updtpingjj"] = function() {
  return (__Z8updtpingjj = Module["__Z8updtpingjj"] = Module["asm"]["_Z8updtpingjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6sndNfov = Module["__Z6sndNfov"] = function() {
  return (__Z6sndNfov = Module["__Z6sndNfov"] = Module["asm"]["_Z6sndNfov"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7updKngsj = Module["__Z7updKngsj"] = function() {
  return (__Z7updKngsj = Module["__Z7updKngsj"] = Module["asm"]["_Z7updKngsj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6updownji = Module["__Z6updownji"] = function() {
  return (__Z6updownji = Module["__Z6updownji"] = Module["asm"]["_Z6updownji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z14onlineKingdomsv = Module["__Z14onlineKingdomsv"] = function() {
  return (__Z14onlineKingdomsv = Module["__Z14onlineKingdomsv"] = Module["asm"]["_Z14onlineKingdomsv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8userKickj = Module["__Z8userKickj"] = function() {
  return (__Z8userKickj = Module["__Z8userKickj"] = Module["asm"]["_Z8userKickj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6onlADDjjjjb = Module["__Z6onlADDjjjjb"] = function() {
  return (__Z6onlADDjjjjb = Module["__Z6onlADDjjjjb"] = Module["asm"]["_Z6onlADDjjjjb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10nameSharedPjS_j = Module["__Z10nameSharedPjS_j"] = function() {
  return (__Z10nameSharedPjS_j = Module["__Z10nameSharedPjS_j"] = Module["asm"]["_Z10nameSharedPjS_j"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10rstrRNDmapj = Module["__Z10rstrRNDmapj"] = function() {
  return (__Z10rstrRNDmapj = Module["__Z10rstrRNDmapj"] = Module["asm"]["_Z10rstrRNDmapj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z4nAIsv = Module["__Z4nAIsv"] = function() {
  return (__Z4nAIsv = Module["__Z4nAIsv"] = Module["asm"]["_Z4nAIsv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8onlCountv = Module["__Z8onlCountv"] = function() {
  return (__Z8onlCountv = Module["__Z8onlCountv"] = Module["asm"]["_Z8onlCountv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9closeRoomv = Module["__Z9closeRoomv"] = function() {
  return (__Z9closeRoomv = Module["__Z9closeRoomv"] = Module["asm"]["_Z9closeRoomv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12deletePlayerjb = Module["__Z12deletePlayerjb"] = function() {
  return (__Z12deletePlayerjb = Module["__Z12deletePlayerjb"] = Module["asm"]["_Z12deletePlayerjb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10tempstraddv = Module["__Z10tempstraddv"] = function() {
  return (__Z10tempstraddv = Module["__Z10tempstraddv"] = Module["asm"]["_Z10tempstraddv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8liveChatjj = Module["__Z8liveChatjj"] = function() {
  return (__Z8liveChatjj = Module["__Z8liveChatjj"] = Module["asm"]["_Z8liveChatjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8gstartedv = Module["__Z8gstartedv"] = function() {
  return (__Z8gstartedv = Module["__Z8gstartedv"] = Module["asm"]["_Z8gstartedv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z14randomKingdomsi = Module["__Z14randomKingdomsi"] = function() {
  return (__Z14randomKingdomsi = Module["__Z14randomKingdomsi"] = Module["asm"]["_Z14randomKingdomsi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6nfolenv = Module["__Z6nfolenv"] = function() {
  return (__Z6nfolenv = Module["__Z6nfolenv"] = Module["asm"]["_Z6nfolenv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9stmenummxi = Module["__Z9stmenummxi"] = function() {
  return (__Z9stmenummxi = Module["__Z9stmenummxi"] = Module["asm"]["_Z9stmenummxi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z16setupTranslationjj = Module["__Z16setupTranslationjj"] = function() {
  return (__Z16setupTranslationjj = Module["__Z16setupTranslationjj"] = Module["asm"]["_Z16setupTranslationjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10checkStockb = Module["__Z10checkStockb"] = function() {
  return (__Z10checkStockb = Module["__Z10checkStockb"] = Module["asm"]["_Z10checkStockb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11movtableADDjjjj = Module["__Z11movtableADDjjjj"] = function() {
  return (__Z11movtableADDjjjj = Module["__Z11movtableADDjjjj"] = Module["asm"]["_Z11movtableADDjjjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6amountv = Module["__Z6amountv"] = function() {
  return (__Z6amountv = Module["__Z6amountv"] = Module["asm"]["_Z6amountv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8mwamounti = Module["__Z8mwamounti"] = function() {
  return (__Z8mwamounti = Module["__Z8mwamounti"] = Module["asm"]["_Z8mwamounti"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6mwiconv = Module["__Z6mwiconv"] = function() {
  return (__Z6mwiconv = Module["__Z6mwiconv"] = Module["asm"]["_Z6mwiconv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8mwSelectj = Module["__Z8mwSelectj"] = function() {
  return (__Z8mwSelectj = Module["__Z8mwSelectj"] = Module["asm"]["_Z8mwSelectj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6mwMorei = Module["__Z6mwMorei"] = function() {
  return (__Z6mwMorei = Module["__Z6mwMorei"] = Module["asm"]["_Z6mwMorei"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11createItemsv = Module["__Z11createItemsv"] = function() {
  return (__Z11createItemsv = Module["__Z11createItemsv"] = Module["asm"]["_Z11createItemsv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10strtradingv = Module["__Z10strtradingv"] = function() {
  return (__Z10strtradingv = Module["__Z10strtradingv"] = Module["asm"]["_Z10strtradingv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13selectoridestb = Module["__Z13selectoridestb"] = function() {
  return (__Z13selectoridestb = Module["__Z13selectoridestb"] = Module["asm"]["_Z13selectoridestb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10tradingsumi = Module["__Z10tradingsumi"] = function() {
  return (__Z10tradingsumi = Module["__Z10tradingsumi"] = Module["asm"]["_Z10tradingsumi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12tradingresumib = Module["__Z12tradingresumib"] = function() {
  return (__Z12tradingresumib = Module["__Z12tradingresumib"] = Module["asm"]["_Z12tradingresumib"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9ginfonamejj = Module["__Z9ginfonamejj"] = function() {
  return (__Z9ginfonamejj = Module["__Z9ginfonamejj"] = Module["asm"]["_Z9ginfonamejj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z17refreshPlayerInfov = Module["__Z17refreshPlayerInfov"] = function() {
  return (__Z17refreshPlayerInfov = Module["__Z17refreshPlayerInfov"] = Module["asm"]["_Z17refreshPlayerInfov"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9RNDobjexpv = Module["__Z9RNDobjexpv"] = function() {
  return (__Z9RNDobjexpv = Module["__Z9RNDobjexpv"] = Module["asm"]["_Z9RNDobjexpv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8prvbuildv = Module["__Z8prvbuildv"] = function() {
  return (__Z8prvbuildv = Module["__Z8prvbuildv"] = Module["asm"]["_Z8prvbuildv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9RNDdeletej = Module["__Z9RNDdeletej"] = function() {
  return (__Z9RNDdeletej = Module["__Z9RNDdeletej"] = Module["asm"]["_Z9RNDdeletej"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10stprndobjsj = Module["__Z10stprndobjsj"] = function() {
  return (__Z10stprndobjsj = Module["__Z10stprndobjsj"] = Module["asm"]["_Z10stprndobjsj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9addRNDobjv = Module["__Z9addRNDobjv"] = function() {
  return (__Z9addRNDobjv = Module["__Z9addRNDobjv"] = Module["asm"]["_Z9addRNDobjv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13updateRNDtypejj = Module["__Z13updateRNDtypejj"] = function() {
  return (__Z13updateRNDtypejj = Module["__Z13updateRNDtypejj"] = Module["asm"]["_Z13updateRNDtypejj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z16updateRNDkingdomjj = Module["__Z16updateRNDkingdomjj"] = function() {
  return (__Z16updateRNDkingdomjj = Module["__Z16updateRNDkingdomjj"] = Module["asm"]["_Z16updateRNDkingdomjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z15updateRNDnumberjj = Module["__Z15updateRNDnumberjj"] = function() {
  return (__Z15updateRNDnumberjj = Module["__Z15updateRNDnumberjj"] = Module["asm"]["_Z15updateRNDnumberjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z16updateRNDeach256jj = Module["__Z16updateRNDeach256jj"] = function() {
  return (__Z16updateRNDeach256jj = Module["__Z16updateRNDeach256jj"] = Module["asm"]["_Z16updateRNDeach256jj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8EDbrush0ib = Module["__Z8EDbrush0ib"] = function() {
  return (__Z8EDbrush0ib = Module["__Z8EDbrush0ib"] = Module["asm"]["_Z8EDbrush0ib"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11EDbrushstopv = Module["__Z11EDbrushstopv"] = function() {
  return (__Z11EDbrushstopv = Module["__Z11EDbrushstopv"] = Module["asm"]["_Z11EDbrushstopv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10EDbrushchsi = Module["__Z10EDbrushchsi"] = function() {
  return (__Z10EDbrushchsi = Module["__Z10EDbrushchsi"] = Module["asm"]["_Z10EDbrushchsi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10EDbrushMrgi = Module["__Z10EDbrushMrgi"] = function() {
  return (__Z10EDbrushMrgi = Module["__Z10EDbrushMrgi"] = Module["asm"]["_Z10EDbrushMrgi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10EDbrushchdi = Module["__Z10EDbrushchdi"] = function() {
  return (__Z10EDbrushchdi = Module["__Z10EDbrushchdi"] = Module["asm"]["_Z10EDbrushchdi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13EDchangeColorjj = Module["__Z13EDchangeColorjj"] = function() {
  return (__Z13EDchangeColorjj = Module["__Z13EDchangeColorjj"] = Module["asm"]["_Z13EDchangeColorjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11showrndobjsv = Module["__Z11showrndobjsv"] = function() {
  return (__Z11showrndobjsv = Module["__Z11showrndobjsv"] = Module["asm"]["_Z11showrndobjsv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9getordersj = Module["__Z9getordersj"] = function() {
  return (__Z9getordersj = Module["__Z9getordersj"] = Module["asm"]["_Z9getordersj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10setupGuidev = Module["__Z10setupGuidev"] = function() {
  return (__Z10setupGuidev = Module["__Z10setupGuidev"] = Module["asm"]["_Z10setupGuidev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10userConfigj = Module["__Z10userConfigj"] = function() {
  return (__Z10userConfigj = Module["__Z10userConfigj"] = Module["asm"]["_Z10userConfigj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6prelddv = Module["__Z6prelddv"] = function() {
  return (__Z6prelddv = Module["__Z6prelddv"] = Module["asm"]["_Z6prelddv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6chterrj = Module["__Z6chterrj"] = function() {
  return (__Z6chterrj = Module["__Z6chterrj"] = Module["asm"]["_Z6chterrj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10getTerrainv = Module["__Z10getTerrainv"] = function() {
  return (__Z10getTerrainv = Module["__Z10getTerrainv"] = Module["asm"]["_Z10getTerrainv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z15unitSearchValidjjj = Module["__Z15unitSearchValidjjj"] = function() {
  return (__Z15unitSearchValidjjj = Module["__Z15unitSearchValidjjj"] = Module["asm"]["_Z15unitSearchValidjjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7plreadyv = Module["__Z7plreadyv"] = function() {
  return (__Z7plreadyv = Module["__Z7plreadyv"] = Module["asm"]["_Z7plreadyv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9setupGamejjjjjjjjjjjjjjjjjjjj = Module["__Z9setupGamejjjjjjjjjjjjjjjjjjjj"] = function() {
  return (__Z9setupGamejjjjjjjjjjjjjjjjjjjj = Module["__Z9setupGamejjjjjjjjjjjjjjjjjjjj"] = Module["asm"]["_Z9setupGamejjjjjjjjjjjjjjjjjjjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z15configRandomMapv = Module["__Z15configRandomMapv"] = function() {
  return (__Z15configRandomMapv = Module["__Z15configRandomMapv"] = Module["asm"]["_Z15configRandomMapv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z5knamej = Module["__Z5knamej"] = function() {
  return (__Z5knamej = Module["__Z5knamej"] = Module["asm"]["_Z5knamej"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z3mykv = Module["__Z3mykv"] = function() {
  return (__Z3mykv = Module["__Z3mykv"] = Module["asm"]["_Z3mykv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z4cmykj = Module["__Z4cmykj"] = function() {
  return (__Z4cmykj = Module["__Z4cmykj"] = Module["asm"]["_Z4cmykj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7EDbuildj = Module["__Z7EDbuildj"] = function() {
  return (__Z7EDbuildj = Module["__Z7EDbuildj"] = Module["asm"]["_Z7EDbuildj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z16addEditorKingdomj = Module["__Z16addEditorKingdomj"] = function() {
  return (__Z16addEditorKingdomj = Module["__Z16addEditorKingdomj"] = Module["asm"]["_Z16addEditorKingdomj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z16delEditorKingdomj = Module["__Z16delEditorKingdomj"] = function() {
  return (__Z16delEditorKingdomj = Module["__Z16delEditorKingdomj"] = Module["asm"]["_Z16delEditorKingdomj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13startMovementv = Module["__Z13startMovementv"] = function() {
  return (__Z13startMovementv = Module["__Z13startMovementv"] = Module["asm"]["_Z13startMovementv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10removeAnimjj = Module["__Z10removeAnimjj"] = function() {
  return (__Z10removeAnimjj = Module["__Z10removeAnimjj"] = Module["asm"]["_Z10removeAnimjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6dbgspdj = Module["__Z6dbgspdj"] = function() {
  return (__Z6dbgspdj = Module["__Z6dbgspdj"] = Module["asm"]["_Z6dbgspdj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11synchroHashv = Module["__Z11synchroHashv"] = function() {
  return (__Z11synchroHashv = Module["__Z11synchroHashv"] = Module["asm"]["_Z11synchroHashv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6pause0v = Module["__Z6pause0v"] = function() {
  return (__Z6pause0v = Module["__Z6pause0v"] = Module["asm"]["_Z6pause0v"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7resume0v = Module["__Z7resume0v"] = function() {
  return (__Z7resume0v = Module["__Z7resume0v"] = Module["asm"]["_Z7resume0v"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11kngremainngj = Module["__Z11kngremainngj"] = function() {
  return (__Z11kngremainngj = Module["__Z11kngremainngj"] = Module["asm"]["_Z11kngremainngj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z15delAsyncPointerj = Module["__Z15delAsyncPointerj"] = function() {
  return (__Z15delAsyncPointerj = Module["__Z15delAsyncPointerj"] = Module["asm"]["_Z15delAsyncPointerj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10runnxtcyclv = Module["__Z10runnxtcyclv"] = function() {
  return (__Z10runnxtcyclv = Module["__Z10runnxtcyclv"] = Module["asm"]["_Z10runnxtcyclv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7chtgspdj = Module["__Z7chtgspdj"] = function() {
  return (__Z7chtgspdj = Module["__Z7chtgspdj"] = Module["asm"]["_Z7chtgspdj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7svggamev = Module["__Z7svggamev"] = function() {
  return (__Z7svggamev = Module["__Z7svggamev"] = Module["asm"]["_Z7svggamev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10movtablexev = Module["__Z10movtablexev"] = function() {
  return (__Z10movtablexev = Module["__Z10movtablexev"] = Module["asm"]["_Z10movtablexev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7mouseUpiijjbbbb = Module["__Z7mouseUpiijjbbbb"] = function() {
  return (__Z7mouseUpiijjbbbb = Module["__Z7mouseUpiijjbbbb"] = Module["asm"]["_Z7mouseUpiijjbbbb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9mouseMoveiib = Module["__Z9mouseMoveiib"] = function() {
  return (__Z9mouseMoveiib = Module["__Z9mouseMoveiib"] = Module["asm"]["_Z9mouseMoveiib"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6runKeyjb = Module["__Z6runKeyjb"] = function() {
  return (__Z6runKeyjb = Module["__Z6runKeyjb"] = Module["asm"]["_Z6runKeyjb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12executeOrderjj = Module["__Z12executeOrderjj"] = function() {
  return (__Z12executeOrderjj = Module["__Z12executeOrderjj"] = Module["asm"]["_Z12executeOrderjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7wardgofv = Module["__Z7wardgofv"] = function() {
  return (__Z7wardgofv = Module["__Z7wardgofv"] = Module["asm"]["_Z7wardgofv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z14setupResourcesjjjjt = Module["__Z14setupResourcesjjjjt"] = function() {
  return (__Z14setupResourcesjjjjt = Module["__Z14setupResourcesjjjjt"] = Module["asm"]["_Z14setupResourcesjjjjt"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10searchUnitth = Module["__Z10searchUnitth"] = function() {
  return (__Z10searchUnitth = Module["__Z10searchUnitth"] = Module["asm"]["_Z10searchUnitth"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6sndCnfb = Module["__Z6sndCnfb"] = function() {
  return (__Z6sndCnfb = Module["__Z6sndCnfb"] = Module["asm"]["_Z6sndCnfb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13sharedFloatIDv = Module["__Z13sharedFloatIDv"] = function() {
  return (__Z13sharedFloatIDv = Module["__Z13sharedFloatIDv"] = Module["asm"]["_Z13sharedFloatIDv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13sharedDelayIDv = Module["__Z13sharedDelayIDv"] = function() {
  return (__Z13sharedDelayIDv = Module["__Z13sharedDelayIDv"] = Module["asm"]["_Z13sharedDelayIDv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12bufferMarginfffjf = Module["__Z12bufferMarginfffjf"] = function() {
  return (__Z12bufferMarginfffjf = Module["__Z12bufferMarginfffjf"] = Module["asm"]["_Z12bufferMarginfffjf"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11getBufferIDv = Module["__Z11getBufferIDv"] = function() {
  return (__Z11getBufferIDv = Module["__Z11getBufferIDv"] = Module["asm"]["_Z11getBufferIDv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8shapointv = Module["__Z8shapointv"] = function() {
  return (__Z8shapointv = Module["__Z8shapointv"] = Module["asm"]["_Z8shapointv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z4testjj = Module["__Z4testjj"] = function() {
  return (__Z4testjj = Module["__Z4testjj"] = Module["asm"]["_Z4testjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z5vsbltv = Module["__Z5vsbltv"] = function() {
  return (__Z5vsbltv = Module["__Z5vsbltv"] = Module["asm"]["_Z5vsbltv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9setupOdinj = Module["__Z9setupOdinj"] = function() {
  return (__Z9setupOdinj = Module["__Z9setupOdinj"] = Module["asm"]["_Z9setupOdinj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8nkingdomv = Module["__Z8nkingdomv"] = function() {
  return (__Z8nkingdomv = Module["__Z8nkingdomv"] = Module["asm"]["_Z8nkingdomv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z14customMapTablev = Module["__Z14customMapTablev"] = function() {
  return (__Z14customMapTablev = Module["__Z14customMapTablev"] = Module["asm"]["_Z14customMapTablev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12updresourcesv = Module["__Z12updresourcesv"] = function() {
  return (__Z12updresourcesv = Module["__Z12updresourcesv"] = Module["asm"]["_Z12updresourcesv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z16EDgetTerrainInfov = Module["__Z16EDgetTerrainInfov"] = function() {
  return (__Z16EDgetTerrainInfov = Module["__Z16EDgetTerrainInfov"] = Module["asm"]["_Z16EDgetTerrainInfov"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13resetGLbufferv = Module["__Z13resetGLbufferv"] = function() {
  return (__Z13resetGLbufferv = Module["__Z13resetGLbufferv"] = Module["asm"]["_Z13resetGLbufferv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7adpterrv = Module["__Z7adpterrv"] = function() {
  return (__Z7adpterrv = Module["__Z7adpterrv"] = Module["asm"]["_Z7adpterrv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13configTerrainb = Module["__Z13configTerrainb"] = function() {
  return (__Z13configTerrainb = Module["__Z13configTerrainb"] = Module["asm"]["_Z13configTerrainb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9chmapsizei = Module["__Z9chmapsizei"] = function() {
  return (__Z9chmapsizei = Module["__Z9chmapsizei"] = Module["asm"]["_Z9chmapsizei"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13randomTerrainj = Module["__Z13randomTerrainj"] = function() {
  return (__Z13randomTerrainj = Module["__Z13randomTerrainj"] = Module["asm"]["_Z13randomTerrainj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6trraddv = Module["__Z6trraddv"] = function() {
  return (__Z6trraddv = Module["__Z6trraddv"] = Module["asm"]["_Z6trraddv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z5test3jj = Module["__Z5test3jj"] = function() {
  return (__Z5test3jj = Module["__Z5test3jj"] = Module["asm"]["_Z5test3jj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7setupGLfjj = Module["__Z7setupGLfjj"] = function() {
  return (__Z7setupGLfjj = Module["__Z7setupGLfjj"] = Module["asm"]["_Z7setupGLfjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z15getColorTexturev = Module["__Z15getColorTexturev"] = function() {
  return (__Z15getColorTexturev = Module["__Z15getColorTexturev"] = Module["asm"]["_Z15getColorTexturev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10changePagei = Module["__Z10changePagei"] = function() {
  return (__Z10changePagei = Module["__Z10changePagei"] = Module["asm"]["_Z10changePagei"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7getPagev = Module["__Z7getPagev"] = function() {
  return (__Z7getPagev = Module["__Z7getPagev"] = Module["asm"]["_Z7getPagev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9menustatej = Module["__Z9menustatej"] = function() {
  return (__Z9menustatej = Module["__Z9menustatej"] = Module["asm"]["_Z9menustatej"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7svpropsiiiiiii = Module["__Z7svpropsiiiiiii"] = function() {
  return (__Z7svpropsiiiiiii = Module["__Z7svpropsiiiiiii"] = Module["asm"]["_Z7svpropsiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9mouseDowniij = Module["__Z9mouseDowniij"] = function() {
  return (__Z9mouseDowniij = Module["__Z9mouseDowniij"] = Module["asm"]["_Z9mouseDowniij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10touchStartjj = Module["__Z10touchStartjj"] = function() {
  return (__Z10touchStartjj = Module["__Z10touchStartjj"] = Module["asm"]["_Z10touchStartjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9touchMovejj = Module["__Z9touchMovejj"] = function() {
  return (__Z9touchMovejj = Module["__Z9touchMovejj"] = Module["asm"]["_Z9touchMovejj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8touchEndjj = Module["__Z8touchEndjj"] = function() {
  return (__Z8touchEndjj = Module["__Z8touchEndjj"] = Module["asm"]["_Z8touchEndjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8mouseOutj = Module["__Z8mouseOutj"] = function() {
  return (__Z8mouseOutj = Module["__Z8mouseOutj"] = Module["asm"]["_Z8mouseOutj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10mouseEnterj = Module["__Z10mouseEnterj"] = function() {
  return (__Z10mouseEnterj = Module["__Z10mouseEnterj"] = Module["asm"]["_Z10mouseEnterj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9peacetimev = Module["__Z9peacetimev"] = function() {
  return (__Z9peacetimev = Module["__Z9peacetimev"] = Module["asm"]["_Z9peacetimev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6rndResv = Module["__Z6rndResv"] = function() {
  return (__Z6rndResv = Module["__Z6rndResv"] = Module["asm"]["_Z6rndResv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z9rndforestv = Module["__Z9rndforestv"] = function() {
  return (__Z9rndforestv = Module["__Z9rndforestv"] = Module["asm"]["_Z9rndforestv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12plymapeditorv = Module["__Z12plymapeditorv"] = function() {
  return (__Z12plymapeditorv = Module["__Z12plymapeditorv"] = Module["asm"]["_Z12plymapeditorv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z5test2jjj = Module["__Z5test2jjj"] = function() {
  return (__Z5test2jjj = Module["__Z5test2jjj"] = Module["asm"]["_Z5test2jjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8savegamev = Module["__Z8savegamev"] = function() {
  return (__Z8savegamev = Module["__Z8savegamev"] = Module["asm"]["_Z8savegamev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7nh19addj = Module["__Z7nh19addj"] = function() {
  return (__Z7nh19addj = Module["__Z7nh19addj"] = Module["asm"]["_Z7nh19addj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6nhcompv = Module["__Z6nhcompv"] = function() {
  return (__Z6nhcompv = Module["__Z6nhcompv"] = Module["asm"]["_Z6nhcompv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7delTexsv = Module["__Z7delTexsv"] = function() {
  return (__Z7delTexsv = Module["__Z7delTexsv"] = Module["asm"]["_Z7delTexsv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11sstextStartj = Module["__Z11sstextStartj"] = function() {
  return (__Z11sstextStartj = Module["__Z11sstextStartj"] = Module["asm"]["_Z11sstextStartj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6naddssj = Module["__Z6naddssj"] = function() {
  return (__Z6naddssj = Module["__Z6naddssj"] = Module["asm"]["_Z6naddssj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7n2addssj = Module["__Z7n2addssj"] = function() {
  return (__Z7n2addssj = Module["__Z7n2addssj"] = Module["asm"]["_Z7n2addssj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7ss1textiiiiiiiiijb = Module["__Z7ss1textiiiiiiiiijb"] = function() {
  return (__Z7ss1textiiiiiiiiijb = Module["__Z7ss1textiiiiiiiiijb"] = Module["asm"]["_Z7ss1textiiiiiiiiijb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7readSUPP18emscripten_fetch_t = Module["__Z7readSUPP18emscripten_fetch_t"] = function() {
  return (__Z7readSUPP18emscripten_fetch_t = Module["__Z7readSUPP18emscripten_fetch_t"] = Module["asm"]["_Z7readSUPP18emscripten_fetch_t"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11downloadGrabjj = Module["__Z11downloadGrabjj"] = function() {
  return (__Z11downloadGrabjj = Module["__Z11downloadGrabjj"] = Module["asm"]["_Z11downloadGrabjj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7txtLoadv = Module["__Z7txtLoadv"] = function() {
  return (__Z7txtLoadv = Module["__Z7txtLoadv"] = Module["asm"]["_Z7txtLoadv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z11setupEditorv = Module["__Z11setupEditorv"] = function() {
  return (__Z11setupEditorv = Module["__Z11setupEditorv"] = Module["asm"]["_Z11setupEditorv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8wtrcheckv = Module["__Z8wtrcheckv"] = function() {
  return (__Z8wtrcheckv = Module["__Z8wtrcheckv"] = Module["asm"]["_Z8wtrcheckv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8preSetupj = Module["__Z8preSetupj"] = function() {
  return (__Z8preSetupj = Module["__Z8preSetupj"] = Module["asm"]["_Z8preSetupj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z10fullRNDmapb = Module["__Z10fullRNDmapb"] = function() {
  return (__Z10fullRNDmapb = Module["__Z10fullRNDmapb"] = Module["asm"]["_Z10fullRNDmapb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z14editorKingdomsv = Module["__Z14editorKingdomsv"] = function() {
  return (__Z14editorKingdomsv = Module["__Z14editorKingdomsv"] = Module["asm"]["_Z14editorKingdomsv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z4krgbj = Module["__Z4krgbj"] = function() {
  return (__Z4krgbj = Module["__Z4krgbj"] = Module["asm"]["_Z4krgbj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7crtStxtv = Module["__Z7crtStxtv"] = function() {
  return (__Z7crtStxtv = Module["__Z7crtStxtv"] = Module["asm"]["_Z7crtStxtv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8superLenv = Module["__Z8superLenv"] = function() {
  return (__Z8superLenv = Module["__Z8superLenv"] = Module["asm"]["_Z8superLenv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z5nhlenv = Module["__Z5nhlenv"] = function() {
  return (__Z5nhlenv = Module["__Z5nhlenv"] = Module["asm"]["_Z5nhlenv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z14finishSavegamev = Module["__Z14finishSavegamev"] = function() {
  return (__Z14finishSavegamev = Module["__Z14finishSavegamev"] = Module["asm"]["_Z14finishSavegamev"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z8mapWidthv = Module["__Z8mapWidthv"] = function() {
  return (__Z8mapWidthv = Module["__Z8mapWidthv"] = Module["asm"]["_Z8mapWidthv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13mapVisibilityv = Module["__Z13mapVisibilityv"] = function() {
  return (__Z13mapVisibilityv = Module["__Z13mapVisibilityv"] = Module["asm"]["_Z13mapVisibilityv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z12chvisibilityj = Module["__Z12chvisibilityj"] = function() {
  return (__Z12chvisibilityj = Module["__Z12chvisibilityj"] = Module["asm"]["_Z12chvisibilityj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z13readSavegame0j = Module["__Z13readSavegame0j"] = function() {
  return (__Z13readSavegame0j = Module["__Z13readSavegame0j"] = Module["asm"]["_Z13readSavegame0j"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z6strOnlv = Module["__Z6strOnlv"] = function() {
  return (__Z6strOnlv = Module["__Z6strOnlv"] = Module["asm"]["_Z6strOnlv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z7readSVGmmj = Module["__Z7readSVGmmj"] = function() {
  return (__Z7readSVGmmj = Module["__Z7readSVGmmj"] = Module["asm"]["_Z7readSVGmmj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z15playerReconnectj = Module["__Z15playerReconnectj"] = function() {
  return (__Z15playerReconnectj = Module["__Z15playerReconnectj"] = Module["asm"]["_Z15playerReconnectj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __Z4pongv = Module["__Z4pongv"] = function() {
  return (__Z4pongv = Module["__Z4pongv"] = Module["asm"]["_Z4pongv"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _main = Module["_main"] = function() {
  return (_main = Module["_main"] = Module["asm"]["main"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = function() {
  return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = Module["_free"] = function() {
  return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = function() {
  return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = function() {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = function() {
  return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = function() {
  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiiii = Module["dynCall_jiiii"] = function() {
  return (dynCall_jiiii = Module["dynCall_jiiii"] = Module["asm"]["dynCall_jiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};





// === Auto-generated postamble setup entry stuff ===











































































































































































var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;


dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function callMain(args) {

  var entryFunction = Module['_main'];


  var argc = 0;
  var argv = 0;

  try {


    var ret = entryFunction(argc, argv);


    // In PROXY_TO_PTHREAD builds, we should never exit the runtime below, as execution is asynchronously handed
    // off to a pthread.
    // if we're not running an evented main loop, it's time to exit
      exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'unwind') {
      // running an evented main loop, don't immediately exit
      noExitRuntime = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      err('exception thrown: ' + toLog);
      quit_(1, e);
    }
  } finally {
    calledMain = true;

  }
}




/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }


  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (shouldRunNow) callMain(args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;


/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;

if (Module['noInitialRun']) shouldRunNow = false;


  noExitRuntime = true;

run();






// {{MODULE_ADDITIONS}}



