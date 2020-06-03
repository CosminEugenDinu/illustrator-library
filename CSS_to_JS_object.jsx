
// POLYFILL  String.prototype.trim   
                if (!String.prototype.trim) {
                  String.prototype.trim = function () {
                    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                  };
                }


var cssTx = 'vb: 2; v: trei; unu: un; 2: 9';


function p (cssText) {  
                    
                var regex = /([\w-]*)\s*:\s*([^;]*)/g;
                var match = [];
                var properties = {};

                while(match=regex.exec(cssText)) {
                    
                    properties[match[1]] = match[2].trim();}

                return properties;
                }

var aa = p(cssTx);