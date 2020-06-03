

/**
* @@@BUILDINFO@@@ obFromJsonFile_saveObAsJson_method.jsx !Version! Tue Jan 22 2019 23:14:14 GMT+0200
*/

//======= polifyll JSON.stringify(value[, replacer[, space]])     JSON.parse(text[, reviver]) ============
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