function GROWABLE_HEAP_I8() {
 if (wasmMemory.buffer != buffer) {
  updateGlobalBufferAndViews(wasmMemory.buffer);
 }
 return HEAP8;
}

function GROWABLE_HEAP_U8() {
 if (wasmMemory.buffer != buffer) {
  updateGlobalBufferAndViews(wasmMemory.buffer);
 }
 return HEAPU8;
}

function GROWABLE_HEAP_I16() {
 if (wasmMemory.buffer != buffer) {
  updateGlobalBufferAndViews(wasmMemory.buffer);
 }
 return HEAP16;
}

function GROWABLE_HEAP_U16() {
 if (wasmMemory.buffer != buffer) {
  updateGlobalBufferAndViews(wasmMemory.buffer);
 }
 return HEAPU16;
}

function GROWABLE_HEAP_I32() {
 if (wasmMemory.buffer != buffer) {
  updateGlobalBufferAndViews(wasmMemory.buffer);
 }
 return HEAP32;
}

function GROWABLE_HEAP_U32() {
 if (wasmMemory.buffer != buffer) {
  updateGlobalBufferAndViews(wasmMemory.buffer);
 }
 return HEAPU32;
}

function GROWABLE_HEAP_F32() {
 if (wasmMemory.buffer != buffer) {
  updateGlobalBufferAndViews(wasmMemory.buffer);
 }
 return HEAPF32;
}

function GROWABLE_HEAP_F64() {
 if (wasmMemory.buffer != buffer) {
  updateGlobalBufferAndViews(wasmMemory.buffer);
 }
 return HEAPF64;
}

var Module = typeof Module !== "undefined" ? Module : {};

var moduleOverrides = {};

var key;

for (key in Module) {
 if (Module.hasOwnProperty(key)) {
  moduleOverrides[key] = Module[key];
 }
}

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = function(status, toThrow) {
 throw toThrow;
};

var ENVIRONMENT_IS_WEB = false;

var ENVIRONMENT_IS_WORKER = false;

var ENVIRONMENT_IS_NODE = false;

var ENVIRONMENT_IS_SHELL = false;

ENVIRONMENT_IS_WEB = typeof window === "object";

ENVIRONMENT_IS_WORKER = typeof importScripts === "function";

ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";

ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

var ENVIRONMENT_IS_PTHREAD = Module["ENVIRONMENT_IS_PTHREAD"] || false;

if (ENVIRONMENT_IS_PTHREAD) {
 buffer = Module["buffer"];
 DYNAMIC_BASE = Module["DYNAMIC_BASE"];
 DYNAMICTOP_PTR = Module["DYNAMICTOP_PTR"];
}

var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;

if (ENVIRONMENT_IS_WORKER) {
 _scriptDir = self.location.href;
}

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 }
 return scriptDirectory + path;
}

var read_, readAsync, readBinary, setWindowTitle;

if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (scriptDirectory.indexOf("blob:") !== 0) {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
 } else {
  scriptDirectory = "";
 }
 {
  read_ = function shell_read(url) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  };
  if (ENVIRONMENT_IS_WORKER) {
   readBinary = function readBinary(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(xhr.response);
   };
  }
  readAsync = function readAsync(url, onload, onerror) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.responseType = "arraybuffer";
   xhr.onload = function xhr_onload() {
    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
     onload(xhr.response);
     return;
    }
    onerror();
   };
   xhr.onerror = onerror;
   xhr.send(null);
  };
 }
 setWindowTitle = function(title) {
  document.title = title;
 };
} else {}

var out = Module["print"] || console.log.bind(console);

var err = Module["printErr"] || console.warn.bind(console);

for (key in moduleOverrides) {
 if (moduleOverrides.hasOwnProperty(key)) {
  Module[key] = moduleOverrides[key];
 }
}

moduleOverrides = null;

if (Module["arguments"]) arguments_ = Module["arguments"];

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

if (Module["quit"]) quit_ = Module["quit"];

var STACK_ALIGN = 16;

function dynamicAlloc(size) {
 var ret = GROWABLE_HEAP_I32()[DYNAMICTOP_PTR >> 2];
 var end = ret + size + 15 & -16;
 GROWABLE_HEAP_I32()[DYNAMICTOP_PTR >> 2] = end;
 return ret;
}

function alignMemory(size, factor) {
 if (!factor) factor = STACK_ALIGN;
 return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
 switch (type) {
 case "i1":
 case "i8":
  return 1;

 case "i16":
  return 2;

 case "i32":
  return 4;

 case "i64":
  return 8;

 case "float":
  return 4;

 case "double":
  return 8;

 default:
  {
   if (type[type.length - 1] === "*") {
    return 4;
   } else if (type[0] === "i") {
    var bits = Number(type.substr(1));
    assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
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

function convertJsFunctionToWasm(func, sig) {
 if (typeof WebAssembly.Function === "function") {
  var typeNames = {
   "i": "i32",
   "j": "i64",
   "f": "f32",
   "d": "f64"
  };
  var type = {
   parameters: [],
   results: sig[0] == "v" ? [] : [ typeNames[sig[0]] ]
  };
  for (var i = 1; i < sig.length; ++i) {
   type.parameters.push(typeNames[sig[i]]);
  }
  return new WebAssembly.Function(type, func);
 }
 var typeSection = [ 1, 0, 1, 96 ];
 var sigRet = sig.slice(0, 1);
 var sigParam = sig.slice(1);
 var typeCodes = {
  "i": 127,
  "j": 126,
  "f": 125,
  "d": 124
 };
 typeSection.push(sigParam.length);
 for (var i = 0; i < sigParam.length; ++i) {
  typeSection.push(typeCodes[sigParam[i]]);
 }
 if (sigRet == "v") {
  typeSection.push(0);
 } else {
  typeSection = typeSection.concat([ 1, typeCodes[sigRet] ]);
 }
 typeSection[1] = typeSection.length - 2;
 var bytes = new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0 ].concat(typeSection, [ 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0 ]));
 var module = new WebAssembly.Module(bytes);
 var instance = new WebAssembly.Instance(module, {
  "e": {
   "f": func
  }
 });
 var wrappedFunc = instance.exports["f"];
 return wrappedFunc;
}

var freeTableIndexes = [];

var functionsInTableMap;

function addFunctionWasm(func, sig) {
 var table = wasmTable;
 if (!functionsInTableMap) {
  functionsInTableMap = new WeakMap();
  for (var i = 0; i < table.length; i++) {
   var item = table.get(i);
   if (item) {
    functionsInTableMap.set(item, i);
   }
  }
 }
 if (functionsInTableMap.has(func)) {
  return functionsInTableMap.get(func);
 }
 var ret;
 if (freeTableIndexes.length) {
  ret = freeTableIndexes.pop();
 } else {
  ret = table.length;
  try {
   table.grow(1);
  } catch (err) {
   if (!(err instanceof RangeError)) {
    throw err;
   }
   throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
  }
 }
 try {
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

function addFunction(func, sig) {
 return addFunctionWasm(func, sig);
}

function removeFunction(index) {
 removeFunctionWasm(index);
}

var funcWrappers = {};

function getFuncWrapper(func, sig) {
 if (!func) return;
 assert(sig);
 if (!funcWrappers[sig]) {
  funcWrappers[sig] = {};
 }
 var sigCache = funcWrappers[sig];
 if (!sigCache[func]) {
  if (sig.length === 1) {
   sigCache[func] = function dynCall_wrapper() {
    return dynCall(sig, func);
   };
  } else if (sig.length === 2) {
   sigCache[func] = function dynCall_wrapper(arg) {
    return dynCall(sig, func, [ arg ]);
   };
  } else {
   sigCache[func] = function dynCall_wrapper() {
    return dynCall(sig, func, Array.prototype.slice.call(arguments));
   };
  }
 }
 return sigCache[func];
}

function makeBigInt(low, high, unsigned) {
 return unsigned ? +(low >>> 0) + +(high >>> 0) * 4294967296 : +(low >>> 0) + +(high | 0) * 4294967296;
}

function dynCall(sig, ptr, args) {
 if (args && args.length) {
  return Module["dynCall_" + sig].apply(null, [ ptr ].concat(args));
 } else {
  return Module["dynCall_" + sig].call(null, ptr);
 }
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
 tempRet0 = value;
};

var getTempRet0 = function() {
 return tempRet0;
};

var GLOBAL_BASE = 1024;

var Atomics_load = Atomics.load;

var Atomics_store = Atomics.store;

var Atomics_compareExchange = Atomics.compareExchange;

var wasmBinary;

if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];

var noExitRuntime;

if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];

if (typeof WebAssembly !== "object") {
 abort("no native wasm support detected");
}

function setValue(ptr, value, type, noSafe) {
 type = type || "i8";
 if (type.charAt(type.length - 1) === "*") type = "i32";
 switch (type) {
 case "i1":
  GROWABLE_HEAP_I8()[ptr >> 0] = value;
  break;

 case "i8":
  GROWABLE_HEAP_I8()[ptr >> 0] = value;
  break;

 case "i16":
  GROWABLE_HEAP_I16()[ptr >> 1] = value;
  break;

 case "i32":
  GROWABLE_HEAP_I32()[ptr >> 2] = value;
  break;

 case "i64":
  tempI64 = [ value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  GROWABLE_HEAP_I32()[ptr >> 2] = tempI64[0], GROWABLE_HEAP_I32()[ptr + 4 >> 2] = tempI64[1];
  break;

 case "float":
  GROWABLE_HEAP_F32()[ptr >> 2] = value;
  break;

 case "double":
  GROWABLE_HEAP_F64()[ptr >> 3] = value;
  break;

 default:
  abort("invalid type for setValue: " + type);
 }
}

function getValue(ptr, type, noSafe) {
 type = type || "i8";
 if (type.charAt(type.length - 1) === "*") type = "i32";
 switch (type) {
 case "i1":
  return GROWABLE_HEAP_I8()[ptr >> 0];

 case "i8":
  return GROWABLE_HEAP_I8()[ptr >> 0];

 case "i16":
  return GROWABLE_HEAP_I16()[ptr >> 1];

 case "i32":
  return GROWABLE_HEAP_I32()[ptr >> 2];

 case "i64":
  return GROWABLE_HEAP_I32()[ptr >> 2];

 case "float":
  return GROWABLE_HEAP_F32()[ptr >> 2];

 case "double":
  return GROWABLE_HEAP_F64()[ptr >> 3];

 default:
  abort("invalid type for getValue: " + type);
 }
 return null;
}

var wasmMemory;

var wasmTable = new WebAssembly.Table({
 "initial": 429,
 "maximum": 429 + 0,
 "element": "anyfunc"
});

var wasmModule;

var threadInfoStruct = 0;

var selfThreadId = 0;

var ABORT = false;

var EXITSTATUS = 0;

function assert(condition, text) {
 if (!condition) {
  abort("Assertion failed: " + text);
 }
}

function getCFunc(ident) {
 var func = Module["_" + ident];
 assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
 return func;
}

function ccall(ident, returnType, argTypes, args, opts) {
 var toC = {
  "string": function(str) {
   var ret = 0;
   if (str !== null && str !== undefined && str !== 0) {
    var len = (str.length << 2) + 1;
    ret = stackAlloc(len);
    stringToUTF8(str, ret, len);
   }
   return ret;
  },
  "array": function(arr) {
   var ret = stackAlloc(arr.length);
   writeArrayToMemory(arr, ret);
   return ret;
  }
 };
 function convertReturnValue(ret) {
  if (returnType === "string") return UTF8ToString(ret);
  if (returnType === "boolean") return Boolean(ret);
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

function cwrap(ident, returnType, argTypes, opts) {
 argTypes = argTypes || [];
 var numericArgs = argTypes.every(function(type) {
  return type === "number";
 });
 var numericRet = returnType !== "string";
 if (numericRet && numericArgs && !opts) {
  return getCFunc(ident);
 }
 return function() {
  return ccall(ident, returnType, argTypes, arguments, opts);
 };
}

var ALLOC_NORMAL = 0;

var ALLOC_STACK = 1;

var ALLOC_DYNAMIC = 2;

var ALLOC_NONE = 3;

function allocate(slab, types, allocator, ptr) {
 var zeroinit, size;
 if (typeof slab === "number") {
  zeroinit = true;
  size = slab;
 } else {
  zeroinit = false;
  size = slab.length;
 }
 var singleType = typeof types === "string" ? types : null;
 var ret;
 if (allocator == ALLOC_NONE) {
  ret = ptr;
 } else {
  ret = [ _malloc, stackAlloc, dynamicAlloc ][allocator](Math.max(size, singleType ? 1 : types.length));
 }
 if (zeroinit) {
  var stop;
  ptr = ret;
  assert((ret & 3) == 0);
  stop = ret + (size & ~3);
  for (;ptr < stop; ptr += 4) {
   GROWABLE_HEAP_I32()[ptr >> 2] = 0;
  }
  stop = ret + size;
  while (ptr < stop) {
   GROWABLE_HEAP_I8()[ptr++ >> 0] = 0;
  }
  return ret;
 }
 if (singleType === "i8") {
  if (slab.subarray || slab.slice) {
   GROWABLE_HEAP_U8().set(slab, ret);
  } else {
   GROWABLE_HEAP_U8().set(new Uint8Array(slab), ret);
  }
  return ret;
 }
 var i = 0, type, typeSize, previousType;
 while (i < size) {
  var curr = slab[i];
  type = singleType || types[i];
  if (type === 0) {
   i++;
   continue;
  }
  if (type == "i64") type = "i32";
  setValue(ret + i, curr, type);
  if (previousType !== type) {
   typeSize = getNativeTypeSize(type);
   previousType = type;
  }
  i += typeSize;
 }
 return ret;
}

function getMemory(size) {
 if (!runtimeInitialized) return dynamicAlloc(size);
 return _malloc(size);
}

function UTF8ArrayToString(heap, idx, maxBytesToRead) {
 idx >>>= 0;
 var endIdx = idx + maxBytesToRead;
 var str = "";
 while (!(idx >= endIdx)) {
  var u0 = heap[idx++ >>> 0];
  if (!u0) return str;
  if (!(u0 & 128)) {
   str += String.fromCharCode(u0);
   continue;
  }
  var u1 = heap[idx++ >>> 0] & 63;
  if ((u0 & 224) == 192) {
   str += String.fromCharCode((u0 & 31) << 6 | u1);
   continue;
  }
  var u2 = heap[idx++ >>> 0] & 63;
  if ((u0 & 240) == 224) {
   u0 = (u0 & 15) << 12 | u1 << 6 | u2;
  } else {
   u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++ >>> 0] & 63;
  }
  if (u0 < 65536) {
   str += String.fromCharCode(u0);
  } else {
   var ch = u0 - 65536;
   str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
  }
 }
 return str;
}

function UTF8ToString(ptr, maxBytesToRead) {
 ptr >>>= 0;
 return ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : "";
}

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
 outIdx >>>= 0;
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | u1 & 1023;
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   heap[outIdx++ >>> 0] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   heap[outIdx++ >>> 0] = 192 | u >> 6;
   heap[outIdx++ >>> 0] = 128 | u & 63;
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   heap[outIdx++ >>> 0] = 224 | u >> 12;
   heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
   heap[outIdx++ >>> 0] = 128 | u & 63;
  } else {
   if (outIdx + 3 >= endIdx) break;
   heap[outIdx++ >>> 0] = 240 | u >> 18;
   heap[outIdx++ >>> 0] = 128 | u >> 12 & 63;
   heap[outIdx++ >>> 0] = 128 | u >> 6 & 63;
   heap[outIdx++ >>> 0] = 128 | u & 63;
  }
 }
 heap[outIdx >>> 0] = 0;
 return outIdx - startIdx;
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
 return stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite);
}

function lengthBytesUTF8(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
  if (u <= 127) ++len; else if (u <= 2047) len += 2; else if (u <= 65535) len += 3; else len += 4;
 }
 return len;
}

function AsciiToString(ptr) {
 ptr >>>= 0;
 var str = "";
 while (1) {
  var ch = GROWABLE_HEAP_U8()[ptr++ >> 0];
  if (!ch) return str;
  str += String.fromCharCode(ch);
 }
}

function stringToAscii(str, outPtr) {
 return writeAsciiToMemory(str, outPtr, false);
}

function UTF16ToString(ptr, maxBytesToRead) {
 var i = 0;
 var str = "";
 while (1) {
  var codeUnit = GROWABLE_HEAP_I16()[ptr + i * 2 >> 1];
  if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
  ++i;
  str += String.fromCharCode(codeUnit);
 }
}

function stringToUTF16(str, outPtr, maxBytesToWrite) {
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 2) return 0;
 maxBytesToWrite -= 2;
 var startPtr = outPtr;
 var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
 for (var i = 0; i < numCharsToWrite; ++i) {
  var codeUnit = str.charCodeAt(i);
  GROWABLE_HEAP_I16()[outPtr >> 1] = codeUnit;
  outPtr += 2;
 }
 GROWABLE_HEAP_I16()[outPtr >> 1] = 0;
 return outPtr - startPtr;
}

function lengthBytesUTF16(str) {
 return str.length * 2;
}

function UTF32ToString(ptr, maxBytesToRead) {
 var i = 0;
 var str = "";
 while (!(i >= maxBytesToRead / 4)) {
  var utf32 = GROWABLE_HEAP_I32()[ptr + i * 4 >> 2];
  if (utf32 == 0) break;
  ++i;
  if (utf32 >= 65536) {
   var ch = utf32 - 65536;
   str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
  } else {
   str += String.fromCharCode(utf32);
  }
 }
 return str;
}

function stringToUTF32(str, outPtr, maxBytesToWrite) {
 outPtr >>>= 0;
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 4) return 0;
 var startPtr = outPtr;
 var endPtr = startPtr + maxBytesToWrite - 4;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) {
   var trailSurrogate = str.charCodeAt(++i);
   codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
  }
  GROWABLE_HEAP_I32()[outPtr >> 2] = codeUnit;
  outPtr += 4;
  if (outPtr + 4 > endPtr) break;
 }
 GROWABLE_HEAP_I32()[outPtr >> 2] = 0;
 return outPtr - startPtr;
}

function lengthBytesUTF32(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
  len += 4;
 }
 return len;
}

function allocateUTF8(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = _malloc(size);
 if (ret) stringToUTF8Array(str, GROWABLE_HEAP_I8(), ret, size);
 return ret;
}

function allocateUTF8OnStack(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = stackAlloc(size);
 stringToUTF8Array(str, GROWABLE_HEAP_I8(), ret, size);
 return ret;
}

function writeStringToMemory(string, buffer, dontAddNull) {
 warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");
 var lastChar, end;
 if (dontAddNull) {
  end = buffer + lengthBytesUTF8(string);
  lastChar = GROWABLE_HEAP_I8()[end];
 }
 stringToUTF8(string, buffer, Infinity);
 if (dontAddNull) GROWABLE_HEAP_I8()[end] = lastChar;
}

function writeArrayToMemory(array, buffer) {
 GROWABLE_HEAP_I8().set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
 for (var i = 0; i < str.length; ++i) {
  GROWABLE_HEAP_I8()[buffer++ >> 0] = str.charCodeAt(i);
 }
 if (!dontAddNull) GROWABLE_HEAP_I8()[buffer >> 0] = 0;
}

var PAGE_SIZE = 16384;

var WASM_PAGE_SIZE = 65536;

var ASMJS_PAGE_SIZE = 16777216;

function alignUp(x, multiple) {
 if (x % multiple > 0) {
  x += multiple - x % multiple;
 }
 return x;
}

var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBufferAndViews(buf) {
 buffer = buf;
 Module["HEAP8"] = HEAP8 = new Int8Array(buf);
 Module["HEAP16"] = HEAP16 = new Int16Array(buf);
 Module["HEAP32"] = HEAP32 = new Int32Array(buf);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
}

var STATIC_BASE = 1024, STACK_BASE = 9490864, STACKTOP = STACK_BASE, STACK_MAX = 4247984, DYNAMIC_BASE = 9490864, DYNAMICTOP_PTR = 4247040;

if (ENVIRONMENT_IS_PTHREAD) {}

var TOTAL_STACK = 5242880;

