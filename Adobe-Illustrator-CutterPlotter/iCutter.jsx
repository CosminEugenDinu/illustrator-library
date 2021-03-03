/**
* @@@BUILDINFO@@@ iCutter_10.jsx !Version! Mon Feb 25 2019 17:56:58 GMT+0200
// custom text added (textToCut)
*/
#target illustrator
#targetengine main

// =======================polyfills============== 
Function.prototype.bind||function(){var t=Array.prototype.slice;Function.prototype.bind=function(n){var o=this,r=arguments[0],i=t.call(arguments,1),p=i.length;if("function"!=typeof o)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");return function(){return i.length=p,i.push.apply(i,arguments),o.apply(r,i)}}}();
// ========== Object.defineProperty polyfill ===============
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.returnExports=t()}(this,function(){var e,t,r,n,o=Function.call,c=Object.prototype,i=o.bind(c.hasOwnProperty),f=o.bind(c.propertyIsEnumerable),l=o.bind(c.toString),u=i(c,"__defineGetter__");u&&(e=o.bind(c.__defineGetter__),t=o.bind(c.__defineSetter__),r=o.bind(c.__lookupGetter__),n=o.bind(c.__lookupSetter__));var b=function(e){return null==e||"object"!=typeof e&&"function"!=typeof e};Object.getPrototypeOf||(Object.getPrototypeOf=function(e){var t=e.__proto__;return t||null===t?t:"[object Function]"===l(e.constructor)?e.constructor.prototype:e instanceof Object?c:null});var p=function(e){try{return e.sentinel=0,0===Object.getOwnPropertyDescriptor(e,"sentinel").value}catch(e){return!1}};if(Object.defineProperty){var a=p({});if(!("undefined"==typeof document||p(document.createElement("div")))||!a)var O=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||O){Object.getOwnPropertyDescriptor=function(e,t){if(b(e))throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+e);if(O)try{return O.call(Object,e,t)}catch(e){}var o;if(!i(e,t))return o;if(o={enumerable:f(e,t),configurable:!0},u){var l=e.__proto__,p=e!==c;p&&(e.__proto__=c);var a=r(e,t),s=n(e,t);if(p&&(e.__proto__=l),a||s)return a&&(o.get=a),s&&(o.set=s),o}return o.value=e[t],o.writable=!0,o}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){return Object.keys(e)}),!Object.create){var s,j=!({__proto__:null}instanceof Object);s=j||"undefined"==typeof document?function(){return{__proto__:null}}:function(){var e,t,r,n,o,c,i=function(){if(!document.domain)return!1;try{return!!new ActiveXObject("htmlfile")}catch(e){return!1}}()?(c="script",(o=new ActiveXObject("htmlfile")).write("<"+c+"></"+c+">"),o.close(),n=o.parentWindow.Object.prototype,o=null,n):(t=document.createElement("iframe"),r=document.body||document.documentElement,t.style.display="none",r.appendChild(t),t.src="javascript:",e=t.contentWindow.Object.prototype,r.removeChild(t),t=null,e);delete i.constructor,delete i.hasOwnProperty,delete i.propertyIsEnumerable,delete i.isPrototypeOf,delete i.toLocaleString,delete i.toString,delete i.valueOf;var f=function(){};return f.prototype=i,s=function(){return new f},new f},Object.create=function(e,t){var r,n=function(){};if(null===e)r=s();else{if(null!==e&&b(e))throw new TypeError("Object prototype may only be an Object or null");n.prototype=e,(r=new n).__proto__=e}return void 0!==t&&Object.defineProperties(r,t),r}}var d,y=function(e){try{return Object.defineProperty(e,"sentinel",{}),"sentinel"in e}catch(e){return!1}};if(Object.defineProperty){var _=y({}),w="undefined"==typeof document||y(document.createElement("div"));if(!_||!w)var v=Object.defineProperty,m=Object.defineProperties}if(!Object.defineProperty||v){Object.defineProperty=function(o,i,f){if(b(o))throw new TypeError("Object.defineProperty called on non-object: "+o);if(b(f))throw new TypeError("Property description must be an object: "+f);if(v)try{return v.call(Object,o,i,f)}catch(e){}if("value"in f)if(u&&(r(o,i)||n(o,i))){var l=o.__proto__;o.__proto__=c,delete o[i],o[i]=f.value,o.__proto__=l}else o[i]=f.value;else{var p="get"in f,a="set"in f;if(!u&&(p||a))throw new TypeError("getters & setters can not be defined on this javascript engine");p&&e(o,i,f.get),a&&t(o,i,f.set)}return o}}Object.defineProperties&&!m||(Object.defineProperties=function(e,t){if(m)try{return m.call(Object,e,t)}catch(e){}return Object.keys(t).forEach(function(r){"__proto__"!==r&&Object.defineProperty(e,r,t[r])}),e}),Object.seal||(Object.seal=function(e){if(Object(e)!==e)throw new TypeError("Object.seal can only be called on Objects.");return e}),Object.freeze||(Object.freeze=function(e){if(Object(e)!==e)throw new TypeError("Object.freeze can only be called on Objects.");return e});try{Object.freeze(function(){})}catch(e){Object.freeze=(d=Object.freeze,function(e){return"function"==typeof e?e:d(e)})}Object.preventExtensions||(Object.preventExtensions=function(e){if(Object(e)!==e)throw new TypeError("Object.preventExtensions can only be called on Objects.");return e}),Object.isSealed||(Object.isSealed=function(e){if(Object(e)!==e)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.isFrozen||(Object.isFrozen=function(e){if(Object(e)!==e)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isExtensible||(Object.isExtensible=function(e){if(Object(e)!==e)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var t="";i(e,t);)t+="?";e[t]=!0;var r=i(e,t);return delete e[t],r})});
// ======= Object.create polyfill =============
//~ if(typeof Object.create !=="function"){Object.create=function(proto){function F(){}F.prototype = proto;return new F();};}
//=======          polifyll JSON.stringify(value[, replacer[, space]])     JSON.parse(text[, reviver])           ============
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,f,u,i=gap,p=e[t];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),"function"==typeof rep&&(p=rep.call(e,t,p)),typeof p){case"string":return quote(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){for(f=p.length,r=0;f>r;r+=1)u[r]=str(r,p)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",gap=i,o}if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,p),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(o=str(n,p),o&&u.push(quote(n)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",gap=i,o}}var cx,escapable,gap,indent,meta,rep;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}),"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new Error("JSON.parse")})}();


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
//~     var myDoc =app.documents.addDocumentNoUI();
    return myDoc; // myDoc is a reference to newly created Document;
    };
