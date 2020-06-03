
/**
* @@@BUILDINFO@@@ Img_constructor.jsx !Version! Tue Feb 05 2019 11:18:06 GMT+0200
*/

function Img (width, height) {
    this.src = ''; // relative path // relativeURI in file obj
    this.file = ''; // file object
    this.width= width;
    this.height = height;
    this.naturalWidth = ''; // initial size of original image
    this.naturalHeight = ''; // initial size of original image
    this.embed = false; // if set to false, image file will be placed as link
    this.autorotate = true;
    this.style = {
        top: 600,
        left: 100,
        borderStyle: 'solid', // none | dotted | dashed | solid ;
        borderWidth: 5,
        borderColor: [10,20,30,40], 
        borderRadius: 50,
        backgroundColor: 'transparent', // [c, m, y, k] | 'transparent'
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        objectPosition: ['center', 'center'], // [ 'left' | 'center' | 'right' ,  'top' | 'center' | 'bottom' ]
        objectFit: 'fill', // fill | contain | cover | none | scale-down // scale-down means that if the image is smaller than the width/height will remain the same size (as if 'none') and if the image is bigger will be resized to fit (as if 'contain')...............
        };
    }

Img.prototype.selectImgFile = function () {
    var currentPath = new File($.fileName).path;
    this.file = new File(currentPath).openDlg('Select file...  any File containing an image...', "*.*", false); // false is for multiselect
    // if user cancel file selection
    if (!this.file) return; else if (typeof this.file == 'object') this.src = this.file.relativeURI;
    };
