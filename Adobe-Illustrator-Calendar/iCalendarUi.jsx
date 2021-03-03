/**
* @@@BUILDINFO@@@ illustratorCalendar21.jsx !Version! Fri Jan 18 2019 20:36:22 GMT+0200
obFromJsonFile ; saveObAsJson      functions added to library
*/

#target illustrator
#targetengine main





/*========================= ill_library11 =========================*/

/*==================polyfill Object.create without second argument =====================*/
if(typeof Object.create !=="function"){Object.create=function(proto){function F(){}F.prototype = proto;return new F();};}
/*==================polyfill Object.create without second argument =====================*/


/*======================= polyfill Array.prototype.reduce ==================================*/
if (!Array.prototype.reduce) { Array.prototype.reduce = function(callback /*, initialValue*/) {
if (this === null) { alert( 'Array.prototype.reduce ' + 'called on null or undefined' );}
if (typeof callback !== 'function') {alert( callback +' is not a function');}
var o = Object(this);var len = o.length >>> 0;  var k = 0; var value;
if (arguments.length >= 2) {value = arguments[1];} else { while (k < len && !(k in o)) {k++;}
if (k >= len) {alert( 'Reduce of empty array ' +'with no initial value' );} value = o[k++];}
while (k < len) {if (k in o) {value = callback(value, o[k], k, o);}k++;} return value;}}
/*======================= polyfill Array.prototype.reduce ==================================*/

//=======          polifyll JSON.stringify(value[, replacer[, space]])     JSON.parse(text[, reviver])           ============
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){
  return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];
    return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}
  function str(t,e){var n,r,o,f,u,i=gap,p=e[t];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),
    "function"==typeof rep&&(p=rep.call(e,t,p)),typeof p){case"string":return quote(p);case"number":return isFinite(p)?String(p):"null";
  case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){
    for(f=p.length,n=0;f>n;n+=1)u[n]=str(n,p)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",gap=i,o}
      if(rep&&"object"==typeof rep)for(f=rep.length,n=0;f>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],o=str(r,p),o&&u.push(quote(r)+(gap?": ":":")+o));
    else for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(o=str(r,p),o&&u.push(quote(r)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+
    u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",gap=i,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){
      return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+
      f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){
        return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&
    (escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,n){var r;
        if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=e,
          e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),
    "function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      JSON.parse=function(text,reviver){function walk(t,e){var n,r,o=t[e];if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&
      (r=walk(o,n),void 0!==r?o[n]=r:delete o[n]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&
        (text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@")
          .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")
          .replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;
      throw new Error("JSON.parse")})}();
//=======  polifyll JSON.stringify(value[, replacer[, space]])     JSON.parse(text[, reviver])  END    ============



/*========================= makeDoc Illustrator method ========================================*/
/**************
makeDoc is a function for creating new illustrator document with unit = millimeters and colorSpace = CMYK
example:
var newDoc = makeDoc('test_name_A4', 210, 295, 1);
**************/
var makeDoc = function (docName, artWidth, artHeight, artNr) {
    var pt = 2.83464567; // == 1mm
    var myPreset = new DocumentPreset();
    myPreset.title = docName;
    myPreset.width = artWidth*pt;
    myPreset.height = artHeight*pt;
    myPreset.numArtboards = artNr;
    myPreset.artboardLayout = DocumentArtboardLayout.Column;
    myPreset.units = RulerUnits.Millimeters;
    myPreset.colorMode = DocumentColorSpace.CMYK;
    var myDoc =app.documents.addDocument("Print", myPreset, false);
    return myDoc; // myDoc is a reference to newly created Document;
    };

var makeDocPoints = function (docName, artWidth, artHeight, artNr) {
    var myPreset = new DocumentPreset();
    myPreset.title = docName;
    myPreset.width = artWidth;
    myPreset.height = artHeight;
    myPreset.numArtboards = artNr;
    myPreset.artboardLayout = DocumentArtboardLayout.Column;
    myPreset.units = RulerUnits.Points;
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
function makeRectangle (position, width, height, stroke, fill, strokeColor, fillColor, name);
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
        if(!filePath||typeof filePath!='string') throw new Error('type of filePath : is '+(typeof filePath)+filePath, filePath); 
            else if ('string'===typeof filePath)  {            
                    var file = new File(filePath);          
                    if(!file.exists) throw new Error('No file!', file);
                    var opened = file.open("r"); // open file for reading; Returns true if the file has been opened successfully, false otherwise.
                    if(!opened) throw new Error('Could not open("r")', file);
                        // else $.writeln(file.displayName+' successfully opened ("r") ! Path : '+file.path);
                    var jsonString = file.read();
                        // $.writeln('(jsonString from '+file.displayName+').length is : '+jsonString.length+';');
                     file.close();
                     var ob = JSON.parse(jsonString);
                     return ob;
                    }
        } catch (e){
            $.writeln('=>function obFromJsonFile (filePath)\r\n'+e.name+' line: '+e.line+' , message: "'+e.message+'"'+', fileName: '+e.fileName+';');
            return false;
            }
    }