var INITIAL_INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 57671680;

if (ENVIRONMENT_IS_PTHREAD) {
 wasmMemory = Module["wasmMemory"];
 buffer = Module["buffer"];
} else {
 if (Module["wasmMemory"]) {
  wasmMemory = Module["wasmMemory"];
 } else {
  wasmMemory = new WebAssembly.Memory({
   "initial": INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE,
   "maximum": 4294967296 / WASM_PAGE_SIZE,
   "shared": true
  });
  if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
   err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
   if (ENVIRONMENT_IS_NODE) {
    console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)");
   }
   throw Error("bad memory");
  }
 }
}

if (wasmMemory) {
 buffer = wasmMemory.buffer;
}

INITIAL_INITIAL_MEMORY = buffer.byteLength;

updateGlobalBufferAndViews(buffer);

if (!ENVIRONMENT_IS_PTHREAD) {
 GROWABLE_HEAP_I32()[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
}

function callRuntimeCallbacks(callbacks) {
 while (callbacks.length > 0) {
  var callback = callbacks.shift();
  if (typeof callback == "function") {
   callback(Module);
   continue;
  }
  var func = callback.func;
  if (typeof func === "number") {
   if (callback.arg === undefined) {
    Module["dynCall_v"](func);
   } else {
    Module["dynCall_vi"](func, callback.arg);
   }
  } else {
   func(callback.arg === undefined ? null : callback.arg);
  }
 }
}

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATMAIN__ = [];

var __ATEXIT__ = [];

var __ATPOSTRUN__ = [];

var runtimeInitialized = false;

var runtimeExited = false;

if (ENVIRONMENT_IS_PTHREAD) runtimeInitialized = true;

function preRun() {
 if (ENVIRONMENT_IS_PTHREAD) return;
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
 runtimeInitialized = true;
 callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
 if (ENVIRONMENT_IS_PTHREAD) return;
 callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
 if (ENVIRONMENT_IS_PTHREAD) return;
 runtimeExited = true;
}

function postRun() {
 if (ENVIRONMENT_IS_PTHREAD) return;
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
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

function addOnExit(cb) {}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

function unSign(value, bits, ignore) {
 if (value >= 0) {
  return value;
 }
 return bits <= 32 ? 2 * Math.abs(1 << bits - 1) + value : Math.pow(2, bits) + value;
}

function reSign(value, bits, ignore) {
 if (value <= 0) {
  return value;
 }
 var half = bits <= 32 ? Math.abs(1 << bits - 1) : Math.pow(2, bits - 1);
 if (value >= half && (bits <= 32 || value > half)) {
  value = -2 * half + value;
 }
 return value;
}

var Math_abs = Math.abs;

var Math_cos = Math.cos;

var Math_sin = Math.sin;

var Math_tan = Math.tan;

var Math_acos = Math.acos;

var Math_asin = Math.asin;

var Math_atan = Math.atan;

var Math_atan2 = Math.atan2;

var Math_exp = Math.exp;

var Math_log = Math.log;

var Math_sqrt = Math.sqrt;

var Math_ceil = Math.ceil;

var Math_floor = Math.floor;

var Math_pow = Math.pow;

var Math_imul = Math.imul;

var Math_fround = Math.fround;

var Math_round = Math.round;

var Math_min = Math.min;

var Math_max = Math.max;

var Math_clz32 = Math.clz32;

var Math_trunc = Math.trunc;

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

function getUniqueRunDependency(id) {
 return id;
}

function addRunDependency(id) {
 assert(!ENVIRONMENT_IS_PTHREAD, "addRunDependency cannot be used in a pthread worker");
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
}

function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

Module["preloadedImages"] = {};

Module["preloadedAudios"] = {};

function abort(what) {
 if (Module["onAbort"]) {
  Module["onAbort"](what);
 }
 if (ENVIRONMENT_IS_PTHREAD) console.error("Pthread aborting at " + new Error().stack);
 what += "";
 err(what);
 ABORT = true;
 EXITSTATUS = 1;
 what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
 var e = new WebAssembly.RuntimeError(what);
 throw e;
}

var memoryInitializer = null;

function hasPrefix(str, prefix) {
 return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
}

var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
 return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

function isFileURI(filename) {
 return hasPrefix(filename, fileURIPrefix);
}

var wasmBinaryFile = "w2.wasm";

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
 } catch (err) {
  abort(err);
 }
}

function getBinaryPromise() {
 if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
  return fetch(wasmBinaryFile, {
   credentials: "same-origin"
  }).then(function(response) {
   if (!response["ok"]) {
    throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
   }
   return response["arrayBuffer"]();
  }).catch(function() {
   return getBinary();
  });
 }
 return new Promise(function(resolve, reject) {
  resolve(getBinary());
 });
}

function createWasm() {
 var info = {
  "env": asmLibraryArg,
  "wasi_snapshot_preview1": asmLibraryArg
 };
 function receiveInstance(instance, module) {
  var exports = instance.exports;
  Module["asm"] = exports;
  wasmModule = module;
  if (!ENVIRONMENT_IS_PTHREAD) {
   var numWorkersToLoad = PThread.unusedWorkers.length;
   PThread.unusedWorkers.forEach(function(w) {
    PThread.loadWasmModuleToWorker(w, function() {
     if (!--numWorkersToLoad) removeRunDependency("wasm-instantiate");
    });
   });
  }
 }
 if (!ENVIRONMENT_IS_PTHREAD) {
  addRunDependency("wasm-instantiate");
 }
 function receiveInstantiatedSource(output) {
  receiveInstance(output["instance"], output["module"]);
 }
 function instantiateArrayBuffer(receiver) {
  return getBinaryPromise().then(function(binary) {
   return WebAssembly.instantiate(binary, info);
  }).then(receiver, function(reason) {
   err("failed to asynchronously prepare wasm: " + reason);
   abort(reason);
  });
 }
 function instantiateAsync() {
  if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
   fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    var result = WebAssembly.instantiateStreaming(response, info);
    return result.then(receiveInstantiatedSource, function(reason) {
     err("wasm streaming compile failed: " + reason);
     err("falling back to ArrayBuffer instantiation");
     return instantiateArrayBuffer(receiveInstantiatedSource);
    });
   });
  } else {
   return instantiateArrayBuffer(receiveInstantiatedSource);
  }
 }
 if (Module["instantiateWasm"]) {
  try {
   var exports = Module["instantiateWasm"](info, receiveInstance);
   return exports;
  } catch (e) {
   err("Module.instantiateWasm callback failed with error: " + e);
   return false;
  }
 }
 instantiateAsync();
 return {};
}

var tempDouble;

var tempI64;

var ASM_CONSTS = {
 1024: function($0, $1, $2, $3) {
  spAlert2($0, $1, $2, $3);
 },
 1051: function($0, $1) {
  scrSetup($0, $1);
 },
 1072: function() {
  clearleftar();
 },
 1087: function($0, $1) {
  cursor($0, $1);
 },
 1110: function($0, $1, $2) {
  cnsoSPmsg($0, $1, $2);
 },
 1139: function($0, $1, $2) {
  peerSend($0, $1, $2);
 },
 1165: function() {
  rlyCheck();
 },
 1176: function($0, $1) {
  console.log("ss", $0, $1);
 },
 1200: function($0) {
  checkAlive($0);
 },
 1215: function($0, $1) {
  rcrconsole($0, $1);
 },
 1236: function($0, $1, $2) {
  NHretransmit($0, $1, $2);
 },
 1259: function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
  onlineTable($0, $1, $2, $3, $4, $5, $6, $7, $8);
 },
 1314: function($0) {
  thereIsAnIdiot($0);
 },
 1333: function() {
  SetupGameConfig();
 },
 1353: function($0, $1, $2, $3, $4, $5) {
  onlineTable($0, $1, $2, $3, $4, $5);
 },
 1396: function() {
  mapWindow();
 },
 1408: function() {
  setupPlayermenu();
 },
 1426: function($0, $1, $2) {
  peerSend($0, $1, $2);
 },
 1450: function($0, $1, $2, $3) {
  chat($0, 0, $1, $2, $3);
 },
 1477: function($0) {
  presetuprndtable($0);
 },
 1498: function($0, $1, $2, $3, $4) {
  randomMapTable($0, $1, $2, $3, $4);
 },
 1540: function($0) {
  play($0);
 },
 1551: function($0, $1, $2) {
  play($0, $1, $2);
 },
 1626: function() {
  menuDefect();
 },
 1640: function($0, $1) {
  dmgAlert($0, $1);
 },
 1658: function() {
  setupMWmenu();
 },
 1677: function($0, $1, $2, $3, $4, $5) {
  setupTradingmenu($0, $1, $2, $3, $4, $5);
 },
 1722: function() {
  cleanMenuIcons();
 },
 1739: function() {
  setupColorGL();
 },
 1756: function($0, $1, $2, $3, $4, $5) {
  addRNDOBJ($0, $1, $2, $3, $4, $5);
 },
 1794: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) {
  insertInfo($0, $1, $2, $3, $4, 0, $5, $6, $7, $8, $9, $10, $11, $12);
 },
 1868: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) {
  insertInfo($0, $1, $2, $3, $4, 1, $5, $6, $7, $8, $9, $10, $11, $12);
 },
 1953: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) {
  multiOptions($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);
 },
 2030: function() {
  waitlistsetup();
 },
 2048: function() {
  startMovement0();
 },
 2069: function() {
  waitingList();
 },
 2083: function() {
  startGame();
 },
 2097: function() {
  gid("playersinfo").innerHTML = "<span style='width:50px;float:left;font-size:11px;color:#dcaa14;text-decoration:overline;'>Score</span><br>";
 },
 2238: function($0, $1, $2, $3, $4, $5, $6, $7) {
  setupPlayerInfo($0, $1, $2, $3, $4, $5, $6, $7);
 },
 2290: function() {
  editorPlayerTable();
 },
 2313: function() {
  activeKingdomSetup();
  setupColorGL();
 },
 2351: function() {
  editorPlayerTable();
  activeKingdomSetup();
  setupColorGL();
 },
 2640: function($0, $1, $2, $3, $4) {
  buttonSetup($0, $1, $2, $3, $4);
 },
 2800: function($0, $1, $2, $3) {
  setup3Dtexture($0, $1, $2, $3);
 },
 2835: function() {
  startGameStep0.check();
 },
 2858: function() {
  svggme2();
 },
 2868: function($0, $1) {
  chFFg($0, $1);
 },
 2884: function() {
  nhcleanclose();
 },
 2899: function($0) {
  sresizeBuffer($0);
 },
 2922: function($0, $1, $2, $3) {
  bufferPos($0, $1, $2, $3);
 },
 2950: function($0, $1, $2, $3, $4) {
  bufferPhysics($0, $1, $2, $3, $4);
 },
 2986: function($0, $1, $2, $3, $4) {
  bufferMargin($0, $1, $2, $3, $4);
 },
 3015: function($0, $1, $2, $3, $4) {
  bufferIMG($0, $1, $2, $3, $4);
 },
 3047: function($0, $1, $2, $3, $4, $5) {
  customMapTable($0, $1, $2, $3, $4, $5);
 },
 3200: function($0, $1, $2, $3) {
  changeresources($0, $1, $2, $3);
 },
 3234: function($0, $1) {
  popInfo($0, $1);
 },
 3249: function($0, $1) {
  changePlayerScore($0, $1);
 },
 3276: function($0, $1) {
  EDterrainInfo($0, $1);
 },
 3302: function($0, $1) {
  ms("manage", $0, $1);
 },
 3321: function($0, $1) {
  ms("manage22", $0, $1);
 },
 3342: function($0, $1, $2, $3) {
  locationAlert($0, $1, $2, $3);
 },
 3376: function($0) {
  console.log("cycnfo", $0);
 },
 3401: function($0, $1) {
  console.log("checkcycle", $0, $1);
 },
 3436: function() {
  console.log("SENT");
 },
 3456: function($0, $1) {
  console.log("currentCycle", $0, $1);
 },
 3490: function($0) {
  console.log("recv", $0);
 },
 3513: function($0, $1) {
  setupArrows($0, $1);
 },
 3532: function() {
  showGuide();
 },
 3544: function($0, $1) {
  setupArrows($0, $1);
 },
 3568: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) {
  selectionOne0($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
 },
 3664: function($0, $1) {
  showHealthOne($0, $1);
 },
 3688: function() {
  gid("delunit").style.display = "block";
 },
 3725: function($0, $1, $2) {
  selectMulp($0, $1, $2);
 },
 3746: function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
  editProps($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
 },
 3800: function($0, $1, $2, $3, $4, $5, $6, $7) {
  writeProps($0, $1, $2, $3, $4, $5, $6, $7);
 },
 3849: function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
  writeProps($0, $1, $2, $3, $4, $5, $6, $7, $8);
 },
 3924: function() {
  setupGameMusic();
 },
 3988: function($0) {
  showProgress($0);
 },
 4116: function() {
  stpTupdtr();
 },
 4128: function($0, $1) {
  setupGL($0, $1);
 },
 4145: function($0) {
  setupGL(0, $0);
 },
 4161: function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
  setupEditorPlayerTable($0, $1, $2, $3, $4, $5, $6, $7, $8);
 },
 4226: function($0) {
  pong($0);
 },
 4235: function($0) {
  updateMax($0);
 },
 4251: function() {
  moduleLoaded();
 },
 4266: function() {
  playerWon();
 },
 4278: function($0) {
  updateHealth($0);
 },
 4295: function() {
  popAlert(4);
 },
 4307: function($0) {
  popAlert($0);
 },
 4320: function() {
  gameOver();
 },
 63432: function() {
  throw "Canceled!";
 },
 63654: function($0, $1) {
  setTimeout(function() {
   _do_emscripten_dispatch_to_thread($0, $1);
  }, 0);
 }
};

function _emscripten_asm_const_async_on_main_thread_vii(code, sigPtr, argbuf) {
 var args = readAsmConstArgs(sigPtr, argbuf);
 if (ENVIRONMENT_IS_PTHREAD) {
  return _emscripten_proxy_to_main_thread_js.apply(null, [ -1 - code, 0 ].concat(args));
 }
 return ASM_CONSTS[code].apply(null, args);
}

function _emscripten_asm_const_iii(code, sigPtr, argbuf) {
 var args = readAsmConstArgs(sigPtr, argbuf);
 return ASM_CONSTS[code].apply(null, args);
}

function _emscripten_asm_const_sync_on_main_thread_iii(code, sigPtr, argbuf) {
 var args = readAsmConstArgs(sigPtr, argbuf);
 if (ENVIRONMENT_IS_PTHREAD) {
  return _emscripten_proxy_to_main_thread_js.apply(null, [ -1 - code, 1 ].concat(args));
 }
 return ASM_CONSTS[code].apply(null, args);
}

function initPthreadsJS() {
 PThread.initRuntime();
}

if (!ENVIRONMENT_IS_PTHREAD) __ATINIT__.push({
 func: function() {
  ___wasm_call_ctors();
 }
});

function demangle(func) {
 return func;
}

function demangleAll(text) {
 var regex = /\b_Z[\w\d_]+/g;
 return text.replace(regex, function(x) {
  var y = demangle(x);
  return x === y ? x : y + " [" + x + "]";
 });
}

var __pthread_ptr = 0;

var __pthread_is_main_runtime_thread = 0;

var __pthread_is_main_browser_thread = 0;

function registerPthreadPtr(pthreadPtr, isMainBrowserThread, isMainRuntimeThread) {
 pthreadPtr = pthreadPtr | 0;
 isMainBrowserThread = isMainBrowserThread | 0;
 isMainRuntimeThread = isMainRuntimeThread | 0;
 __pthread_ptr = pthreadPtr;
 __pthread_is_main_browser_thread = isMainBrowserThread;
 __pthread_is_main_runtime_thread = isMainRuntimeThread;
}

Module["registerPthreadPtr"] = registerPthreadPtr;

var ERRNO_CODES = {
 EPERM: 63,
 ENOENT: 44,
 ESRCH: 71,
 EINTR: 27,
 EIO: 29,
 ENXIO: 60,
 E2BIG: 1,
 ENOEXEC: 45,
 EBADF: 8,
 ECHILD: 12,
 EAGAIN: 6,
 EWOULDBLOCK: 6,
 ENOMEM: 48,
 EACCES: 2,
 EFAULT: 21,
 ENOTBLK: 105,
 EBUSY: 10,
 EEXIST: 20,
 EXDEV: 75,
 ENODEV: 43,
 ENOTDIR: 54,
 EISDIR: 31,
 EINVAL: 28,
 ENFILE: 41,
 EMFILE: 33,
 ENOTTY: 59,
 ETXTBSY: 74,
 EFBIG: 22,
 ENOSPC: 51,
 ESPIPE: 70,
 EROFS: 69,
 EMLINK: 34,
 EPIPE: 64,
 EDOM: 18,
 ERANGE: 68,
 ENOMSG: 49,
 EIDRM: 24,
 ECHRNG: 106,
 EL2NSYNC: 156,
 EL3HLT: 107,
 EL3RST: 108,
 ELNRNG: 109,
 EUNATCH: 110,
 ENOCSI: 111,
 EL2HLT: 112,
 EDEADLK: 16,
 ENOLCK: 46,
 EBADE: 113,
 EBADR: 114,
 EXFULL: 115,
 ENOANO: 104,
 EBADRQC: 103,
 EBADSLT: 102,
 EDEADLOCK: 16,
 EBFONT: 101,
 ENOSTR: 100,
 ENODATA: 116,
 ETIME: 117,
 ENOSR: 118,
 ENONET: 119,
 ENOPKG: 120,
 EREMOTE: 121,
 ENOLINK: 47,
 EADV: 122,
 ESRMNT: 123,
 ECOMM: 124,
 EPROTO: 65,
 EMULTIHOP: 36,
 EDOTDOT: 125,
 EBADMSG: 9,
 ENOTUNIQ: 126,
 EBADFD: 127,
 EREMCHG: 128,
 ELIBACC: 129,
 ELIBBAD: 130,
 ELIBSCN: 131,
 ELIBMAX: 132,
 ELIBEXEC: 133,
 ENOSYS: 52,
 ENOTEMPTY: 55,
 ENAMETOOLONG: 37,
 ELOOP: 32,
 EOPNOTSUPP: 138,
 EPFNOSUPPORT: 139,
 ECONNRESET: 15,
 ENOBUFS: 42,
 EAFNOSUPPORT: 5,
 EPROTOTYPE: 67,
 ENOTSOCK: 57,
 ENOPROTOOPT: 50,
 ESHUTDOWN: 140,
 ECONNREFUSED: 14,
 EADDRINUSE: 3,
 ECONNABORTED: 13,
 ENETUNREACH: 40,
 ENETDOWN: 38,
 ETIMEDOUT: 73,
 EHOSTDOWN: 142,
 EHOSTUNREACH: 23,
 EINPROGRESS: 26,
 EALREADY: 7,
 EDESTADDRREQ: 17,
 EMSGSIZE: 35,
 EPROTONOSUPPORT: 66,
 ESOCKTNOSUPPORT: 137,
 EADDRNOTAVAIL: 4,
 ENETRESET: 39,
 EISCONN: 30,
 ENOTCONN: 53,
 ETOOMANYREFS: 141,
 EUSERS: 136,
 EDQUOT: 19,
 ESTALE: 72,
 ENOTSUP: 138,
 ENOMEDIUM: 148,
 EILSEQ: 25,
 EOVERFLOW: 61,
 ECANCELED: 11,
 ENOTRECOVERABLE: 56,
 EOWNERDEAD: 62,
 ESTRPIPE: 135
};

var __main_thread_futex_wait_address = 4247968;