Img.prototype.render = function (position) {   
    if (app.documents.length == 0) {
        $.writeln('-->Img.prototype.render: No Document!');
        return;
        }
    if (!this.file&&!this.src) {
        $.writeln('-->Img.render: "no file!"');
        return;
        };
    var imgGroup = app.activeDocument.groupItems.add();
    imgGroup.name = 'imgGroup';
    var style = this.style;
    var paddingW = this.style.paddingLeft  +this.style.paddingRight;
    var paddingH = this.style.paddingTop + this.style.paddingBottom;
    var imgRect = imgGroup.pathItems.roundedRectangle(style.top+style.paddingTop, style.left-style.paddingLeft, this.width+paddingW, this.height+paddingH, style.borderRadius, style.borderRadius);
    // border
      switch (style.borderStyle) {
          case 'none' : imgRect.stroked = false; break;// false for borderStyle : 'none'; 
          case 'solid' : {      
                imgRect.stroked = true;       
                imgRect.strokeDashes = []; // Array of numbers // Dash lengths (set to [ ] for a solid line); // solid line <= borderStyle = 'solid';
                imgRect.strokeWidth = style.borderWidth; // if  borderStyle : dotted | dashed | solid ;
                imgRect.strokeColor = CMYK(style.borderColor) ; // if  borderStyle : dotted | dashed | solid ;
              }; break;
          case 'dotted' : {
                imgRect.stroked = true;                          
                imgRect.strokeDashes = [style.borderWidth, style.borderWidth]; // if borderStyle = dotted;
                imgRect.strokeDashOffset = style.borderWidth/2; // The default distance into the dash pattern at which the pattern should be started.
                imgRect.strokeWidth = style.borderWidth; // if  borderStyle : dotted | dashed | solid ;
                imgRect.strokeColor = CMYK(style.borderColor) ; // if  borderStyle : dotted | dashed | solid ;
              }; break;
          case 'dashed' : {
                imgRect.stroked = true;
                if (! style.dashPattern)
                imgRect.strokeDashes = [style.borderWidth*2, style.borderWidth]; // if borderStyle = dashed;
                else
                imgRect.strokeDashes = style.dashPattern; // if borderStyle = dashed; and dashPattern
                imgRect.strokeDashOffset = style.borderWidth/2 ; // The default distance into the dash pattern at which the pattern should be started.
                imgRect.strokeWidth = style.borderWidth; // if  borderStyle : dotted | dashed | solid ;
                imgRect.strokeColor = CMYK(style.borderColor) ; // if  borderStyle : dotted | dashed | solid ;               
              }; break;
          default : {
                imgRect.stroked = true;       
                imgRect.strokeDashes = []; // Array of numbers // Dash lengths (set to [ ] for a solid line); // solid line <= borderStyle = 'solid';
                imgRect.strokeWidth = style.borderWidth; // if  borderStyle : dotted | dashed | solid ;
                imgRect.strokeColor = CMYK(style.borderColor); // if  borderStyle : dotted | dashed | solid ;
              };
          }
    // backgroundColor
    var bc = style.backgroundColor;
    imgRect.filled = (! bc || bc == 'transparent') ? false : true;
    if (imgRect.filled) imgRect.fillColor = CMYK(bc);   
    // clipping Group
    var clippG = imgGroup.groupItems.add();
    // add img file
    var img = clippG.placedItems.add();
    var f = !this.file ? new File(this.src) : this.file;
    if (f.name.match(/\.pdf$/i)) { // checks if the selected document (f) is a PDF file
    app.preferences.PDFFileOptions.pageToOpen = prompt ('Select a page for image file!', 1, 'Your answer here...'); // app.preferences.PDFFileOptions.pageToOpen = {{which page to open}}
    }
    try {
        img.file = f;
        } catch (e) {
            $.writeln(e);
            return;
            }
    
 
    img.name = img.file.name;

    this.naturalWidth = img.width;
    this.naturalHeight = img.height;
    // autorotate
    var ir = img.width/img.height; // image aspect ratio
    var cr = this.width/this.height; // container aspect ratio
    if (this.autorotate && ((ir<1&&cr>1)||(ir>1&&cr<1))) img.rotate(90);
//~     if (this.autorotate && (ir<1&&cr>1)) img.rotate(90);
    // objectFit
    switch (style.objectFit) {
        case 'fill' : {
            img.width = this.width;
            img.height = this.height;
            }; break;
        case 'contain': {
            ir = img.width/img.height; // reasigned if autorotate
            cr = this.width/this.height; // reasigned if autorotate
            if (cr/ir>=1) {
                img.height = this.height;
                img.width = img.height*ir;
                } else if (cr/ir<1) {
                    img.width = this.width;
                    img.height = img.width/ir;
                    }
            }; break;
        case 'cover': {
            ir = img.width/img.height; // reasigned if autorotate
            cr = this.width/this.height; // reasigned if autorotate
            if (cr/ir<1) {
                img.height = this.height;
                img.width = img.height*ir;
                } else if (cr/ir>=1) {
                    img.width = this.width;
                    img.height = img.width/ir;
                    }
            }; break;
        case 'none': {
            var doNothing = 'nothing';
            }; break;
        case 'scale-down': {
            if (img.width>this.width&&img.height>this.height) {
                // code from 'contain'
                ir = img.width/img.height; // reasigned if autorotate
                cr = this.width/this.height; // reasigned if autorotate
                if (cr/ir>=1) {
                    img.height = this.height;
                    img.width = img.height*ir;
                    } else if (cr/ir<1) {
                        img.width = this.width;
                        img.height = img.width/ir;
                        }
                }       
            }; break;
        default : ;
        }
    // objectPosition (for image)
    var pip = [0,0];  // placedItem.position // image position
    var op = style.objectPosition;
    switch (op[0]) {  // setting X position (horrizonlal / left);
        case 'left' : pip[0] = style.left; break;
        case 'center' : pip[0] = style.left+(this.width/2)-(img.width/2); break;
        case 'right' : pip[0] = style.left+this.width-img.width; break;
        default : pip[0] = style.left;
        }
    switch (op[1]) { // setting Y position (vertical / top)
        case 'top' : pip[1] = style.top; break;
        case 'center' : pip[1] = style.top - (this.height/2)+(img.height/2); break;
        case 'bottom' : pip[1] = style.top-this.height+img.height; break;
        default : pip[1] = style.top;
        }
    img.position = pip;
 
    if (this.embed) img.embed();
    // add clipping path
    var clipp = clippG.pathItems.roundedRectangle(style.top, style.left, this.width, this.height, style.borderRadius, style.borderRadius);
    clipp.clipping = true;
    clippG.clipped = true;

    function CMYK (col) {
        var c = new CMYKColor();
        c.cyan = col[0];
        c.magenta = col[1];
        c.yellow = col[2];
        c.black = col[3] 
        return c;
            }
return {
    img: img,
    imgClipping: '',
    imgRect: imgRect,
    another: 'ano',
    };
};

// TEST
/*
makeDoc ('pos', 1000, 1000, 1)
var aImg = new Img(200, 400);
aImg.src = '../../../../../../Users/Cut/Google%20Drive/gradinita/JETOANE%20MATE/4iw8z5071wzp.png'; // relative path // relativeURI in file obj
//~ aImg.file = new File('~/Google%20Drive/gradinita/JETOANE%20MATE/86c7e9a7878fd80ebe94f8a354335a3c.jpg');
//~ aImg.file = new File('~/Google%20Drive/gradinita/JETOANE%20MATE/e94d1a2428989c76a2cfe6a1e1929ab1.jpg');
//~ aImg.file = new File('~/Google%20Drive/gradinita/JETOANE%20MATE/1x.jpg');
aImg.selectImgFile ();
var are = aImg.render();
*/
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