function saveObAsJson(ob, folderPath, jsonName, rewrite) {
    try{
        if (!ob) throw new Error('ob is '+ob);
        var jsonString = JSON.stringify(ob, null, ' ');       
        if (!folderPath||typeof folderPath!='string') throw new Error('typeof folderPath: '+(typeof folderPath)+folderPath, folderPath);
            else if ('string'===typeof folderPath) {
                var file = new File(folderPath + '/'+jsonName+'.json');
                var initialExistence = file.exists;          
                if (file.exists&&rewrite||!file.exists) {
                    var opened = file.open("w"); // creates file if not exists or rewrite it if exists; Returns true if the file has been opened successfully, false otherwise.
                    if(!opened) throw new Error(file.displayName+' could not be created/opened ("w") on folderPath: ', file.path);                
                    var writen = file.write(jsonString); // returns true on success;
                    if (!writen) throw new Error('The file '+file.displayName+'could not be writen on folderPath: '+file.path);
                    // $.writeln('=>function saveObAsJson() \r\n'+file.displayName+' initialExistence <<'+initialExistence+'>>');
                    // $.writeln((initialExistence) ? file.displayName+' successfully rewrited! Path : '+file.path : file.displayName+' successfully created! Path : '+file.path);
                    file.close();
                    return true;
                    } else if (file.exists&&!rewrite) return false;
                }
        } catch (e) {
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


/* ===================== illustrator CALENDAR BEGIN ===================== */


    
    
    
    
function MonthData (year, monthIndex) {
    var date = new Date(year, monthIndex+1, 0);
    this.daysCount = date.getDate(); // number of days in this month
    this.lastDayIndex = date.getDay(); // day of the week of the last day in this month
    this.firstDayIndex = (7-((this.daysCount-(this.lastDayIndex+1))%7)); // week day index of the first day in the month;  
    }

function renderMatrixMonth (year, monthIndex, firstDayOfWeekIndex, monthPosition, days, daysStyle, mainDatesStyle, neighboursDatesStyle) {
    var m = new MonthData(year, monthIndex);
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
    var margin = 0;
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
        daysTextBox.boxStyle.top = datesBoxesPositions[i][1]+daysTextBox.calculateBoxHeight(1)+maxStroke+margin;
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
     }


function renderSoloCalendar (artboard, columns, rows) {
    var myDoc = makeDocPoints('docMMCalendarTest', artboard[0], artboard[1], 1);
    var docMatrix = new MatrixJS ([0,0], [myDoc.width, myDoc.height], [columns, rows], [0,0]);
    var monthsPositions = docMatrix.get_mPositions_lrtb();
    for (var i=0;i<12;i++) {       
       var monthIndex = i;
        var monthPosition = monthsPositions[i];
        var re= renderMatrixMonth(year, monthIndex, firstDayOfWeekIndex, monthPosition, days, daysStyle, mainDatesStyle, neighboursDatesStyle);
        }
    }

function render12Calendar (artboard, position) {
    var myDoc = makeDocPoints('docMMCalendarTest', artboard[0], artboard[1], 12);
    var monthIndex, x, y, currentArtboardOrigin, monthPosition;
    for (var i=0;i<12;i++) {
        monthIndex = i;
        x = myDoc.artboards[i].artboardRect[0];
        y = myDoc.artboards[i].artboardRect[3];
        currentArtboardOrigin = [x, y]; // current Artboard Origin
        if (arguments[1]) monthPosition = [x+position[0], y+position[1]];
        else monthPosition = currentArtboardOrigin;
        renderMatrixMonth(year, monthIndex, firstDayOfWeekIndex, monthPosition, days, daysStyle, mainDatesStyle, neighboursDatesStyle);
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


/* ===================== illustrator CALENDAR END    ===================== */

/*==================== ill_library11   END =========================*/


var started = false;

function illustratorCalendar () {
started = true;


// =================== ILLUSTRATOR CALENDAR WINDOW ====================

function CalendarW(left, top) {

    
     this.left = left;
     this.top = top;
     this.width = 280;
     this.height= 480;
     this.bottom = this.top+this.height;
     this.right = this.left+this.width;    
     this.bounds= [this.left, this.top, this.right, this.bottom];
     this.wRef = null;

  

    
//~    ==================== mainPanel =============================  
    var lang = {
            type: 'dropdownlist',
            label: 'Lang:',
            items: ['RO','EN','-','Other'],
            preSelected: 0,
            callback: function (e) {
                $.writeln('lang callback');
                    // changes the first day of week depending on language selection
                    var firstDay = this.window.mainPanel.firstDay.drop;
                    if (this.selection === this.items[0]) firstDay.selection = firstDay.items[1];
                        else firstDay.selection = firstDay.items[0];
                        firstDay.layout.layout(true); // refreshes the firstDay group     
                        },
        };
    
    var year = {
            type: 'dropdownlist',
//~             items : ['2021','2020', '2019', '2018','2017','2000','-','SetYear'],
            items : ['2021','2020', '2019', '2018','2017','-','SetYear'],
            label : 'Year:',
            preSelected : 2,
            callback : function (e) {
                    // alert('callback triggered');
                    if (this.selection=== this.items[6]) 
                        {
                            var userInput = prompt('please set year', '2050');
                            if (!userInput) this.selection = this.items[2];
                            else {
                            this.add('item', userInput);   
                            var lastIndex = this.items.length-1;
                            var lastItem = this.items[lastIndex];
                            this.selection = lastItem; // writes userInput on last index of items array
                            this.remove(this.items[lastIndex-1]); // removes the separator item before userImput in items array;
                                    }
                            }
                    }
        };
    var firstDay = {
            type : 'dropdownlist',
            items : ['Sun','Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            preSelected : 1,
            label : 'FirstDay:',
            callback : function (e) {
//~                            alert('hello from firstDay.callback()');
                        }
        };
    
    var calType = {
        type : 'dropdownlist',
        items : ['SinglePage','MultiPage'],
        preSelected : 1,
        label : 'Type:', 
        callback : function (e) {
                    // alert('hello from calType.callback()');
                    }
        };
   
    this.mainPnl = {
        res: "Panel {margins : [0,0,0,0], spacing : 0, orientation : 'row'}",
        lang : new UiElement(lang),
        year: new UiElement(year),
        firstDay: new UiElement(firstDay),
        calType  : new UiElement(calType),
        };
    
//~     ================= mainPanel END ==============================

//~ ==================== presetsPanel ===============================
    
    var selMainResFolder = {
        type : 'button',
        label : 'Res. Folder',
        callback : function (e) {
//~                 alert('hello from selMainResFolder callback()');
                set_mainResFolder ();
                globalPapers = uploadGlobalPapers();
                calendarPapers = uploadCalendarPapers();
            },
        width : 80
        };
    var selPreset = {
        type : 'dropdownlist',
        preSelected: undefined,
        items : ['Preset1', 'preset2', 'preset3', '-', 'Untitled'],
        label : undefined,
        width : 110
        };
    var savePreset = {
        type: 'button',
        label : 'Save',
        width : 40,
        callback : function (e) {
                alert('hello from savePresetBtn callback()');
            },
        };
    var saveAsPreset = {
        type: 'button',
        label : 'SaveAs',
        width : 50,
        callback : function (e) {
                alert('hello from savePresetBtn callback()');
            },
        };
    
    this.presetsPnl = {
        res : "Panel {text: 'Presets Settings : ', margins : [0,10,0,2], spacing : 2, orientation : 'row'}",
        mainResFolder : new UiElement(selMainResFolder),
        selPreset : new UiElement(selPreset),
        savePreset : new UiElement(savePreset),
        saveAsPreset : new UiElement(saveAsPreset),
        };
    
//~     ========================= presetsPanel END =================================
    
//~     ========================= Advanced Settings Panel =================================
    
    var calendarBtn = {
        type : 'button',
        label : 'Calendar',
        clicked : true,
        callback : function () {},
        };
    
    var layoutBtn = {
        type : 'button',
        label : 'Layout',
        clicked : true,
       callback : function () {
            var calendarW_ref = this.window.calendarW_ref;
            var extSetPanel = this.window.extSetPanel;
            // clean extSetPanel
            if (extSetPanel.children.length>0){extSetPanel.remove(extSetPanel.children[0]);}
           },
        };

    var printBtn = {
        type : 'button',
        label : 'Print',
        width : 40,
        clicked: true,
        callback : function () {
            var calendarW_ref = this.window.calendarW_ref;
            var extSetPanel = this.window.extSetPanel;
            // clean extSetPanel
            if (extSetPanel.children.length>0){extSetPanel.remove(extSetPanel.children[0]);}
            
            // make a single panel with the content to render at printBtn 'click', that will be removed by other tabs
            var printSettingsRes = "Panel {text: 'Print Settings :', margins: [0,5,0,2], orientation: 'row'}";
            extSetPanel.printSettings = extSetPanel.add(printSettingsRes);
            
            // render printSettingsTabs on extSetPanel.print
            extSetPanel.printSettings.printTabs = renderUiTabs.call(printSettingsTabs, extSetPanel.printSettings);
            
           // extPrintPanel is the panel in UI where are shown elements created dynamically by printTabs buttons
           var extPrintPanelRes ="Panel {preferredSize : [200,200], margins: [0,5,0,2], spacing: 2}";
            extSetPanel.printSettings.extPrintPanel = extSetPanel.printSettings.add(extPrintPanelRes);
            var extPrintPanel = extSetPanel.printSettings.extPrintPanel;
            var welcomeText = 'Important Lorem Ipsum INFO : \n\nHere you can adjust printing settings settings settings settings settings settings. \n\nOK !?'
            extPrintPanel.welcomeText = extPrintPanel.add('statictext', undefined, welcomeText, {multiline: true});
            extPrintPanel.welcomeText.preferredSize = [200,200];
            extSetPanel.layout.layout(true);
            },
        };
    
    var testBtn = {
        type : 'button',
        label : 'TEST',
        clicked : true,
        callback : function () {},
        };

    this.advSetPnl = {
        res : "Panel {text: 'Advanced Settings : ', margins : [0,10,0,2], spacing : 2, orientation : 'row'}",
        tabsG : { // tabs group
            type: 'tabs',
            res : "Group {margins : [0,0,0,0], spacing : 2, orientation : 'row'}",
            buttons: {
                calendarBtn : calendarBtn,
                layoutBtn : layoutBtn,
                printBtn : printBtn,
                testBtn : testBtn,
                }
            }
        };
//~ ================ Advanced Settings Panel END ===================

    // extended settings panel is the panel where dynamically created elements are shown
    var size = [280, 280];
    this.extSetPnl = { // this will be created by CalendarUi.render function
        res : "Panel {margins: [0,0,0,0], preferredSize: ["+size.toString()+"]}",
        };
    
//~     ======================= Print  Settings ========================

    var paperTestBtn = {
        type: 'button',
        label: 'test',
        callback: function () { // this callback will run forever on the element, and after onClick????
            $.writeln('paperPreset button callback triggered');
            },
        };
    var prSize = [80, 20];
    var paperPnl = {
            res : "Group{orientation: 'column', alignChildren: 'left', spacing: 0,\
                presetG: Group{spacing: 1, st: StaticText {text: 'Preset Name :', preferredSize:["+prSize.toString()+"]}, \
                                name: StaticText{preferredSize: [120, "+prSize[1]+"]}},\
                unitsG: Group {spacing: 1, st: StaticText {text: 'Units :', preferredSize:["+prSize.toString()+"]},},\
                formatG: Panel {spacing: 0, orientation: 'row', margins: [0,0,0,0], st: StaticText{text: 'Format :',preferredSize:[50, "+prSize[1]+"]}, \
                                 name: StaticText {preferredSize: [60, "+prSize[1]+"]}, },\
                widthG: Group {spacing: 1, st: StaticText{text: 'Width :', preferredSize:["+prSize.toString()+"]}, \
                                value: EditText{preferredSize:[60,20]}, \
                                units: StaticText{preferredSize:[30,"+prSize[1]+"]}},\
                heightG: Group {spacing: 1, st: StaticText{text: 'Height :', preferredSize:["+prSize.toString()+"]}, \
                                value: EditText{preferredSize:[60,20]}, \
                                units: StaticText{preferredSize:[30,"+prSize[1]+"]} \
                                },\
                weightG: Group {spacing: 1, st: StaticText{text: 'Weight :', preferredSize:["+prSize.toString()+"]}, \
                                value: EditText{preferredSize:[60, 20]}, \
                                units: StaticText{preferredSize:[30,"+prSize[1]+"]} \
                                },\
                typeG: Group {spacing: 1, st: StaticText{text: 'Type :', preferredSize:["+prSize.toString()+"]}, \
                                edit: EditText{preferredSize:[120,20]} \
                                },\
                tradeNameG: Group{spacing: 1, st:StaticText{text:'Trade Name :', preferredSize:["+prSize.toString()+"]}, \
                                edit: EditText{preferredSize:[120,20]} \
                                }\
                btnsG: Group {}\
                \
                }",
         unitsDd : { // units dropdown element
             type: 'dropdownlist',
             items: ['Millimeters', 'Inches'],
             width: 100,
             callback: function () {
                 var extPrintPanel = this.window.extSetPanel.printSettings.extPrintPanel;
                  // 1 inch = 25.4 mm; => 1inch/1mm = 25.4;
                var cf = 25.4;   // conversion factor;
                 if (this.selection === this.items[0]&&print.paper.um==='in') {
                     
                     print.paper.um= 'mm';
                     print.paper.width = print.paper.width*cf;
                     print.paper.height = print.paper.height*cf;
                     }
                 else if (this.selection === this.items[1]&&print.paper.um==='mm') {
                     
                     print.paper.um = 'in';
                     print.paper.width = print.paper.width/cf;   
                     print.paper.height = print.paper.height/cf;   
                       }
                // updates widthG.units statictext and heightG.units statictext
                extPrintPanel.paperG.widthG.units.text = print.paper.um;
                extPrintPanel.paperG.heightG.units.text = print.paper.um;
                // updates widthG.value and heightG.value EditText 
                extPrintPanel.paperG.widthG.value.text = print.paper.width.toFixed(2);
                extPrintPanel.paperG.heightG.value.text = print.paper.height.toFixed(2);
//~                 extPrintPanel.layout.layout(true);

                $.writeln(print.paper.um);
                 },
             },
         formatSelBtn: {
              type: 'button',
              label: 'Select',
              width: 60,
              height: 20,
              callback: function() {
                    if (globalPapers) { // prevent button functionality is globalPapers is not defined
                            // clean extSetPanel
                            var extSetPanel = this.window.extSetPanel;
                            if (extSetPanel.children.length>0){extSetPanel.remove(extSetPanel.children[0]);}
                            extSetPanel.paperFormatPanel = extSetPanel.add('panel', undefined, 'Select Paper Format :');
                            extSetPanel.paperFormatPanel.sel = extSetPanel.paperFormatPanel.add('listbox', undefined, globalPapers.pfn.A);
                            extSetPanel.paperFormatPanel.okBtn = renderUiElement.call({
                                type: 'button',
                                label: 'OK',
                                width: 250,
                                callback: function () {},
                                }, extSetPanel.paperFormatPanel);
                            extSetPanel.layout.layout(true);
                        } else alert("Oups! You have chosen to run program without globalPapers !\r\nYou can't select Format");
                  },
             },

         // file system buttons (open, save, saveAs);
         fsBtns : {
             // by default, presets are loaded from calendarpapers.json from res folder;
             loadPresetBtn : {
                type: 'button',
                label: 'Load Presets',
                width: 80,
                callback: function () {
                    // change calendarPapers
                    $.writeln('Hello from printPaperBtn.loadPresetBtn.callback');
                    },
                },
            savePresetBtn : {
                type: 'button',
                label: 'Save',
                width: 40,
                callback: function() {
                    $.writeln('save btn callback');
                    var p = {}; // new empty object
                    for (var pr in print.paper) p[pr] = print.paper[pr]; // properties from print.paper are copied to p
                    calendarPapers.push(p); // p is pushed to calendarPapers array;
                    var s = JSON.stringify(calendarPapers);
                    $.writeln('s is :'+s);
                    saveCalendarPapers ();
                    },
                },
            saveAsPresetBtn: {
                type: 'button',
                label: 'SaveAs',
                width: 50,
                callback: function () {
                    $.writeln('saveAs btn callback');
                    var s = JSON.stringify(calendarPapers);
                    $.writeln('s is :'+s);
                    },
                }
         },

        };
    
    var printTabsWidth = 60;
    var printPaperBtn = {
        type: 'button',
        label: 'Paper',
        clicked: true,
        width: printTabsWidth,
        callback: function() {
            var extPrintPanel = this.window.extSetPanel.printSettings.extPrintPanel;
            extPrintPanel.text = this.text+' :';
            // clean extPrintPanel
            if (extPrintPanel.children.length>0){extPrintPanel.remove(extPrintPanel.children[0]);}  
            extPrintPanel.paperG = extPrintPanel.add(paperPnl.res);
            var paperG = extPrintPanel.paperG;
            // preset name group
            paperG.presetG.name.text = '<'+print.paper.presetName+'>';
            var um = print.paper.um; // units of measurement
            // units select dropDown
            paperG.unitsG.sel = renderUiElement.call(paperPnl.unitsDd, paperG.unitsG);
             var unitsDd = paperG.unitsG.sel.drop; // units dropdown;
             // this switch sets the selected item of units dropdown to match the units from print.paper.um;
            switch (um) {
                case 'mm' : unitsDd.selection = unitsDd.items[0]; break;
                case 'in' : unitsDd.selection = unitsDd.items[1]; break;
                }
            
            // paper format
            paperG.formatG.name.text = print.paper.format;
            // paper format select button
            paperG.formatG.sel = renderUiElement.call(paperPnl.formatSelBtn, paperG.formatG);
            // width group
            paperG.widthG.units.text = um; // sets the value of units StaticText
            paperG.widthG.value.text = print.paper.width; // sets the value of EditText value
            // height group
            paperG.heightG.units.text = um;
            paperG.heightG.value.text = print.paper.height;
            // weight group
            paperG.weightG.units.text = 'gsm'; // grams per square meters;
            paperG.weightG.value.text = print.paper.weight;
            //type group
            paperG.typeG.edit.text= print.paper.type;
            // tradeName group
            paperG.tradeNameG.edit.text = print.paper.tradeName;

            // filesystem buttons
            paperG.fsBtnsG = paperG.add("Group{spacing: 2}");
            for (var p in paperPnl.fsBtns) {
                if (p != 'res') {
                    paperG.fsBtnsG[p] = renderUiElement.call(paperPnl.fsBtns[p], paperG.fsBtnsG);
                    }
                }
            
            extPrintPanel.layout.layout(true);
//~             extPrintPanel.paperPreset = renderUiElement.call(paperTestBtn, extPrintPanel);
            },
        };
    var printLayoutBtn ={
        type: 'button',
        label: 'Layout',
        clicked: true,
        width: printTabsWidth,
        callback: function() {
            var extPrintPanel = this.window.extSetPanel.printSettings.extPrintPanel;
            extPrintPanel.text = this.text+' :';
            // clean extPrintPanel
            if (extPrintPanel.children.length>0){extPrintPanel.remove(extPrintPanel.children[0]);}
            
            },
        };
    function eHand () {
        $.writeln('eventListener added by Finishing');
        }
    var printFinishingBtn = {
         type: 'button',
         label: 'Finishing',
         clicked: true,
         width: printTabsWidth,
         callback: function() {
            var extPrintPanel = this.window.extSetPanel.printSettings.extPrintPanel;
            extPrintPanel.text = this.text+' :';
            // clean extPrintPanel
            if (extPrintPanel.children.length>0){extPrintPanel.remove(extPrintPanel.children[0]);}
            
           extPrintPanel.paperPreset.addEventListener('click',  eHand);
             },
        };
    var printInfoBtn = {
        type: 'button',
        label: 'info',
        clicked: true,
        width: printTabsWidth,
        callback: function () {
            var extPrintPanel = this.window.extSetPanel.printSettings.extPrintPanel;
            extPrintPanel.text = this.text+' :';
            // clean extPrintPanel
            if (extPrintPanel.children.length>0){extPrintPanel.remove(extPrintPanel.children[0]);}
            extPrintPanel.infoG = extPrintPanel.add("Group");
            var loremInfo = 'Important Lorem Ipsum INFO :\r\n \r\nHere you can specify printing tips and tricks associated with the calendar preset.\r\n \r\n Enjoy !';
            extPrintPanel.infoG.edit= extPrintPanel.infoG.add("EditText{properties:{multiline:true},}");
            extPrintPanel.infoG.edit.preferredSize =extPrintPanel.size;
            extPrintPanel.infoG.edit.text = loremInfo;
//~             extPrintPanel.infoG.listBox = extPrintPanel.infoG.add('listbox', undefined, globalPapers.pfn.A);
//~            extPrintPanel.paperPreset.removeEventListener('click', this.eHandler);

            
            extPrintPanel.layout.layout(true);
            },
        };
    
    var printSettingsTabs = {
            type: 'tabs',
            res : "Group{margins:[0,0,0,0], spacing: 2, orientation: 'column', alignChildren: 'left'}",
            buttons : {
                mediaBtn: printPaperBtn,
                layoutBtn: printLayoutBtn,
                finishingBtn: printFinishingBtn,
                infoBtn: printInfoBtn,
                }
            };

   //~     ======================= Print Settings END ================== 

    this.makeDocBtn = {
        type : 'button',
        label : 'Make New Document',
        callback : function (e) {
            btMain.body = "render12Calendar(artboard);";
             $.writeln('hello from makeDocBtn callback()');
            btMain.send();       
            },
        };
  
    this.redrawDocBtn = {
        type : 'button',
        label : 'Redraw Document',
        callback : function (e) {
                alert('hello from redrawDocBtn callback()');
            },
        };
   
   

        function UiElement(ob) { 
            for (var p in ob) this[p] = ob[p]; 
            }
        
        

        UiElement.prototype.renderUiElement = renderUiElement;
        this.renderUiElementRef = renderUiElement;
        
     // renderUiElement  calls functions defined beneath on the ob
       function renderUiElement (onThis) { 
           var elem;
          switch (this.type) {
                   case 'dropdownlist' : {
                       elem = renderUiDropDown.call(this, onThis);
                        onThis.layout.layout(true);        
                       }; break;
                   case 'button' : {
                       elem = renderUiBtn.call(this, onThis);      
                       onThis.layout.layout(true);
                       }; break;
                   case 'tabs' : {
                       elem = renderUiTabs.call(this, onThis);
                       onThis.layout.layout(true);
                       }; break;
                   default : alert('you must define the type of the element in this ob: '+this);
                    }
            return elem;
            };
        
        
            
 
    // renderUiTabs function is a simple form to mimate tabs; inserts a panel in front of a clicked button to prevent second click
    // the <<clicked : true>> added to a button object triggers renderUiBtn() to move the clicked panel over the button after click event;
    function renderUiTabs (onThis) { 
               var tabsG = onThis.add("Group {orientation: 'stack'}");
               var btnsG = tabsG.add(this.res); 
                // clicked is a panel containing an empty statictext (initially invisible) which will be modified (position, bounds, st.text) by the btnsG buttons after 'click' event;
               tabsG.clicked = tabsG.add("Panel{visible: false, margins: [0,0,0,0], st:StaticText {justify: 'center'}}");
               for (pr in this.buttons) {
                   btnsG[pr] = renderUiElement.call(this.buttons[pr], btnsG);
                   }
                }
    // renderUiBtn renders ob with type 'dropdown' on a previously created UI element (such as 'panel')  
    function renderUiBtn (onThis) {
        var btn = onThis.add('button', undefined, this.label);
                                btn.preferredSize.height = 20; // default height of all buttons
//~                                 if (this.width) btn.preferredSize.width = this.width;
                                for (var pr in this) {
                                    switch (pr) {
                                        case 'width': btn.preferredSize.width = this[pr]; break;
                                        case 'height': btn.preferredSize.height = this[pr]; break;
//~                                         default: btn.preferredSize.height = 20;
                                        }}
                                btn.callback = this.callback;
                                // tabs buttons
                                btn.clicked = this.clicked;
                                btn.onClicked = function () {
                                                    var b = this.bounds;
                                                    var tabsG = this.parent.parent;
                                                    tabsG.clicked.visible = true;
                                                    // compensate clicked.bounts to hide the pressed button
                                                    tabsG.clicked.bounds = [b[0]-2, b[1]-2, b[2]+2, b[3]+2];                         
                                                    tabsG.clicked.st.size = this.size;
                                                    tabsG.clicked.st.text = this.text;
                                        };     
                                btn.eHandler = function (e) {
                                    $.writeln('hello from renderUiElement addEventListener');
                                    if (this.clicked) this.onClicked(); // trigger onClicked function if clicked property is true on ob
                                    }
                                btn.addEventListener('click', btn.eHandler);
                                btn.onClick = this.callback;        
                            return btn;
        }
    // rederUiDropDown renders ob with type 'dropdown' on a previously created UI element (such as 'panel')
    function renderUiDropDown (onThis) {
        $.writeln('renderUiDropDown function '); 
            var items = this.items;
            var numOfItems = this.items.length;
            var blanks = [];
             if (items) for(var i=0;i<numOfItems;i+=2) { // for compensate too small drop down list in illustrator UI CC 2017
                blanks.push('-');
                }
            var group = onThis.add('group', undefined, undefined);
            group.orientation = 'column';
            group.alignChildren = 'left';
            if (this.label) group.label = group.add('statictext',undefined, this.label);
            var ddItems = items.concat(blanks);  // items + blanks to compensate too short dropdown in illustrator CC 2017
            group.drop= group.add('dropdownlist', undefined, ddItems, this.label);
            if(this.width) group.drop.preferredSize.width = this.width;
            group.drop.itemSize = group.drop.preferredSize;
            if (this.preSelected) group.drop.preSel = this.preSelected; 
            else group.drop.preSel = 0; // selects first item if preSelected property is null or undefined
            group.drop.callback = this.callback;
            group.drop.items[group.drop.preSel].selected = true;
            function preventNullSelection () {
                var sel = this.preSel;
                    if (!this.selection) this.selection=this.items[sel]; // prevent null selection
                }
            group.drop.addEventListener('change', 
            function (e) { // e.target === this (true);
//~                     var sel = this.preSel;
//~                     if (!this.selection) this.selection=this.items[sel]; // prevent null selection
                    preventNullSelection.call(this);
                    });
            if (this.callback) group.drop.onChange = this.callback;
             
            if (this.visible===true) group.visible = true; 
            else if (this.visible===false) group.visible = false;                          
            return group;
        }
    
}; // END of  CalendarW constructor function
 
CalendarW.prototype.render = function () {
//~     if (!started) {
    
    var w = new Window('window', 'ILLUSTRATOR CALENDAR');
    this.wRef = w;   
    w.preferredSize = [this.width, this.height];
    w.location = [this.left, this.top];
    w.margins = [0, 0, 0, 0];
    w.spacing = 0;  
    w.window.calendarW_ref = this; // this will be used in callbacks functions triggered by Ui elements; here 'this' is calendarW constructor;
    // render mainPanel in UI
    w.mainPanel = w.add(this.mainPnl.res);
     for (var pr in this.mainPnl) 
        if (pr != 'res') w.mainPanel[pr] = this.mainPnl[pr].renderUiElement(w.mainPanel);  
        
    // render presetPanel 
    w.presetsPanel = w.add(this.presetsPnl.res);
    for (var pr in this.presetsPnl) 
        if (pr != 'res') w.presetsPanel[pr] = this.presetsPnl[pr].renderUiElement(w.presetsPanel);  
        
     // render AdvancedSettingsPanel // method called directly on the object
    w.advSetPanel= w.add(this.advSetPnl.res);
    w.advSetPanel.tabsG = this.renderUiElementRef.call(this.advSetPnl.tabsG, w.advSetPanel); // tabs buttons
   // extendedSettingsPanel
   w.extSetPanel = w.add(this.extSetPnl.res);
    // makeDocPanel
    w.makeDocPanel = w.add("Panel{margins:[0,10,0,10], spacing: 0, orientation: 'row'}");
    w.makeDocPanel.makeNewDoc = this.renderUiElementRef.call (this.makeDocBtn, w.makeDocPanel);
    w.makeDocPanel.redrawDoc = this.renderUiElementRef.call (this.redrawDocBtn, w.makeDocPanel);  
    w.show();
    
    
//~     started = true; // to prevent second start;
    return w;
//~     }
    };


// =================== ILLUSTRATOR CALENDAR WINDOW  END====================


//~ ======================== load globalPapers and calendarPapers to illustrator ==================

var currentPath = (new File($.fileName)).path // retrieve the current script path
var currentFolder = Folder(currentPath); // current folder of script location;

function set_mainResFolder () {
    
    var folderSelection = currentFolder.selectDlg ('Select Main Resource Folder');
    
//~     mainResFolder = (folderSelection instanceof Folder) ? folderSelection : set_mainResFolder();
    mainResFolder = (folderSelection instanceof Folder) ? folderSelection : null;
    if (!mainResFolder) {
        alert("Illustrator Calendar App can't run without a resource folder!");
            }              
    
    $.writeln('mainResFolder is :'+mainResFolder);
    }





//~ var globalPapers = {};
//~ globalPapers = uploadGlobalPapers();
//~ var calendarPapers = [];
//~ calendarPapers = uploadCalendarPapers();

//~ var calendarPapers = [];
function uploadCalendarPapers () {
//~     var calendarpapersJsonPath = currentPath + '/res/calendarpapers.json';
//~     var calendarpapersJsonPath = mainResFolder.fullName+'/calendarpapers.json';
    var calendarpapersJsonPath = mainResFolder+'/calendarpapers.json';
    var cp = jsonFileToObj(calendarpapersJsonPath, false);
    var emptyArr = [];
    return ('object'===typeof cp) ? cp : emptyArr;   
    }

function uploadGlobalPapers() {
//~     var globalpapersJsonPath = currentPath + '/res/globalpapers.json';
//~     var globalpapersJsonPath = mainResFolder.fullName+'/globalpapers.json';
    var globalpapersJsonPath = mainResFolder+'/globalpapers.json';
    var gp = jsonFileToObj(globalpapersJsonPath, true);
    if (gp) return gp; else {
        var status = false;
        var message = "Hey! You canceled selecting globalpapers.json  for the Illustrator Calendar ?\
        \r\n\r\nOr you selected a wrong or corrupt file ?\
        \r\n\r\nYou won't be able to select paper format, like A4, A5 etc... \r\n\r\n\Run calendar without globalPapers? ";
        alert(message);
        var win = new Window("dialog", "Run Illustrator Calendar without globalPapers ?",undefined);  // bounds = [left, top, right, bottom]
        var res = "Panel {st: StaticText{text:  'You will not be able to select standard paper formats such as A4, A5 etc..',},\
                                    selAgainBtn: Button{text: 'Select Again !'}\
                                    okBtn: Button{text: 'Run without globalPapers...'},\
                                    }";
        win.btnPanel = win.add(res);     
        win.btnPanel.selAgainBtn.onClick = function() {
            status = true;
            win.close();
        };
        win.btnPanel.okBtn.onClick = function() {
            status = false;
            win.close();
        };
        win.show();
        // next statement checks if user pressed 'Select Again' or 'Run without globalPapers' button and return the selected value, which will be assigned to globalPapers
        return (status) ? uploadGlobalPapers() : false;
        }
    }



function jsonFileToObj (filePath, selectFile) {   
            var jsonToParse = new File(filePath);
            var message1 = '-->'+jsonToParse.displayName+'.exists"<<'+jsonToParse.exists+'>>';     
            if (!jsonToParse.exists&&selectFile) {
                alert('The File :   '+jsonToParse.displayName+'     is not found in :\r\n '+filePath+'\r\n\r\n You will be prompted to select it !')
                $.writeln(message1);
                var message2 = 'There is no <<'+jsonToParse.displayName+'>> in  '+filePath+' ! Select '+jsonToParse.displayName+' path !';
                jsonToParse = File.openDialog (message2, '*.json', false);
                if (jsonToParse) $.writeln(jsonToParse.displayName+' uploaded');
                    else $.writeln('You probably canceled the select file dialog...!');
                } else $.writeln(message1);
                
                        try { 
                            if (!jsonToParse) throw new Error ('noFile');
                            jsonToParse.open("r"); // creates or open file on res folder for edit
                            var jsonString = jsonToParse.read(); // string;
            //~                 $.writeln(jsonToParse.displayName+' stringified successfully: '+jsonString);
                            $.writeln(jsonToParse.displayName+' stringified successfully : '+'string'===typeof jsonString);
                            jsonToParse.close();
                            var ob = JSON.parse(jsonString);
            //~                 $.writeln(jsonToParse.displayName+' to object '+JSON.stringify(ob));
                            $.writeln(jsonToParse.displayName+' to object '+typeof ob);
                            return ob;
                                } 
                            catch (e){
                                    $.writeln('function jsonFileToObj () {JSON.parse(jsonString)}error description: \r\n'+e.description);
//~                                     alert(e.description+'error'+jsonToParse.displayName);
                                    return false;
                                    } 
                         
}

function saveCalendarPapers () {
        var jsonString = JSON.stringify(calendarPapers, null, ' ');
        var file = new File(currentPath + "/res/calendarpapers.json");
        file.open("e"); // creates or open file on
        file.write(jsonString);
        file.close();
}


//~ ======================== load globalPapers  and calendarPapers to illustrator  END  ==================



var calendar_UI;

    calendar_UI = new CalendarW(10, 155);
    calendar_UI.render();
    
    
    var btMain = new BridgeTalk();
    btMain.target = 'illustrator';
//~     btMain.body = "calendar_UI = new CalendarW(10, 155);\
//~                              calendar_UI.render();\
//~                              started = true;\
//~                             ";
//~     btMain.body = "$.writeln('Hello from btMain !')";
    btMain.body = "$.writeln('Hello from btMain !')";
    btMain.send();





}// illustratorCalendar function END;

if (!started) illustratorCalendar();





// =========================== GLOBALS ==========================

var resFolder = {}; // Folder 
var presetsFolder = {}; // Folder 
var globalPapers = {}; // this will be reasign with paper formats json (globalpapers.json) by user selection;
var calendarPapers = []; // will be updated by user selection  (Upload Presets btn from Print Settings panel )// in this user will save (push) paper presets (save / saveAs);
var defaultPreset = {};
var currentPresest = {};
var settings = {};
var presetsNameRef = [];

var print = {
//~     paper : {}, // this will be calendarPapers[x] assign by the UI preset selection;
    paper: {
        presetName : 'Prima Hartie',
        um: 'mm',
        format: 'AAA',
        width: 222,
        height: 333,
        weight: 20,
        type: 'tick-tack',
        tradeName: 'World Trade Center',
        },
    
    layout: {
        
        },
    finishing: {
        
        },
    info: {       
        },
    };


var days = ['Dum', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'];
var monthsNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

var daysStyle = {fontSize: 30, borderWidth: 6};
var mainDatesStyle = {fontSize: 30, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'solid', borderColor: [10, 10, 10, 10], borderWidth: 4};
var neighboursDatesStyle = {fontSize: 30, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'dotted', borderWidth: 2};

var units = 'mm';
var year = 2019;
var firstDayOfWeekIndex = 0; 


//~ var oHartieA4 = globalPapers.pfn.A[4];
//~ $.writeln('var oHartieA4 = globalPapers.pfn.A[4]; value: '+oHartieA4);

var artboard = [1000,500];




 
var monthPosition = [0, 0];// undefined // [500, 0]; // will be generated from align TL=[0,2], TM=[1,2], TR=[2,2], LM=[0,1], MM=[1,1], RM=[2,1], BL=[0,0], BM=[1,0], BR=[2,0];
var monthAlign = [0,0]; // align TL=[0,2], TM=[1,2], TR=[2,2], LM=[0,1], MM=[1,1], RM=[2,1], BL=[0,0], BM=[1,0], BR=[2,0];