function _emscripten_futex_wake(addr, count) {
 if (addr <= 0 || addr > GROWABLE_HEAP_I8().length || addr & 3 != 0 || count < 0) return -28;
 if (count == 0) return 0;
 if (count >= 2147483647) count = Infinity;
 var mainThreadWaitAddress = Atomics.load(GROWABLE_HEAP_I32(), __main_thread_futex_wait_address >> 2);
 var mainThreadWoken = 0;
 if (mainThreadWaitAddress == addr) {
  var loadedAddr = Atomics.compareExchange(GROWABLE_HEAP_I32(), __main_thread_futex_wait_address >> 2, mainThreadWaitAddress, 0);
  if (loadedAddr == mainThreadWaitAddress) {
   --count;
   mainThreadWoken = 1;
   if (count <= 0) return 1;
  }
 }
 var ret = Atomics.notify(GROWABLE_HEAP_I32(), addr >> 2, count);
 if (ret >= 0) return ret + mainThreadWoken;
 throw "Atomics.notify returned an unexpected value " + ret;
}

Module["_emscripten_futex_wake"] = _emscripten_futex_wake;

function killThread(pthread_ptr) {
 if (ENVIRONMENT_IS_PTHREAD) throw "Internal Error! killThread() can only ever be called from main application thread!";
 if (!pthread_ptr) throw "Internal Error! Null pthread_ptr in killThread!";
 GROWABLE_HEAP_I32()[pthread_ptr + 12 >> 2] = 0;
 var pthread = PThread.pthreads[pthread_ptr];
 pthread.worker.terminate();
 PThread.freeThreadData(pthread);
 PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread.worker), 1);
 pthread.worker.pthread = undefined;
}

function cancelThread(pthread_ptr) {
 if (ENVIRONMENT_IS_PTHREAD) throw "Internal Error! cancelThread() can only ever be called from main application thread!";
 if (!pthread_ptr) throw "Internal Error! Null pthread_ptr in cancelThread!";
 var pthread = PThread.pthreads[pthread_ptr];
 pthread.worker.postMessage({
  "cmd": "cancel"
 });
}

function cleanupThread(pthread_ptr) {
 if (ENVIRONMENT_IS_PTHREAD) throw "Internal Error! cleanupThread() can only ever be called from main application thread!";
 if (!pthread_ptr) throw "Internal Error! Null pthread_ptr in cleanupThread!";
 GROWABLE_HEAP_I32()[pthread_ptr + 12 >> 2] = 0;
 var pthread = PThread.pthreads[pthread_ptr];
 if (pthread) {
  var worker = pthread.worker;
  PThread.returnWorkerToPool(worker);
 }
}

var PThread = {
 MAIN_THREAD_ID: 1,
 mainThreadInfo: {
  schedPolicy: 0,
  schedPrio: 0
 },
 unusedWorkers: [],
 runningWorkers: [],
 initRuntime: function() {
  registerPthreadPtr(PThread.mainThreadBlock, !ENVIRONMENT_IS_WORKER, 1);
  _emscripten_register_main_browser_thread_id(PThread.mainThreadBlock);
 },
 initMainThreadBlock: function() {
  var pthreadPoolSize = 2;
  for (var i = 0; i < pthreadPoolSize; ++i) {
   PThread.allocateUnusedWorker();
  }
  PThread.mainThreadBlock = 4247216;
  for (var i = 0; i < 232 / 4; ++i) GROWABLE_HEAP_U32()[PThread.mainThreadBlock / 4 + i] = 0;
  GROWABLE_HEAP_I32()[PThread.mainThreadBlock + 12 >> 2] = PThread.mainThreadBlock;
  var headPtr = PThread.mainThreadBlock + 156;
  GROWABLE_HEAP_I32()[headPtr >> 2] = headPtr;
  var tlsMemory = 4247456;
  for (var i = 0; i < 128; ++i) GROWABLE_HEAP_U32()[tlsMemory / 4 + i] = 0;
  Atomics.store(GROWABLE_HEAP_U32(), PThread.mainThreadBlock + 104 >> 2, tlsMemory);
  Atomics.store(GROWABLE_HEAP_U32(), PThread.mainThreadBlock + 40 >> 2, PThread.mainThreadBlock);
  Atomics.store(GROWABLE_HEAP_U32(), PThread.mainThreadBlock + 44 >> 2, 42);
 },
 initWorker: function() {},
 pthreads: {},
 threadExitHandlers: [],
 setThreadStatus: function() {},
 runExitHandlers: function() {
  while (PThread.threadExitHandlers.length > 0) {
   PThread.threadExitHandlers.pop()();
  }
  if (ENVIRONMENT_IS_PTHREAD && threadInfoStruct) ___pthread_tsd_run_dtors();
 },
 threadExit: function(exitCode) {
  var tb = _pthread_self();
  if (tb) {
   Atomics.store(GROWABLE_HEAP_U32(), tb + 4 >> 2, exitCode);
   Atomics.store(GROWABLE_HEAP_U32(), tb + 0 >> 2, 1);
   Atomics.store(GROWABLE_HEAP_U32(), tb + 60 >> 2, 1);
   Atomics.store(GROWABLE_HEAP_U32(), tb + 64 >> 2, 0);
   PThread.runExitHandlers();
   _emscripten_futex_wake(tb + 0, 2147483647);
   registerPthreadPtr(0, 0, 0);
   threadInfoStruct = 0;
   if (ENVIRONMENT_IS_PTHREAD) {
    postMessage({
     "cmd": "exit"
    });
   }
  }
 },
 threadCancel: function() {
  PThread.runExitHandlers();
  Atomics.store(GROWABLE_HEAP_U32(), threadInfoStruct + 4 >> 2, -1);
  Atomics.store(GROWABLE_HEAP_U32(), threadInfoStruct + 0 >> 2, 1);
  _emscripten_futex_wake(threadInfoStruct + 0, 2147483647);
  threadInfoStruct = selfThreadId = 0;
  registerPthreadPtr(0, 0, 0);
  postMessage({
   "cmd": "cancelDone"
  });
 },
 terminateAllThreads: function() {
  for (var t in PThread.pthreads) {
   var pthread = PThread.pthreads[t];
   if (pthread && pthread.worker) {
    PThread.returnWorkerToPool(pthread.worker);
   }
  }
  PThread.pthreads = {};
  for (var i = 0; i < PThread.unusedWorkers.length; ++i) {
   var worker = PThread.unusedWorkers[i];
   worker.terminate();
  }
  PThread.unusedWorkers = [];
  for (var i = 0; i < PThread.runningWorkers.length; ++i) {
   var worker = PThread.runningWorkers[i];
   var pthread = worker.pthread;
   PThread.freeThreadData(pthread);
   worker.terminate();
  }
  PThread.runningWorkers = [];
 },
 freeThreadData: function(pthread) {
  if (!pthread) return;
  if (pthread.threadInfoStruct) {
   var tlsMemory = GROWABLE_HEAP_I32()[pthread.threadInfoStruct + 104 >> 2];
   GROWABLE_HEAP_I32()[pthread.threadInfoStruct + 104 >> 2] = 0;
   _free(tlsMemory);
   _free(pthread.threadInfoStruct);
  }
  pthread.threadInfoStruct = 0;
  if (pthread.allocatedOwnStack && pthread.stackBase) _free(pthread.stackBase);
  pthread.stackBase = 0;
  if (pthread.worker) pthread.worker.pthread = null;
 },
 returnWorkerToPool: function(worker) {
  delete PThread.pthreads[worker.pthread.thread];
  PThread.unusedWorkers.push(worker);
  PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
  PThread.freeThreadData(worker.pthread);
  worker.pthread = undefined;
 },
 receiveObjectTransfer: function(data) {},
 loadWasmModuleToWorker: function(worker, onFinishedLoading) {
  worker.onmessage = function(e) {
   var d = e["data"];
   var cmd = d["cmd"];
   if (worker.pthread) PThread.currentProxiedOperationCallerThread = worker.pthread.threadInfoStruct;
   if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
    var thread = PThread.pthreads[d.targetThread];
    if (thread) {
     thread.worker.postMessage(e.data, d["transferList"]);
    } else {
     console.error('Internal error! Worker sent a message "' + cmd + '" to target pthread ' + d["targetThread"] + ", but that thread no longer exists!");
    }
    PThread.currentProxiedOperationCallerThread = undefined;
    return;
   }
   if (cmd === "processQueuedMainThreadWork") {
    _emscripten_main_thread_process_queued_calls();
   } else if (cmd === "spawnThread") {
    spawnThread(e.data);
   } else if (cmd === "cleanupThread") {
    cleanupThread(d["thread"]);
   } else if (cmd === "killThread") {
    killThread(d["thread"]);
   } else if (cmd === "cancelThread") {
    cancelThread(d["thread"]);
   } else if (cmd === "loaded") {
    worker.loaded = true;
    if (onFinishedLoading) onFinishedLoading(worker);
    if (worker.runPthread) {
     worker.runPthread();
     delete worker.runPthread;
    }
   } else if (cmd === "print") {
    out("Thread " + d["threadId"] + ": " + d["text"]);
   } else if (cmd === "printErr") {
    err("Thread " + d["threadId"] + ": " + d["text"]);
   } else if (cmd === "alert") {
    alert("Thread " + d["threadId"] + ": " + d["text"]);
   } else if (cmd === "exit") {
    var detached = worker.pthread && Atomics.load(GROWABLE_HEAP_U32(), worker.pthread.thread + 68 >> 2);
    if (detached) {
     PThread.returnWorkerToPool(worker);
    }
   } else if (cmd === "cancelDone") {
    PThread.returnWorkerToPool(worker);
   } else if (cmd === "objectTransfer") {
    PThread.receiveObjectTransfer(e.data);
   } else if (e.data.target === "setimmediate") {
    worker.postMessage(e.data);
   } else {
    err("worker sent an unknown command " + cmd);
   }
   PThread.currentProxiedOperationCallerThread = undefined;
  };
  worker.onerror = function(e) {
   err("pthread sent an error! " + e.filename + ":" + e.lineno + ": " + e.message);
  };
  worker.postMessage({
   "cmd": "load",
   "urlOrBlob": Module["mainScriptUrlOrBlob"] || _scriptDir,
   "wasmMemory": wasmMemory,
   "wasmModule": wasmModule,
   "DYNAMIC_BASE": DYNAMIC_BASE,
   "DYNAMICTOP_PTR": DYNAMICTOP_PTR
  });
 },
 allocateUnusedWorker: function() {
  var pthreadMainJs = locateFile("a.out.worker.js");
  PThread.unusedWorkers.push(new Worker(pthreadMainJs));
 },
 getNewWorker: function() {
  if (PThread.unusedWorkers.length == 0) {
   PThread.allocateUnusedWorker();
   PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
  }
  if (PThread.unusedWorkers.length > 0) return PThread.unusedWorkers.pop(); else return null;
 },
 busySpinWait: function(msecs) {
  var t = performance.now() + msecs;
  while (performance.now() < t) {}
 }
};

function establishStackSpace(stackTop, stackMax) {
 STACK_BASE = STACKTOP = stackTop;
 STACK_MAX = stackMax;
 stackRestore(stackTop);
}

Module["establishStackSpace"] = establishStackSpace;

function getNoExitRuntime() {
 return noExitRuntime;
}

Module["getNoExitRuntime"] = getNoExitRuntime;

function jsStackTrace() {
 var err = new Error();
 if (!err.stack) {
  try {
   throw new Error();
  } catch (e) {
   err = e;
  }
  if (!err.stack) {
   return "(no stack trace available)";
  }
 }
 return err.stack.toString();
}

function stackTrace() {
 var js = jsStackTrace();
 if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
 return demangleAll(js);
}

function ___assert_fail(condition, filename, line, func) {
 abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [ filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function" ]);
}

var _emscripten_get_now;

if (ENVIRONMENT_IS_PTHREAD) {
 _emscripten_get_now = function() {
  return performance.now() - Module["__performance_now_clock_drift"];
 };
} else _emscripten_get_now = function() {
 return performance.now();
};

var _emscripten_get_now_is_monotonic = true;

function setErrNo(value) {
 GROWABLE_HEAP_I32()[___errno_location() >> 2] = value;
 return value;
}

function _clock_gettime(clk_id, tp) {
 var now;
 if (clk_id === 0) {
  now = Date.now();
 } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
  now = _emscripten_get_now();
 } else {
  setErrNo(28);
  return -1;
 }
 GROWABLE_HEAP_I32()[tp >> 2] = now / 1e3 | 0;
 GROWABLE_HEAP_I32()[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
 return 0;
}

function ___clock_gettime(a0, a1) {
 return _clock_gettime(a0, a1);
}

function _atexit(func, arg) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(1, 1, func, arg);
}

function ___cxa_atexit(a0, a1) {
 return _atexit(a0, a1);
}

function __emscripten_fetch_free(id) {
 delete Fetch.xhrs[id - 1];
}

function __emscripten_notify_thread_queue(targetThreadId, mainThreadId) {
 if (targetThreadId == mainThreadId) {
  postMessage({
   "cmd": "processQueuedMainThreadWork"
  });
 } else if (ENVIRONMENT_IS_PTHREAD) {
  postMessage({
   "targetThread": targetThreadId,
   "cmd": "processThreadQueue"
  });
 } else {
  var pthread = PThread.pthreads[targetThreadId];
  var worker = pthread && pthread.worker;
  if (!worker) {
   return;
  }
  worker.postMessage({
   "cmd": "processThreadQueue"
  });
 }
 return 1;
}

function _abort() {
 abort();
}

function _emscripten_check_blocking_allowed() {
 if (ENVIRONMENT_IS_WORKER) return;
 warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread");
}

function _emscripten_conditional_set_current_thread_status_js(expectedStatus, newStatus) {}

function _emscripten_conditional_set_current_thread_status(expectedStatus, newStatus) {
 expectedStatus = expectedStatus | 0;
 newStatus = newStatus | 0;
}

function _emscripten_futex_wait(addr, val, timeout) {
 if (addr <= 0 || addr > GROWABLE_HEAP_I8().length || addr & 3 != 0) return -28;
 if (ENVIRONMENT_IS_WORKER) {
  var ret = Atomics.wait(GROWABLE_HEAP_I32(), addr >> 2, val, timeout);
  if (ret === "timed-out") return -73;
  if (ret === "not-equal") return -6;
  if (ret === "ok") return 0;
  throw "Atomics.wait returned an unexpected value " + ret;
 } else {
  var loadedVal = Atomics.load(GROWABLE_HEAP_I32(), addr >> 2);
  if (val != loadedVal) return -6;
  var tNow = performance.now();
  var tEnd = tNow + timeout;
  Atomics.store(GROWABLE_HEAP_I32(), __main_thread_futex_wait_address >> 2, addr);
  var ourWaitAddress = addr;
  while (addr == ourWaitAddress) {
   tNow = performance.now();
   if (tNow > tEnd) {
    return -73;
   }
   _emscripten_main_thread_process_queued_calls();
   addr = Atomics.load(GROWABLE_HEAP_I32(), __main_thread_futex_wait_address >> 2);
  }
  return 0;
 }
}

function _emscripten_get_sbrk_ptr() {
 return 4247040;
}

function _emscripten_is_main_browser_thread() {
 return __pthread_is_main_browser_thread | 0;
}

function _emscripten_is_main_runtime_thread() {
 return __pthread_is_main_runtime_thread | 0;
}

function _emscripten_memcpy_big(dest, src, num) {
 GROWABLE_HEAP_U8().copyWithin(dest, src, src + num);
}

function _emscripten_proxy_to_main_thread_js(index, sync) {
 var numCallArgs = arguments.length - 2;
 var stack = stackSave();
 var args = stackAlloc(numCallArgs * 8);
 var b = args >> 3;
 for (var i = 0; i < numCallArgs; i++) {
  GROWABLE_HEAP_F64()[b + i] = arguments[2 + i];
 }
 var ret = _emscripten_run_in_main_runtime_thread_js(index, numCallArgs, args, sync);
 stackRestore(stack);
 return ret;
}

var _emscripten_receive_on_main_thread_js_callArgs = [];

var readAsmConstArgsArray = [];

function readAsmConstArgs(sigPtr, buf) {
 readAsmConstArgsArray.length = 0;
 var ch;
 buf >>= 2;
 while (ch = GROWABLE_HEAP_U8()[sigPtr++]) {
  var double = ch < 105;
  if (double && buf & 1) buf++;
  readAsmConstArgsArray.push(double ? GROWABLE_HEAP_F64()[buf++ >> 1] : GROWABLE_HEAP_I32()[buf]);
  ++buf;
 }
 return readAsmConstArgsArray;
}

function _emscripten_receive_on_main_thread_js(index, numCallArgs, args) {
 _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
 var b = args >> 3;
 for (var i = 0; i < numCallArgs; i++) {
  _emscripten_receive_on_main_thread_js_callArgs[i] = GROWABLE_HEAP_F64()[b + i];
 }
 var isEmAsmConst = index < 0;
 var func = !isEmAsmConst ? proxiedFunctionTable[index] : ASM_CONSTS[-index - 1];
 return func.apply(null, _emscripten_receive_on_main_thread_js_callArgs);
}

function _emscripten_get_heap_size() {
 return GROWABLE_HEAP_U8().length;
}

function emscripten_realloc_buffer(size) {
 try {
  wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
  updateGlobalBufferAndViews(wasmMemory.buffer);
  return 1;
 } catch (e) {}
}

function _emscripten_resize_heap(requestedSize) {
 requestedSize = requestedSize >>> 0;
 var oldSize = _emscripten_get_heap_size();
 if (requestedSize <= oldSize) {
  return false;
 }
 var PAGE_MULTIPLE = 65536;
 var maxHeapSize = 4294967296;
 if (requestedSize > maxHeapSize) {
  return false;
 }
 var minHeapSize = 16777216;
 for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
  var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));
  var replacement = emscripten_realloc_buffer(newSize);
  if (replacement) {
   return true;
  }
 }
 return false;
}

var JSEvents = {
 inEventHandler: 0,
 removeAllEventListeners: function() {
  for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
   JSEvents._removeHandler(i);
  }
  JSEvents.eventHandlers = [];
  JSEvents.deferredCalls = [];
 },
 registerRemoveEventListeners: function() {
  if (!JSEvents.removeEventListenersRegistered) {
   __ATEXIT__.push(JSEvents.removeAllEventListeners);
   JSEvents.removeEventListenersRegistered = true;
  }
 },
 deferredCalls: [],
 deferCall: function(targetFunction, precedence, argsList) {
  function arraysHaveEqualContent(arrA, arrB) {
   if (arrA.length != arrB.length) return false;
   for (var i in arrA) {
    if (arrA[i] != arrB[i]) return false;
   }
   return true;
  }
  for (var i in JSEvents.deferredCalls) {
   var call = JSEvents.deferredCalls[i];
   if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
    return;
   }
  }
  JSEvents.deferredCalls.push({
   targetFunction: targetFunction,
   precedence: precedence,
   argsList: argsList
  });
  JSEvents.deferredCalls.sort(function(x, y) {
   return x.precedence < y.precedence;
  });
 },
 removeDeferredCalls: function(targetFunction) {
  for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
   if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
    JSEvents.deferredCalls.splice(i, 1);
    --i;
   }
  }
 },
 canPerformEventHandlerRequests: function() {
  return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
 },
 runDeferredCalls: function() {
  if (!JSEvents.canPerformEventHandlerRequests()) {
   return;
  }
  for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
   var call = JSEvents.deferredCalls[i];
   JSEvents.deferredCalls.splice(i, 1);
   --i;
   call.targetFunction.apply(null, call.argsList);
  }
 },
 eventHandlers: [],
 removeAllHandlersOnTarget: function(target, eventTypeString) {
  for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
   if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
    JSEvents._removeHandler(i--);
   }
  }
 },
 _removeHandler: function(i) {
  var h = JSEvents.eventHandlers[i];
  h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
  JSEvents.eventHandlers.splice(i, 1);
 },
 registerOrRemoveHandler: function(eventHandler) {
  var jsEventHandler = function jsEventHandler(event) {
   ++JSEvents.inEventHandler;
   JSEvents.currentEventHandler = eventHandler;
   JSEvents.runDeferredCalls();
   eventHandler.handlerFunc(event);
   JSEvents.runDeferredCalls();
   --JSEvents.inEventHandler;
  };
  if (eventHandler.callbackfunc) {
   eventHandler.eventListenerFunc = jsEventHandler;
   eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
   JSEvents.eventHandlers.push(eventHandler);
   JSEvents.registerRemoveEventListeners();
  } else {
   for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
    if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
     JSEvents._removeHandler(i--);
    }
   }
  }
 },
 queueEventHandlerOnThread_iiii: function(targetThread, eventHandlerFunc, eventTypeId, eventData, userData) {
  var stackTop = stackSave();
  var varargs = stackAlloc(12);
  GROWABLE_HEAP_I32()[varargs >> 2] = eventTypeId;
  GROWABLE_HEAP_I32()[varargs + 4 >> 2] = eventData;
  GROWABLE_HEAP_I32()[varargs + 8 >> 2] = userData;
  __emscripten_call_on_thread(0, targetThread, 637534208, eventHandlerFunc, eventData, varargs);
  stackRestore(stackTop);
 },
 getTargetThreadForEventCallback: function(targetThread) {
  switch (targetThread) {
  case 1:
   return 0;

  case 2:
   return PThread.currentProxiedOperationCallerThread;

  default:
   return targetThread;
  }
 },
 getNodeNameForTarget: function(target) {
  if (!target) return "";
  if (target == window) return "#window";
  if (target == screen) return "#screen";
  return target && target.nodeName ? target.nodeName : "";
 },
 fullscreenEnabled: function() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled;
 }
};

