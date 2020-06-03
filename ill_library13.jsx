/**
* @@@BUILDINFO@@@ ill_library13.jsx !Version! Fri Feb 01 2019 20:36:59 GMT+0200
*/

/*========================= ill_library13 =========================*/
 // =======================polyfills==============
 
Function.prototype.bind||function(){var t=Array.prototype.slice;Function.prototype.bind=function(n){var o=this,r=arguments[0],i=t.call(arguments,1),p=i.length;if("function"!=typeof o)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");return function(){return i.length=p,i.push.apply(i,arguments),o.apply(r,i)}}}();
// ========== Object.defineProperty polyfill ===============
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.returnExports=t()}(this,function(){var e,t,r,n,o=Function.call,c=Object.prototype,i=o.bind(c.hasOwnProperty),f=o.bind(c.propertyIsEnumerable),l=o.bind(c.toString),u=i(c,"__defineGetter__");u&&(e=o.bind(c.__defineGetter__),t=o.bind(c.__defineSetter__),r=o.bind(c.__lookupGetter__),n=o.bind(c.__lookupSetter__));var b=function(e){return null==e||"object"!=typeof e&&"function"!=typeof e};Object.getPrototypeOf||(Object.getPrototypeOf=function(e){var t=e.__proto__;return t||null===t?t:"[object Function]"===l(e.constructor)?e.constructor.prototype:e instanceof Object?c:null});var p=function(e){try{return e.sentinel=0,0===Object.getOwnPropertyDescriptor(e,"sentinel").value}catch(e){return!1}};if(Object.defineProperty){var a=p({});if(!("undefined"==typeof document||p(document.createElement("div")))||!a)var O=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||O){Object.getOwnPropertyDescriptor=function(e,t){if(b(e))throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+e);if(O)try{return O.call(Object,e,t)}catch(e){}var o;if(!i(e,t))return o;if(o={enumerable:f(e,t),configurable:!0},u){var l=e.__proto__,p=e!==c;p&&(e.__proto__=c);var a=r(e,t),s=n(e,t);if(p&&(e.__proto__=l),a||s)return a&&(o.get=a),s&&(o.set=s),o}return o.value=e[t],o.writable=!0,o}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){return Object.keys(e)}),!Object.create){var s,j=!({__proto__:null}instanceof Object);s=j||"undefined"==typeof document?function(){return{__proto__:null}}:function(){var e,t,r,n,o,c,i=function(){if(!document.domain)return!1;try{return!!new ActiveXObject("htmlfile")}catch(e){return!1}}()?(c="script",(o=new ActiveXObject("htmlfile")).write("<"+c+"></"+c+">"),o.close(),n=o.parentWindow.Object.prototype,o=null,n):(t=document.createElement("iframe"),r=document.body||document.documentElement,t.style.display="none",r.appendChild(t),t.src="javascript:",e=t.contentWindow.Object.prototype,r.removeChild(t),t=null,e);delete i.constructor,delete i.hasOwnProperty,delete i.propertyIsEnumerable,delete i.isPrototypeOf,delete i.toLocaleString,delete i.toString,delete i.valueOf;var f=function(){};return f.prototype=i,s=function(){return new f},new f},Object.create=function(e,t){var r,n=function(){};if(null===e)r=s();else{if(null!==e&&b(e))throw new TypeError("Object prototype may only be an Object or null");n.prototype=e,(r=new n).__proto__=e}return void 0!==t&&Object.defineProperties(r,t),r}}var d,y=function(e){try{return Object.defineProperty(e,"sentinel",{}),"sentinel"in e}catch(e){return!1}};if(Object.defineProperty){var _=y({}),w="undefined"==typeof document||y(document.createElement("div"));if(!_||!w)var v=Object.defineProperty,m=Object.defineProperties}if(!Object.defineProperty||v){Object.defineProperty=function(o,i,f){if(b(o))throw new TypeError("Object.defineProperty called on non-object: "+o);if(b(f))throw new TypeError("Property description must be an object: "+f);if(v)try{return v.call(Object,o,i,f)}catch(e){}if("value"in f)if(u&&(r(o,i)||n(o,i))){var l=o.__proto__;o.__proto__=c,delete o[i],o[i]=f.value,o.__proto__=l}else o[i]=f.value;else{var p="get"in f,a="set"in f;if(!u&&(p||a))throw new TypeError("getters & setters can not be defined on this javascript engine");p&&e(o,i,f.get),a&&t(o,i,f.set)}return o}}Object.defineProperties&&!m||(Object.defineProperties=function(e,t){if(m)try{return m.call(Object,e,t)}catch(e){}return Object.keys(t).forEach(function(r){"__proto__"!==r&&Object.defineProperty(e,r,t[r])}),e}),Object.seal||(Object.seal=function(e){if(Object(e)!==e)throw new TypeError("Object.seal can only be called on Objects.");return e}),Object.freeze||(Object.freeze=function(e){if(Object(e)!==e)throw new TypeError("Object.freeze can only be called on Objects.");return e});try{Object.freeze(function(){})}catch(e){Object.freeze=(d=Object.freeze,function(e){return"function"==typeof e?e:d(e)})}Object.preventExtensions||(Object.preventExtensions=function(e){if(Object(e)!==e)throw new TypeError("Object.preventExtensions can only be called on Objects.");return e}),Object.isSealed||(Object.isSealed=function(e){if(Object(e)!==e)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.isFrozen||(Object.isFrozen=function(e){if(Object(e)!==e)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isExtensible||(Object.isExtensible=function(e){if(Object(e)!==e)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var t="";i(e,t);)t+="?";e[t]=!0;var r=i(e,t);return delete e[t],r})});
// ======= Object.create polyfill =============
//~ if(typeof Object.create !=="function"){Object.create=function(proto){function F(){}F.prototype = proto;return new F();};}
//=======          polifyll JSON.stringify(value[, replacer[, space]])     JSON.parse(text[, reviver])           ============
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,f,u,i=gap,p=e[t];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),"function"==typeof rep&&(p=rep.call(e,t,p)),typeof p){case"string":return quote(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){for(f=p.length,r=0;f>r;r+=1)u[r]=str(r,p)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",gap=i,o}if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,p),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(o=str(n,p),o&&u.push(quote(n)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",gap=i,o}}var cx,escapable,gap,indent,meta,rep;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}),"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new Error("JSON.parse")})}();

