#target illustrator

// alignment bug fixed version 3

var ep_bc = {
    docName : 'ep_bc_330x487',
};

var newDocName = 'CV_330x487';

//  all dimensions in pt (PostScript points)
// 1 pt = 0.352777778 mm
// 1 mm = 2.83464567 pt
var pt = 2.83464567; // == 1mm

var newDocArt = {
    width: 487*pt,     //  487 mm, 1380.47 pt
    height: 330*pt,     // 330 mm, 935.43 pt
    nr: 1 // number of artboards
    };

var whiteGray = new CMYKColor();
whiteGray.black = 10;
whiteGray.cyan = 0;
whiteGray.magenta = 0;
whiteGray.yellow = 0;
    
var clipp = {
    name: 'clippingMask',
    width: 93*pt,    // 93 mm, 263.622 pt
    height: 53*pt,     // 53 mm, 151.236 pt
    fill: false,
    stroke: 1*pt, // 1 mm
    strokeColor: whiteGray
    };

var cropp = {
    name: 'croppingPath',
    width: 93*pt,    // 93 mm, 263.622 pt
    height: 53*pt,     // 53 mm, 151.236 pt
    fill: false,
    stroke: 1*pt, // 1 mm
    strokeColor: whiteGray
    };

var cv = {
height: 53*pt, // 53 mm 
width: 93*pt // 93 mm
    };

// var printMargin = {
//         top: newDocArt.height - 6*pt ,        // 918.92pt x axix, 6 mm    
//         left: newDocArt.width - 1345.446       // 32.686pt y axis, 11 mm
//     };

// miminum horizontal and vertical print margins
var minMgHor = 3*pt;
var minMgVert = 3*pt;

// number of horizontal and vertical business cards
var numOfBc_horiz = Math.floor((newDocArt.width - 2*minMgVert) / (cropp.width + cropp.stroke/2));
var numOfBc_vert = Math.floor((newDocArt.height - 2*minMgHor) / (cropp.height + cropp.stroke/2));

var printMargin = {};
printMargin.left = (newDocArt.width - (numOfBc_horiz * cv.width)) / 2;
printMargin.top = (newDocArt.height + (numOfBc_vert * cv.height)) / 2;


// makeDoc is a function for creating new illustrator document with unit = millimeters and colorSpace = CMYK
var makeDoc = function (docName, artWidth, artHeight, artNr) {
    //  var pt = 2.83464567; // == 1mm
    var myPreset = new DocumentPreset();
    myPreset.title = docName;
    myPreset.width = artWidth/**pt*/;
    myPreset.height = artHeight/**pt*/;
    myPreset.numArtboards = artNr;
    myPreset.artboardLayout = DocumentArtboardLayout.Column;
    myPreset.units = RulerUnits.Millimeters;
    myPreset.colorMode = DocumentColorSpace.CMYK;
    var myDoc =app.documents.addDocument("Print", myPreset, false);
    return myDoc;
    };

var cv_f = makeDoc(newDocName, newDocArt.width, newDocArt.height, newDocArt.nr);


var cropp_1 = cv_f.pathItems.rectangle(printMargin.top, printMargin.left, cropp.width, cropp.height);
cropp_1.name = cropp.name;
cropp_1.filled = false;
cropp_1.strokeWidth = cropp.stroke;
cropp_1.strokeColor = cropp.strokeColor;

var clipp_1 = cv_f.pathItems.rectangle(printMargin.top, printMargin.left, clipp.width, clipp.height);
clipp_1.name = clipp.name;
clipp_1.filled = false;
clipp_1.stroked = false;
//clipp_1.strokeColor = clipp.strokeColor;

var fileRef = File.openDialog ("Select file...  any File containing a business card...", "*.*", false);     // get the ref to the file
var pdfOptions = app.preferences.PDFFileOptions;