function stringToNewUTF8(jsString) {
 var length = lengthBytesUTF8(jsString) + 1;
 var cString = _malloc(length);
 stringToUTF8(jsString, cString, length);
 return cString;
}

function _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height) {
 var stackTop = stackSave();
 var varargs = stackAlloc(12);
 var targetCanvasPtr = 0;
 if (targetCanvas) {
  targetCanvasPtr = stringToNewUTF8(targetCanvas);
 }
 GROWABLE_HEAP_I32()[varargs >> 2] = targetCanvasPtr;
 GROWABLE_HEAP_I32()[varargs + 4 >> 2] = width;
 GROWABLE_HEAP_I32()[varargs + 8 >> 2] = height;
 __emscripten_call_on_thread(0, targetThread, 657457152, 0, targetCanvasPtr, varargs);
 stackRestore(stackTop);
}

function _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, targetCanvas, width, height) {
 targetCanvas = targetCanvas ? UTF8ToString(targetCanvas) : "";
 _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height);
}

function maybeCStringToJsString(cString) {
 return cString > 2 ? UTF8ToString(cString) : cString;
}

var specialHTMLTargets = [ 0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0 ];

function findEventTarget(target) {
 target = maybeCStringToJsString(target);
 var domElement = specialHTMLTargets[target] || (typeof document !== "undefined" ? document.querySelector(target) : undefined);
 return domElement;
}

function findCanvasEventTarget(target) {
 return findEventTarget(target);
}

function _emscripten_set_canvas_element_size_calling_thread(target, width, height) {
 var canvas = findCanvasEventTarget(target);
 if (!canvas) return -4;
 if (canvas.canvasSharedPtr) {
  GROWABLE_HEAP_I32()[canvas.canvasSharedPtr >> 2] = width;
  GROWABLE_HEAP_I32()[canvas.canvasSharedPtr + 4 >> 2] = height;
 }
 if (canvas.offscreenCanvas || !canvas.controlTransferredOffscreen) {
  if (canvas.offscreenCanvas) canvas = canvas.offscreenCanvas;
  var autoResizeViewport = false;
  if (canvas.GLctxObject && canvas.GLctxObject.GLctx) {
   var prevViewport = canvas.GLctxObject.GLctx.getParameter(2978);
   autoResizeViewport = prevViewport[0] === 0 && prevViewport[1] === 0 && prevViewport[2] === canvas.width && prevViewport[3] === canvas.height;
  }
  canvas.width = width;
  canvas.height = height;
  if (autoResizeViewport) {
   canvas.GLctxObject.GLctx.viewport(0, 0, width, height);
  }
 } else if (canvas.canvasSharedPtr) {
  var targetThread = GROWABLE_HEAP_I32()[canvas.canvasSharedPtr + 8 >> 2];
  _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, target, width, height);
  return 1;
 } else {
  return -4;
 }
 return 0;
}

function _emscripten_set_canvas_element_size_main_thread(target, width, height) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(2, 1, target, width, height);
 return _emscripten_set_canvas_element_size_calling_thread(target, width, height);
}

function _emscripten_set_canvas_element_size(target, width, height) {
 var canvas = findCanvasEventTarget(target);
 if (canvas) {
  return _emscripten_set_canvas_element_size_calling_thread(target, width, height);
 } else {
  return _emscripten_set_canvas_element_size_main_thread(target, width, height);
 }
}

function _emscripten_set_current_thread_status_js(newStatus) {}

function _emscripten_set_current_thread_status(newStatus) {
 newStatus = newStatus | 0;
}

var Fetch = {
 xhrs: [],
 setu64: function(addr, val) {
  GROWABLE_HEAP_U32()[addr >> 2] = val;
  GROWABLE_HEAP_U32()[addr + 4 >> 2] = val / 4294967296 | 0;
 },
 openDatabase: function(dbname, dbversion, onsuccess, onerror) {
  try {
   var openRequest = indexedDB.open(dbname, dbversion);
  } catch (e) {
   return onerror(e);
  }
  openRequest.onupgradeneeded = function(event) {
   var db = event.target.result;
   if (db.objectStoreNames.contains("FILES")) {
    db.deleteObjectStore("FILES");
   }
   db.createObjectStore("FILES");
  };
  openRequest.onsuccess = function(event) {
   onsuccess(event.target.result);
  };
  openRequest.onerror = function(error) {
   onerror(error);
  };
 },
 staticInit: function() {
  var isMainThread = true;
  var onsuccess = function(db) {
   Fetch.dbInstance = db;
   if (isMainThread) {
    removeRunDependency("library_fetch_init");
   }
  };
  var onerror = function() {
   Fetch.dbInstance = false;
   if (isMainThread) {
    removeRunDependency("library_fetch_init");
   }
  };
  Fetch.openDatabase("emscripten_filesystem", 1, onsuccess, onerror);
  if (typeof ENVIRONMENT_IS_FETCH_WORKER === "undefined" || !ENVIRONMENT_IS_FETCH_WORKER) addRunDependency("library_fetch_init");
 }
};

function __emscripten_fetch_xhr(fetch, onsuccess, onerror, onprogress, onreadystatechange) {
 var url = GROWABLE_HEAP_U32()[fetch + 8 >> 2];
 if (!url) {
  onerror(fetch, 0, "no url specified!");
  return;
 }
 var url_ = UTF8ToString(url);
 var fetch_attr = fetch + 112;
 var requestMethod = UTF8ToString(fetch_attr);
 if (!requestMethod) requestMethod = "GET";
 var userData = GROWABLE_HEAP_U32()[fetch_attr + 32 >> 2];
 var fetchAttributes = GROWABLE_HEAP_U32()[fetch_attr + 52 >> 2];
 var timeoutMsecs = GROWABLE_HEAP_U32()[fetch_attr + 56 >> 2];
 var withCredentials = !!GROWABLE_HEAP_U32()[fetch_attr + 60 >> 2];
 var destinationPath = GROWABLE_HEAP_U32()[fetch_attr + 64 >> 2];
 var userName = GROWABLE_HEAP_U32()[fetch_attr + 68 >> 2];
 var password = GROWABLE_HEAP_U32()[fetch_attr + 72 >> 2];
 var requestHeaders = GROWABLE_HEAP_U32()[fetch_attr + 76 >> 2];
 var overriddenMimeType = GROWABLE_HEAP_U32()[fetch_attr + 80 >> 2];
 var dataPtr = GROWABLE_HEAP_U32()[fetch_attr + 84 >> 2];
 var dataLength = GROWABLE_HEAP_U32()[fetch_attr + 88 >> 2];
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
 if (!fetchAttrSynchronous) xhr.timeout = timeoutMsecs;
 xhr.url_ = url_;
 xhr.responseType = "arraybuffer";
 if (overriddenMimeType) {
  xhr.overrideMimeType(overriddenMimeTypeStr);
 }
 if (requestHeaders) {
  for (;;) {
   var key = GROWABLE_HEAP_U32()[requestHeaders >> 2];
   if (!key) break;
   var value = GROWABLE_HEAP_U32()[requestHeaders + 4 >> 2];
   if (!value) break;
   requestHeaders += 8;
   var keyStr = UTF8ToString(key);
   var valueStr = UTF8ToString(value);
   xhr.setRequestHeader(keyStr, valueStr);
  }
 }
 Fetch.xhrs.push(xhr);
 var id = Fetch.xhrs.length;
 GROWABLE_HEAP_U32()[fetch + 0 >> 2] = id;
 var data = dataPtr && dataLength ? GROWABLE_HEAP_U8().slice(dataPtr, dataPtr + dataLength) : null;
 function saveResponse(condition) {
  var ptr = 0;
  var ptrLen = 0;
  if (condition) {
   ptrLen = xhr.response ? xhr.response.byteLength : 0;
   ptr = _malloc(ptrLen);
   GROWABLE_HEAP_U8().set(new Uint8Array(xhr.response), ptr);
  }
  GROWABLE_HEAP_U32()[fetch + 12 >> 2] = ptr;
  Fetch.setu64(fetch + 16, ptrLen);
 }
 xhr.onload = function(e) {
  saveResponse(fetchAttrLoadToMemory && !fetchAttrStreamData);
  var len = xhr.response ? xhr.response.byteLength : 0;
  Fetch.setu64(fetch + 24, 0);
  if (len) {
   Fetch.setu64(fetch + 32, len);
  }
  GROWABLE_HEAP_U16()[fetch + 40 >> 1] = xhr.readyState;
  if (xhr.readyState === 4 && xhr.status === 0) {
   if (len > 0) xhr.status = 200; else xhr.status = 404;
  }
  GROWABLE_HEAP_U16()[fetch + 42 >> 1] = xhr.status;
  if (xhr.statusText) stringToUTF8(xhr.statusText, fetch + 44, 64);
  if (xhr.status >= 200 && xhr.status < 300) {
   if (onsuccess) onsuccess(fetch, xhr, e);
  } else {
   if (onerror) onerror(fetch, xhr, e);
  }
 };
 xhr.onerror = function(e) {
  saveResponse(fetchAttrLoadToMemory);
  var status = xhr.status;
  if (xhr.readyState === 4 && status === 0) status = 404;
  Fetch.setu64(fetch + 24, 0);
  Fetch.setu64(fetch + 32, xhr.response ? xhr.response.byteLength : 0);
  GROWABLE_HEAP_U16()[fetch + 40 >> 1] = xhr.readyState;
  GROWABLE_HEAP_U16()[fetch + 42 >> 1] = status;
  if (onerror) onerror(fetch, xhr, e);
 };
 xhr.ontimeout = function(e) {
  if (onerror) onerror(fetch, xhr, e);
 };
 xhr.onprogress = function(e) {
  var ptrLen = fetchAttrLoadToMemory && fetchAttrStreamData && xhr.response ? xhr.response.byteLength : 0;
  var ptr = 0;
  if (fetchAttrLoadToMemory && fetchAttrStreamData) {
   ptr = _malloc(ptrLen);
   GROWABLE_HEAP_U8().set(new Uint8Array(xhr.response), ptr);
  }
  GROWABLE_HEAP_U32()[fetch + 12 >> 2] = ptr;
  Fetch.setu64(fetch + 16, ptrLen);
  Fetch.setu64(fetch + 24, e.loaded - ptrLen);
  Fetch.setu64(fetch + 32, e.total);
  GROWABLE_HEAP_U16()[fetch + 40 >> 1] = xhr.readyState;
  if (xhr.readyState >= 3 && xhr.status === 0 && e.loaded > 0) xhr.status = 200;
  GROWABLE_HEAP_U16()[fetch + 42 >> 1] = xhr.status;
  if (xhr.statusText) stringToUTF8(xhr.statusText, fetch + 44, 64);
  if (onprogress) onprogress(fetch, xhr, e);
  if (ptr) {
   _free(ptr);
  }
 };
 xhr.onreadystatechange = function(e) {
  GROWABLE_HEAP_U16()[fetch + 40 >> 1] = xhr.readyState;
  if (xhr.readyState >= 2) {
   GROWABLE_HEAP_U16()[fetch + 42 >> 1] = xhr.status;
  }
  if (onreadystatechange) onreadystatechange(fetch, xhr, e);
 };
 try {
  xhr.send(data);
 } catch (e) {
  if (onerror) onerror(fetch, xhr, e);
 }
}

function __emscripten_fetch_cache_data(db, fetch, data, onsuccess, onerror) {
 if (!db) {
  onerror(fetch, 0, "IndexedDB not available!");
  return;
 }
 var fetch_attr = fetch + 112;
 var destinationPath = GROWABLE_HEAP_U32()[fetch_attr + 64 >> 2];
 if (!destinationPath) destinationPath = GROWABLE_HEAP_U32()[fetch + 8 >> 2];
 var destinationPathStr = UTF8ToString(destinationPath);
 try {
  var transaction = db.transaction([ "FILES" ], "readwrite");
  var packages = transaction.objectStore("FILES");
  var putRequest = packages.put(data, destinationPathStr);
  putRequest.onsuccess = function(event) {
   GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
   GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 200;
   stringToUTF8("OK", fetch + 44, 64);
   onsuccess(fetch, 0, destinationPathStr);
  };
  putRequest.onerror = function(error) {
   GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
   GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 413;
   stringToUTF8("Payload Too Large", fetch + 44, 64);
   onerror(fetch, 0, error);
  };
 } catch (e) {
  onerror(fetch, 0, e);
 }
}

function __emscripten_fetch_load_cached_data(db, fetch, onsuccess, onerror) {
 if (!db) {
  onerror(fetch, 0, "IndexedDB not available!");
  return;
 }
 var fetch_attr = fetch + 112;
 var path = GROWABLE_HEAP_U32()[fetch_attr + 64 >> 2];
 if (!path) path = GROWABLE_HEAP_U32()[fetch + 8 >> 2];
 var pathStr = UTF8ToString(path);
 try {
  var transaction = db.transaction([ "FILES" ], "readonly");
  var packages = transaction.objectStore("FILES");
  var getRequest = packages.get(pathStr);
  getRequest.onsuccess = function(event) {
   if (event.target.result) {
    var value = event.target.result;
    var len = value.byteLength || value.length;
    var ptr = _malloc(len);
    GROWABLE_HEAP_U8().set(new Uint8Array(value), ptr);
    GROWABLE_HEAP_U32()[fetch + 12 >> 2] = ptr;
    Fetch.setu64(fetch + 16, len);
    Fetch.setu64(fetch + 24, 0);
    Fetch.setu64(fetch + 32, len);
    GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
    GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 200;
    stringToUTF8("OK", fetch + 44, 64);
    onsuccess(fetch, 0, value);
   } else {
    GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
    GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 404;
    stringToUTF8("Not Found", fetch + 44, 64);
    onerror(fetch, 0, "no data");
   }
  };
  getRequest.onerror = function(error) {
   GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
   GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 404;
   stringToUTF8("Not Found", fetch + 44, 64);
   onerror(fetch, 0, error);
  };
 } catch (e) {
  onerror(fetch, 0, e);
 }
}

function __emscripten_fetch_delete_cached_data(db, fetch, onsuccess, onerror) {
 if (!db) {
  onerror(fetch, 0, "IndexedDB not available!");
  return;
 }
 var fetch_attr = fetch + 112;
 var path = GROWABLE_HEAP_U32()[fetch_attr + 64 >> 2];
 if (!path) path = GROWABLE_HEAP_U32()[fetch + 8 >> 2];
 var pathStr = UTF8ToString(path);
 try {
  var transaction = db.transaction([ "FILES" ], "readwrite");
  var packages = transaction.objectStore("FILES");
  var request = packages.delete(pathStr);
  request.onsuccess = function(event) {
   var value = event.target.result;
   GROWABLE_HEAP_U32()[fetch + 12 >> 2] = 0;
   Fetch.setu64(fetch + 16, 0);
   Fetch.setu64(fetch + 24, 0);
   Fetch.setu64(fetch + 32, 0);
   GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
   GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 200;
   stringToUTF8("OK", fetch + 44, 64);
   onsuccess(fetch, 0, value);
  };
  request.onerror = function(error) {
   GROWABLE_HEAP_U16()[fetch + 40 >> 1] = 4;
   GROWABLE_HEAP_U16()[fetch + 42 >> 1] = 404;
   stringToUTF8("Not Found", fetch + 44, 64);
   onerror(fetch, 0, error);
  };
 } catch (e) {
  onerror(fetch, 0, e);
 }
}

var _fetch_work_queue = 4247200;

function __emscripten_get_fetch_work_queue() {
 return _fetch_work_queue;
}

function _emscripten_start_fetch(fetch, successcb, errorcb, progresscb, readystatechangecb) {
 if (typeof noExitRuntime !== "undefined") noExitRuntime = true;
 var fetch_attr = fetch + 112;
 var requestMethod = UTF8ToString(fetch_attr);
 var onsuccess = GROWABLE_HEAP_U32()[fetch_attr + 36 >> 2];
 var onerror = GROWABLE_HEAP_U32()[fetch_attr + 40 >> 2];
 var onprogress = GROWABLE_HEAP_U32()[fetch_attr + 44 >> 2];
 var onreadystatechange = GROWABLE_HEAP_U32()[fetch_attr + 48 >> 2];
 var fetchAttributes = GROWABLE_HEAP_U32()[fetch_attr + 52 >> 2];
 var fetchAttrLoadToMemory = !!(fetchAttributes & 1);
 var fetchAttrStreamData = !!(fetchAttributes & 2);
 var fetchAttrPersistFile = !!(fetchAttributes & 4);
 var fetchAttrNoDownload = !!(fetchAttributes & 32);
 var fetchAttrAppend = !!(fetchAttributes & 8);
 var fetchAttrReplace = !!(fetchAttributes & 16);
 var reportSuccess = function(fetch, xhr, e) {
  if (onsuccess) dynCall_vi(onsuccess, fetch); else if (successcb) successcb(fetch);
 };
 var reportProgress = function(fetch, xhr, e) {
  if (onprogress) dynCall_vi(onprogress, fetch); else if (progresscb) progresscb(fetch);
 };
 var reportError = function(fetch, xhr, e) {
  if (onerror) dynCall_vi(onerror, fetch); else if (errorcb) errorcb(fetch);
 };
 var reportReadyStateChange = function(fetch, xhr, e) {
  if (onreadystatechange) dynCall_vi(onreadystatechange, fetch); else if (readystatechangecb) readystatechangecb(fetch);
 };
 var performUncachedXhr = function(fetch, xhr, e) {
  __emscripten_fetch_xhr(fetch, reportSuccess, reportError, reportProgress, reportReadyStateChange);
 };
 var cacheResultAndReportSuccess = function(fetch, xhr, e) {
  var storeSuccess = function(fetch, xhr, e) {
   if (onsuccess) dynCall_vi(onsuccess, fetch); else if (successcb) successcb(fetch);
  };
  var storeError = function(fetch, xhr, e) {
   if (onsuccess) dynCall_vi(onsuccess, fetch); else if (successcb) successcb(fetch);
  };
  __emscripten_fetch_cache_data(Fetch.dbInstance, fetch, xhr.response, storeSuccess, storeError);
 };
 var performCachedXhr = function(fetch, xhr, e) {
  __emscripten_fetch_xhr(fetch, cacheResultAndReportSuccess, reportError, reportProgress, reportReadyStateChange);
 };
 if (requestMethod === "EM_IDB_STORE") {
  var ptr = GROWABLE_HEAP_U32()[fetch_attr + 84 >> 2];
  __emscripten_fetch_cache_data(Fetch.dbInstance, fetch, GROWABLE_HEAP_U8().slice(ptr, ptr + GROWABLE_HEAP_U32()[fetch_attr + 88 >> 2]), reportSuccess, reportError);
 } else if (requestMethod === "EM_IDB_DELETE") {
  __emscripten_fetch_delete_cached_data(Fetch.dbInstance, fetch, reportSuccess, reportError);
 } else if (!fetchAttrReplace) {
  __emscripten_fetch_load_cached_data(Fetch.dbInstance, fetch, reportSuccess, fetchAttrNoDownload ? reportError : fetchAttrPersistFile ? performCachedXhr : performUncachedXhr);
 } else if (!fetchAttrNoDownload) {
  __emscripten_fetch_xhr(fetch, fetchAttrPersistFile ? cacheResultAndReportSuccess : reportSuccess, reportError, reportProgress, reportReadyStateChange);
 } else {
  return 0;
 }
 return fetch;
}

