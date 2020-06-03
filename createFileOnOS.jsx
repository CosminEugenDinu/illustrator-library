logInfo((new Date).toString());
logInfo("This is the first message");
logInfo("This is the second message");
 
function logInfo(Txt){
var file = new File(Folder.desktop + "/ScriptLog.txt");
file.open("e", "TEXT", "????");
file.seek(0,2);
$.os.search(/windows/i)  != -1 ? file.lineFeed = 'windows'  : file.lineFeed = 'macintosh';
file.writeln(Txt);
file.close();
};