/*============================ MatrixJS method =======================*/
/* MatrixJS properties:
// all position are x, y based (Quadrant 1 in Cartesian Coordinates);
    // parameters: 
// matrixPosition = [x, y]; default = origin = [0, 0];
// matrixDimensions = [xMatrixDimension, yMatrixDimension]; default = [100, 100]; xMatrixDimension = matrixWidth (horizontal); yMatrixDimension = matrixHeight (vertical);
// cells = [xCells, yCells]; default = [2, 2]; xCells = number of columns; yCells = number of rows; 
// cellsOffsetFactors = [x%, y%]; default = [0,0]; deplasation of virtual cell in the matrix in percents; center = [50, 50]; left_bottom = [0, 0]; right_top = [100, 100]; etc.;

   MatrixJS.matrixPosition = [x, y]; (r | w);
   MatrixJS.matrixDimensions = [xMatrixDimension, yMatrixDimension]; (r | w);
   MatrixJS.cells= [xCells, yCells]; (r | w); 
   MatrixJS.cellsOffsetFactors = [x%, y%]; (r | w);
    // autogenerated //
   MatrixJS._mPositions = this.generate_mPositions();  => [ [array of x arrays], [array of y arrays] ];)();
                                        returns [ 
                                                        [ [x1, y1], [x2, y1] ],
                                                        [ [x1, y1], [x1, y2] ]
                                                    ]; (r only); and assigns to MatrixJS._mPositions;                                             
   MatrixJS.prototype.getCellDimensions() => [xCellDimension, yCellDimension]; (r only);
   MatrixJS.prototype.getCellPosition(x, y) => [x, y]; (r only); // the origin position of specific cell inside the matrix;  
   MatrixJS.prototype.getCellBounds(x, y) =>  [x1, y1, x2, y2]
*/