function __webgl_enable_ANGLE_instanced_arrays(ctx) {
 var ext = ctx.getExtension("ANGLE_instanced_arrays");
 if (ext) {
  ctx["vertexAttribDivisor"] = function(index, divisor) {
   ext["vertexAttribDivisorANGLE"](index, divisor);
  };
  ctx["drawArraysInstanced"] = function(mode, first, count, primcount) {
   ext["drawArraysInstancedANGLE"](mode, first, count, primcount);
  };
  ctx["drawElementsInstanced"] = function(mode, count, type, indices, primcount) {
   ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
  };
  return 1;
 }
}

function __webgl_enable_OES_vertex_array_object(ctx) {
 var ext = ctx.getExtension("OES_vertex_array_object");
 if (ext) {
  ctx["createVertexArray"] = function() {
   return ext["createVertexArrayOES"]();
  };
  ctx["deleteVertexArray"] = function(vao) {
   ext["deleteVertexArrayOES"](vao);
  };
  ctx["bindVertexArray"] = function(vao) {
   ext["bindVertexArrayOES"](vao);
  };
  ctx["isVertexArray"] = function(vao) {
   return ext["isVertexArrayOES"](vao);
  };
  return 1;
 }
}

function __webgl_enable_WEBGL_draw_buffers(ctx) {
 var ext = ctx.getExtension("WEBGL_draw_buffers");
 if (ext) {
  ctx["drawBuffers"] = function(n, bufs) {
   ext["drawBuffersWEBGL"](n, bufs);
  };
  return 1;
 }
}

var GL = {
 counter: 1,
 buffers: [],
 programs: [],
 framebuffers: [],
 renderbuffers: [],
 textures: [],
 uniforms: [],
 shaders: [],
 vaos: [],
 contexts: {},
 offscreenCanvases: {},
 timerQueriesEXT: [],
 programInfos: {},
 stringCache: {},
 unpackAlignment: 4,
 recordError: function recordError(errorCode) {
  if (!GL.lastError) {
   GL.lastError = errorCode;
  }
 },
 getNewId: function(table) {
  var ret = GL.counter++;
  for (var i = table.length; i < ret; i++) {
   table[i] = null;
  }
  return ret;
 },
 getSource: function(shader, count, string, length) {
  var source = "";
  for (var i = 0; i < count; ++i) {
   var len = length ? GROWABLE_HEAP_I32()[length + i * 4 >> 2] : -1;
   source += UTF8ToString(GROWABLE_HEAP_I32()[string + i * 4 >> 2], len < 0 ? undefined : len);
  }
  return source;
 },
 createContext: function(canvas, webGLContextAttributes) {
  var ctx = canvas.getContext("webgl", webGLContextAttributes);
  if (!ctx) return 0;
  var handle = GL.registerContext(ctx, webGLContextAttributes);
  return handle;
 },
 registerContext: function(ctx, webGLContextAttributes) {
  var handle = _malloc(8);
  GROWABLE_HEAP_I32()[handle + 4 >> 2] = _pthread_self();
  var context = {
   handle: handle,
   attributes: webGLContextAttributes,
   version: webGLContextAttributes.majorVersion,
   GLctx: ctx
  };
  if (ctx.canvas) ctx.canvas.GLctxObject = context;
  GL.contexts[handle] = context;
  if (typeof webGLContextAttributes.enableExtensionsByDefault === "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
   GL.initExtensions(context);
  }
  return handle;
 },
 makeContextCurrent: function(contextHandle) {
  GL.currentContext = GL.contexts[contextHandle];
  Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
  return !(contextHandle && !GLctx);
 },
 getContext: function(contextHandle) {
  return GL.contexts[contextHandle];
 },
 deleteContext: function(contextHandle) {
  if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
  if (typeof JSEvents === "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
  if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
  _free(GL.contexts[contextHandle].handle);
  GL.contexts[contextHandle] = null;
 },
 initExtensions: function(context) {
  if (!context) context = GL.currentContext;
  if (context.initExtensionsDone) return;
  context.initExtensionsDone = true;
  var GLctx = context.GLctx;
  __webgl_enable_ANGLE_instanced_arrays(GLctx);
  __webgl_enable_OES_vertex_array_object(GLctx);
  __webgl_enable_WEBGL_draw_buffers(GLctx);
  GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
  var automaticallyEnabledExtensions = [ "OES_texture_float", "OES_texture_half_float", "OES_standard_derivatives", "OES_vertex_array_object", "WEBGL_compressed_texture_s3tc", "WEBGL_depth_texture", "OES_element_index_uint", "EXT_texture_filter_anisotropic", "EXT_frag_depth", "WEBGL_draw_buffers", "ANGLE_instanced_arrays", "OES_texture_float_linear", "OES_texture_half_float_linear", "EXT_blend_minmax", "EXT_shader_texture_lod", "EXT_texture_norm16", "WEBGL_compressed_texture_pvrtc", "EXT_color_buffer_half_float", "WEBGL_color_buffer_float", "EXT_sRGB", "WEBGL_compressed_texture_etc1", "EXT_disjoint_timer_query", "WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_astc", "EXT_color_buffer_float", "WEBGL_compressed_texture_s3tc_srgb", "EXT_disjoint_timer_query_webgl2", "WEBKIT_WEBGL_compressed_texture_pvrtc" ];
  function shouldEnableAutomatically(extension) {
   var ret = false;
   automaticallyEnabledExtensions.forEach(function(include) {
    if (extension.indexOf(include) != -1) {
     ret = true;
    }
   });
   return ret;
  }
  var exts = GLctx.getSupportedExtensions() || [];
  exts.forEach(function(ext) {
   if (automaticallyEnabledExtensions.indexOf(ext) != -1) {
    GLctx.getExtension(ext);
   }
  });
 },
 populateUniformTable: function(program) {
  var p = GL.programs[program];
  var ptable = GL.programInfos[program] = {
   uniforms: {},
   maxUniformLength: 0,
   maxAttributeLength: -1,
   maxUniformBlockNameLength: -1
  };
  var utable = ptable.uniforms;
  var numUniforms = GLctx.getProgramParameter(p, 35718);
  for (var i = 0; i < numUniforms; ++i) {
   var u = GLctx.getActiveUniform(p, i);
   var name = u.name;
   ptable.maxUniformLength = Math.max(ptable.maxUniformLength, name.length + 1);
   if (name.slice(-1) == "]") {
    name = name.slice(0, name.lastIndexOf("["));
   }
   var loc = GLctx.getUniformLocation(p, name);
   if (loc) {
    var id = GL.getNewId(GL.uniforms);
    utable[name] = [ u.size, id ];
    GL.uniforms[id] = loc;
    for (var j = 1; j < u.size; ++j) {
     var n = name + "[" + j + "]";
     loc = GLctx.getUniformLocation(p, n);
     id = GL.getNewId(GL.uniforms);
     GL.uniforms[id] = loc;
    }
   }
  }
 }
};

var __emscripten_webgl_power_preferences = [ "default", "low-power", "high-performance" ];

function _emscripten_webgl_do_create_context(target, attributes) {
 var contextAttributes = {};
 var a = attributes >> 2;
 contextAttributes["alpha"] = !!GROWABLE_HEAP_I32()[a + (0 >> 2)];
 contextAttributes["depth"] = !!GROWABLE_HEAP_I32()[a + (4 >> 2)];
 contextAttributes["stencil"] = !!GROWABLE_HEAP_I32()[a + (8 >> 2)];
 contextAttributes["antialias"] = !!GROWABLE_HEAP_I32()[a + (12 >> 2)];
 contextAttributes["premultipliedAlpha"] = !!GROWABLE_HEAP_I32()[a + (16 >> 2)];
 contextAttributes["preserveDrawingBuffer"] = !!GROWABLE_HEAP_I32()[a + (20 >> 2)];
 var powerPreference = GROWABLE_HEAP_I32()[a + (24 >> 2)];
 contextAttributes["powerPreference"] = __emscripten_webgl_power_preferences[powerPreference];
 contextAttributes["failIfMajorPerformanceCaveat"] = !!GROWABLE_HEAP_I32()[a + (28 >> 2)];
 contextAttributes.majorVersion = GROWABLE_HEAP_I32()[a + (32 >> 2)];
 contextAttributes.minorVersion = GROWABLE_HEAP_I32()[a + (36 >> 2)];
 contextAttributes.enableExtensionsByDefault = GROWABLE_HEAP_I32()[a + (40 >> 2)];
 contextAttributes.explicitSwapControl = GROWABLE_HEAP_I32()[a + (44 >> 2)];
 contextAttributes.proxyContextToMainThread = GROWABLE_HEAP_I32()[a + (48 >> 2)];
 contextAttributes.renderViaOffscreenBackBuffer = GROWABLE_HEAP_I32()[a + (52 >> 2)];
 var canvas = findCanvasEventTarget(target);
 if (!canvas) {
  return -4;
 }
 if (contextAttributes.explicitSwapControl) {
  return -1;
 }
 var contextHandle = GL.createContext(canvas, contextAttributes);
 return contextHandle;
}

function _emscripten_webgl_create_context(a0, a1) {
 return _emscripten_webgl_do_create_context(a0, a1);
}

function flush_NO_FILESYSTEM() {
 if (typeof _fflush !== "undefined") _fflush(0);
 var buffers = SYSCALLS.buffers;
 if (buffers[1].length) SYSCALLS.printChar(1, 10);
 if (buffers[2].length) SYSCALLS.printChar(2, 10);
}

var PATH = {
 splitPath: function(filename) {
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  return splitPathRe.exec(filename).slice(1);
 },
 normalizeArray: function(parts, allowAboveRoot) {
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
   var last = parts[i];
   if (last === ".") {
    parts.splice(i, 1);
   } else if (last === "..") {
    parts.splice(i, 1);
    up++;
   } else if (up) {
    parts.splice(i, 1);
    up--;
   }
  }
  if (allowAboveRoot) {
   for (;up; up--) {
    parts.unshift("..");
   }
  }
  return parts;
 },
 normalize: function(path) {
  var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
  path = PATH.normalizeArray(path.split("/").filter(function(p) {
   return !!p;
  }), !isAbsolute).join("/");
  if (!path && !isAbsolute) {
   path = ".";
  }
  if (path && trailingSlash) {
   path += "/";
  }
  return (isAbsolute ? "/" : "") + path;
 },
 dirname: function(path) {
  var result = PATH.splitPath(path), root = result[0], dir = result[1];
  if (!root && !dir) {
   return ".";
  }
  if (dir) {
   dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
 },
 basename: function(path) {
  if (path === "/") return "/";
  var lastSlash = path.lastIndexOf("/");
  if (lastSlash === -1) return path;
  return path.substr(lastSlash + 1);
 },
 extname: function(path) {
  return PATH.splitPath(path)[3];
 },
 join: function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return PATH.normalize(paths.join("/"));
 },
 join2: function(l, r) {
  return PATH.normalize(l + "/" + r);
 }
};

var SYSCALLS = {
 mappings: {},
 buffers: [ null, [], [] ],
 printChar: function(stream, curr) {
  var buffer = SYSCALLS.buffers[stream];
  if (curr === 0 || curr === 10) {
   (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
   buffer.length = 0;
  } else {
   buffer.push(curr);
  }
 },
 varargs: undefined,
 get: function() {
  SYSCALLS.varargs += 4;
  var ret = GROWABLE_HEAP_I32()[SYSCALLS.varargs - 4 >> 2];
  return ret;
 },
 getStr: function(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 get64: function(low, high) {
  return low;
 }
};

function _fd_write(fd, iov, iovcnt, pnum) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(3, 1, fd, iov, iovcnt, pnum);
 var num = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = GROWABLE_HEAP_I32()[iov + i * 8 >> 2];
  var len = GROWABLE_HEAP_I32()[iov + (i * 8 + 4) >> 2];
  for (var j = 0; j < len; j++) {
   SYSCALLS.printChar(fd, GROWABLE_HEAP_U8()[ptr + j]);
  }
  num += len;
 }
 GROWABLE_HEAP_I32()[pnum >> 2] = num;
 return 0;
}

function _pthread_cleanup_push(routine, arg) {
 PThread.threadExitHandlers.push(function() {
  dynCall_vi(routine, arg);
 });
}

function spawnThread(threadParams) {
 if (ENVIRONMENT_IS_PTHREAD) throw "Internal Error! spawnThread() can only ever be called from main application thread!";
 var worker = PThread.getNewWorker();
 if (worker.pthread !== undefined) throw "Internal error!";
 if (!threadParams.pthread_ptr) throw "Internal error, no pthread ptr!";
 PThread.runningWorkers.push(worker);
 var tlsMemory = _malloc(128 * 4);
 for (var i = 0; i < 128; ++i) {
  GROWABLE_HEAP_I32()[tlsMemory + i * 4 >> 2] = 0;
 }
 var stackHigh = threadParams.stackBase + threadParams.stackSize;
 var pthread = PThread.pthreads[threadParams.pthread_ptr] = {
  worker: worker,
  stackBase: threadParams.stackBase,
  stackSize: threadParams.stackSize,
  allocatedOwnStack: threadParams.allocatedOwnStack,
  thread: threadParams.pthread_ptr,
  threadInfoStruct: threadParams.pthread_ptr
 };
 var tis = pthread.threadInfoStruct >> 2;
 Atomics.store(GROWABLE_HEAP_U32(), tis + (0 >> 2), 0);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (4 >> 2), 0);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (8 >> 2), 0);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (68 >> 2), threadParams.detached);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (104 >> 2), tlsMemory);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (48 >> 2), 0);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (40 >> 2), pthread.threadInfoStruct);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (44 >> 2), 42);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (108 >> 2), threadParams.stackSize);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (84 >> 2), threadParams.stackSize);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (80 >> 2), stackHigh);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (108 + 8 >> 2), stackHigh);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (108 + 12 >> 2), threadParams.detached);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (108 + 20 >> 2), threadParams.schedPolicy);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (108 + 24 >> 2), threadParams.schedPrio);
 var global_libc = _emscripten_get_global_libc();
 var global_locale = global_libc + 40;
 Atomics.store(GROWABLE_HEAP_U32(), tis + (176 >> 2), global_locale);
 worker.pthread = pthread;
 var msg = {
  "cmd": "run",
  "start_routine": threadParams.startRoutine,
  "arg": threadParams.arg,
  "threadInfoStruct": threadParams.pthread_ptr,
  "selfThreadId": threadParams.pthread_ptr,
  "parentThreadId": threadParams.parent_pthread_ptr,
  "stackBase": threadParams.stackBase,
  "stackSize": threadParams.stackSize
 };
 worker.runPthread = function() {
  msg.time = performance.now();
  worker.postMessage(msg, threadParams.transferList);
 };
 if (worker.loaded) {
  worker.runPthread();
  delete worker.runPthread;
 }
}

function _pthread_getschedparam(thread, policy, schedparam) {
 if (!policy && !schedparam) return ERRNO_CODES.EINVAL;
 if (!thread) {
  err("pthread_getschedparam called with a null thread pointer!");
  return ERRNO_CODES.ESRCH;
 }
 var self = GROWABLE_HEAP_I32()[thread + 12 >> 2];
 if (self !== thread) {
  err("pthread_getschedparam attempted on thread " + thread + ", which does not point to a valid thread, or does not exist anymore!");
  return ERRNO_CODES.ESRCH;
 }
 var schedPolicy = Atomics.load(GROWABLE_HEAP_U32(), thread + 108 + 20 >> 2);
 var schedPrio = Atomics.load(GROWABLE_HEAP_U32(), thread + 108 + 24 >> 2);
 if (policy) GROWABLE_HEAP_I32()[policy >> 2] = schedPolicy;
 if (schedparam) GROWABLE_HEAP_I32()[schedparam >> 2] = schedPrio;
 return 0;
}

function _pthread_self() {
 return __pthread_ptr | 0;
}

Module["_pthread_self"] = _pthread_self;

function resetPrototype(constructor, attrs) {
 var object = Object.create(constructor.prototype);
 for (var key in attrs) {
  if (attrs.hasOwnProperty(key)) {
   object[key] = attrs[key];
  }
 }
 return object;
}

function _pthread_create(pthread_ptr, attr, start_routine, arg) {
 if (typeof SharedArrayBuffer === "undefined") {
  err("Current environment does not support SharedArrayBuffer, pthreads are not available!");
  return 6;
 }
 if (!pthread_ptr) {
  err("pthread_create called with a null thread pointer!");
  return 28;
 }
 var transferList = [];
 var error = 0;
 if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
  return _emscripten_sync_run_in_main_thread_4(687865856, pthread_ptr, attr, start_routine, arg);
 }
 if (error) return error;
 var stackSize = 0;
 var stackBase = 0;
 var detached = 0;
 var schedPolicy = 0;
 var schedPrio = 0;
 if (attr) {
  stackSize = GROWABLE_HEAP_I32()[attr >> 2];
  stackSize += 81920;
  stackBase = GROWABLE_HEAP_I32()[attr + 8 >> 2];
  detached = GROWABLE_HEAP_I32()[attr + 12 >> 2] !== 0;
  var inheritSched = GROWABLE_HEAP_I32()[attr + 16 >> 2] === 0;
  if (inheritSched) {
   var prevSchedPolicy = GROWABLE_HEAP_I32()[attr + 20 >> 2];
   var prevSchedPrio = GROWABLE_HEAP_I32()[attr + 24 >> 2];
   var parentThreadPtr = PThread.currentProxiedOperationCallerThread ? PThread.currentProxiedOperationCallerThread : _pthread_self();
   _pthread_getschedparam(parentThreadPtr, attr + 20, attr + 24);
   schedPolicy = GROWABLE_HEAP_I32()[attr + 20 >> 2];
   schedPrio = GROWABLE_HEAP_I32()[attr + 24 >> 2];
   GROWABLE_HEAP_I32()[attr + 20 >> 2] = prevSchedPolicy;
   GROWABLE_HEAP_I32()[attr + 24 >> 2] = prevSchedPrio;
  } else {
   schedPolicy = GROWABLE_HEAP_I32()[attr + 20 >> 2];
   schedPrio = GROWABLE_HEAP_I32()[attr + 24 >> 2];
  }
 } else {
  stackSize = 2097152;
 }
 var allocatedOwnStack = stackBase == 0;
 if (allocatedOwnStack) {
  stackBase = _memalign(16, stackSize);
 } else {
  stackBase -= stackSize;
  assert(stackBase > 0);
 }
 var threadInfoStruct = _malloc(232);
 for (var i = 0; i < 232 >> 2; ++i) GROWABLE_HEAP_U32()[(threadInfoStruct >> 2) + i] = 0;
 GROWABLE_HEAP_I32()[pthread_ptr >> 2] = threadInfoStruct;
 GROWABLE_HEAP_I32()[threadInfoStruct + 12 >> 2] = threadInfoStruct;
 var headPtr = threadInfoStruct + 156;
 GROWABLE_HEAP_I32()[headPtr >> 2] = headPtr;
 var threadParams = {
  stackBase: stackBase,
  stackSize: stackSize,
  allocatedOwnStack: allocatedOwnStack,
  schedPolicy: schedPolicy,
  schedPrio: schedPrio,
  detached: detached,
  startRoutine: start_routine,
  pthread_ptr: threadInfoStruct,
  parent_pthread_ptr: _pthread_self(),
  arg: arg,
  transferList: transferList
 };
 if (ENVIRONMENT_IS_PTHREAD) {
  threadParams.cmd = "spawnThread";
  postMessage(threadParams, transferList);
 } else {
  spawnThread(threadParams);
 }
 return 0;
}

function _exit(status) {
 exit(status);
}

function _pthread_exit(status) {
 if (!ENVIRONMENT_IS_PTHREAD) _exit(status); else PThread.threadExit(status);
 if (ENVIRONMENT_IS_NODE) {
  process.exit(status);
 }
 throw "unwind";
}

