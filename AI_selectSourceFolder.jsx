
// txt is an object with texts for all dialog windows.
var txt = {
        selectedFolderTxt : 'Selecteaza folderul SURSA pentru IMAGINI !',
        selectAnother: 'select another'
    
    };
/*
// activeDocumentPath stores the path where is activeDocument saved
var activeDocumentPath = (app.activeDocument.fullName.parent.fsName).toString().replace(/\\/g, '\\\\');
//.replace(/\\/g, '\\\\');    replaces '\' with '\\' in path string, making suitable as argument for Folder();

// sourceFolder stores the file-system location of activeDocument;
//also preselect folder when dialog for selectedFolder appears;
var sourceFolder = new Folder(activeDocumentPath);
var selectedFolder = sourceFolder.selectDlg (txt.selectedFolderTxt);
*/
var Paths = function() {};

Paths.prototype.set_activeDocumentPath = function () {
  this.activeDocumentPath = (app.activeDocument.fullName.parent.fsName).toString().replace(/\\/g, '\\\\');
    };
Paths.prototype.set_defaultSourceFolder = function () {
    this.set_activeDocumentPath();
     this.defaultSourceFolder = new Folder(this.activeDocumentPath);
    };
Paths.prototype.set_selectedSourceFolder = function () {
    this.set_defaultSourceFolder();
    this.selectedSourceFolder     =   this.defaultSourceFolder.selectDlg (txt.selectedFolderTxt);  
    };


var paths = new Paths ();

// calling this.set_selectedSourceFolder() method prompt the user to select the source folder of images
// and stores the path in this.selectedSourceFolder property.
paths.set_selectedSourceFolder();

