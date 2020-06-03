        
/*========================= ill_library11_TextBox_auto_width_added =========================*/

#target illustrator

/*======================= polyfill Array.prototype.reduce ==================================*/
if (!Array.prototype.reduce) { Array.prototype.reduce = function(callback /*, initialValue*/) {
if (this === null) { alert( 'Array.prototype.reduce ' + 'called on null or undefined' );}
if (typeof callback !== 'function') {alert( callback +' is not a function');}
var o = Object(this);var len = o.length >>> 0;  var k = 0; var value;
if (arguments.length >= 2) {value = arguments[1];} else { while (k < len && !(k in o)) {k++;}
if (k >= len) {alert( 'Reduce of empty array ' +'with no initial value' );} value = o[k++];}
while (k < len) {if (k in o) {value = callback(value, o[k], k, o);}k++;} return value;}}
/*======================= polyfill Array.prototype.reduce ==================================*/

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
*/
 // testFontsWidths ('Lorem ipsum', 30); // used to test factor;
 
TextBox.prototype.calculateBoxWidth = function (text) {
    var boxWidth;
    var fontSize = this.content.style.fontSize;
    var factor= 0.8;
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
     
    var boxHeight = mainDatesTextBox.calculateBoxHeight(1);
   // var boxWidth = mainDatesTextBox.calculateBoxWidth('dd');
   
    var maxDay = days.reduce( function(a, b) { 
        if (a.length > b.length) return a; else return b;
        }, '' );
    var boxWidth = daysTextBox.calculateBoxWidth(maxDay);
    daysTextBox.boxStyle.width = boxWidth;
    mainDatesTextBox.boxStyle.width = boxWidth;
    neighboursDatesTextBox.boxStyle.width = boxWidth;
    
    var monthMatrix = new MatrixJS (monthPosition, [boxWidth*7, boxHeight*6], [7,6], [0,100]);
    var datesBoxesPositions = monthMatrix.get_mPositions_lrtb ();
    
    // render days
    for (var i=0;i<7;i++) {
        
            switch(firstDayOfWeekIndex) {
                        case 0 : daysTextBox.content.textContent = days[i]; break;
                        case 1 : {
                            if (i<6) {
                                var incr = i+1;
                                daysTextBox.content.textContent = days[incr];$.writeln('daysTextBox.content.textContent'+daysTextBox.content.textContent);
                                }
                            else if (i===6) {
                                    var decr = i-6;
                                daysTextBox.content.textContent = days[decr];}
                            } break;         
                }
            
            
        // daysTextBox.content.textContent = days[i];
        daysTextBox.boxStyle.left =datesBoxesPositions[i][0];
        daysTextBox.boxStyle.top = datesBoxesPositions[i][1]+daysTextBox.calculateBoxHeight (1);
        
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
 // TEST
var days = ['Duminica', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'];
var monthsNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

var daysStyle = {fontSize: 20};
var mainDatesStyle = {fontSize: 20, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'solid', borderColor: [10, 10, 10, 10]};
var neighboursDatesStyle = {fontSize: 20, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'solid', borderWidth: 2};


var year = 2018;
var firstDayOfWeekIndex = 0;
var myArtboard = [1000, 600];
var monthPosition = undefined // [500, 0]; // will be generated from align TL=[0,2], TM=[1,2], TR=[2,2], LM=[0,1], MM=[1,1], RM=[2,1], BL=[0,0], BM=[1,0], BR=[2,0];
var monthAlign = [0,0]; // align TL=[0,2], TM=[1,2], TR=[2,2], LM=[0,1], MM=[1,1], RM=[2,1], BL=[0,0], BM=[1,0], BR=[2,0];
// var myDoc = makeDocPoints('docMMCalendarTest', myArtboard[0], myArtboard[1], 1);
// renderMatrixMonth (year, 11, 0, [0,0], days, daysStyle, mainDatesStyle, neighboursDatesStyle);
// renderSoloCalendar(myArtboard, 4, 3);
// render12Calendar(myArtboard);
render12Calendar(myArtboard, monthPosition);


/* ===================== illustrator CALENDAR END    ===================== */

/*==================== ill_library11_TextBox_auto_width_added  END =========================*/