function _setTempRet0($i) {
 setTempRet0($i | 0);
}

if (!ENVIRONMENT_IS_PTHREAD) PThread.initMainThreadBlock(); else PThread.initWorker();

if (!ENVIRONMENT_IS_PTHREAD) Fetch.staticInit();

var GLctx;

var proxiedFunctionTable = [ null, _atexit, _emscripten_set_canvas_element_size_main_thread, _fd_write ];

var ASSERTIONS = false;

function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

function intArrayToString(array) {
 var ret = [];
 for (var i = 0; i < array.length; i++) {
  var chr = array[i];
  if (chr > 255) {
   if (ASSERTIONS) {
    assert(false, "Character code " + chr + " (" + String.fromCharCode(chr) + ")  at offset " + i + " not in 0x00-0xFF.");
   }
   chr &= 255;
  }
  ret.push(String.fromCharCode(chr));
 }
 return ret.join("");
}

var asmGlobalArg = {};

var asmLibraryArg = {
 "__assert_fail": ___assert_fail,
 "__clock_gettime": ___clock_gettime,
 "__cxa_atexit": ___cxa_atexit,
 "_emscripten_fetch_free": __emscripten_fetch_free,
 "_emscripten_notify_thread_queue": __emscripten_notify_thread_queue,
 "abort": _abort,
 "emscripten_asm_const_async_on_main_thread_vii": _emscripten_asm_const_async_on_main_thread_vii,
 "emscripten_asm_const_iii": _emscripten_asm_const_iii,
 "emscripten_asm_const_sync_on_main_thread_iii": _emscripten_asm_const_sync_on_main_thread_iii,
 "emscripten_check_blocking_allowed": _emscripten_check_blocking_allowed,
 "emscripten_conditional_set_current_thread_status": _emscripten_conditional_set_current_thread_status,
 "emscripten_futex_wait": _emscripten_futex_wait,
 "emscripten_futex_wake": _emscripten_futex_wake,
 "emscripten_get_now": _emscripten_get_now,
 "emscripten_get_sbrk_ptr": _emscripten_get_sbrk_ptr,
 "emscripten_is_main_browser_thread": _emscripten_is_main_browser_thread,
 "emscripten_is_main_runtime_thread": _emscripten_is_main_runtime_thread,
 "emscripten_memcpy_big": _emscripten_memcpy_big,
 "emscripten_receive_on_main_thread_js": _emscripten_receive_on_main_thread_js,
 "emscripten_resize_heap": _emscripten_resize_heap,
 "emscripten_set_canvas_element_size": _emscripten_set_canvas_element_size,
 "emscripten_set_current_thread_status": _emscripten_set_current_thread_status,
 "emscripten_start_fetch": _emscripten_start_fetch,
 "emscripten_webgl_create_context": _emscripten_webgl_create_context,
 "fd_write": _fd_write,
 "initPthreadsJS": initPthreadsJS,
 "memory": wasmMemory,
 "pthread_cleanup_push": _pthread_cleanup_push,
 "pthread_create": _pthread_create,
 "pthread_exit": _pthread_exit,
 "pthread_self": _pthread_self,
 "setTempRet0": _setTempRet0,
 "table": wasmTable
};

var asm = createWasm();

var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
 return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

var __Z10canvasSizejjjj = Module["__Z10canvasSizejjjj"] = function() {
 return (__Z10canvasSizejjjj = Module["__Z10canvasSizejjjj"] = Module["asm"]["_Z10canvasSizejjjj"]).apply(null, arguments);
};

var __Z11setupRandomi = Module["__Z11setupRandomi"] = function() {
 return (__Z11setupRandomi = Module["__Z11setupRandomi"] = Module["asm"]["_Z11setupRandomi"]).apply(null, arguments);
};

var __Z3rndi = Module["__Z3rndi"] = function() {
 return (__Z3rndi = Module["__Z3rndi"] = Module["asm"]["_Z3rndi"]).apply(null, arguments);
};

var __Z9stpTactilb = Module["__Z9stpTactilb"] = function() {
 return (__Z9stpTactilb = Module["__Z9stpTactilb"] = Module["asm"]["_Z9stpTactilb"]).apply(null, arguments);
};

var __Z9setupZoomf = Module["__Z9setupZoomf"] = function() {
 return (__Z9setupZoomf = Module["__Z9setupZoomf"] = Module["asm"]["_Z9setupZoomf"]).apply(null, arguments);
};

var __Z12checkDelAnimj = Module["__Z12checkDelAnimj"] = function() {
 return (__Z12checkDelAnimj = Module["__Z12checkDelAnimj"] = Module["asm"]["_Z12checkDelAnimj"]).apply(null, arguments);
};

var __Z9onLimits2ii = Module["__Z9onLimits2ii"] = function() {
 return (__Z9onLimits2ii = Module["__Z9onLimits2ii"] = Module["asm"]["_Z9onLimits2ii"]).apply(null, arguments);
};

var __Z6gcyclev = Module["__Z6gcyclev"] = function() {
 return (__Z6gcyclev = Module["__Z6gcyclev"] = Module["asm"]["_Z6gcyclev"]).apply(null, arguments);
};

var __Z11Uint32Arrayj = Module["__Z11Uint32Arrayj"] = function() {
 return (__Z11Uint32Arrayj = Module["__Z11Uint32Arrayj"] = Module["asm"]["_Z11Uint32Arrayj"]).apply(null, arguments);
};

var __Z11Uint16Arrayj = Module["__Z11Uint16Arrayj"] = function() {
 return (__Z11Uint16Arrayj = Module["__Z11Uint16Arrayj"] = Module["asm"]["_Z11Uint16Arrayj"]).apply(null, arguments);
};

var __Z10Uint8Arrayj = Module["__Z10Uint8Arrayj"] = function() {
 return (__Z10Uint8Arrayj = Module["__Z10Uint8Arrayj"] = Module["asm"]["_Z10Uint8Arrayj"]).apply(null, arguments);
};

var __Z9boolArrayt = Module["__Z9boolArrayt"] = function() {
 return (__Z9boolArrayt = Module["__Z9boolArrayt"] = Module["asm"]["_Z9boolArrayt"]).apply(null, arguments);
};

var __Z7empNamej = Module["__Z7empNamej"] = function() {
 return (__Z7empNamej = Module["__Z7empNamej"] = Module["asm"]["_Z7empNamej"]).apply(null, arguments);
};

var __Z5empXYv = Module["__Z5empXYv"] = function() {
 return (__Z5empXYv = Module["__Z5empXYv"] = Module["asm"]["_Z5empXYv"]).apply(null, arguments);
};

var __Z5knValjjj = Module["__Z5knValjjj"] = function() {
 return (__Z5knValjjj = Module["__Z5knValjjj"] = Module["asm"]["_Z5knValjjj"]).apply(null, arguments);
};

var __Z7knAIValjj = Module["__Z7knAIValjj"] = function() {
 return (__Z7knAIValjj = Module["__Z7knAIValjj"] = Module["asm"]["_Z7knAIValjj"]).apply(null, arguments);
};

var __Z6equalkj = Module["__Z6equalkj"] = function() {
 return (__Z6equalkj = Module["__Z6equalkj"] = Module["asm"]["_Z6equalkj"]).apply(null, arguments);
};

var __Z12EDchangeTeamjj = Module["__Z12EDchangeTeamjj"] = function() {
 return (__Z12EDchangeTeamjj = Module["__Z12EDchangeTeamjj"] = Module["asm"]["_Z12EDchangeTeamjj"]).apply(null, arguments);
};

var __Z12EDchangeNamej = Module["__Z12EDchangeNamej"] = function() {
 return (__Z12EDchangeNamej = Module["__Z12EDchangeNamej"] = Module["asm"]["_Z12EDchangeNamej"]).apply(null, arguments);
};

var __Z11EDchangeResjjj = Module["__Z11EDchangeResjjj"] = function() {
 return (__Z11EDchangeResjjj = Module["__Z11EDchangeResjjj"] = Module["asm"]["_Z11EDchangeResjjj"]).apply(null, arguments);
};

var __Z6chTeamji = Module["__Z6chTeamji"] = function() {
 return (__Z6chTeamji = Module["__Z6chTeamji"] = Module["asm"]["_Z6chTeamji"]).apply(null, arguments);
};

var __Z10changeRaceji = Module["__Z10changeRaceji"] = function() {
 return (__Z10changeRaceji = Module["__Z10changeRaceji"] = Module["asm"]["_Z10changeRaceji"]).apply(null, arguments);
};

var __Z11changeColorjj = Module["__Z11changeColorjj"] = function() {
 return (__Z11changeColorjj = Module["__Z11changeColorjj"] = Module["asm"]["_Z11changeColorjj"]).apply(null, arguments);
};

var __Z13setupOnlTablej = Module["__Z13setupOnlTablej"] = function() {
 return (__Z13setupOnlTablej = Module["__Z13setupOnlTablej"] = Module["asm"]["_Z13setupOnlTablej"]).apply(null, arguments);
};

var __Z13tempointeraddj = Module["__Z13tempointeraddj"] = function() {
 return (__Z13tempointeraddj = Module["__Z13tempointeraddj"] = Module["asm"]["_Z13tempointeraddj"]).apply(null, arguments);
};

var __Z10setupOnlIDjbb = Module["__Z10setupOnlIDjbb"] = function() {
 return (__Z10setupOnlIDjbb = Module["__Z10setupOnlIDjbb"] = Module["asm"]["_Z10setupOnlIDjbb"]).apply(null, arguments);
};

var __Z10pidkingdomj = Module["__Z10pidkingdomj"] = function() {
 return (__Z10pidkingdomj = Module["__Z10pidkingdomj"] = Module["asm"]["_Z10pidkingdomj"]).apply(null, arguments);
};

var __Z6shwRCRj = Module["__Z6shwRCRj"] = function() {
 return (__Z6shwRCRj = Module["__Z6shwRCRj"] = Module["asm"]["_Z6shwRCRj"]).apply(null, arguments);
};

var __Z7onldataj = Module["__Z7onldataj"] = function() {
 return (__Z7onldataj = Module["__Z7onldataj"] = Module["asm"]["_Z7onldataj"]).apply(null, arguments);
};

var __Z12setupVersionjbb = Module["__Z12setupVersionjbb"] = function() {
 return (__Z12setupVersionjbb = Module["__Z12setupVersionjbb"] = Module["asm"]["_Z12setupVersionjbb"]).apply(null, arguments);
};

var __Z8mnameaddv = Module["__Z8mnameaddv"] = function() {
 return (__Z8mnameaddv = Module["__Z8mnameaddv"] = Module["asm"]["_Z8mnameaddv"]).apply(null, arguments);
};

var __Z8idddaminj = Module["__Z8idddaminj"] = function() {
 return (__Z8idddaminj = Module["__Z8idddaminj"] = Module["asm"]["_Z8idddaminj"]).apply(null, arguments);
};

var __Z9shareNamej = Module["__Z9shareNamej"] = function() {
 return (__Z9shareNamej = Module["__Z9shareNamej"] = Module["asm"]["_Z9shareNamej"]).apply(null, arguments);
};

var __Z8updtpingjj = Module["__Z8updtpingjj"] = function() {
 return (__Z8updtpingjj = Module["__Z8updtpingjj"] = Module["asm"]["_Z8updtpingjj"]).apply(null, arguments);
};

var __Z6sndNfov = Module["__Z6sndNfov"] = function() {
 return (__Z6sndNfov = Module["__Z6sndNfov"] = Module["asm"]["_Z6sndNfov"]).apply(null, arguments);
};

var __Z7updKngsj = Module["__Z7updKngsj"] = function() {
 return (__Z7updKngsj = Module["__Z7updKngsj"] = Module["asm"]["_Z7updKngsj"]).apply(null, arguments);
};

var __Z6updownji = Module["__Z6updownji"] = function() {
 return (__Z6updownji = Module["__Z6updownji"] = Module["asm"]["_Z6updownji"]).apply(null, arguments);
};

var __Z14onlineKingdomsv = Module["__Z14onlineKingdomsv"] = function() {
 return (__Z14onlineKingdomsv = Module["__Z14onlineKingdomsv"] = Module["asm"]["_Z14onlineKingdomsv"]).apply(null, arguments);
};

var __Z8userKickj = Module["__Z8userKickj"] = function() {
 return (__Z8userKickj = Module["__Z8userKickj"] = Module["asm"]["_Z8userKickj"]).apply(null, arguments);
};

var __Z6onlADDjjjjb = Module["__Z6onlADDjjjjb"] = function() {
 return (__Z6onlADDjjjjb = Module["__Z6onlADDjjjjb"] = Module["asm"]["_Z6onlADDjjjjb"]).apply(null, arguments);
};

var __Z10nameSharedPjS_j = Module["__Z10nameSharedPjS_j"] = function() {
 return (__Z10nameSharedPjS_j = Module["__Z10nameSharedPjS_j"] = Module["asm"]["_Z10nameSharedPjS_j"]).apply(null, arguments);
};

var __Z10rstrRNDmapj = Module["__Z10rstrRNDmapj"] = function() {
 return (__Z10rstrRNDmapj = Module["__Z10rstrRNDmapj"] = Module["asm"]["_Z10rstrRNDmapj"]).apply(null, arguments);
};

var __Z4nAIsv = Module["__Z4nAIsv"] = function() {
 return (__Z4nAIsv = Module["__Z4nAIsv"] = Module["asm"]["_Z4nAIsv"]).apply(null, arguments);
};

var __Z8onlCountv = Module["__Z8onlCountv"] = function() {
 return (__Z8onlCountv = Module["__Z8onlCountv"] = Module["asm"]["_Z8onlCountv"]).apply(null, arguments);
};

var __Z9closeRoomv = Module["__Z9closeRoomv"] = function() {
 return (__Z9closeRoomv = Module["__Z9closeRoomv"] = Module["asm"]["_Z9closeRoomv"]).apply(null, arguments);
};

var __Z12deletePlayerjb = Module["__Z12deletePlayerjb"] = function() {
 return (__Z12deletePlayerjb = Module["__Z12deletePlayerjb"] = Module["asm"]["_Z12deletePlayerjb"]).apply(null, arguments);
};

var __Z10tempstraddv = Module["__Z10tempstraddv"] = function() {
 return (__Z10tempstraddv = Module["__Z10tempstraddv"] = Module["asm"]["_Z10tempstraddv"]).apply(null, arguments);
};

var __Z8liveChatjj = Module["__Z8liveChatjj"] = function() {
 return (__Z8liveChatjj = Module["__Z8liveChatjj"] = Module["asm"]["_Z8liveChatjj"]).apply(null, arguments);
};

var __Z8gstartedv = Module["__Z8gstartedv"] = function() {
 return (__Z8gstartedv = Module["__Z8gstartedv"] = Module["asm"]["_Z8gstartedv"]).apply(null, arguments);
};

var __Z14randomKingdomsi = Module["__Z14randomKingdomsi"] = function() {
 return (__Z14randomKingdomsi = Module["__Z14randomKingdomsi"] = Module["asm"]["_Z14randomKingdomsi"]).apply(null, arguments);
};

var __Z6nfolenv = Module["__Z6nfolenv"] = function() {
 return (__Z6nfolenv = Module["__Z6nfolenv"] = Module["asm"]["_Z6nfolenv"]).apply(null, arguments);
};

var __Z9stmenummxi = Module["__Z9stmenummxi"] = function() {
 return (__Z9stmenummxi = Module["__Z9stmenummxi"] = Module["asm"]["_Z9stmenummxi"]).apply(null, arguments);
};

var __Z16setupTranslationjj = Module["__Z16setupTranslationjj"] = function() {
 return (__Z16setupTranslationjj = Module["__Z16setupTranslationjj"] = Module["asm"]["_Z16setupTranslationjj"]).apply(null, arguments);
};

var __Z10checkStockb = Module["__Z10checkStockb"] = function() {
 return (__Z10checkStockb = Module["__Z10checkStockb"] = Module["asm"]["_Z10checkStockb"]).apply(null, arguments);
};

var __Z11movtableADDjjjj = Module["__Z11movtableADDjjjj"] = function() {
 return (__Z11movtableADDjjjj = Module["__Z11movtableADDjjjj"] = Module["asm"]["_Z11movtableADDjjjj"]).apply(null, arguments);
};

var __Z6amountv = Module["__Z6amountv"] = function() {
 return (__Z6amountv = Module["__Z6amountv"] = Module["asm"]["_Z6amountv"]).apply(null, arguments);
};

var __Z8mwamounti = Module["__Z8mwamounti"] = function() {
 return (__Z8mwamounti = Module["__Z8mwamounti"] = Module["asm"]["_Z8mwamounti"]).apply(null, arguments);
};

var __Z6mwiconv = Module["__Z6mwiconv"] = function() {
 return (__Z6mwiconv = Module["__Z6mwiconv"] = Module["asm"]["_Z6mwiconv"]).apply(null, arguments);
};

var __Z8mwSelectj = Module["__Z8mwSelectj"] = function() {
 return (__Z8mwSelectj = Module["__Z8mwSelectj"] = Module["asm"]["_Z8mwSelectj"]).apply(null, arguments);
};

var __Z6mwMorei = Module["__Z6mwMorei"] = function() {
 return (__Z6mwMorei = Module["__Z6mwMorei"] = Module["asm"]["_Z6mwMorei"]).apply(null, arguments);
};

var __Z11createItemsv = Module["__Z11createItemsv"] = function() {
 return (__Z11createItemsv = Module["__Z11createItemsv"] = Module["asm"]["_Z11createItemsv"]).apply(null, arguments);
};

var __Z10strtradingv = Module["__Z10strtradingv"] = function() {
 return (__Z10strtradingv = Module["__Z10strtradingv"] = Module["asm"]["_Z10strtradingv"]).apply(null, arguments);
};

var __Z13selectoridestb = Module["__Z13selectoridestb"] = function() {
 return (__Z13selectoridestb = Module["__Z13selectoridestb"] = Module["asm"]["_Z13selectoridestb"]).apply(null, arguments);
};

var __Z10tradingsumi = Module["__Z10tradingsumi"] = function() {
 return (__Z10tradingsumi = Module["__Z10tradingsumi"] = Module["asm"]["_Z10tradingsumi"]).apply(null, arguments);
};

var __Z12tradingresumib = Module["__Z12tradingresumib"] = function() {
 return (__Z12tradingresumib = Module["__Z12tradingresumib"] = Module["asm"]["_Z12tradingresumib"]).apply(null, arguments);
};

var __Z9ginfonamejj = Module["__Z9ginfonamejj"] = function() {
 return (__Z9ginfonamejj = Module["__Z9ginfonamejj"] = Module["asm"]["_Z9ginfonamejj"]).apply(null, arguments);
};

var __Z17refreshPlayerInfov = Module["__Z17refreshPlayerInfov"] = function() {
 return (__Z17refreshPlayerInfov = Module["__Z17refreshPlayerInfov"] = Module["asm"]["_Z17refreshPlayerInfov"]).apply(null, arguments);
};

var __Z9RNDobjexpv = Module["__Z9RNDobjexpv"] = function() {
 return (__Z9RNDobjexpv = Module["__Z9RNDobjexpv"] = Module["asm"]["_Z9RNDobjexpv"]).apply(null, arguments);
};

var __Z8prvbuildv = Module["__Z8prvbuildv"] = function() {
 return (__Z8prvbuildv = Module["__Z8prvbuildv"] = Module["asm"]["_Z8prvbuildv"]).apply(null, arguments);
};

var __Z9RNDdeletej = Module["__Z9RNDdeletej"] = function() {
 return (__Z9RNDdeletej = Module["__Z9RNDdeletej"] = Module["asm"]["_Z9RNDdeletej"]).apply(null, arguments);
};

var __Z10stprndobjsj = Module["__Z10stprndobjsj"] = function() {
 return (__Z10stprndobjsj = Module["__Z10stprndobjsj"] = Module["asm"]["_Z10stprndobjsj"]).apply(null, arguments);
};

var __Z9addRNDobjv = Module["__Z9addRNDobjv"] = function() {
 return (__Z9addRNDobjv = Module["__Z9addRNDobjv"] = Module["asm"]["_Z9addRNDobjv"]).apply(null, arguments);
};