if (fileRef.name.match(/\.pdf$/i)) { // checks if the selected document (fileRef) is a PDF file
    // alert('You selected a pdf. You must choose a page to open! ...  please!?...')
    app.preferences.PDFFileOptions.pageToOpen = prompt ('Which one to be? one.... or two... ?', 1, 'Your answer here...'); // app.preferences.PDFFileOptions.pageToOpen = {{which page to open}}
    }
var cvFile = app.activeDocument.placedItems.add();
cvFile.file = fileRef;
cvFile.name =fileRef.name;
var cvFileRatio = cvFile.height / cvFile.width;

if (cvFile.width < cvFile.height) {
    cvFile.rotate(90);
    cvFile.height = cv.height; // 53 mm
    cvFile.width= cv.height*cvFileRatio;
} else {
        cvFile.height = cv.height; // 53 mm
        cvFile.width = cv.height*(1/cvFileRatio);
    }


// .rectangle( top, left, width, height);
// ! .position[0] or [1] cannot be assigned individually, only .position = [left, top]; you can use .position[0] or [1] only for reading.

// center aligning cvFile to clipp_1 (clipp_1.position is fix)
cvFile_posTop = (clipp_1.position[1] - (clipp_1.height/2)) + (cvFile.height/2);
cvFile_posLeft = (clipp_1.position[0] + (clipp_1.width/2)) - (cvFile.width/2);
cvFile.position = [cvFile_posLeft, cvFile_posTop];
cropp_1.position = clipp_1.position;

// make clipping group
var cvClippGroup = app.documents[0].groupItems.add();
cvClippGroup.name = 'cvClippGroup';
clipp_1.moveToBeginning(cvClippGroup);
cvFile.moveToEnd(cvClippGroup);
cvClippGroup.clipped = true; // this set the cvGroup.clipped = true and clipp_1.clipping = true;

// grouping; add clipping group and cropp_1 rectangle
var cvGroup = app.documents[0].groupItems.add();
cvGroup.name = 'cvGroup';
cvClippGroup.moveToBeginning(cvGroup);
cropp_1.moveToBeginning(cvGroup);




var makeAll = function (){
    var horCorrect = Number; // horizintal correction, used for aligning at cv.width margins (when the whole cvGroup is > than cv.width) 
           if (cvGroup.width > cv.width) {
            horCorrect = printMargin.left - ((cvGroup.width - cv.width)/2);
            } else { horCorrect = printMargin.left;};
    var vertCorrect = Number; // vertical correction, used for aligning at cv.width margins (when the whole cvGroup is > than cv.height) 
        if (cvGroup.height > cv.height) {
            vertCorrect = printMargin.top +((cvGroup.height - cv.height)/2);
            } else { vertCorrect = printMargin.top};
    var horPos = horCorrect;
    var vertPos = vertCorrect;
    var counter = 0;   // used for naming;
    var cvArrVert = new Array(); // cvArrVert is an array for storing  arrays with all horizontal copies of cvGroup;
    for (var j =0; j <=5; ++j) { // generates an array (cvArrHor) for storing horizontal copies of cvGroup / cycle;
        var cvArrHor = new Array();
        vertPos -= cv.height*j;
            for (var i = 0; i <=4 ; ++i) {  // generates copies of cvGroup and add them to cvArrHor;
                    counter ++;       
                    cvArrHor[i] = app.documents[0].groupItems['cvGroup'].duplicate( /*cvGroup, ElementPlacement.PLACEAFTER*/);
                    horPos += cv.width*i; //[0];        
                    cvArrHor[i].position = [horPos, vertPos];
                    horPos = horCorrect; // reset original value
                    cvArrHor[i].name += '_'+'R'+(j+1)+'_'+'C'+(i+1)+'_'+'copy'+counter; 
                    }
        cvArrVert.push(cvArrHor);
        vertPos = vertCorrect;  // reset original value
        horPos = horCorrect;
        counter ++; 
    }
cvGroup.remove();
return cvArrVert;
};

var arr_2D = makeAll();