if (!Array.prototype.forEach) { Array.prototype.forEach = function(callback, thisArg) { var T, k; if (this == null) {throw new TypeError(' this is null or not defined');}var O = Object(this);var len = O.length >>> 0;if (typeof callback !== "function") {throw new TypeError(callback + ' is not a function');}if (arguments.length > 1) {T = thisArg;}k = 0;while (k < len) {var kValue;if (k in O) {kValue = O[k];callback.call(T, kValue, k, O);}k++;}};}
if (!Array.prototype.map) {Array.prototype.map = function(callback/*, thisArg*/) {var T, A, k;if (this == null) {throw new TypeError('this is null or not defined');}var O = Object(this);var len = O.length >>> 0;if (typeof callback !== 'function') {throw new TypeError(callback + ' is not a function');}if (arguments.length > 1) {T = arguments[1];}A = new Array(len);k = 0;while (k < len) {var kValue, mappedValue;if (k in O) {kValue = O[k];mappedValue = callback.call(T, kValue, k, O);A[k] = mappedValue;}k++;}return A;};}
Array.prototype.reduce||(Array.prototype.reduce=function(e){null===this&&alert("Array.prototype.reduce called on null or undefined"),"function"!=typeof e&&alert(e+" is not a function");var r,t=Object(this),n=t.length>>>0,o=0;if(arguments.length>=2)r=arguments[1];else{for(;o<n&&!(o in t);)o++;o>=n&&alert("Reduce of empty array with no initial value"),r=t[o++]}for(;o<n;)o in t&&(r=e(r,t[o],o,t)),o++;return r});/*======================= polyfill Array.prototype.reduce ==================================*/
Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),t=e.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var n=arguments[1],i=0;i<t;){var o=e[i];if(r.call(n,o,i,e))return o;i++}},configurable:!0,writable:!0});
Array.prototype.filter||(Array.prototype.filter=function(t,r){"use strict";if("Function"!=typeof t&&"function"!=typeof t||!this)throw new TypeError;var i=this.length>>>0,e=new Array(i),o=this,n=0,f=-1;if(void 0===r)for(;++f!==i;)f in this&&t(o[f],f,o)&&(e[n++]=o[f]);else for(;++f!==i;)f in this&&t.call(r,o[f],f,o)&&(e[n++]=o[f]);return e.length=n,e});

