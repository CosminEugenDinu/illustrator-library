
// makeDoc is a function for creating new illustrator document with unit = millimeters and colorSpace = CMYK
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
    return myDoc;
    };