var __Z13updateRNDtypejj = Module["__Z13updateRNDtypejj"] = function() {
 return (__Z13updateRNDtypejj = Module["__Z13updateRNDtypejj"] = Module["asm"]["_Z13updateRNDtypejj"]).apply(null, arguments);
};

var __Z16updateRNDkingdomjj = Module["__Z16updateRNDkingdomjj"] = function() {
 return (__Z16updateRNDkingdomjj = Module["__Z16updateRNDkingdomjj"] = Module["asm"]["_Z16updateRNDkingdomjj"]).apply(null, arguments);
};

var __Z15updateRNDnumberjj = Module["__Z15updateRNDnumberjj"] = function() {
 return (__Z15updateRNDnumberjj = Module["__Z15updateRNDnumberjj"] = Module["asm"]["_Z15updateRNDnumberjj"]).apply(null, arguments);
};

var __Z16updateRNDeach256jj = Module["__Z16updateRNDeach256jj"] = function() {
 return (__Z16updateRNDeach256jj = Module["__Z16updateRNDeach256jj"] = Module["asm"]["_Z16updateRNDeach256jj"]).apply(null, arguments);
};

var __Z8EDbrush0ib = Module["__Z8EDbrush0ib"] = function() {
 return (__Z8EDbrush0ib = Module["__Z8EDbrush0ib"] = Module["asm"]["_Z8EDbrush0ib"]).apply(null, arguments);
};

var __Z11EDbrushstopv = Module["__Z11EDbrushstopv"] = function() {
 return (__Z11EDbrushstopv = Module["__Z11EDbrushstopv"] = Module["asm"]["_Z11EDbrushstopv"]).apply(null, arguments);
};

var __Z10EDbrushchsi = Module["__Z10EDbrushchsi"] = function() {
 return (__Z10EDbrushchsi = Module["__Z10EDbrushchsi"] = Module["asm"]["_Z10EDbrushchsi"]).apply(null, arguments);
};

var __Z10EDbrushMrgi = Module["__Z10EDbrushMrgi"] = function() {
 return (__Z10EDbrushMrgi = Module["__Z10EDbrushMrgi"] = Module["asm"]["_Z10EDbrushMrgi"]).apply(null, arguments);
};

var __Z10EDbrushchdi = Module["__Z10EDbrushchdi"] = function() {
 return (__Z10EDbrushchdi = Module["__Z10EDbrushchdi"] = Module["asm"]["_Z10EDbrushchdi"]).apply(null, arguments);
};

var __Z13EDchangeColorjj = Module["__Z13EDchangeColorjj"] = function() {
 return (__Z13EDchangeColorjj = Module["__Z13EDchangeColorjj"] = Module["asm"]["_Z13EDchangeColorjj"]).apply(null, arguments);
};

var __Z11showrndobjsv = Module["__Z11showrndobjsv"] = function() {
 return (__Z11showrndobjsv = Module["__Z11showrndobjsv"] = Module["asm"]["_Z11showrndobjsv"]).apply(null, arguments);
};

var __Z9getordersj = Module["__Z9getordersj"] = function() {
 return (__Z9getordersj = Module["__Z9getordersj"] = Module["asm"]["_Z9getordersj"]).apply(null, arguments);
};

var __Z10setupGuidev = Module["__Z10setupGuidev"] = function() {
 return (__Z10setupGuidev = Module["__Z10setupGuidev"] = Module["asm"]["_Z10setupGuidev"]).apply(null, arguments);
};

var __Z10userConfigj = Module["__Z10userConfigj"] = function() {
 return (__Z10userConfigj = Module["__Z10userConfigj"] = Module["asm"]["_Z10userConfigj"]).apply(null, arguments);
};

var __Z6prelddv = Module["__Z6prelddv"] = function() {
 return (__Z6prelddv = Module["__Z6prelddv"] = Module["asm"]["_Z6prelddv"]).apply(null, arguments);
};

var __Z6chterrj = Module["__Z6chterrj"] = function() {
 return (__Z6chterrj = Module["__Z6chterrj"] = Module["asm"]["_Z6chterrj"]).apply(null, arguments);
};

var __Z10getTerrainv = Module["__Z10getTerrainv"] = function() {
 return (__Z10getTerrainv = Module["__Z10getTerrainv"] = Module["asm"]["_Z10getTerrainv"]).apply(null, arguments);
};

var __Z15unitSearchValidjjj = Module["__Z15unitSearchValidjjj"] = function() {
 return (__Z15unitSearchValidjjj = Module["__Z15unitSearchValidjjj"] = Module["asm"]["_Z15unitSearchValidjjj"]).apply(null, arguments);
};

var __Z7plreadyv = Module["__Z7plreadyv"] = function() {
 return (__Z7plreadyv = Module["__Z7plreadyv"] = Module["asm"]["_Z7plreadyv"]).apply(null, arguments);
};

var __Z9setupGamejjjjjjjjjjjjjjjjjjjj = Module["__Z9setupGamejjjjjjjjjjjjjjjjjjjj"] = function() {
 return (__Z9setupGamejjjjjjjjjjjjjjjjjjjj = Module["__Z9setupGamejjjjjjjjjjjjjjjjjjjj"] = Module["asm"]["_Z9setupGamejjjjjjjjjjjjjjjjjjjj"]).apply(null, arguments);
};

var __Z15configRandomMapv = Module["__Z15configRandomMapv"] = function() {
 return (__Z15configRandomMapv = Module["__Z15configRandomMapv"] = Module["asm"]["_Z15configRandomMapv"]).apply(null, arguments);
};

var __Z5knamej = Module["__Z5knamej"] = function() {
 return (__Z5knamej = Module["__Z5knamej"] = Module["asm"]["_Z5knamej"]).apply(null, arguments);
};

var __Z3mykv = Module["__Z3mykv"] = function() {
 return (__Z3mykv = Module["__Z3mykv"] = Module["asm"]["_Z3mykv"]).apply(null, arguments);
};

var __Z4cmykj = Module["__Z4cmykj"] = function() {
 return (__Z4cmykj = Module["__Z4cmykj"] = Module["asm"]["_Z4cmykj"]).apply(null, arguments);
};

var __Z7EDbuildj = Module["__Z7EDbuildj"] = function() {
 return (__Z7EDbuildj = Module["__Z7EDbuildj"] = Module["asm"]["_Z7EDbuildj"]).apply(null, arguments);
};

var __Z16addEditorKingdomj = Module["__Z16addEditorKingdomj"] = function() {
 return (__Z16addEditorKingdomj = Module["__Z16addEditorKingdomj"] = Module["asm"]["_Z16addEditorKingdomj"]).apply(null, arguments);
};

var __Z16delEditorKingdomj = Module["__Z16delEditorKingdomj"] = function() {
 return (__Z16delEditorKingdomj = Module["__Z16delEditorKingdomj"] = Module["asm"]["_Z16delEditorKingdomj"]).apply(null, arguments);
};

var __Z13startMovementv = Module["__Z13startMovementv"] = function() {
 return (__Z13startMovementv = Module["__Z13startMovementv"] = Module["asm"]["_Z13startMovementv"]).apply(null, arguments);
};

var __Z10removeAnimjj = Module["__Z10removeAnimjj"] = function() {
 return (__Z10removeAnimjj = Module["__Z10removeAnimjj"] = Module["asm"]["_Z10removeAnimjj"]).apply(null, arguments);
};

var __Z6dbgspdj = Module["__Z6dbgspdj"] = function() {
 return (__Z6dbgspdj = Module["__Z6dbgspdj"] = Module["asm"]["_Z6dbgspdj"]).apply(null, arguments);
};

var __Z11synchroHashv = Module["__Z11synchroHashv"] = function() {
 return (__Z11synchroHashv = Module["__Z11synchroHashv"] = Module["asm"]["_Z11synchroHashv"]).apply(null, arguments);
};

var __Z6pause0v = Module["__Z6pause0v"] = function() {
 return (__Z6pause0v = Module["__Z6pause0v"] = Module["asm"]["_Z6pause0v"]).apply(null, arguments);
};

var __Z7resume0v = Module["__Z7resume0v"] = function() {
 return (__Z7resume0v = Module["__Z7resume0v"] = Module["asm"]["_Z7resume0v"]).apply(null, arguments);
};

var __Z11kngremainngj = Module["__Z11kngremainngj"] = function() {
 return (__Z11kngremainngj = Module["__Z11kngremainngj"] = Module["asm"]["_Z11kngremainngj"]).apply(null, arguments);
};

var __Z15delAsyncPointerj = Module["__Z15delAsyncPointerj"] = function() {
 return (__Z15delAsyncPointerj = Module["__Z15delAsyncPointerj"] = Module["asm"]["_Z15delAsyncPointerj"]).apply(null, arguments);
};

var __Z10runnxtcyclv = Module["__Z10runnxtcyclv"] = function() {
 return (__Z10runnxtcyclv = Module["__Z10runnxtcyclv"] = Module["asm"]["_Z10runnxtcyclv"]).apply(null, arguments);
};

var __Z8wrkstatev = Module["__Z8wrkstatev"] = function() {
 return (__Z8wrkstatev = Module["__Z8wrkstatev"] = Module["asm"]["_Z8wrkstatev"]).apply(null, arguments);
};

var __Z7chtgspdj = Module["__Z7chtgspdj"] = function() {
 return (__Z7chtgspdj = Module["__Z7chtgspdj"] = Module["asm"]["_Z7chtgspdj"]).apply(null, arguments);
};

var __Z7svggamev = Module["__Z7svggamev"] = function() {
 return (__Z7svggamev = Module["__Z7svggamev"] = Module["asm"]["_Z7svggamev"]).apply(null, arguments);
};

var __Z10movtablexev = Module["__Z10movtablexev"] = function() {
 return (__Z10movtablexev = Module["__Z10movtablexev"] = Module["asm"]["_Z10movtablexev"]).apply(null, arguments);
};

var __Z7mouseUpiijjbbbb = Module["__Z7mouseUpiijjbbbb"] = function() {
 return (__Z7mouseUpiijjbbbb = Module["__Z7mouseUpiijjbbbb"] = Module["asm"]["_Z7mouseUpiijjbbbb"]).apply(null, arguments);
};

var __Z9mouseMoveiib = Module["__Z9mouseMoveiib"] = function() {
 return (__Z9mouseMoveiib = Module["__Z9mouseMoveiib"] = Module["asm"]["_Z9mouseMoveiib"]).apply(null, arguments);
};

var __Z6runKeyjb = Module["__Z6runKeyjb"] = function() {
 return (__Z6runKeyjb = Module["__Z6runKeyjb"] = Module["asm"]["_Z6runKeyjb"]).apply(null, arguments);
};

var __Z12executeOrderjj = Module["__Z12executeOrderjj"] = function() {
 return (__Z12executeOrderjj = Module["__Z12executeOrderjj"] = Module["asm"]["_Z12executeOrderjj"]).apply(null, arguments);
};

var __Z7wardgofv = Module["__Z7wardgofv"] = function() {
 return (__Z7wardgofv = Module["__Z7wardgofv"] = Module["asm"]["_Z7wardgofv"]).apply(null, arguments);
};

var __Z14setupResourcesjjjjt = Module["__Z14setupResourcesjjjjt"] = function() {
 return (__Z14setupResourcesjjjjt = Module["__Z14setupResourcesjjjjt"] = Module["asm"]["_Z14setupResourcesjjjjt"]).apply(null, arguments);
};

var __Z10searchUnitth = Module["__Z10searchUnitth"] = function() {
 return (__Z10searchUnitth = Module["__Z10searchUnitth"] = Module["asm"]["_Z10searchUnitth"]).apply(null, arguments);
};

var __Z6sndCnfb = Module["__Z6sndCnfb"] = function() {
 return (__Z6sndCnfb = Module["__Z6sndCnfb"] = Module["asm"]["_Z6sndCnfb"]).apply(null, arguments);
};

var __Z13sharedFloatIDv = Module["__Z13sharedFloatIDv"] = function() {
 return (__Z13sharedFloatIDv = Module["__Z13sharedFloatIDv"] = Module["asm"]["_Z13sharedFloatIDv"]).apply(null, arguments);
};

var __Z13sharedDelayIDv = Module["__Z13sharedDelayIDv"] = function() {
 return (__Z13sharedDelayIDv = Module["__Z13sharedDelayIDv"] = Module["asm"]["_Z13sharedDelayIDv"]).apply(null, arguments);
};

var __Z12bufferMarginfffjf = Module["__Z12bufferMarginfffjf"] = function() {
 return (__Z12bufferMarginfffjf = Module["__Z12bufferMarginfffjf"] = Module["asm"]["_Z12bufferMarginfffjf"]).apply(null, arguments);
};

var __Z11getBufferIDv = Module["__Z11getBufferIDv"] = function() {
 return (__Z11getBufferIDv = Module["__Z11getBufferIDv"] = Module["asm"]["_Z11getBufferIDv"]).apply(null, arguments);
};

var __Z8shapointv = Module["__Z8shapointv"] = function() {
 return (__Z8shapointv = Module["__Z8shapointv"] = Module["asm"]["_Z8shapointv"]).apply(null, arguments);
};

var __Z4testjj = Module["__Z4testjj"] = function() {
 return (__Z4testjj = Module["__Z4testjj"] = Module["asm"]["_Z4testjj"]).apply(null, arguments);
};

var __Z5vsbltv = Module["__Z5vsbltv"] = function() {
 return (__Z5vsbltv = Module["__Z5vsbltv"] = Module["asm"]["_Z5vsbltv"]).apply(null, arguments);
};

var __Z9setupOdinj = Module["__Z9setupOdinj"] = function() {
 return (__Z9setupOdinj = Module["__Z9setupOdinj"] = Module["asm"]["_Z9setupOdinj"]).apply(null, arguments);
};

var __Z8nkingdomv = Module["__Z8nkingdomv"] = function() {
 return (__Z8nkingdomv = Module["__Z8nkingdomv"] = Module["asm"]["_Z8nkingdomv"]).apply(null, arguments);
};

var __Z14customMapTablev = Module["__Z14customMapTablev"] = function() {
 return (__Z14customMapTablev = Module["__Z14customMapTablev"] = Module["asm"]["_Z14customMapTablev"]).apply(null, arguments);
};

var __Z12updresourcesv = Module["__Z12updresourcesv"] = function() {
 return (__Z12updresourcesv = Module["__Z12updresourcesv"] = Module["asm"]["_Z12updresourcesv"]).apply(null, arguments);
};

var __Z16EDgetTerrainInfov = Module["__Z16EDgetTerrainInfov"] = function() {
 return (__Z16EDgetTerrainInfov = Module["__Z16EDgetTerrainInfov"] = Module["asm"]["_Z16EDgetTerrainInfov"]).apply(null, arguments);
};

var __Z13resetGLbufferv = Module["__Z13resetGLbufferv"] = function() {
 return (__Z13resetGLbufferv = Module["__Z13resetGLbufferv"] = Module["asm"]["_Z13resetGLbufferv"]).apply(null, arguments);
};

var __Z7adpterrv = Module["__Z7adpterrv"] = function() {
 return (__Z7adpterrv = Module["__Z7adpterrv"] = Module["asm"]["_Z7adpterrv"]).apply(null, arguments);
};

var __Z13configTerrainb = Module["__Z13configTerrainb"] = function() {
 return (__Z13configTerrainb = Module["__Z13configTerrainb"] = Module["asm"]["_Z13configTerrainb"]).apply(null, arguments);
};

var __Z9chmapsizei = Module["__Z9chmapsizei"] = function() {
 return (__Z9chmapsizei = Module["__Z9chmapsizei"] = Module["asm"]["_Z9chmapsizei"]).apply(null, arguments);
};

var __Z13randomTerrainj = Module["__Z13randomTerrainj"] = function() {
 return (__Z13randomTerrainj = Module["__Z13randomTerrainj"] = Module["asm"]["_Z13randomTerrainj"]).apply(null, arguments);
};

var __Z6trraddv = Module["__Z6trraddv"] = function() {
 return (__Z6trraddv = Module["__Z6trraddv"] = Module["asm"]["_Z6trraddv"]).apply(null, arguments);
};

var __Z5test3jj = Module["__Z5test3jj"] = function() {
 return (__Z5test3jj = Module["__Z5test3jj"] = Module["asm"]["_Z5test3jj"]).apply(null, arguments);
};

var __Z7setupGLfjj = Module["__Z7setupGLfjj"] = function() {
 return (__Z7setupGLfjj = Module["__Z7setupGLfjj"] = Module["asm"]["_Z7setupGLfjj"]).apply(null, arguments);
};

var __Z15getColorTexturev = Module["__Z15getColorTexturev"] = function() {
 return (__Z15getColorTexturev = Module["__Z15getColorTexturev"] = Module["asm"]["_Z15getColorTexturev"]).apply(null, arguments);
};

var __Z10changePagei = Module["__Z10changePagei"] = function() {
 return (__Z10changePagei = Module["__Z10changePagei"] = Module["asm"]["_Z10changePagei"]).apply(null, arguments);
};

var __Z7getPagev = Module["__Z7getPagev"] = function() {
 return (__Z7getPagev = Module["__Z7getPagev"] = Module["asm"]["_Z7getPagev"]).apply(null, arguments);
};

var __Z9menustatej = Module["__Z9menustatej"] = function() {
 return (__Z9menustatej = Module["__Z9menustatej"] = Module["asm"]["_Z9menustatej"]).apply(null, arguments);
};

var __Z7svpropsiiiiiii = Module["__Z7svpropsiiiiiii"] = function() {
 return (__Z7svpropsiiiiiii = Module["__Z7svpropsiiiiiii"] = Module["asm"]["_Z7svpropsiiiiiii"]).apply(null, arguments);
};

var __Z9mouseDowniij = Module["__Z9mouseDowniij"] = function() {
 return (__Z9mouseDowniij = Module["__Z9mouseDowniij"] = Module["asm"]["_Z9mouseDowniij"]).apply(null, arguments);
};

var __Z10touchStartjj = Module["__Z10touchStartjj"] = function() {
 return (__Z10touchStartjj = Module["__Z10touchStartjj"] = Module["asm"]["_Z10touchStartjj"]).apply(null, arguments);
};

var __Z9touchMovejj = Module["__Z9touchMovejj"] = function() {
 return (__Z9touchMovejj = Module["__Z9touchMovejj"] = Module["asm"]["_Z9touchMovejj"]).apply(null, arguments);
};

var __Z8touchEndjj = Module["__Z8touchEndjj"] = function() {
 return (__Z8touchEndjj = Module["__Z8touchEndjj"] = Module["asm"]["_Z8touchEndjj"]).apply(null, arguments);
};

var __Z8mouseOutj = Module["__Z8mouseOutj"] = function() {
 return (__Z8mouseOutj = Module["__Z8mouseOutj"] = Module["asm"]["_Z8mouseOutj"]).apply(null, arguments);
};

var __Z10mouseEnterj = Module["__Z10mouseEnterj"] = function() {
 return (__Z10mouseEnterj = Module["__Z10mouseEnterj"] = Module["asm"]["_Z10mouseEnterj"]).apply(null, arguments);
};

var __Z9peacetimev = Module["__Z9peacetimev"] = function() {
 return (__Z9peacetimev = Module["__Z9peacetimev"] = Module["asm"]["_Z9peacetimev"]).apply(null, arguments);
};

var __Z6rndResv = Module["__Z6rndResv"] = function() {
 return (__Z6rndResv = Module["__Z6rndResv"] = Module["asm"]["_Z6rndResv"]).apply(null, arguments);
};

var __Z9rndforestv = Module["__Z9rndforestv"] = function() {
 return (__Z9rndforestv = Module["__Z9rndforestv"] = Module["asm"]["_Z9rndforestv"]).apply(null, arguments);
};

var __Z12plymapeditorv = Module["__Z12plymapeditorv"] = function() {
 return (__Z12plymapeditorv = Module["__Z12plymapeditorv"] = Module["asm"]["_Z12plymapeditorv"]).apply(null, arguments);
};