String.prototype.trim = function () { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');};

// ILLUSTRATOR JS BUG: not working: var cond1 = true; var cond2 = true; var x = cond1 ? 'cond1 is : '+cond1 : cond2 ? 'cond2 is : '+cond2 : 'default'; $.writeln(x); // check this in browser



/*========================= makeDoc Illustrator method ========================================*/
/**************
makeDoc is a function for creating new illustrator document with unit = millimeters (or ps if something else) and colorSpace = CMYK
example:
var newDoc = makeDoc('test_name_A4', 210, 295, 1, 'mm');
**************/
function makeDoc (docName, artWidth, artHeight, artNr, units) {
    var mm = (arguments[4]&&arguments[4] === 'mm') ? true : false;
    var pt = 2.83464567; // // 1 millimeter = 2.83464567 PostScript points
    var myPreset = new DocumentPreset();
    myPreset.title = docName;
    myPreset.width = (mm) ? artWidth*pt : artWidth;
    myPreset.height = (mm) ? artHeight*pt : artHeight;
    myPreset.numArtboards = artNr;
    myPreset.artboardLayout = DocumentArtboardLayout.Column;
    myPreset.units = (mm) ? RulerUnits.Millimeters : RulerUnits.Points;
    myPreset.colorMode = DocumentColorSpace.CMYK;
    var myDoc =app.documents.addDocument("Print", myPreset, false);
    return myDoc; // myDoc is a reference to newly created Document;
    };
/*========================= makeDoc Illustrator method END ====================================*/
/********************
function CMYK(c, m, y, k), values from 0 to 100;
examples:
var col1 = CMYK (0, 100, 100, 0); // purple
var col2 = CMYK (100, 0, 100, 0); // green
******************/
function CMYK (c, m, y, k) {
    var col = new CMYKColor();
    col.cyan = c;
    col.magenta = m;
    col.yellow = y;
    col.black = k 
    return col;
    }

/*========================= makeRectangle Illustrator method ========================================*/
/*************************************************
    originArtboard = [0,0];
    position = [x_horizontal, y_vertical]; measured from originArtboard;
pathItems.rectangle( topPosition, leftPosition, width, height );
topPosition = y_vertical (position from originArtboard to top-left corner of rectangle);
leftPosition = x_horizontal (position from originArtboard to top-left corner of rectangle);
function makeRectangle (position, width, height, stroke, strokeColor, fillColor, name);
position = Array [x_horizontal, y_vertical]; width, height = Number; stroke(optional) = Number, if 0, it is set to false; strokeColor, fillColor (optional) = Object (ex: new CMYKColor()); name is last argument and must be 'string';

***************************************************/
 function makeRectangle (position, width, height, stroke, strokeColor, fillColor) {
     // position = [x_horzontal, y_vertical]; returned rectangle.position = position; pathItems.rectangle( topPosition_y_vertical, leftPosition_x_horizontal, width, height );
     var rect = app.activeDocument.pathItems.rectangle(position[1], position[0], width, height);
     if (typeof arguments[3] === 'number') {
        if (arguments[3] === 0) {
             rect.stroked = false;
             rect.filled = false;
             } else {
                 rect.filled=false;
                 rect.stroked = true;
                 rect.strokeWidth = arguments[3]; // strokeColor is default if not passed as Object argument;
                 }
        } else if (typeof arguments[3] === 'object') {
            rect.stroked = false;
            rect.filled = true;
            rect.fillColor = arguments[3];
            } else { 
                rect.stroked = false;
                rect.filled = false;
                return rect;
                }
     if (rect.stroked&& typeof arguments[4] === 'object'&& typeof arguments[3] === 'number') {
     rect.filled = false;
     rect.strokeColor = strokeColor;
     }
     if (typeof arguments[5] === 'object') {
     rect.filled = true;
     rect.fillColor = fillColor;
     }
        if (typeof arguments[arguments.length-1] === 'string') { rect.name = arguments[arguments.length-1]; }
        
     return rect;
  }
/*
// TEST 
var col1 = new CMYKColor(); col1.cyan = 0; col1.magenta = 100; col1.yellow = 100; col1.black = 0;
var col2 = new CMYKColor(); col2.cyan = 100; col2.magenta = 0; col2.yellow = 100; col2.black = 0;
var rect1 = makeRectangle([100, 100], 100, 100, 'rect1' ); // ?? property name cannot be set on paths with noStroke and noFill ??
var rect2 = makeRectangle([250, 100], 100, 100, 20, 'rect2');
var rect3 = makeRectangle([400, 100], 100, 100, col1, 'rect3');
var rect4 = makeRectangle([550, 100], 100, 100, 20, col1, col2, 'rect4');
var rect5 = makeRectangle([700, 100], 100, 100, 20, col2, 'rect5');
*/
/*=========================makeRectangle Illustrator method END========================================*/

/*****
    centerPosMatrix generates a matrix of positions [top, left], on an defined area
   | - - - - - - - |
   | - - - - - - - |
   | - - - - - - - |
   lrbt = left->right; bottom->top;
****/
function centerPosMatrix_lrbt (areaPosition, areaWidth, areaHeight, rows, cols) {
    var numElements = rows*cols;
    var rowHeight = areaHeight/rows;
    var colWidth = areaWidth/cols;
    var matrix = new Array(numElements); 
    var counter = -1;
            for (var j = 0; j <rows; j++) {
              var horPos =  areaPosition[1] + ((rowHeight/2)*(1+(j*2))); 
                      for(var k =0; k<cols; k++) {    
                                counter ++;
                                var vertPos = areaPosition[0] + ((colWidth/2)*(1+(k*2)));
                                 matrix[counter] = [horPos, vertPos];        
                                }
                }
    return matrix;
    }



/*********************
    center align to keyObject, which is the first argument; keyObject.position is fix;
    objects are arguments[ i ], i >= 1;
    examples:
    var rect1 = makeRectangle([100, 100], 100, 100, 5, col1, col2);
    var rect2 = makeRectangle([500, 500], 100, 100, 5, col2, col1);
    centerAlignToKeyObject(1 rect2); // center aligns rect2 to rect1, rect1.position = const;
************/

function centerAlignToKeyObject (keyObject, objects) {
    var object_posTop, object_posLeft;
    for (var i=1; i<arguments.length; ++i) {
        object_posTop = (keyObject.position[0] - (keyObject.height/2)) + (arguments[i].height/2);     
        object_posLeft = (keyObject.position[1] + (keyObject.width/2)) - (arguments[i].width/2);      
        arguments[i].position = [ object_posTop, object_posLeft];
        }
    };

function centerAlignToPos (position, objects) {
    var posTop, posLeft;
    for (var i=1; i<arguments.length; ++i) {
        posTop = position[0] + (arguments[i].height/2);
        posLeft = position[1] - (arguments[i].width/2);
        arguments[i].position = [ posTop, posLeft];
        } 
    }

function makeSomeRects (position, width, height, stroke, strokeColor, fillColor, num) {
    var arrRect = new Array();
    for (var i=0; i<num; i++) {
        var name='rect'+Number(i+1);
        var rect = makeRectangle(position, width, height, stroke, strokeColor, fillColor, name);    
        arrRect.push(rect);
        }
    return arrRect;
    }

function makeRectOnEveryPos (matrix, width, height, stroke, strokeColor, fillColor) {
    var arrRect = new Array();
    for (var i=0; i<matrix.length; ++i) {
        var name='rect'+Number(i+1);
        var rect = makeRectangle(matrix[i], width, height, stroke, strokeColor, fillColor, name);    
        arrRect.push(rect);
        }
    return arrRect;
    }


/*============================ MatrixJS method =======================*/
// parameters: 
// matrixPosition = [x, y]; default = origin = [0, 0];
// matrixDimensions = [xMatrixDimension, yMatrixDimension]; default = [100, 100]; xMatrixDimension = matrixWidth (horizontal); yMatrixDimension = matrixHeight (vertical);
// cells = [xCells, yCells]; default = [2, 2]; xCells = number of columns; yCells = number of rows; 
// cellScaleFactors = [x%, y%]; default = [50, 50]; alignament within the virtul cell in the matrix; center_Alignment = [50, 50]; left_bottom_Alignment = [0, 0]; right_top_Alignment = [100, 100]; etc.;

/* MatrixJS properties:
    
   MatrixJS.matrixPosition = [x, y]; (r | w);
   MatrixJS.matrixDimensions = [xMatrixDimension, yMatrixDimension]; (r | w);
   MatrixJS.cells= [xCells, yCells]; (r | w); 
   MatrixJS.cellScaleFactors = [x%, y%]; (r | w);
    // autogenerated //
   MatrixJS._mPositions = this.generate_mPositions();  => [ [array of x arrays], [array of y arrays] ];)();
                                        returns [ 
                                                        [ [x1, y1], [x2, y1] ],
                                                        [ [x1, y1], [x1, y2] ]
                                                    ]; (r only); and assigns to MatrixJS._mPositions;                                             
   MatrixJS.get_mPositions(); // gets all positios // example: var myPos = myMatrix.get_mPositions()[4][5]; // returns [x,y]; or myMatrix.get_mPositions(); // returns all positions;  
   MatrixJS.getCellDimensions() => [xCellDimension, yCellDimension]; (r only);
   MatrixJS.getCellPosition(x, y) => [x, y]; (r only); // the origin position of specific cell inside the matrix;  
*/


function MatrixJS (matrixPosition, matrixDimensions, cells, cellScaleFactors) {
                            var defaults = [[0, 0], [100, 100], [2, 2], [50, 50]];
    
    this.matrixPosition= defaults[0];
    this.matrixDimensions = defaults[1];
    this.cells = defaults[2];
    this.cellScaleFactors = defaults[3];
    
    if (arguments[0]) this.matrixPosition = arguments[0];
    if (arguments[1]) this.matrixDimensions =arguments[1];
    if (arguments[2]) this.cells = arguments[2];
    if (arguments[3]) this.cellScaleFactors = arguments[3];
   
    this._mPositions = [];
    this.generate_mPositions();
    }
MatrixJS.prototype.generate_mPositions = function () {
                        var xCells = this.cells[0]; // columns
                        var yCells = this.cells[1]; // rows
                        var numOfCells = xCells*yCells;
                        var xMatrixDimension = this.matrixDimensions[0];
                        var yMatrixDimension = this.matrixDimensions[1];
                        var xCellDimension = xMatrixDimension/xCells;
                        var yCellDimension = yMatrixDimension/yCells;
                        var matrix = [];
                       for (var i=0; i<xCells; i++) {
                           var row = [];
                            var xPos = this.matrixPosition[0] + (xCellDimension*i)+(xCellDimension*(this.cellScaleFactors[0]/100));
                                for (var j=0; j<yCells; j++) {
                                    var yPos =  this.matrixPosition[1] + (yCellDimension*j)+(yCellDimension*(this.cellScaleFactors[1]/100));
                                    row.push([xPos, yPos]);
                                    }    
                           matrix.push(row);
                           }
                        this._mPositions = matrix;
                        return this._mPositions;
    };
MatrixJS.prototype.get_mPositions = function (x, y) {
    if (arguments.length === 0) return this._mPositions; 
    else return this._mPositions[x][y];
    };
MatrixJS.prototype.get_mPositions_lrtb = function () {
    var allPos_lrtb = [];
    var yCells = this.cells[1];
    var xCells = this.cells[0];
         for (var y=yCells-1; y >=0; y--) {
             for (var x=0; x<xCells; x++) {
                       allPos_lrtb.push(this._mPositions[x][y]);
                 }
             }
         return allPos_lrtb;
    };

MatrixJS.prototype.getCellDimensions= function () {
    var xCellDimension = this.matrixDimensions[0]/this.cells[0];
    var yCellDimension = this.matrixDimensions[1]/this.cells[1];
    return [xCellDimension, yCellDimension];
    };

MatrixJS.prototype.getCellPosition = function (x, y) {
    var pos = this.get_mPositions(x, y);
    var d = this.getCellDimensions();
    var a = pos[0]-((this.cellScaleFactors[0]/100)*d[0]);
    var b = pos[1]-((this.cellScaleFactors[1]/100)*d[0]);
    return [a, b];
    };

// TEST
/*
var myMatrix = new MatrixJS([0,0], [10, 10], [10, 10], [0, 0]);
var myPos = myMatrix.get_mPositions()[4][3];
var myPos2 = myMatrix.get_mPositions(0, 0);
var celPos =  myMatrix.getCellPosition(1, 1);
var celD = myMatrix.getCellDimensions();
*/

/*============================ MatrixJS method END =======================*/


/*============================ TextBox Illustrator method =======================*/

var contentStyle = { // default style object;
    fontFamily : 'TimesNewRomanPS-ItalicMT', // names took from application
    textFont : 'TimesNewRomanPS-ItalicMT', // // for (var i=0; i<textFonts.length; i++) {$.writeln(textFonts[i]);}
    fontSize : 12,
    fontSrokeWeight: 1,
    fontStrokeColor : [0, 100, 100, 0], // purple
    fontfillColor : [100, 0, 100, 0], // green
    fontWeight : undefined,
    lineHeight: 120, // %  
    textAlign : 'center',     // [center | left | right | justify]; // Justification.CENTER; // Justification.LEFT; // Justification.RIGHT; // Justification.FULLJUSTIFY;
    textIndent : 0, // Sets or returns the indentation of the first line of text; // textRange.firstLineIndent
    textTransform : undefined,// [uppercase | lowercase | capitalize] // FontCapsOption.ALLCAPS; // 
    fontVariant: undefined,// [normal | small-caps];  // FontCapsOption.NORMALCAPS; // FontCapsOption.SMALLCAPS;
    verticalAlign : 'baseline',// [baseline | length | sub | super | top | text-top | middle | bottom |t ext-bottom] // FontBaselineOption.NORMALBASELINE; // FontBaselineOption.SUBSCRIPT; // FontBaselineOption.SUPERSCRIPT;
    wordSpacing : undefined,// textRange.sediredWordSpacing
    letterSpacing: undefined, //textRange.desiredLetterSpacing    
    };

var boxStyle = {      // default style object;
    width: undefined, // auto width if not set;
    height : undefined, // auto height if not set;
    borderStyle : undefined, // none | dotted | dashed | solid ;
    borderWidth : 5,
    dashPattern : undefined, // [2,2]; // for borderStyle : dashed; // dashPattern[0] = dashLength; dashPattern[1] = dashSpace; dashPattern[2] = dashLenth and so on...;
    dashOffset : 0, // for borderStyle : dashed; // The default distance into the dash pattern at which the pattern should be started.
    borderColor : [10, 100, 100, 10], // [c, m, y, k];
    
    backgroundColor : [0, 10, 89, 10], // [c, m, y, k] | 'transparent'
    top : 0, // position[1];
    left : 0, // position[0]; 
    paddingTop : 0,
    paddingRight : 0,
    paddingBottom : 0,
    paddingLeft : 0,  
    };

function ContentStyle(styleOb) {
     if (!arguments) return; else if (typeof styleOb === 'object') {
     for (var prop in styleOb) {
        if (prop in this) { // checks the prototype of instance, which is contentStyle;
            this[prop] = styleOb[prop];
            }
         }
    }
}
ContentStyle.prototype = contentStyle;

function BoxStyle (styleOb) {
    if (!arguments) return; else if (typeof styleOb === 'object') {
     for (var prop in styleOb) {
        if (prop in this) this[prop] = styleOb[prop];
            }
        }
    }
BoxStyle.prototype = boxStyle;


// arguments: ['string'] | [styleOb] | ['string', styleOb]
function Content (textContentOrStyleOb, styleOb) { 
        if (!arguments) return; else 
        switch (arguments.length) {
                case 1 : {
                    switch (typeof arguments[0]) {
                        case 'string' : 
                            this.textContent = textContentOrStyleOb; break; //  string
                        case 'object' :
                            this.style = new ContentStyle(textContentOrStyleOb); break; // object
                            }
                    }; break;
                case 2 : {   
                            this.textContent = textContentOrStyleOb; // string
                            this.style = new ContentStyle(styleOb);         
                    }; break;      
                }
    };
var protoContentStyle = new ContentStyle ();
Content.prototype.textContent = 'Lorem ipsum';
Content.prototype.style = protoContentStyle;
Content.prototype.renderText = function () {};


 // arguments: ['string'] | [styleOb] | ['string', styleOb] | [newContentOb, styleOb] 
function TextBox (contentStringOrObject, styleOb) {
        if (!arguments) return; else 
        switch (arguments.length) {
        case 1 : {
            switch (typeof arguments[0]) {
                case 'string' : this.content = new Content (contentStringOrObject); break;
                case 'object' : {
                    this.content = new Content (contentStringOrObject);
                    this.boxStyle = new BoxStyle(contentStringOrObject);
                    } break;
                }
            }; break;
        case 2 : {
            switch (typeof arguments[0]) {
                case 'string' : {
                    this.content = new Content (contentStringOrObject, styleOb);
                    this.boxStyle = new BoxStyle(styleOb);
                    }; break;
                case 'object' : {
                    this.content = contentStringOrObject;  ////// ATENTIE !!!!
                    this.boxStyle = new BoxStyle(styleOb);
                    }; break;
            }; break; }    
        }
    }
var protoContent = new Content();
var protoBoxStyle = new BoxStyle();
TextBox.prototype.content = protoContent;
TextBox.prototype.boxStyle = protoBoxStyle; 

TextBox.prototype.calculateBoxHeight = function (textLines) {
     var lineHeight = this.content.style.lineHeight;
     var fontSize = this.content.style.fontSize;
     var boxAutoHeight = (textLines*((lineHeight/100)*fontSize)) +(fontSize/2);
     var paddingTop = this.boxStyle.paddingTop;
     var paddingBottom = this.boxStyle.paddingBottom;
     var boxHeight = paddingTop + boxAutoHeight + paddingBottom;
    return boxHeight;
    }
/*
function testFontsWidths (textContent, fontSize) {
    var fontsCount = app.textFonts.length;
    var fontBox = new TextBox(textContent, {fontSize: fontSize});
    fontBox.boxStyle.top = -5000;
    for (var i=0;i<fontsCount;i++) {
            fontBox.content.style.textFont = app.textFonts[i].name;
            fontBox.boxStyle.top += fontBox.calculateBoxHeight(1);
            fontBox.renderTextBox ();
           }
    
    }
    // testFontsWidths ('Lorem ipsum', 30); // used to test factor;
*/
 
 
TextBox.prototype.calculateBoxWidth = function (text) {
    var boxWidth;
    var fontSize = this.content.style.fontSize;
    var factor= 0.8; // testFontsWidths ('Lorem ipsum', 30); // used to test factor;
    var letterWidth = fontSize*factor;
     if (this.boxStyle.width) boxWidth = this.boxStyle.width;
        else {
            if (typeof arguments[0] === 'string') boxWidth = text.length*letterWidth;
            else boxWidth = this.content.textContent.length*letterWidth;          
            if (this.content.style.textIndent) {boxWidth += this.content.style.textIndent};
            if (this.content.style.wordSpacing) boxWidth += this.content.style.wordSpacing;
            if (this.content.style.letterSpacing) boxWidth += this.content.style.letterSpacing;
            if (this.boxStyle.paddingLeft) boxWidth += this.boxStyle.paddingLeft;               
            if (this.boxStyle.paddingRight) boxWidth += this.boxStyle.paddingRight;
            }
    return boxWidth;
    };

TextBox.prototype.renderTextBox = function () {
    
    var CMYK = function (col) {
                var c = new CMYKColor();
                c.cyan = col[0];
                c.magenta = col[1];
                c.yellow = col[2];
                c.black = col[3] 
                return c;
                };
 

        var top = this.boxStyle.top;
        var left = this.boxStyle.left;
        // box height
        if (this.boxStyle.height === undefined) var height = 1000; 
        else var height = this.boxStyle.height;
        // box width
        var width;
         if (this.boxStyle.width) width = this.boxStyle.width;
        else width = this.calculateBoxWidth(); 
        /*
        if (this.boxStyle.width) var width = this.boxStyle.width;
        else { var width = this.content.textContent.length*(this.content.style.fontSize/2);
            if (this.content.style.textIndent) {width += this.content.style.textIndent};
            if (this.content.style.wordSpacing) width += this.content.style.wordSpacing;
            if (this.content.style.letterSpacing) width += this.content.style.letterSpacing;
            if (this.boxStyle.paddingLeft) width += this.boxStyle.paddingLeft;               
            if (this.boxStyle.paddingRight) width += this.boxStyle.paddingRight;
            this.boxStyle.width = width; // updates ownProperty on run TextBox.renderTextBox();
            $.writeln( 'this.boxStyle.width' +  this.boxStyle.width + 'width'+width+'top'+top+'left'+left);
            }
        */
        var rect = app.activeDocument.pathItems.rectangle(top, left, width, height);
        var textFrame = app.activeDocument.textFrames.areaText(rect); 

        // render border
        var borderCol = CMYK(this.boxStyle.borderColor);
      switch (this.boxStyle.borderStyle) {
          case 'none' : textFrame.textPath.stroked = false; break;// false for borderStyle : 'none'; 
          case 'solid' : {      
                textFrame.textPath.stroked = true;       
                textFrame.textPath.strokeDashes = []; // Array of numbers // Dash lengths (set to [ ] for a solid line); // solid line <= borderStyle = 'solid';
                textFrame.textPath.strokeWidth = this.boxStyle.borderWidth; // if  borderStyle : dotted | dashed | solid ;
                textFrame.textPath.strokeColor = borderCol ; // if  borderStyle : dotted | dashed | solid ;
              }; break;
          case 'dotted' : {
                textFrame.textPath.stroked = true;
                var borderWidth = this.boxStyle.borderWidth;                            
                textFrame.textPath.strokeDashes = [borderWidth, borderWidth]; // if borderStyle = dotted;
                textFrame.textPath.strokeDashOffset = this.boxStyle.dashOffset; // The default distance into the dash pattern at which the pattern should be started.
                textFrame.textPath.strokeWidth = borderWidth; // if  borderStyle : dotted | dashed | solid ;
                textFrame.textPath.strokeColor = borderCol ; // if  borderStyle : dotted | dashed | solid ;
              }; break;
          case 'dashed' : {
                textFrame.textPath.stroked = true;
                var borderWidth = this.boxStyle.borderWidth; 
                if (this.boxStyle.dashPattern = undefined) 
                textFrame.textPath.strokeDashes = [borderWidth*2, borderWidth]; // if borderStyle = dashed;
                else textFrame.textPath.strokeDashes = this.boxStyle.dashPattern; // if borderStyle = dashed; and dashPattern
                textFrame.textPath.strokeDashOffset = this.boxStyle.dashOffset; // The default distance into the dash pattern at which the pattern should be started.
                textFrame.textPath.strokeWidth = borderWidth; // if  borderStyle : dotted | dashed | solid ;
                textFrame.textPath.strokeColor = borderCol ; // if  borderStyle : dotted | dashed | solid ;
              }; break;
          default : {
                textFrame.textPath.stroked = true;       
                textFrame.textPath.strokeDashes = []; // Array of numbers // Dash lengths (set to [ ] for a solid line); // solid line <= borderStyle = 'solid';
                textFrame.textPath.strokeWidth = this.boxStyle.borderWidth; // if  borderStyle : dotted | dashed | solid ;
                textFrame.textPath.strokeColor = borderCol; // if  borderStyle : dotted | dashed | solid ;
              };
          
          }
       
    // box fill
        var bc = this.boxStyle.backgroundColor;
         switch (typeof bc) {
                case 'transparent': 
                    textFrame.textPath.filled = false; break;
                case undefined :
                    textFrame.textPath.filled = false; break;
                default : {    // Array color
                    if (typeof bc[0] === 'number' && bc[0] <=100 && bc[0] >=0
                        && typeof bc[1] === 'number' && bc[1] <=100 && bc[1] >=0
                        &&typeof bc[2] === 'number' && bc[2] <=100 && bc[2] >=0
                        &&typeof bc[3] === 'number' && bc[3] <=100 && bc[3] >=0) {
                    var boxFillCol = CMYK (bc);
                    textFrame.textPath.filled = true;
                    textFrame.textPath.fillColor = boxFillCol;
                        } else if (bc !== 'transparent') {
                                 alert('Property not supported ! \
                                backgroundColor : "transparent" || [c,m,y,k] ;  c | m | y | k = int 0...100 ')
                                textFrame.textPath.filled = false;
                                    }
                    };   
             }

 // box content
        textFrame.contents = this.content.textContent;
        textFrame.textRange.textFont = app.textFonts.getByName(this.content.style.textFont); // for (var i=0; i<textFonts.length; i++) {$.writeln(textFonts[i]);
        textFrame.textRange.size = this.content.style.fontSize;
        textFrame.textRange.firstLineIndent = this.content.style.textIndent;
        
  // content style
    switch (this.content.style.textTransform) {
        case 'uppercase': 
        textFrame.textRange.capitalization = FontCapsOption.ALLCAPS; break;
        case undefined : 
        textFrame.textRange.capitalization = FontCapsOption.NORMALCAPS; break;
        default : alert('textTransform : '+ this.content.style.fontVariant + ' is not supported ! \
        textTransform : uppercase ');
        }
    switch (this.content.style.fontVariant) {
        case 'normal' : 
        textFrame.textRange.capitalization = FontCapsOption.NORMALCAPS; break;
        case 'small-caps' : 
        textFrame.textRange.capitalization = FontCapsOption.SMALLCAPS; break; // // FontCapsOption.ALLSMALLCAPS; // // FontCapsOption.SMALLCAPS;
        case undefined : 
        textFrame.textRange.capitalization = FontCapsOption.NORMALCAPS; break;
        default : alert('fontVariant : '+ this.content.style.fontVariant + ' is not supported ! \
        fontVariant : normal | small-caps ');
        }
    switch (this.content.style.textAlign) {
        case 'left': textFrame.textRange.justification = Justification.LEFT; break;
        case 'right': textFrame.textRange.justification = Justification.RIGHT; break;
        case 'center': textFrame.textRange.justification = Justification.CENTER; break;
        case 'justify': textFrame.textRange.justification = Justification.FULLJUSTIFY; break;
        case undefined : textFrame.textRange.justification = Justification.LEFT; break;
        default : alert('textAlign : '+ this.content.style.fontVariant + ' is not supported ! \
        fontVariant :|center | left | right | justify '); 
        }
    // lineHeight
    textFrame.textRange.autoLeadingAmount = this.content.style.lineHeight; //    
    
    // verticalAlign : 'baseline',// [baseline | length | sub | super | top | text-top | middle | bottom |t ext-bottom] // FontBaselineOption.NORMALBASELINE; // FontBaselineOption.SUBSCRIPT; // FontBaselineOption.SUPERSCRIPT;
    // wordSpacing : undefined,// textRange.sediredWordSpacing
    // letterSpacing: undefined, //textRange.desiredLetterSpacing      
    
    // paddingTop
    var paddingTop = this.boxStyle.paddingTop;
    var paddingBottom = this.boxStyle.paddingBottom;
    var _lineHeight = (textFrame.textRange.autoLeadingAmount/100) * textFrame.textRange.size;
    var _fontSize = textFrame.textRange.size;
    var fontMargin = (_lineHeight-_fontSize)/2;
    var topAuto = fontMargin +_fontSize;
    textFrame.firstBaselineMin = topAuto+paddingTop;
    // paddingLeft; paddingRight;
    textFrame.textRange.leftIndent = this.boxStyle.paddingLeft;
    textFrame.textRange.rightIndent = this.boxStyle.paddingRight;
    // paddingBottom only for boxHeight = undefined (auto height);
    // TextBox Height

   
        var boxHeight = this.boxStyle.height;
    if (typeof boxHeight === 'number') {  
        textFrame.textPath.height = boxHeight;
        } else if (boxHeight === undefined) {
                var lines = textFrame.textRange.paragraphs[0].lines.length;
                var boxHeight= this.calculateBoxHeight(lines);        
                textFrame.textPath.height = boxHeight;
                    }
//~      redraw();
    return textFrame;
       };
/*
 // TEST 
var myDoc = makeDocPoints('docPointsCalendarTest', 1000, 600, 1);
var myStyle = {top: 100, left: 200, fontSize: 50, borderStyle: 'definit', width: 300, lineHeight: 200, paddingTop:20, paddingBottom: 20};
var myEmpyCont = new Content();
var txt = 'Șase sași în țărână șase sași în țărână șase sași în țărână șase sași în țărână șase sași în țărână';
var myContText = new Content(txt);
var myContStyle = new Content(myStyle);
var myEmptyTextBox = new TextBox();
var myTextBox = new TextBox('alt cont');

// myTextBox.renderTextBox();
var another = new TextBox(txt, myStyle);
var returned = another.renderTextBox();
$.writeln(returned.textPath.height);
*/
/*======================== TextBox Illustrator method END =======================*/

// ======================= obFromJsonFile ===== saveObAsJson =======================

function obFromJsonFile (filePath) {
    try{
       // if(!filePath||typeof filePath!='string') throw new Error('type of filePath : is '+(typeof filePath)+filePath, filePath); 
            //else if ('string'===typeof filePath)  {            
                    var file = new File(filePath);          
                    if(!file.exists) throw new Error('file.error: '+file.error+', No file! ', file);
                    var opened = file.open("r"); // open file for reading; Returns true if the file has been opened successfully, false otherwise.
                    if(!opened) throw new Error('file.error: '+file.error+', Could not open("r")', file);
                        // else $.writeln(file.displayName+' successfully opened ("r") ! Path : '+file.path);
                    var jsonString = file.read();
                        // $.writeln('(jsonString from '+file.displayName+').length is : '+jsonString.length+';');
                     file.close();
                     var ob = JSON.parse(jsonString);
                     return ob;
               //     }
        } catch (e){
            $.writeln('=>function obFromJsonFile (filePath)\r\n'+e.name+' line: '+e.line+' , message: "'+e.message+'"'+', fileName: '+e.fileName+';');
            return false;
            }
    }




function saveObAsJson(ob, folderPath, jsonName, rewrite) {
    try{
        if (!ob) throw new Error('ob is '+ob);
        var jsonString = JSON.stringify(ob, null, ' ');       
       // if (!folderPath||typeof folderPath!='string') throw new Error('typeof folderPath must be "string" but is: "'+(typeof folderPath)+'" ! '+folderPath, folderPath);
         //   else if ('string'===typeof folderPath) {
                var file = new File(folderPath + '/'+jsonName+'.json');
                var initialExistence = file.exists;          
                if (file.exists&&rewrite||!file.exists) {
                    var opened = file.open("w"); // creates file if not exists or rewrite it if exists; Returns true if the file has been opened successfully, false otherwise.
                    if(!opened) throw new Error('file.error: '+file.error+', file.displayName: '+file.displayName+' could not be created/opened ("w") on folderPath: ', file.path);                
//~                     if(!opened) throw new Error('file.error is: '+file.error);                
                    var writen = file.write(jsonString); // returns true on success;
                    if (!writen) throw new Error('file.error: '+file.error+', file.displayName: '+file.displayName+'could not be writen on folderPath: '+file.path);
                    // $.writeln('=>function saveObAsJson() \r\n'+file.displayName+' initialExistence <<'+initialExistence+'>>');
                    // $.writeln((initialExistence) ? file.displayName+' successfully rewrited! Path : '+file.path : file.displayName+' successfully created! Path : '+file.path);
                    file.close();
                    return true;
                    } else if (file.exists&&!rewrite) return false;
             //   }
        } catch (e) {
            $.writeln(e.error);
            $.writeln('=>function saveObAsJson(ob, folderPath, jsonName, rewrite)\r\n'+e.name+' line: '+e.line+' , message: "'+e.message+'"'+', fileName: '+e.fileName+';');
            return false;
            }
}


// TEST
/*
var currentPath = (new File($.fileName)).path // retrieve the current script path
var fileFromCurrentPath = new File(currentPath);
var selectedFile = new File(currentPath).openDlg('Select JSON file to convert to object', '*.json', false);
if (selectedFile&&selectedFile.exists) var selectedFile_s = selectedFile.fullName;
    else var selectedFile_s = null;

var folderFromCurrentPath = new Folder(currentPath);
var selectedFolder = new Folder(currentPath).selectDlg('Choose folder to save object as JSON');
if (selectedFolder&&selectedFolder.exists) var selectedFolder_s = selectedFolder.fullName;
    else var selectedFolder_s = null;

var obj = obFromJsonFile(selectedFile_s);
saveObAsJson(obj, selectedFolder_s, 'test', true);
// saveObAsJson(obj, saveFolder, 'test', false);
*/
// ============= obFromJsonFile ===== saveObAsJson ====== END  ==========


/* ===================== illustrator CALENDAR MonthMatrix constructor BEGIN ===================== */


function MonthMatrix () {
    this.position = [0,0];
    this.size= [], // overridden by app // the size of whole group of datesBoxes and daysBoxes
    this.firstDayOfWeek= 0, // 0 for Sunday;
    this.weeksAlign= 'vertical', // 'vertical' | 'horizontal';
    this.margin= 2, // margin between datesBoxes and margin between daysBoxes
    this.days= {
        names: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        abbrev: 2, // 0 for no shorthand for daysNames, 1 => only first letter, 2 => the first two letters, 3 , 4, and so on...
        dist: 5, // distance between daysBoxes and datesBoxes // margin between daysBoxes = margin between datesBoxes
        style: {
            fontSize: 12, borderStyle: 'solid', borderColor: [10, 20, 30, 40], borderWidth: 0.2
            },
        },
    this.dates= {
        specialDates: [[1,1], [6,10]], // user defined [day, month];
        neighboursStyle: {
            fontSize: 12, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'dotted', borderWidth: 0.2
            },
        mainStyle: {
            fontSize: 12, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'solid', borderColor: [10, 10, 10, 10], borderWidth: 0.5
            },
        sundaysStyle : {
            fontSize: 12, 
            },
        saturdayStyle: {
            fontfillColor : [0, 100, 0, 100]
            },
        specialStyle: {
            fontfillColor : [0, 100, 40, 100]
            }
        };
}

MonthMatrix.prototype.renderMonthMatrix = function (year, monthIndex, position) {
    
    var fullNameDays = this.days.names;
    var ab = this.days.abbrev; // number of letters to abbreviate days names
    var days = fullNameDays.map(function(dn){return dn.substring (0, ab)}); // days is an array with abbreviated days names
    var daysStyle = this.days.style;
    var firstDayOfWeekIndex = this.firstDayOfWeek;
    var monthPosition = (arguments[2]) ? position : this.position;
    var daysStyle = this.days.style;
    var mainDatesStyle = this.dates.mainStyle;
    var neighboursDatesStyle = this.dates.neighboursStyle;
    var margin = (this.margin) ? this.margin : 0;
    var dist = (this.days.dist) ? this.days.dist : margin;
    
    var m = new MonthData(year, monthIndex);     
    function MonthData (year, monthIndex) {
        var date = new Date(year, monthIndex+1, 0);
        this.daysCount = date.getDate(); // number of days in this month
        this.lastDayIndex = date.getDay(); // day of the week of the last day in this month
        this.firstDayIndex = (7-((this.daysCount-(this.lastDayIndex+1))%7)); // week day index of the first day in the month;  
        }
    var daysBefore;
    if (m.firstDayIndex === 0 ) {
       daysBefore = 7+m.firstDayIndex;
        } else {
            daysBefore = m.firstDayIndex-firstDayOfWeekIndex;
                }
     var daysAfter = 6*7 - (daysBefore+m.daysCount);
     var prevMonthDaysCount = new MonthData(year, monthIndex-1).daysCount;
     function makeDates(num, count) {
         var dates = [];
        for (var i=num-1; i>=0; i--) {         
                dates.push((count-i).toString());
            }
        return dates;
         }
     var datesBefore = makeDates(daysBefore, prevMonthDaysCount);
     var dates = makeDates(m.daysCount, m.daysCount);
     var datesAfter = makeDates(daysAfter, daysAfter);
     var allDates = datesBefore.concat(dates, datesAfter);
     
     var daysTextBox = new TextBox(daysStyle);
     var mainDatesTextBox = new TextBox(mainDatesStyle);
     var neighboursDatesTextBox = new TextBox(neighboursDatesStyle);
         
    var maxDayLength = days.reduce( function(a, b) { 
        if (a.length > b.length) return a; else return b;
        }, '' );
        // boxes width
    var daysTextBoxMaxWidth = daysTextBox.calculateBoxWidth(maxDayLength);
    var mainDatesTextBoxWidth = mainDatesTextBox.calculateBoxWidth('00');
    var neighboursDatesTextBoxWidth = neighboursDatesTextBox.calculateBoxWidth('00');  
    var boxesWidths = [daysTextBoxMaxWidth, mainDatesTextBoxWidth, neighboursDatesTextBoxWidth];
    var boxMinWidth = 1;
    var boxMaxWidth = boxesWidths.reduce(function(a, b) { 
        if (a > b) return a; else return b;
        }, boxMinWidth);
    
    daysTextBox.boxStyle.width = boxMaxWidth;
    mainDatesTextBox.boxStyle.width = boxMaxWidth;
    neighboursDatesTextBox.boxStyle.width = boxMaxWidth;
    // dates boxes height
    var mainDatesTextBoxHeight = mainDatesTextBox.calculateBoxHeight(1);
    var neighboursDatesTextBoxHeight = neighboursDatesTextBox.calculateBoxHeight(1);
    var boxesHeights = [mainDatesTextBoxHeight, neighboursDatesTextBoxHeight];
    var boxMinHeight = 10;
    var boxMaxHeight = boxesHeights.reduce(function(a, b) { 
        if (a > b) return a; else return b;
        }, boxMinHeight);
    mainDatesTextBox.boxStyle.height = boxMaxHeight;
    neighboursDatesTextBox.boxStyle.height = boxMaxHeight;
    // boxes max stroke
    var boxesStrokes = [daysTextBox.boxStyle.borderWidth, mainDatesTextBox.boxStyle.borderWidth, neighboursDatesTextBox.boxStyle.borderWidth];
    var maxStroke = boxesStrokes.reduce(function(a, b) { 
        if (a > b) return a; else return b;
        }, 0);
    
    var monthWidth = (boxMaxWidth+maxStroke+margin)*7;
    var monthHeight = (boxMaxHeight+maxStroke+margin)*6;  
    var monthMatrix = new MatrixJS (monthPosition, [monthWidth, monthHeight], [7,6], [0,100]);
    var datesBoxesPositions = monthMatrix.get_mPositions_lrtb (); 
    // render days
       for (var i=0;i<7;i++) {
           if (i<=6-firstDayOfWeekIndex) daysTextBox.content.textContent = days[i+firstDayOfWeekIndex];
            else daysTextBox.content.textContent = days[i-(7-firstDayOfWeekIndex)];
        daysTextBox.boxStyle.left =datesBoxesPositions[i][0];
        daysTextBox.boxStyle.top = datesBoxesPositions[i][1]+daysTextBox.calculateBoxHeight(1)+maxStroke+dist;
        var rend = daysTextBox.renderTextBox();
        }
    // render dates
     for (var i=0; i<6*7; i++) { // render dates
       if (i<daysBefore||i>=m.daysCount+daysBefore) {
             neighboursDatesTextBox.content.textContent = allDates[i];
             neighboursDatesTextBox.boxStyle.left = datesBoxesPositions[i][0];
             neighboursDatesTextBox.boxStyle.top = datesBoxesPositions[i][1];
             var rend1 = neighboursDatesTextBox.renderTextBox();      
          }        
         if (i>=daysBefore&&i<m.daysCount+daysBefore) {          
             mainDatesTextBox.content.textContent = allDates[i];
             mainDatesTextBox.boxStyle.left = datesBoxesPositions[i][0];
             mainDatesTextBox.boxStyle.top = datesBoxesPositions[i][1];
             var rend2 = mainDatesTextBox.renderTextBox();
             }
        }  
    function MonthData (year, monthIndex) {
            var date = new Date(year, monthIndex+1, 0);
            this.daysCount = date.getDate(); // number of days in this month
            this.lastDayIndex = date.getDay(); // day of the week of the last day in this month
            this.firstDayIndex = (7-((this.daysCount-(this.lastDayIndex+1))%7)); // week day index of the first day in the month;  
            }
    return true;
    };

function renderSoloCalendar (year, artboardSize, columns, rows) {
    var myDoc = makeDocPoints('docMMCalendarTest', artboardSize[0], artboardSize[1], 1, 'mm');
    var docMatrix = new MatrixJS ([0,0], [myDoc.width, myDoc.height], [columns, rows], [0,0]);
    var monthsPositions = docMatrix.get_mPositions_lrtb();
    for (var i=0;i<12;i++) {       
       var monthIndex = i;
        var monthPosition = monthsPositions[i];
        var m = new MonthMatrix ();
        var re = m.renderMonthMatrix (year, monthIndex, monthPosition);
        }
    }

function render12Calendar (year, artboardSize, position) {
    var myDoc = makeDoc('docMMCalendarTest', artboardSize[0], artboardSize[1], 12, 'mm');
    var monthIndex, x, y, currentArtboardOrigin, monthPosition;
    for (var i=0;i<12;i++) {
        monthIndex = i;
        x = myDoc.artboards[i].artboardRect[0];
        y = myDoc.artboards[i].artboardRect[3];
        currentArtboardOrigin = [x, y]; // current Artboard Origin
        if (arguments[1]) monthPosition = [x+position[0], y+position[1]];
        else monthPosition = currentArtboardOrigin;
        var m = new MonthMatrix ();
        var re = m.renderMonthMatrix (year, monthIndex, monthPosition);
        }
    }
//~  // TEST
//~ var days = ['Dum', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'];
//~ var monthsNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

//~ var daysStyle = {fontSize: 30, borderWidth: 6};
//~ var mainDatesStyle = {fontSize: 30, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'solid', borderColor: [10, 10, 10, 10], borderWidth: 4};
//~ var neighboursDatesStyle = {fontSize: 30, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'dotted', borderWidth: 2};

//~ var units = 'mm';
//~ var year = 3000;
//~ var firstDayOfWeekIndex = 0; 
//~ var myArtboard = [1000, 600];
//~ var monthPosition = [0, 0];// undefined // [500, 0]; // will be generated from align TL=[0,2], TM=[1,2], TR=[2,2], LM=[0,1], MM=[1,1], RM=[2,1], BL=[0,0], BM=[1,0], BR=[2,0];
//~ var monthAlign = [0,0]; // align TL=[0,2], TM=[1,2], TR=[2,2], LM=[0,1], MM=[1,1], RM=[2,1], BL=[0,0], BM=[1,0], BR=[2,0];
//~ var myDoc = makeDocPoints('docMMCalendarTest', myArtboard[0], myArtboard[1], 1);
//~ renderMatrixMonth (year, 11, firstDayOfWeekIndex, monthPosition, days, daysStyle, mainDatesStyle, neighboursDatesStyle);
// renderSoloCalendar(myArtboard, 4, 3);
// render12Calendar(myArtboard);
// render12Calendar(myArtboard, monthPosition);


/* ===================== illustrator CALENDAR MonthMatrix constructor END    ===================== */

/*==================== ill_library13   END =========================*/

var aDoc=makeDoc ('forPdf', 210, 297, 1, 'mm');
//~ var cool = new CMYK (100, 100, 100, 100);
//~ var  rect = makeRectangle ([0,0], 10, 10, 5, cool, 'rect');
//~ var t = new TextBox ();
//~ t.boxStyle.width = 100;
//~ t.boxStyle.height = 100;
//~ t.boxStyle.borderWidth = 10;
//~ var ar = t.renderTextBox ();
//~ var myOb = {pr1: 'pr1', pr2:'prpr'};
//~ var currPath = new File($.fileName).path;
//~ var folder = new Folder(currPath).selectDlg();
//~ var fold = Folder(currPath).selectDlg();
//~ saveObAsJson (myOb, fold, 'testOs', true);
var f = new File($.fileName).openDlg();
var placed = app.activeDocument.placedItems.add();
placed.file = f;
placed.embed();