function MatrixJS (matrixPosition, matrixDimensions, cells, cellsOffsetFactors) {
                            var defaults = [[0, 0], [100, 100], [2, 2], [50, 50]];
    
    this.matrixPosition= defaults[0];
    this.matrixDimensions = defaults[1];
    this.cells = defaults[2];
    this.cellsOffsetFactors = defaults[3];
    
    if (arguments[0]) this.matrixPosition = arguments[0];
    if (arguments[1]) this.matrixDimensions =arguments[1];
    if (arguments[2]) this.cells = arguments[2];
    if (arguments[3]) this.cellsOffsetFactors = arguments[3];
   
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
                            var xPos = this.matrixPosition[0] + (xCellDimension*i)+(xCellDimension*(this.cellsOffsetFactors[0]/100));
                                for (var j=0; j<yCells; j++) {
                                    var yPos =  this.matrixPosition[1] + (yCellDimension*j)+(yCellDimension*(this.cellsOffsetFactors[1]/100));
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

MatrixJS.prototype.getCellBounds = function (x, y) {
    var pos = this._mPositions[x][y];
    var d = this.getCellDimensions();
    var cb = [pos[0], pos[1]+d[1], pos[0]+d[0], pos[1]];
    return cb;
    };
/* // TEST
var myMatrix = new MatrixJS([0,0], [10, 10], [10, 10], [0, 0]);
var allPos = myMatrix._mPositions;
var celPos =  myMatrix.getCellPosition(1, 1);
var celD = myMatrix.getCellDimensions();
*/

/*============================ MatrixJS method END =======================*/
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
// ====================== DigitalClockStyle =================================
function DigitalClockStyle (stringNumber) {
    this.stringNumber = (arguments.length>0 && typeof stringNumber === 'string') ? stringNumber : '0123456789.0123  123' ;
    this.height = 10;
    this.width = 5;
    this.gap = 1; // gap between lines
    this.spacing = 2; // spacing between digits
    this.horizontalFlipping = true;
    }
DigitalClockStyle.prototype.render = function (position) {
    if (app.documents.length === 0) throw new Error('No document!');
    var d = app.activeDocument;
    // renaming
    var p = position ? position : [0,0];
    var sn = this.stringNumber, h = this.height, w = this.width, g = this.gap, s = this.spacing;
    var dci = sn.indexOf (sn.match(/\./g)); // dot character index // (-1) if there is no dot
    var snl = sn.length;// stringNumberLength
    $.writeln('sn.length '+snl);
    $.writeln('dci '+dci);
    // digits patterns // from right bottom in counterclockwise direction // middle line is last one (no. 7, index 6)
    /*  2_
        3|_|1
        4|_|0
     */   5
    var dpts= [
        [1, 1, 1, 1, 1, 1, 0], // 0
        [1, 1, 0, 0, 0, 0, 0], // 1
        [0, 1, 1, 0, 1, 1, 1], // 2
        [1, 1, 1, 0, 0, 1, 1], // 3
        [1, 1, 0, 1, 0, 0, 1], // 4
        [1, 0, 1, 1, 0, 1, 1], // 5
        [1, 0, 1, 1, 1, 1, 1], // 6
        [1, 1, 1, 0, 0, 0, 0], // 7
        [1, 1, 1, 1, 1, 1, 1], // 8
        [1, 1, 1, 1, 0, 1, 1], // 9
        ];
    // horizontal mirroring (flipping) ____________________________________________________________   
    var dpts_hf;
    if (this.horizontalFlipping) dpts_hf = (function (ar) {
        var ar = ar;
        for (var i=0;i<ar.length;i++) {
            var temp1 = ar[i][4];
           var temp2 = ar[i][3];
            ar[i][4] = ar[i][0];
            ar[i][0] = temp1;
            ar[i][3] = ar[i][1];
            ar[i][1] =temp2;
            }
        return ar;
        })(dpts); // dpts_hf = digits patterns horizontal flipped
    
    if (this.horizontalFlipping) dpts = dpts_hf;
    
    var m = new MatrixJS (p, [(snl*w)+(snl*s), h], [snl, 1], [0,0]);    
    var cd = m.getCellDimensions();
    for (var i = 0; i<snl; i++) {
        var cb = m.getCellBounds(i,0); // cell bounds
//~         var test = d.pathItems.add();
//~         test.setEntirePath([ [cb[0], cb[1]], [cb[2], cb[1]], [cb[2], cb[1]], [cb[2], cb[3]] ]);
        cb[2] -= s; // adding spacing
       // digit lines bounds // counterclockwise direction from right bottom // middle line is the last one
        var dlb = [
            [ cb[2], cb[3]+(g/2), cb[2], cb[1]-((g+cd[1])/2) ],
            [ cb[2], cb[3]+((g+cd[1])/2), cb[2], cb[1]-(g/2) ],
            [ cb[2]-(g/2), cb[1], cb[0]+(g/2), cb[1]],
            [ cb[0], cb[1]-(g/2), cb[0], cb[3]+((g+cd[1])/2) ],
            [ cb[0], cb[1]-((g+cd[1])/2), cb[0], cb[3]+(g/2) ],
            [ cb[0]+(g/2), cb[3], cb[2]-(g/2), cb[3] ],
            [ cb[2]-(g/2), cb[3]+(cd[1]/2), cb[0]+(g/2), cb[3]+(cd[1]/2) ],
          ];
        // dot character bounds
        var dcb = [ cb[0]-(w/8), cb[3]-(h/8), cb[0]+(w/8), cb[3]+(h/8) ];
        // render lines _______________________________________________________________________________________
        
        // read characters (digits) from left to right if mirrored
        
        var digit = ! this.horizontalFlipping ? sn.charAt(i).match(/\d/g) : sn.charAt(snl-1-i).match(/\d/g); // digit matched
        var dot = ! this.horizontalFlipping ? sn.charAt(i).match(/\./g) : sn.charAt(snl-1-i).match(/\./g);  // dot matched;
               
        var num = digit  ? Number( digit ) : null   ;

        if (num != null) {
            // render numbers
             for (var j=0; j<dpts[num].length; j++) {       
                if (dpts[num][j] === 1) {
                    var pi = d.pathItems.add();
                    var p1 = [dlb[j][0], dlb[j][1]], p2 = [dlb[j][2], dlb[j][3]];
                    pi.setEntirePath([ p1, p2 ]);
                    pi.stroked = true;
                    }
                }
            } else if (dot) {
                // render dot (comma)
                var pi = d.pathItems.add();
                var p1 = [ dcb[0], dcb[1] ], p2 = [ dcb[2], dcb[3] ];
                pi.setEntirePath([ p1, p2 ]);
                pi.stroked = true;
                }
        } 
};
/* // TEST
var d = makeDoc ('clock', 100, 50, 1)
var info1 = new DigitalClockStyle('12.02.1986');
info1.render([10,   20]);
info1.render();
*/
// ====================== DigitalClockStyle END  =================================

function ICutter (iCutter_settings) {
    this.description = 'Lorem ipsum description !';  // this text is shown only in iCutter_settings.json
    this.settings = {
        presetName : 'vinyl',
        units : 'mm',
        closeDocument : false, // true if the created document in illustrator should be closed after saving as svg.
        autoSaveSvg : false,
        openSvg : false, 
    };
    this.material = {
        type: 'roll',
        width: 1015, // width
        lateralMargin: 0, // lateral margin
        topMargin: 10, // top margin
        bottomMargin: 10, // bottom margin
        length: '', // length
        };
    // cover material
    this.cover = {
        width: 500, // the width of cover material
        height: 336, // the height of cover mat; height of book
        widthCornerDistance: 30, // wcd - width corner distances for cutting corner
        heightCornerDistance: 30, // hcd - height corner dist
        gap: 1, // 
        maxSegmentLength: 80, //  maximum segment length // distance between gaps
        gapOffset: 5,
        };
    // text info (numbers) to be rendered as lines
    this.textInfo = {
        textToCut : '123',
        show: true,
        size: 5,
        margins: 5,
        };
    if (arguments.length > 0 && typeof iCutter_settings === 'object'){
        for (var p in iCutter_settings) {
            if (p in this) this[p] = iCutter_settings[p];
            if (typeof this[p] === 'object') 
                for (var p2 in iCutter_settings[p]) {
    //~                 if (p in this && p2 in this[p]) 
    //~                     this[p][p2] = iCutter_settings[p][p2];      
                        this[p][p2] = iCutter_settings[p][p2];
                    }
            }
        }
    }
ICutter.prototype.render = function () {
// renaming _________________________________________________
var s = this.settings;
var m = this.material;
var mat = {
    type: m.type,
    w: m.width,
    lmg: m.lateralMargin,
    tmg: m.topMargin,
    bmg: m.bottomMargin,
    len: m.lendth,
    };
var c = this.cover;
var cm = {
    w: c.width, // the width of cover material is height on artboard
    h: c.height, // tha height of cover material is width on artboard
    wcd: c.widthCornerDistance,
    hcd: c.heightCornerDistance,
    gap: c.gap,
    msl: c.maxSegmentLength,
    gapoffset: c.gapOffset
    };
var ti = this.textInfo;
// units conversion ____________________________________________________________
var pt = 2.83464567; // 1 millimeter = 2.83464567 PostScript points
var umf = (s.units === 'mm') ? pt : 1; // units of measurement factor; if um = 'mm' -> dimens*pt ; else dimens*1 = pt
for (var p in mat)  if (typeof mat[p] === 'number') mat[p] *= umf;
for (var p in cm) if (typeof cm[p] === 'number') cm[p] *= umf;
for (var p in ti) if (typeof ti[p] === 'number') ti[p] *= umf;

// let's begin
var d = makeDoc (s.presetName, mat.w/umf, (cm.w+mat.tmg+mat.bmg)/umf, 1, s.units);
var numElem=Math.floor((mat.w-(mat.lmg*2))/cm.h);  // number of covers
var posAlign = (mat.w-(numElem*cm.h))/2; // for horizontal centering of elements
var m = new MatrixJS ([posAlign,mat.bmg], [cm.h*numElem,cm.w], [numElem,1], [0,0]);
// real gap offset
var go = ((cm.gapoffset*numElem)>=cm.msl) ? (cm.msl/(numElem+1)) : cm.gapoffset;
cm.gapoffset = go;
// render repetitive elements
for (var i=0; i<numElem; i++) {
    var c = m.getCellBounds (i, 0);   
    // render vertical right lines ___________________________________
    var vrl = {};
    vrl.l = cm.w-((cm.wcd*2)+(cm.gap*2));// veritical line length (between marginal gaps)
    vrl.fll = cm.gapoffset; // first line length
    vrl.nmsl = Math.floor( (vrl.l-(vrl.fll*(i+1))-cm.gap)/(cm.msl+cm.gap) );// number of maximum segments length   
    vrl.fly1 = c[1]-(cm.wcd+cm.gap); // first line y coordinate 1 - beginning (from top to bottom)
    vrl.fly2 = vrl.fly1-(vrl.fll*(i+1)); // first line y coordinate 2 - end       
    vrl.lly1 = (vrl.fly2-cm.gap)-((cm.msl+cm.gap)*vrl.nmsl); // last line y coordinate 1 - biginning
    vrl.lly2 = c[3]+cm.wcd+cm.gap; // last line y coordinate 2 - end   
    // render first right vertical line
    var frl = d.pathItems.add(); // first right line
    frl.setEntirePath([ [ c[2], vrl.fly1 ], [c[2], vrl.fly2]]);
    // render equal length right vertical lines
    for (var j=0;j<vrl.nmsl;j++) {
        var elrvl = d.pathItems.add(); // equal length right vertical line
        var yb; // y beginning coordinate
        yb = vrl.fly2-cm.gap;
        yb -= j*(cm.msl+cm.gap); // y beginning coordinate
        elrvl.setEntirePath([ [c[2], yb], [c[2], (yb-cm.msl)] ]);      
        }
    // render last right vertical line
    var lrl = d.pathItems.add(); // last right line
    lrl.setEntirePath([ [ c[2], vrl.lly1 ], [c[2], vrl.lly2]]);
    // render horizontal lines _______________________________________________ 
    var hl = {}; // horizontal lines
    hl.l = cm.h-((cm.hcd*2)+(cm.gap*2)); // horizontal line length (between marginal gaps)
    hl.nmsl = Math.floor( (hl.l-cm.gap)/(cm.msl+cm.gap) ); // number of segments with maximum length
    hl.mll = (hl.l-(hl.nmsl*(cm.msl+cm.gap)))/2; // marginal line length
    hl.flx1 = c[2]-(cm.hcd+cm.gap); // first line x coordinate 1 - beginning (from right to left)
    hl.flx2 = hl.flx1-hl.mll; // first line x coordinate 2 - end       
    hl.llx1 = (hl.flx2-cm.gap)-((cm.msl+cm.gap)*hl.nmsl); // last line x coordinate 1 - biginning
    hl.llx2 = c[0]+cm.hcd; // last line x coordinate 2 - end   
    // render top lines
    // render first top horizontal line (from the right-top corner)
    var fthl = d.pathItems.add(); // first top horizontal line
    fthl.setEntirePath([ [hl.flx1, c[1]], [hl.flx2, c[1]]]);
    // render equal length top horizontal lines
    for (var j=0;j<hl.nmsl;j++) {
        var elthl = d.pathItems.add(); // equal length top horizontal line
        var xb; // x beginning coordinate
        xb = hl.flx2-cm.gap;
        xb -= j*(cm.msl+cm.gap); // x beginning coordinate
        elthl.setEntirePath([ [xb, c[1]], [(xb-cm.msl), c[1]] ]);      
        }
    // render last top horizontal line
    var lthl = d.pathItems.add(); // last top horizontal line
    lthl.setEntirePath([ [hl.llx1, c[1]], [hl.llx2, c[1]]]);   
    // render bottom lines
    // render first bottom horizontal line (from the right-bottom corner)
    var fbhl = d.pathItems.add(); // first bottom horizontal line
   fbhl.setEntirePath([ [hl.flx1, c[3]], [hl.flx2, c[3]]]);
    // render equal length bottom horizontal lines
    for (var j=0;j<hl.nmsl;j++) {
        var elthl = d.pathItems.add(); // equal length bottom horizontal line
        var xb; // x beginning coordinate
        xb = hl.flx2-cm.gap;
        xb -= j*(cm.msl+cm.gap); // x beginning coordinate
        elthl.setEntirePath([ [xb, c[3]], [(xb-cm.msl), c[3]] ]);      
        }
    // render last bottom horizontal line   
    var lbhl = d.pathItems.add(); // last bottom horizontal line
    lbhl.setEntirePath([ [hl.llx1, c[3]], [hl.llx2, c[3]]]); 
    // render corners _________________________________________________________
    var rtc = d.pathItems.add(); // right top corner
    rtc.setEntirePath([ [c[2], c[1]-cm.wcd], [c[2]-cm.hcd, c[1]] ]);
    var ltc = d.pathItems.add(); // left top corner
    ltc.setEntirePath([ [c[0]+cm.gap, c[1]-cm.wcd+cm.gap], [c[0]+cm.hcd-cm.gap, c[1]-cm.gap] ]);
    var lbc = d.pathItems.add(); // left bottom corner
    lbc.setEntirePath([ [c[0]+cm.gap, c[3]+cm.wcd-cm.gap], [c[0]+cm.hcd-cm.gap, c[3]+cm.gap] ]);
    var rbc = d.pathItems.add(); // right bottom corner
    rbc.setEntirePath([ [c[2]-cm.hcd, c[3]], [c[2], c[3]+cm.wcd] ]);   
    // render vertical left line (only one ! ) ___________________________________
    // render equal length left vertical line // almost the same as right but with yb modified
    if (i==0) {
        if (cm.msl>=(c[1]-c[3]-((cm.wcd+cm.gap)*2))) {
            var ellvl = d.pathItems.add(); // equal length left vertical line
            ellvl.setEntirePath([ [c[0], c[1]-cm.wcd], [c[0], c[3]+cm.wcd] ]);     
            } else {
            vrl.nmsl = Math.floor( (vrl.l-cm.gap)/(cm.msl+cm.gap) );// number of maximum segments length    
            for (var j=0;j<vrl.nmsl;j++) {
                var ellvl = d.pathItems.add(); // equal length left vertical line
                var ylb; // y left beginning coordinate
                ylb = c[1]-cm.wcd;
                ylb -= j*(cm.msl+cm.gap); // y beginning coordinate
                ellvl.setEntirePath([ [c[0], ylb], [c[0], (ylb-cm.msl)] ]);      
                }
            // render last left vertical line
            var lll = d.pathItems.add(); // last left line
            lll.setEntirePath([ [ c[0], ylb-cm.msl-cm.gap ], [c[0], c[3]+cm.wcd]]);
            }
        }
    // render text info ___________________________________
    if (ti.show) {
//~         var infoText = new DigitalClockStyle (this.cover.width.toString()+'   '+this.cover.height.toString()); // the width of the cover
        var infoText = new DigitalClockStyle (ti.textToCut); // the width of the cover
        infoText.height = ti.size;
        infoText.width = ti.size/2;
        infoText.gap = ti.size/10;
        infoText.spacing = ti.size/4;
        var infoTextPos = [ c[0]+cm.hcd, c[1]-infoText.height-ti.margins ];
        infoText.render(infoTextPos);
        }
    }
    
}

// if iCutter_settings.json exists in current path then create ob iCutter_settings
// if not then save current ob new ICutter()
var currentPath = new File($.fileName).path;
var f = new File(currentPath+'/iCutter_settings.json');
if (f.exists) {
    try {
    var iCutter_settings = obFromJsonFile (f);
    } catch (e) {$.writeln (e);}
    } else if (!f.exists) {
        var toSave = new ICutter();
        var currentFolder = new File($.fileName).parent;
        saveObAsJson (toSave, currentFolder, 'iCutter_settings', true);
        }
// if iCutter_settings is null ( or undefined) new ICutter uses predefined values
var iCutter = new ICutter(iCutter_settings);
iCutter.render();

// select all paths
app.selection = null;  
pItems = app.activeDocument.pathItems;  
for (var i = pItems.length-1; i >= 0; i--) pItems[i].selected = true;  

// create folder and save as svg
//~ if (s.autoSaveSvg) {
        try {
            var fol = new Folder (currentPath+'/iCutter_svg');
            fol.create();
            var destFolder = fol;
            var targetFile = this.getTargetFile(app.activeDocument.name, '.svg', destFolder);
            var options = this.getOptions();
            app.activeDocument.exportFile(targetFile, ExportType.SVG, options);
            } catch(e) {
                alert( e.message, "Script Alert", true);
                }
//~     }

// open the svg file
if (iCutter.settings.openSvg) targetFile.execute();
// close document
if (iCutter.settings.closeDocument) app.activeDocument.close();


function getOptions()
{
	// Create the required options object
	var options = new ExportOptionsSVG();
	// See ExportOptionsSVG in the JavaScript Reference for available options
		
	// Set the options you want below:
	
	// For example, uncomment to set the compatibility of the generated svg to SVG Tiny 1.1	
	// options.DTD = SVGDTDVersion.SVGTINY1_1;
	
	// For example, uncomment to embed raster images
	// options.embedRasterImages = true;
	
	return options;
}

/** Returns the file to save or export the document into.
	@param docName the name of the document
	@param ext the extension the file extension to be applied
	@param destFolder the output folder
	@return File object
*/
function getTargetFile(docName, ext, destFolder) {
	var newName = "";

	// if name has no dot (and hence no extension),
	// just append the extension
	if (docName.indexOf('.') < 0) {
		newName = docName + ext;
	} else {
		var dot = docName.lastIndexOf('.');
		newName += docName.substring(0, dot);
		newName += ext;
	}
	
	// Create the file object to save to
	var myFile = new File( destFolder + '/' + newName );
	
	// Preflight access rights
	if (myFile.open("w")) {
		myFile.close();
	}
	else {
		throw new Error('Access is denied');
	}
	return myFile;
}

 // app.quit();



