#target illustrator

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

/*************************************************
function makeRectangle (position, width, height, stroke, fill, strokeColor, fillColor, name);
position = Array, [top, left]; width, height = Number; stroke(optional) = Number, if 0, it is set to false; strokeColor, fillColor (optional) = Object (ex: new CMYKColor()); name is last argument and must be 'string';
examples: 
var col1 = new CMYKColor(); col1.cyan = 0; col1.magenta = 100; col1.yellow = 100; col1.black = 0;
var col2 = new CMYKColor(); col2.cyan = 100; col2.magenta = 0; col2.yellow = 100; col2.black = 0;
var rect1 = makeRectangle([100, 100], 100, 100, 'rect1' ); // ?? properti name cannot be set on paths ??
var rect2 = makeRectangle([250, 100], 100, 100, 20, 'rect2');
var rect3 = makeRectangle([400, 100], 100, 100, col1, 'rect3');
var rect4 = makeRectangle([550, 100], 100, 100, 20, col1, col2, 'rect4');
var rect5 = makeRectangle([700, 100], 100, 100, 20, col2, 'rect5');
***************************************************/
 function makeRectangle (position, width, height, stroke, strokeColor, fillColor) {
     var rect = app.activeDocument.pathItems.rectangle(position[0], position[1], width, height);
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
              var leftPos =  areaPosition[1] + ((colWidth/2)*(1+(j*2))); 
                      for(var k =0; k<cols; k++) {    
                                counter ++;
                                var topPos = areaPosition[0] + ((rowHeight/2)*(1+(k*2)));
                                 matrix[counter] = [leftPos, topPos];        
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

var myDoc = makeDoc('document test3 A4', 210, 297, 1);
var col1 = CMYK (0, 100, 100, 0); // purple
var col2 = CMYK (100, 0, 100, 0); // green
var rect1 = makeRectangle([100, 100], 100, 100, 'rect1' );
var rect2 = makeRectangle([250, 100], 100, 100, 20, 'rect2');
var rect3 = makeRectangle([400, 100], 100, 100, col1, 'rect3');
var rect4 = makeRectangle([550, 100], 100, 100, 20, col1, col2, 'rect4');
var rect5 = makeRectangle([700, 100], 100, 100, 20, col2, 'rect5');


centerAlignToKeyObject(rect1, rect2);