var __Z5test2jjj = Module["__Z5test2jjj"] = function() {
 return (__Z5test2jjj = Module["__Z5test2jjj"] = Module["asm"]["_Z5test2jjj"]).apply(null, arguments);
};

var __Z8savegamev = Module["__Z8savegamev"] = function() {
 return (__Z8savegamev = Module["__Z8savegamev"] = Module["asm"]["_Z8savegamev"]).apply(null, arguments);
};

var __Z7nh19addj = Module["__Z7nh19addj"] = function() {
 return (__Z7nh19addj = Module["__Z7nh19addj"] = Module["asm"]["_Z7nh19addj"]).apply(null, arguments);
};

var __Z6nhcompv = Module["__Z6nhcompv"] = function() {
 return (__Z6nhcompv = Module["__Z6nhcompv"] = Module["asm"]["_Z6nhcompv"]).apply(null, arguments);
};

var __Z7delTexsv = Module["__Z7delTexsv"] = function() {
 return (__Z7delTexsv = Module["__Z7delTexsv"] = Module["asm"]["_Z7delTexsv"]).apply(null, arguments);
};

var __Z11sstextStartj = Module["__Z11sstextStartj"] = function() {
 return (__Z11sstextStartj = Module["__Z11sstextStartj"] = Module["asm"]["_Z11sstextStartj"]).apply(null, arguments);
};

var __Z6naddssj = Module["__Z6naddssj"] = function() {
 return (__Z6naddssj = Module["__Z6naddssj"] = Module["asm"]["_Z6naddssj"]).apply(null, arguments);
};

var __Z7n2addssj = Module["__Z7n2addssj"] = function() {
 return (__Z7n2addssj = Module["__Z7n2addssj"] = Module["asm"]["_Z7n2addssj"]).apply(null, arguments);
};

var __Z7ss1textiiiiiiiiijb = Module["__Z7ss1textiiiiiiiiijb"] = function() {
 return (__Z7ss1textiiiiiiiiijb = Module["__Z7ss1textiiiiiiiiijb"] = Module["asm"]["_Z7ss1textiiiiiiiiijb"]).apply(null, arguments);
};

var __Z7readSUPP18emscripten_fetch_t = Module["__Z7readSUPP18emscripten_fetch_t"] = function() {
 return (__Z7readSUPP18emscripten_fetch_t = Module["__Z7readSUPP18emscripten_fetch_t"] = Module["asm"]["_Z7readSUPP18emscripten_fetch_t"]).apply(null, arguments);
};

var __Z11downloadGrabjj = Module["__Z11downloadGrabjj"] = function() {
 return (__Z11downloadGrabjj = Module["__Z11downloadGrabjj"] = Module["asm"]["_Z11downloadGrabjj"]).apply(null, arguments);
};

var __Z7txtLoadv = Module["__Z7txtLoadv"] = function() {
 return (__Z7txtLoadv = Module["__Z7txtLoadv"] = Module["asm"]["_Z7txtLoadv"]).apply(null, arguments);
};

var __Z11setupEditorv = Module["__Z11setupEditorv"] = function() {
 return (__Z11setupEditorv = Module["__Z11setupEditorv"] = Module["asm"]["_Z11setupEditorv"]).apply(null, arguments);
};

var __Z8wtrcheckv = Module["__Z8wtrcheckv"] = function() {
 return (__Z8wtrcheckv = Module["__Z8wtrcheckv"] = Module["asm"]["_Z8wtrcheckv"]).apply(null, arguments);
};

var __Z8preSetupj = Module["__Z8preSetupj"] = function() {
 return (__Z8preSetupj = Module["__Z8preSetupj"] = Module["asm"]["_Z8preSetupj"]).apply(null, arguments);
};

var __Z10fullRNDmapb = Module["__Z10fullRNDmapb"] = function() {
 return (__Z10fullRNDmapb = Module["__Z10fullRNDmapb"] = Module["asm"]["_Z10fullRNDmapb"]).apply(null, arguments);
};

var __Z14editorKingdomsv = Module["__Z14editorKingdomsv"] = function() {
 return (__Z14editorKingdomsv = Module["__Z14editorKingdomsv"] = Module["asm"]["_Z14editorKingdomsv"]).apply(null, arguments);
};

var __Z4krgbj = Module["__Z4krgbj"] = function() {
 return (__Z4krgbj = Module["__Z4krgbj"] = Module["asm"]["_Z4krgbj"]).apply(null, arguments);
};

var __Z7crtStxtv = Module["__Z7crtStxtv"] = function() {
 return (__Z7crtStxtv = Module["__Z7crtStxtv"] = Module["asm"]["_Z7crtStxtv"]).apply(null, arguments);
};

var __Z8superLenv = Module["__Z8superLenv"] = function() {
 return (__Z8superLenv = Module["__Z8superLenv"] = Module["asm"]["_Z8superLenv"]).apply(null, arguments);
};

var __Z5nhlenv = Module["__Z5nhlenv"] = function() {
 return (__Z5nhlenv = Module["__Z5nhlenv"] = Module["asm"]["_Z5nhlenv"]).apply(null, arguments);
};

var __Z14finishSavegamev = Module["__Z14finishSavegamev"] = function() {
 return (__Z14finishSavegamev = Module["__Z14finishSavegamev"] = Module["asm"]["_Z14finishSavegamev"]).apply(null, arguments);
};

var __Z8mapWidthv = Module["__Z8mapWidthv"] = function() {
 return (__Z8mapWidthv = Module["__Z8mapWidthv"] = Module["asm"]["_Z8mapWidthv"]).apply(null, arguments);
};

var __Z13mapVisibilityv = Module["__Z13mapVisibilityv"] = function() {
 return (__Z13mapVisibilityv = Module["__Z13mapVisibilityv"] = Module["asm"]["_Z13mapVisibilityv"]).apply(null, arguments);
};

var __Z12chvisibilityj = Module["__Z12chvisibilityj"] = function() {
 return (__Z12chvisibilityj = Module["__Z12chvisibilityj"] = Module["asm"]["_Z12chvisibilityj"]).apply(null, arguments);
};

var __Z13readSavegame0j = Module["__Z13readSavegame0j"] = function() {
 return (__Z13readSavegame0j = Module["__Z13readSavegame0j"] = Module["asm"]["_Z13readSavegame0j"]).apply(null, arguments);
};

var __Z6strOnlv = Module["__Z6strOnlv"] = function() {
 return (__Z6strOnlv = Module["__Z6strOnlv"] = Module["asm"]["_Z6strOnlv"]).apply(null, arguments);
};

var __Z7readSVGmmj = Module["__Z7readSVGmmj"] = function() {
 return (__Z7readSVGmmj = Module["__Z7readSVGmmj"] = Module["asm"]["_Z7readSVGmmj"]).apply(null, arguments);
};

var __Z15playerReconnectj = Module["__Z15playerReconnectj"] = function() {
 return (__Z15playerReconnectj = Module["__Z15playerReconnectj"] = Module["asm"]["_Z15playerReconnectj"]).apply(null, arguments);
};

var __Z4pongv = Module["__Z4pongv"] = function() {
 return (__Z4pongv = Module["__Z4pongv"] = Module["asm"]["_Z4pongv"]).apply(null, arguments);
};

var _main = Module["_main"] = function() {
 return (_main = Module["_main"] = Module["asm"]["main"]).apply(null, arguments);
};

var _malloc = Module["_malloc"] = function() {
 return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
};

var _free = Module["_free"] = function() {
 return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
};

var ___errno_location = Module["___errno_location"] = function() {
 return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
};

var _emscripten_get_global_libc = Module["_emscripten_get_global_libc"] = function() {
 return (_emscripten_get_global_libc = Module["_emscripten_get_global_libc"] = Module["asm"]["emscripten_get_global_libc"]).apply(null, arguments);
};

var ___emscripten_pthread_data_constructor = Module["___emscripten_pthread_data_constructor"] = function() {
 return (___emscripten_pthread_data_constructor = Module["___emscripten_pthread_data_constructor"] = Module["asm"]["__emscripten_pthread_data_constructor"]).apply(null, arguments);
};

var stackSave = Module["stackSave"] = function() {
 return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
};

var stackRestore = Module["stackRestore"] = function() {
 return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
};

var stackAlloc = Module["stackAlloc"] = function() {
 return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

var _memalign = Module["_memalign"] = function() {
 return (_memalign = Module["_memalign"] = Module["asm"]["memalign"]).apply(null, arguments);
};

var _emscripten_main_browser_thread_id = Module["_emscripten_main_browser_thread_id"] = function() {
 return (_emscripten_main_browser_thread_id = Module["_emscripten_main_browser_thread_id"] = Module["asm"]["emscripten_main_browser_thread_id"]).apply(null, arguments);
};

var ___pthread_tsd_run_dtors = Module["___pthread_tsd_run_dtors"] = function() {
 return (___pthread_tsd_run_dtors = Module["___pthread_tsd_run_dtors"] = Module["asm"]["__pthread_tsd_run_dtors"]).apply(null, arguments);
};

var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = function() {
 return (_emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = Module["asm"]["emscripten_main_thread_process_queued_calls"]).apply(null, arguments);
};

var _emscripten_current_thread_process_queued_calls = Module["_emscripten_current_thread_process_queued_calls"] = function() {
 return (_emscripten_current_thread_process_queued_calls = Module["_emscripten_current_thread_process_queued_calls"] = Module["asm"]["emscripten_current_thread_process_queued_calls"]).apply(null, arguments);
};

var _emscripten_register_main_browser_thread_id = Module["_emscripten_register_main_browser_thread_id"] = function() {
 return (_emscripten_register_main_browser_thread_id = Module["_emscripten_register_main_browser_thread_id"] = Module["asm"]["emscripten_register_main_browser_thread_id"]).apply(null, arguments);
};

var _do_emscripten_dispatch_to_thread = Module["_do_emscripten_dispatch_to_thread"] = function() {
 return (_do_emscripten_dispatch_to_thread = Module["_do_emscripten_dispatch_to_thread"] = Module["asm"]["do_emscripten_dispatch_to_thread"]).apply(null, arguments);
};

var _emscripten_async_run_in_main_thread = Module["_emscripten_async_run_in_main_thread"] = function() {
 return (_emscripten_async_run_in_main_thread = Module["_emscripten_async_run_in_main_thread"] = Module["asm"]["emscripten_async_run_in_main_thread"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread = Module["_emscripten_sync_run_in_main_thread"] = function() {
 return (_emscripten_sync_run_in_main_thread = Module["_emscripten_sync_run_in_main_thread"] = Module["asm"]["emscripten_sync_run_in_main_thread"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread_0 = Module["_emscripten_sync_run_in_main_thread_0"] = function() {
 return (_emscripten_sync_run_in_main_thread_0 = Module["_emscripten_sync_run_in_main_thread_0"] = Module["asm"]["emscripten_sync_run_in_main_thread_0"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread_1 = Module["_emscripten_sync_run_in_main_thread_1"] = function() {
 return (_emscripten_sync_run_in_main_thread_1 = Module["_emscripten_sync_run_in_main_thread_1"] = Module["asm"]["emscripten_sync_run_in_main_thread_1"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread_2 = Module["_emscripten_sync_run_in_main_thread_2"] = function() {
 return (_emscripten_sync_run_in_main_thread_2 = Module["_emscripten_sync_run_in_main_thread_2"] = Module["asm"]["emscripten_sync_run_in_main_thread_2"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread_xprintf_varargs = Module["_emscripten_sync_run_in_main_thread_xprintf_varargs"] = function() {
 return (_emscripten_sync_run_in_main_thread_xprintf_varargs = Module["_emscripten_sync_run_in_main_thread_xprintf_varargs"] = Module["asm"]["emscripten_sync_run_in_main_thread_xprintf_varargs"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread_3 = Module["_emscripten_sync_run_in_main_thread_3"] = function() {
 return (_emscripten_sync_run_in_main_thread_3 = Module["_emscripten_sync_run_in_main_thread_3"] = Module["asm"]["emscripten_sync_run_in_main_thread_3"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread_4 = Module["_emscripten_sync_run_in_main_thread_4"] = function() {
 return (_emscripten_sync_run_in_main_thread_4 = Module["_emscripten_sync_run_in_main_thread_4"] = Module["asm"]["emscripten_sync_run_in_main_thread_4"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread_5 = Module["_emscripten_sync_run_in_main_thread_5"] = function() {
 return (_emscripten_sync_run_in_main_thread_5 = Module["_emscripten_sync_run_in_main_thread_5"] = Module["asm"]["emscripten_sync_run_in_main_thread_5"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread_6 = Module["_emscripten_sync_run_in_main_thread_6"] = function() {
 return (_emscripten_sync_run_in_main_thread_6 = Module["_emscripten_sync_run_in_main_thread_6"] = Module["asm"]["emscripten_sync_run_in_main_thread_6"]).apply(null, arguments);
};

var _emscripten_sync_run_in_main_thread_7 = Module["_emscripten_sync_run_in_main_thread_7"] = function() {
 return (_emscripten_sync_run_in_main_thread_7 = Module["_emscripten_sync_run_in_main_thread_7"] = Module["asm"]["emscripten_sync_run_in_main_thread_7"]).apply(null, arguments);
};

var _emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = function() {
 return (_emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = Module["asm"]["emscripten_run_in_main_runtime_thread_js"]).apply(null, arguments);
};

var __emscripten_call_on_thread = Module["__emscripten_call_on_thread"] = function() {
 return (__emscripten_call_on_thread = Module["__emscripten_call_on_thread"] = Module["asm"]["_emscripten_call_on_thread"]).apply(null, arguments);
};

var _emscripten_tls_init = Module["_emscripten_tls_init"] = function() {
 return (_emscripten_tls_init = Module["_emscripten_tls_init"] = Module["asm"]["emscripten_tls_init"]).apply(null, arguments);
};

var __growWasmMemory = Module["__growWasmMemory"] = function() {
 return (__growWasmMemory = Module["__growWasmMemory"] = Module["asm"]["__growWasmMemory"]).apply(null, arguments);
};

var dynCall_vi = Module["dynCall_vi"] = function() {
 return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["dynCall_vi"]).apply(null, arguments);
};

var dynCall_vii = Module["dynCall_vii"] = function() {
 return (dynCall_vii = Module["dynCall_vii"] = Module["asm"]["dynCall_vii"]).apply(null, arguments);
};

var dynCall_ii = Module["dynCall_ii"] = function() {
 return (dynCall_ii = Module["dynCall_ii"] = Module["asm"]["dynCall_ii"]).apply(null, arguments);
};

var dynCall_iiii = Module["dynCall_iiii"] = function() {
 return (dynCall_iiii = Module["dynCall_iiii"] = Module["asm"]["dynCall_iiii"]).apply(null, arguments);
};

var dynCall_iiiii = Module["dynCall_iiiii"] = function() {
 return (dynCall_iiiii = Module["dynCall_iiiii"] = Module["asm"]["dynCall_iiiii"]).apply(null, arguments);
};

var dynCall_viii = Module["dynCall_viii"] = function() {
 return (dynCall_viii = Module["dynCall_viii"] = Module["asm"]["dynCall_viii"]).apply(null, arguments);
};

var dynCall_iii = Module["dynCall_iii"] = function() {
 return (dynCall_iii = Module["dynCall_iii"] = Module["asm"]["dynCall_iii"]).apply(null, arguments);
};

var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {
 return (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = Module["asm"]["dynCall_iiiiiii"]).apply(null, arguments);
};

var dynCall_viiii = Module["dynCall_viiii"] = function() {
 return (dynCall_viiii = Module["dynCall_viiii"] = Module["asm"]["dynCall_viiii"]).apply(null, arguments);
};

var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() {
 return (dynCall_viiiiii = Module["dynCall_viiiiii"] = Module["asm"]["dynCall_viiiiii"]).apply(null, arguments);
};

var dynCall_viiiii = Module["dynCall_viiiii"] = function() {
 return (dynCall_viiiii = Module["dynCall_viiiii"] = Module["asm"]["dynCall_viiiii"]).apply(null, arguments);
};

var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = function() {
 return (dynCall_viiiiiii = Module["dynCall_viiiiiii"] = Module["asm"]["dynCall_viiiiiii"]).apply(null, arguments);
};

var dynCall_fi = Module["dynCall_fi"] = function() {
 return (dynCall_fi = Module["dynCall_fi"] = Module["asm"]["dynCall_fi"]).apply(null, arguments);
};

var dynCall_dii = Module["dynCall_dii"] = function() {
 return (dynCall_dii = Module["dynCall_dii"] = Module["asm"]["dynCall_dii"]).apply(null, arguments);
};

var dynCall_diii = Module["dynCall_diii"] = function() {
 return (dynCall_diii = Module["dynCall_diii"] = Module["asm"]["dynCall_diii"]).apply(null, arguments);
};

var dynCall_fii = Module["dynCall_fii"] = function() {
 return (dynCall_fii = Module["dynCall_fii"] = Module["asm"]["dynCall_fii"]).apply(null, arguments);
};

var dynCall_diiii = Module["dynCall_diiii"] = function() {
 return (dynCall_diiii = Module["dynCall_diiii"] = Module["asm"]["dynCall_diiii"]).apply(null, arguments);
};

var dynCall_diiiiiiii = Module["dynCall_diiiiiiii"] = function() {
 return (dynCall_diiiiiiii = Module["dynCall_diiiiiiii"] = Module["asm"]["dynCall_diiiiiiii"]).apply(null, arguments);
};

var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = function() {
 return (dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiii"]).apply(null, arguments);
};

var dynCall_jiiii = Module["dynCall_jiiii"] = function() {
 return (dynCall_jiiii = Module["dynCall_jiiii"] = Module["asm"]["dynCall_jiiii"]).apply(null, arguments);
};

var dynCall_iidiiii = Module["dynCall_iidiiii"] = function() {
 return (dynCall_iidiiii = Module["dynCall_iidiiii"] = Module["asm"]["dynCall_iidiiii"]).apply(null, arguments);
};

var dynCall_jiji = Module["dynCall_jiji"] = function() {
 return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};

Module["PThread"] = PThread;

Module["PThread"] = PThread;

Module["_pthread_self"] = _pthread_self;

Module["wasmMemory"] = wasmMemory;

Module["ExitStatus"] = ExitStatus;

var calledRun;

function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = "Program terminated with exit(" + status + ")";
 this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
 if (!calledRun) run();
 if (!calledRun) dependenciesFulfilled = runCaller;
};

function callMain(args) {
 var entryFunction = Module["_main"];
 var argc = 0;
 var argv = 0;
 try {
  var ret = entryFunction(argc, argv);
  exit(ret, true);
 } catch (e) {
  if (e instanceof ExitStatus) {
   return;
  } else if (e == "unwind") {
   noExitRuntime = true;
   return;
  } else {
   var toLog = e;
   if (e && typeof e === "object" && e.stack) {
    toLog = [ e, e.stack ];
   }
   err("exception thrown: " + toLog);
   quit_(1, e);
  }
 } finally {
  calledMain = true;
 }
}

function run(args) {
 args = args || arguments_;
 if (runDependencies > 0) {
  return;
 }
 preRun();
 if (runDependencies > 0) return;
 function doRun() {
  if (calledRun) return;
  calledRun = true;
  Module["calledRun"] = true;
  if (ABORT) return;
  initRuntime();
  preMain();
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  if (shouldRunNow) callMain(args);
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout(function() {
   setTimeout(function() {
    Module["setStatus"]("");
   }, 1);
   doRun();
  }, 1);
 } else {
  doRun();
 }
}

Module["run"] = run;

function exit(status, implicit) {
 if (implicit && noExitRuntime && status === 0) {
  return;
 }
 if (noExitRuntime) {} else {
  PThread.terminateAllThreads();
  ABORT = true;
  EXITSTATUS = status;
  exitRuntime();
  if (Module["onExit"]) Module["onExit"](status);
 }
 quit_(status, new ExitStatus(status));
}

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

var shouldRunNow = true;

if (Module["noInitialRun"]) shouldRunNow = false;

if (!ENVIRONMENT_IS_PTHREAD) noExitRuntime = true;

if (!ENVIRONMENT_IS_PTHREAD) {
 run();
} else {}
