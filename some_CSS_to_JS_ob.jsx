
https://stackoverflow.com/questions/8987550/convert-css-text-to-javascript-object

function parseCSSText(cssText) {
    var cssTxt = cssText.replace(/\/\*(.|\s)*?\*\//g, " ").replace(/\s+/g, " ");
    var style = {}, [,ruleName,rule] = cssTxt.match(/ ?(.*?) ?{([^}]*)}/)||[,,cssTxt];
    var cssToJs = s => s.replace(/\W+\w/g, match => match.slice(-1).toUpperCase());
    var properties = rule.split(";").map(o => o.split(":").map(x => x && x.trim()));
    for (var [property, value] of properties) style[cssToJs(property)] = value;
    return {cssText, ruleName, style};
} /* updated 2017-09-28 */

// Passing the following cssText (string) to the function:

.mybox {
     display: block; 
     width: 20px; 
     height: 20px;
     background-color: rgb(204, 204, 204);
 }

// ...will give the following object:

{   cssText: ... /* the original string including new lines, tabs and spaces */, 
    ruleName: ".mybox",
    style: {
        "": undefined,
        display: "block",
        width: "20px",
        height: "20px",
        backgroundColor: "rgb(204, 204, 204)"
     }
}

// User can also pass a cssText such as:

display: block; width: 20px; height: 20px; background-color: rgb(204, 204, 204);

/*
    
    Features:

Works both with CSSRule.cssText and CSSStyleDeclaration.cssText.
Converts CSS property names (background-color) to JS property names (backgroundColor). It handles even very erratic names, such as back%gr- -ound---color: red; (converts to backGrOundColor).
Enables mass modification of existing CSSStyleDeclarations (such as document.body.style) using a single call  Object.assign(document.body.style, parseCSSText(cssText).style).
Does not fail when a property name comes without a value (an entry without a colon) nor even vice versa.
Update 2017-09-28: Handles new lines also in rule names, collapses white spaces.
Update 2017-09-28: Handles comments (/*...*/    ).
Quirks:

If the last CSS declaration in the rule ends with a semicolon, returned style will include a property with an empty name "" and an undefined value reflecting the null string following the semicolon. I consider it a correct behaviour.
The function will return a faulty result if property value (string literal) includes colon or semicolon or CSS comments, for example  div::before {content: 'test:test2;/*test3*/';}. I don’t know how to avoid this.
At the moment, it converts property names with prefixes such as -somebrowser-someproperty incorrectly to SomebrowserSomeproperty instead of somebrowserSomeproperty. I want a remedy that won’t ruin the brevity of code, therefore I’ll take time to find one.

*/