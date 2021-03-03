
/**
* @@@BUILDINFO@@@ iCalendar9.jsx !Version! Tue Feb 05 2019 11:38:46 GMT+0200
Img CONSTRUCTOR added to library
*/

#target illustrator
#targetengine main


// default settings
// iCalendarDefSet is the prototype of ICalendar constructor function
var iCalendarDefSet = { 
    showCalendarUi : true,
    type: 'multipage', // type of the calendar : multipage | singlepage
    presetName: 'Default Preset',
    iCalendarPresetsPath: '',
    iCalendarPapersPath: '',
    doc: {
        name: 'iCalendarDefault',
        units: 'mm', // ps (postscriptpoints) if undefined or something else;
    },
    appFonts: [], // fonts names took from illustrator // for (var i=0; i<textFonts.length; i++) {$.writeln(textFonts[i]);}
    supportedStyle: [
        // content style
        {propertyName : "fontFamily", values : [], valueType : "string", description : ""},
        {propertyName : "textFont", values : ["TextFont AdobeArabic-Regular","TextFont AdobeDevanagari-Bold","TextFont AdobeDevanagari-BoldItalic","TextFont AdobeDevanagari-Italic","TextFont AdobeDevanagari-Regular","TextFont AdobeMingStd-Light","TextFont AdobeMyungjoStd-Medium","TextFont AdobeSongStd-Light","TextFont Arial-Black","TextFont Arial-BoldItalicMT","TextFont Arial-BoldMT","TextFont Arial-ItalicMT","TextFont ArialMT","TextFont ArialNarrow","TextFont ArialNarrow-Bold","TextFont ArialNarrow-BoldItalic","TextFont ArialNarrow-Italic","TextFont Bahnschrift","TextFont BookAntiqua","TextFont BookAntiqua-Bold","TextFont BookAntiqua-BoldItalic","TextFont BookAntiqua-Italic","TextFont BookmanOldStyle","TextFont BookmanOldStyle-Bold","TextFont BookmanOldStyle-BoldItalic","TextFont BookmanOldStyle-Italic","TextFont BookshelfSymbolSeven","TextFont BradleyHandITC","TextFont Calibri","TextFont Calibri-Bold","TextFont Calibri-BoldItalic","TextFont Calibri-Italic","TextFont Calibri-Light","TextFont Calibri-LightItalic","TextFont Cambria","TextFont Cambria-Bold","TextFont Cambria-BoldItalic","TextFont Cambria-Italic","TextFont CambriaMath","TextFont Candara","TextFont Candara-Bold","TextFont Candara-BoldItalic","TextFont Candara-Italic","TextFont Century","TextFont CenturyGothic","TextFont CenturyGothic-Bold","TextFont CenturyGothic-BoldItalic","TextFont CenturyGothic-Italic","TextFont ComicSansMS","TextFont ComicSansMS-Bold","TextFont ComicSansMS-BoldItalic","TextFont ComicSansMS-Italic","TextFont Consolas","TextFont Consolas-Bold","TextFont Consolas-BoldItalic","TextFont Consolas-Italic","TextFont Constantia","TextFont Constantia-Bold","TextFont Constantia-BoldItalic","TextFont Constantia-Italic","TextFont Corbel","TextFont Corbel-Bold","TextFont Corbel-BoldItalic","TextFont Corbel-Italic","TextFont CourierNewPS-BoldItalicMT","TextFont CourierNewPS-BoldMT","TextFont CourierNewPS-ItalicMT","TextFont CourierNewPSMT","TextFont Dubai-Bold","TextFont Dubai-Light","TextFont Dubai-Medium","TextFont Dubai-Regular","TextFont Ebrima","TextFont Ebrima-Bold","TextFont FontAwesome","TextFont FranklinGothic-Medium","TextFont FranklinGothic-MediumItalic","TextFont FreestyleScript-Regular","TextFont FrenchScriptMT","TextFont GLYPHICONSHalflings-Regular","TextFont Gabriola","TextFont Gadugi","TextFont Gadugi-Bold","TextFont Garamond","TextFont Garamond-Bold","TextFont Garamond-Italic","TextFont Georgia","TextFont Georgia-Bold","TextFont Georgia-BoldItalic","TextFont Georgia-Italic","TextFont HoloLensMDL2Assets","TextFont Impact","TextFont InkFree","TextFont JavaneseText","TextFont JuiceITC-Regular","TextFont KozGoPr6N-Regular","TextFont KristenITC-Regular","TextFont Leelawadee","TextFont Leelawadee-Bold","TextFont LeelawadeeUI","TextFont LeelawadeeUI-Bold","TextFont LeelawadeeUI-Semilight","TextFont LucidaConsole","TextFont LucidaHandwriting-Italic","TextFont LucidaSansUnicode","TextFont MS-Gothic","TextFont MS-PGothic","TextFont MS-UIGothic","TextFont MSReferenceSansSerif","TextFont MSReferenceSpecialty","TextFont MT-Extra","TextFont MVBoli","TextFont MalgunGothic","TextFont MalgunGothic-Semilight","TextFont MalgunGothicBold","TextFont Marlett","TextFont Microsoft-Himalaya","TextFont Microsoft-Yi-Baiti","TextFont MicrosoftJhengHeiBold","TextFont MicrosoftJhengHeiLight","TextFont MicrosoftJhengHeiRegular","TextFont MicrosoftJhengHeiUIBold","TextFont MicrosoftJhengHeiUILight","TextFont MicrosoftJhengHeiUIRegular","TextFont MicrosoftNewTaiLue","TextFont MicrosoftNewTaiLue-Bold","TextFont MicrosoftPhagsPa","TextFont MicrosoftPhagsPa-Bold","TextFont MicrosoftSansSerif","TextFont MicrosoftTaiLe","TextFont MicrosoftTaiLe-Bold","TextFont MicrosoftUighur","TextFont MicrosoftUighur-Bold","TextFont MicrosoftYaHei","TextFont MicrosoftYaHei-Bold","TextFont MicrosoftYaHeiLight","TextFont MicrosoftYaHeiUI","TextFont MicrosoftYaHeiUI-Bold","TextFont MicrosoftYaHeiUILight","TextFont Ming-Lt-HKSCS-ExtB","TextFont MingLiU-ExtB","TextFont Mistral","TextFont MongolianBaiti","TextFont MonotypeCorsiva","TextFont MuseoSansForDell","TextFont MuseoSansForDell-Bold","TextFont MyanmarText","TextFont MyanmarText-Bold","TextFont Myriad-Roman","TextFont MyriadHebrew-Regular","TextFont MyriadPro-Regular","TextFont NSimSun","TextFont NirmalaUI","TextFont NirmalaUI-Bold","TextFont NirmalaUI-Semilight","TextFont PMingLiU-ExtB","TextFont PalatinoLinotype-Bold","TextFont PalatinoLinotype-BoldItalic","TextFont PalatinoLinotype-Italic","TextFont PalatinoLinotype-Roman","TextFont Papyrus-Regular","TextFont Pristina-Regular","TextFont SegoeMDL2Assets","TextFont SegoePrint","TextFont SegoePrint-Bold","TextFont SegoeScript","TextFont SegoeScript-Bold","TextFont SegoeUI","TextFont SegoeUI-Bold","TextFont SegoeUI-BoldItalic","TextFont SegoeUI-Italic","TextFont SegoeUI-Light","TextFont SegoeUI-LightItalic","TextFont SegoeUI-Semibold","TextFont SegoeUI-SemiboldItalic","TextFont SegoeUI-Semilight","TextFont SegoeUI-SemilightItalic","TextFont SegoeUIBlack","TextFont SegoeUIBlack-Italic","TextFont SegoeUIEmoji","TextFont SegoeUIHistoric","TextFont SegoeUISymbol","TextFont SimSun","TextFont SimSun-ExtB","TextFont SitkaBanner","TextFont SitkaBanner-Bold","TextFont SitkaBanner-BoldItalic","TextFont SitkaBanner-Italic","TextFont SitkaDisplay","TextFont SitkaDisplay-Bold","TextFont SitkaDisplay-BoldItalic","TextFont SitkaDisplay-Italic","TextFont SitkaHeading","TextFont SitkaHeading-Bold","TextFont SitkaHeading-BoldItalic","TextFont SitkaHeading-Italic","TextFont SitkaSmall","TextFont SitkaSmall-Bold","TextFont SitkaSmall-BoldItalic","TextFont SitkaSmall-Italic","TextFont SitkaSubheading","TextFont SitkaSubheading-Bold","TextFont SitkaSubheading-BoldItalic","TextFont SitkaSubheading-Italic","TextFont SitkaText","TextFont SitkaText-Bold","TextFont SitkaText-BoldItalic","TextFont SitkaText-Italic","TextFont Sylfaen","TextFont SymbolMT","TextFont Tahoma","TextFont Tahoma-Bold","TextFont TeamViewer14","TextFont TempusSansITC","TextFont TimesNewRomanPS-BoldItalicMT","TextFont TimesNewRomanPS-BoldMT","TextFont TimesNewRomanPS-ItalicMT","TextFont TimesNewRomanPSMT","TextFont Trebuchet-BoldItalic","TextFont TrebuchetMS","TextFont TrebuchetMS-Bold","TextFont TrebuchetMS-Italic","TextFont Verdana","TextFont Verdana-Bold","TextFont Verdana-BoldItalic","TextFont Verdana-Italic","TextFont Webdings","TextFont Wingdings-Regular","TextFont Wingdings2","TextFont Wingdings3","TextFont YuGothic-Bold","TextFont YuGothic-Light","TextFont YuGothic-Medium","TextFont YuGothic-Regular","TextFont YuGothicUI-Bold","TextFont YuGothicUI-Light","TextFont YuGothicUI-Regular","TextFont YuGothicUI-Semibold","TextFont YuGothicUI-Semilight","TextFont icon-brand","TextFont icon-large","TextFont icon-small","TextFont icon-ui"],
            valueType : "string", description : "Values took from aplication. Example: '// for (var i=0; i<textFonts.length; i++) {$.writeln(textFonts[i]);}'."},
        {propertyName : "fontSize", values : [], valueType : "number", description : "Value is a number of ps. Ex: 12."},
        {propertyName : "fontSrokeWeight", values : [], valueType : "number", description : "Ex: 1."},
        {propertyName : "fontStrokeColor", values : [], valueType : "array", description : "Array of 4 numbers, each one from 0 to 100. Ex: [0, 100, 100, 0], // purple // from 0 to 100."},
        {propertyName : "fontfillColor", values : [], valueType : "array", description : "Array of 4 numbers, each one from 0 to 100. Ex: [100, 0, 100, 0], // green"},
        {propertyName : "fontWeight", values : [], valueType : "number", description : ""},
        {propertyName : "lineHeight", values : [], valueType : "number", description : "Ex: 120, // %  Percent number value."},
        {propertyName : "textAlign", values : ["center", "left", "right", "justify"], valueType : "string", description : "// Ex: [center | left | right | justify]; // Justification.CENTER; // Justification.LEFT; // Justification.RIGHT; // Justification.FULLJUSTIFY;"},
        {propertyName : "textIndent", values : [], valueType : "number", description : "// Sets or returns the indentation of the first line of text; // textRange.firstLineIndent"},
        {propertyName : "textTransform", values : ["uppercase", "lowercase", "capitalize"], valueType : "string", description : "// [uppercase | lowercase | capitalize] // 'uppercase' : FontCapsOption.ALLCAPS; // "},
        {propertyName : "fontVariant", values : ["normal", "small-caps"], valueType : "string", description : "// [normal | small-caps];  // FontCapsOption.NORMALCAPS; // FontCapsOption.SMALLCAPS;"},
        {propertyName : "verticalAlign", values : ["baseline", "length", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom"], valueType : "string", description : ",// [baseline | length | sub | super | top | text-top | middle | bottom |text-bottom] // FontBaselineOption.NORMALBASELINE; // FontBaselineOption.SUBSCRIPT; // FontBaselineOption.SUPERSCRIPT;"},
        {propertyName : "wordSpacing", values : [], valueType : "number", description : "// textRange.desiredWordSpacing"},
        {propertyName : "letterSpacing", values : [], valueType : "number", description : "//textRange.desiredLetterSpacing"},
        // box style
        {propertyName : "width", values : [], valueType : "number", description : "// auto width if not set, or undefined;"},
        {propertyName : "height", values : [], valueType : "number", description : " // auto height if not set;"},
        {propertyName : "borderStyle", values : ["none", "dotted", "dashed", "solid"], valueType : "string", description : " // none | dotted | dashed | solid ;"},
        {propertyName : "borderWidth", values : [], valueType : "number", description : "Ex: 5."},
        {propertyName : "dashPattern", values : [], valueType : "array", description : "//Ex: [2,2]; // for borderStyle : dashed; // dashPattern[0] = dashLength; dashPattern[1] = dashSpace; dashPattern[2] = dashLenth and so on...;"},
        {propertyName : "dashOffset", values : [], valueType : "number", description : "// for borderStyle : dashed; // The default distance into the dash pattern at which the pattern should be started."},
        {propertyName : "borderColor", values : [], valueType : "array", description : "Ex: [10, 100, 100, 10], // [c, m, y, k];"},           
        {propertyName : "backgroundColor", values : [[], "transparent"], valueType : "array", valueType2: "string", description : "[0, 10, 89, 10], // [c, m, y, k] | 'transparent'"},
        {propertyName : "top", values : [], valueType : "number", description : "// position[1];"},
        {propertyName : "left", values : [], valueType : "number", description : "// position[0]; "},
        {propertyName : "paddingTop", values : [], valueType : "number", description : ""},
        {propertyName : "paddingRight", values : [], valueType : "number", description : ""},
        {propertyName : "paddingBottom", values : [], valueType : "number", description : ""},
        {propertyName : "paddingLeft", values : [], valueType : "number", description : ""}, 
        ],
    _defaultTextStyle : {
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
        },
    _defaultBoxStyle : {
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
        },
    globalPapers : {
        lastUpdate: "Thursday, 24 Jan 2019 22:33:51 GMT", // var now = new Date().toUTCString();
        pfn : { // paper format names;
            A: ['A0', 'A1','A2', 'A3', 'A4', 'A5', 'A6'],
            B: ['B0', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6'],
            SRA: ['','','','SRA3', 'SRA4','',''],
            EP: ['EP0','EP1','EP2', 'EP3', 'EP4', 'EP5', 'EP6'], // ePrintare format names
            CF: ['mucavaCD_sina', 'mucavaSpateCD_surub', 'mucavaGauriCD_surub']  // custom format names
            },
        d : { // paper dimensions
            um: 'mm',
            A: [[841, 1189],[594, 841],[420, 594],[297, 420],[210, 297],[148, 210],[105, 148]], // A0, A1, A2, A3, A4, A5, A6
            B: [[1000, 1414],[707, 1000],[500, 707],[353, 500],[250, 353],[176, 250],[125, 176]], // B0, ***B1***, B2, B3, B4, B5, B6
            SRA: [[],[],[],[],[],[],[]],
            EP: [[],[],[],[],[210, 330],[],[]], // ePrintare format
            CF: [[200, 303],[190, 303],[20, 303]],
            tk: [3, 2.5, 2.2, 2, 0.5, 0.03], // tickness (grosimea hartiei)
            },
        pt : [ // paper type;
             'plain',
             'matt',
             'gloss',
             'color specific',
             'double coated offset',
             'cardboard', // (mucava)
             'sticker' // (autocolant)
            ],
        w : { // paper density; (weigth)
            um: 'g/sm',
            od: [60, 90, 115, 130, 150, 170, 200, 250, 300, 350], // offset densities
            pd: [80.00, 90, 1001.53], // plain densities
            csd: [90, 120, 160, 200, 300] // color specific densities
            },
        ptn : [ // paper trade name;
            'Digital printing paper',
            'Quatro gloss',
            'Color Copy',
            'Garda Silk',
            'Hartie copiator',
            ]   
         },  
    artboard: {
        size: [210,148.5], // from printer.paper.size
        nr: 12,
        },
    print: {
        paper: {
            presetName: 'A4 like paper',
            um: 'mm',
            format: 'custom',
            size: {um: 'mm', width: 200, height: 180},
            weight: {um: 'gsm', value: 120},
            type: 'gloss',
            tradeName : 'Color Copy',
            },
        layout: {
            duplex: false,
            margins: [5,8,5,5], // top, left, right, bottom
            },
        finishing: {},
        info: 'info',
        },
    _cropMarks : {
        render: false,
        type: 'rect', // 'rect' | 'corner'
        length: 10,
        width: 1,
        color: [10, 20, 30, 40],
        cutMargins: [8, 15, 8, 10], // [left, top, right, bottom] 
        },
    _background : {
        type: 'solid', // ['solid' | 'img']
        color: [100, 100, 100, 100], // [0, 0, 0, 0] for transparent ??
        borderless: true,
        img: {
            render: false,
            multiImg: false,
            singleImgPath: '', // for single image background
            folderPath: '', // for multiimage background
            paths: ['', '', '', '', '', '', '', '', '', '', '', ''], // the paths for multiimage background
            },
        },
    year: 2019, // autoset by app
    yearBox: {
        position: {
            per: [], // % position from x, y of artboard + print.layout.margins
            rel: [], // from x, y axis of artboard origin  ex: [100, 200]; // will be overridden
            abs: [],// absolute position in illustrator // will be overridden
            },
        text: '2018',
        style: { // left, top from style will override position.per and position.rel
            doNotConvert: ['fontSize'],
            fontSize: 50, borderWidth: 5, top: 100, left: 100
            },
        },
    // ____________________________________
    monthNameBox: {
        names: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
        abbrev: 0, // 0 for no shorthand for monthsNames, 1 => only first letter, 2 => the first two letters, 3 , 4, and so on...
        position: {
            per: [50,50], // percent (%) position from x, y of artboard+print.margins // will be overridden by style.top and style.left (if defined in style)
            rel: [], // from x, y axis of artboard origin  ex: [100, 200]; // if defined, will override per; // will be overridden by style.top and style.left (if defined in style)
            abs: [],// absolute position in illustrator // will be calculated by script
            },
        style: {
            width: 100, height : 30, top : undefined, left : undefined, fontSize : 20, textAlign : 'center',
            },  
        },
    // ===== IMPORTANT : ===  POSITION (per, rel, abs) OF MONTH MATRIX REFERS TO ORIGIN (LEFT-BOTTOM) OF MATRIX, NOT LEFT-TOP POSITION ! 
    monthMatrix: {
        _alignment: [2,0], // x: [0, 1, 2]; y: [0, 1, 2]; for [2,0] monthMatrix is aligned to x: right - y: bottom of artboard+print.margins; for [1, 1] monthMatrix is center aligned;
        position: {
            per: [70, 3], // percent (%) position from x, y of artboard // if per.length == 0 will be writen from align & artboard dimensions; // if defined will override alignment
            rel: [], // from x, y axis of artboard origin  ex: [100, 200]; // if defined, will override per;
            abs: [],// array of absolute positions of every month matrix in illustrator // will be calculated and writen by script
            },
        _size: [], // overridden by app // the size of whole group of datesBoxes and daysBoxes
        firstDayOfWeek: 1, // 0 for Sunday;
        _weeksAlign: 'vertical', // 'vertical' | 'horizontal';
        margin: 2, // margin between datesBoxes and margin between daysBoxes // 0 if undefined or null
        days: {
            names: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
            abbrev: 2, // 0 for no shorthand for daysNames, 1 => only first letter, 2 => the first two letters, 3 , 4, and so on...
            dist: 10, // distance between daysBoxes and datesBoxes // margin between daysBoxes = margin between datesBoxes
            style: {
                doNotConvert: [],
                fontSize: 12, borderStyle: 'solid', borderColor: [10, 20, 30, 40], borderWidth: 0.5
                },
            },
        dates: {
            _specialDates: [[1,1,2019], [6,0,2019]], // user defined [day, month, year];
            neighboursStyle: {
                doNotConvert: [],
                fontSize: 12, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'dotted', borderWidth: 1
                },
            mainStyle: {
                doNotConvert: [],
                fontSize: 12, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'solid', borderColor: [10, 10, 10, 10], borderWidth: 1
                },
            _sundaysStyle : {
                fontSize: 12, 
                },
            _saturdayStyle: {
                fontfillColor : [0, 100, 0, 100]
                },
            _specialStyle: {
                fontfillColor : [0, 100, 40, 100]
                }
            },     
        },
    _mainImg: {
        container: { // the crop mask of image
            borderless: false,
            alignment: [1,2], // x: [0, 1, 2]; y: [0, 1, 2]; for [1,2] container is aligned to x: center - y: top of artboard+print.margins; for [1, 1] container is center aligned; // if (borderless) print.margins are skipped in calculus
            position: {
                per: [], // percent (%) position from x, y of artboard // if per.length == 0 will be writen from align & artboard dimensions;
                rel: [], // from x, y axis of artboard origin  ex: [100, 200]; // if defined, will override per;
                abs: [],// absolute position in illustrator // will be calculated by script
                },
            size: [], // user defined size
            },
        multiImg: true,
        singleImgPath: '', // for single image calendar, same image on every page
        singleImgSize: [], // writen by app; the original size of image
        folderPath: '', // for multiimage calendar
        paths: ['', '', '', '', '', '', '', '', '', '', '', ''], // the paths for multiimage calendar
        sizes: [[],[],[],[],[],[],[],[],[],[],[],[],], // [x,y] // writen by app; the original sizes of every image;  
        autoSize: 'max', // ['max' | 'min' | 'fill'] // if 'max' img will be resized proportionally to container until its edge will fill the container; if 'min' img. will be resized proportionally until its longest edge will fit in container (margins may appear); if 'fill' img. will be resezed and deformed to fill the container;
        alignment: [1,1], // x: [0, 1, 2]; y: [0, 1, 2]; for [1,1] img is aligned to x: center - y: center of container;
        position: {
            per: [], // percent (%) position from x, y of container // if per.length == 0 will be writen from alignment & container dimensions;
            rel: [], // from x, y axis of container origin  ex: [100, 200]; // if defined, will override per;
            abs: [],// absolute position in illustrator // will be calculated by script
            },
        },
    _logoImg: {
        path: '',
        size: [],  // writen by app; the original size of image
        preferredSize: [20, 50], // the desired size of logo img.; aspect ratio will be respected; alse the max size;
        position: {
            per: [10,50], // percent (%) position from x, y of artboard+print.margins
            rel: [], // from x, y axis of artboard origin  ex: [100, 200]; // if defined, will override per;
            abs: [],// absolute position in illustrator // will be calculated by script
            },
        },
    _logoDescrBox: {
        text: '', // user defined text content;
        position: {
            per: [10,30], // percent (%) position from x, y of artboard+print.margins // will be overridden by style.top and style.left (if defined in style)
            rel: [], // from x, y axis of artboard origin  ex: [100, 200]; // if defined, will override per; // will be overridden by style.top and style.left (if defined in style)
            abs: [],// absolute position in illustrator // will be calculated by script
            },
        style: {
            width: 50, height : 100, top : undefined, left : undefined, fontSize : 12, textAlign : 'left', textIndent : 0,
            },
        },
    _personalizationBox: {
        content: { // user defined text content;
            texts: ['','','','','','','','','','','','',],
            textsPath: '', // the path for the texts content JSON
            },
        position: {
            per: [50,10], // percent (%) position from x, y of artboard+print.margins // will be overridden by style.top and style.left (if defined in style)
            rel: [], // from x, y axis of artboard origin  ex: [100, 200]; // if defined, will override per; // will be overridden by style.top and style.left (if defined in style)
            abs: [],// absolute position in illustrator // will be calculated by script
            },
        style: {
            width: 50, height : 100, top : undefined, left : undefined, fontSize : 12, textAlign : 'center', textIndent : 15,
        },
    }
};























/*========================= ill_library13 =========================*/
 // =======================polyfills==============
 
Function.prototype.bind||function(){var t=Array.prototype.slice;Function.prototype.bind=function(n){var o=this,r=arguments[0],i=t.call(arguments,1),p=i.length;if("function"!=typeof o)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");return function(){return i.length=p,i.push.apply(i,arguments),o.apply(r,i)}}}();
// ========== Object.defineProperty polyfill ===============
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.returnExports=t()}(this,function(){var e,t,r,n,o=Function.call,c=Object.prototype,i=o.bind(c.hasOwnProperty),f=o.bind(c.propertyIsEnumerable),l=o.bind(c.toString),u=i(c,"__defineGetter__");u&&(e=o.bind(c.__defineGetter__),t=o.bind(c.__defineSetter__),r=o.bind(c.__lookupGetter__),n=o.bind(c.__lookupSetter__));var b=function(e){return null==e||"object"!=typeof e&&"function"!=typeof e};Object.getPrototypeOf||(Object.getPrototypeOf=function(e){var t=e.__proto__;return t||null===t?t:"[object Function]"===l(e.constructor)?e.constructor.prototype:e instanceof Object?c:null});var p=function(e){try{return e.sentinel=0,0===Object.getOwnPropertyDescriptor(e,"sentinel").value}catch(e){return!1}};if(Object.defineProperty){var a=p({});if(!("undefined"==typeof document||p(document.createElement("div")))||!a)var O=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||O){Object.getOwnPropertyDescriptor=function(e,t){if(b(e))throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+e);if(O)try{return O.call(Object,e,t)}catch(e){}var o;if(!i(e,t))return o;if(o={enumerable:f(e,t),configurable:!0},u){var l=e.__proto__,p=e!==c;p&&(e.__proto__=c);var a=r(e,t),s=n(e,t);if(p&&(e.__proto__=l),a||s)return a&&(o.get=a),s&&(o.set=s),o}return o.value=e[t],o.writable=!0,o}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){return Object.keys(e)}),!Object.create){var s,j=!({__proto__:null}instanceof Object);s=j||"undefined"==typeof document?function(){return{__proto__:null}}:function(){var e,t,r,n,o,c,i=function(){if(!document.domain)return!1;try{return!!new ActiveXObject("htmlfile")}catch(e){return!1}}()?(c="script",(o=new ActiveXObject("htmlfile")).write("<"+c+"></"+c+">"),o.close(),n=o.parentWindow.Object.prototype,o=null,n):(t=document.createElement("iframe"),r=document.body||document.documentElement,t.style.display="none",r.appendChild(t),t.src="javascript:",e=t.contentWindow.Object.prototype,r.removeChild(t),t=null,e);delete i.constructor,delete i.hasOwnProperty,delete i.propertyIsEnumerable,delete i.isPrototypeOf,delete i.toLocaleString,delete i.toString,delete i.valueOf;var f=function(){};return f.prototype=i,s=function(){return new f},new f},Object.create=function(e,t){var r,n=function(){};if(null===e)r=s();else{if(null!==e&&b(e))throw new TypeError("Object prototype may only be an Object or null");n.prototype=e,(r=new n).__proto__=e}return void 0!==t&&Object.defineProperties(r,t),r}}var d,y=function(e){try{return Object.defineProperty(e,"sentinel",{}),"sentinel"in e}catch(e){return!1}};if(Object.defineProperty){var _=y({}),w="undefined"==typeof document||y(document.createElement("div"));if(!_||!w)var v=Object.defineProperty,m=Object.defineProperties}if(!Object.defineProperty||v){Object.defineProperty=function(o,i,f){if(b(o))throw new TypeError("Object.defineProperty called on non-object: "+o);if(b(f))throw new TypeError("Property description must be an object: "+f);if(v)try{return v.call(Object,o,i,f)}catch(e){}if("value"in f)if(u&&(r(o,i)||n(o,i))){var l=o.__proto__;o.__proto__=c,delete o[i],o[i]=f.value,o.__proto__=l}else o[i]=f.value;else{var p="get"in f,a="set"in f;if(!u&&(p||a))throw new TypeError("getters & setters can not be defined on this javascript engine");p&&e(o,i,f.get),a&&t(o,i,f.set)}return o}}Object.defineProperties&&!m||(Object.defineProperties=function(e,t){if(m)try{return m.call(Object,e,t)}catch(e){}return Object.keys(t).forEach(function(r){"__proto__"!==r&&Object.defineProperty(e,r,t[r])}),e}),Object.seal||(Object.seal=function(e){if(Object(e)!==e)throw new TypeError("Object.seal can only be called on Objects.");return e}),Object.freeze||(Object.freeze=function(e){if(Object(e)!==e)throw new TypeError("Object.freeze can only be called on Objects.");return e});try{Object.freeze(function(){})}catch(e){Object.freeze=(d=Object.freeze,function(e){return"function"==typeof e?e:d(e)})}Object.preventExtensions||(Object.preventExtensions=function(e){if(Object(e)!==e)throw new TypeError("Object.preventExtensions can only be called on Objects.");return e}),Object.isSealed||(Object.isSealed=function(e){if(Object(e)!==e)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.isFrozen||(Object.isFrozen=function(e){if(Object(e)!==e)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isExtensible||(Object.isExtensible=function(e){if(Object(e)!==e)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var t="";i(e,t);)t+="?";e[t]=!0;var r=i(e,t);return delete e[t],r})});
// ======= Object.create polyfill =============
//~ if(typeof Object.create !=="function"){Object.create=function(proto){function F(){}F.prototype = proto;return new F();};}
//=======          polifyll JSON.stringify(value[, replacer[, space]])     JSON.parse(text[, reviver])           ============
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,f,u,i=gap,p=e[t];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),"function"==typeof rep&&(p=rep.call(e,t,p)),typeof p){case"string":return quote(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){for(f=p.length,r=0;f>r;r+=1)u[r]=str(r,p)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",gap=i,o}if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,p),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(o=str(n,p),o&&u.push(quote(n)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",gap=i,o}}var cx,escapable,gap,indent,meta,rep;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}),"function"!=typeof JSON.stringify&&(escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new Error("JSON.parse")})}();

if (!Array.prototype.forEach) { Array.prototype.forEach = function(callback, thisArg) { var T, k; if (this == null) {throw new TypeError(' this is null or not defined');}var O = Object(this);var len = O.length >>> 0;if (typeof callback !== "function") {throw new TypeError(callback + ' is not a function');}if (arguments.length > 1) {T = thisArg;}k = 0;while (k < len) {var kValue;if (k in O) {kValue = O[k];callback.call(T, kValue, k, O);}k++;}};}
if (!Array.prototype.map) {Array.prototype.map = function(callback/*, thisArg*/) {var T, A, k;if (this == null) {throw new TypeError('this is null or not defined');}var O = Object(this);var len = O.length >>> 0;if (typeof callback !== 'function') {throw new TypeError(callback + ' is not a function');}if (arguments.length > 1) {T = arguments[1];}A = new Array(len);k = 0;while (k < len) {var kValue, mappedValue;if (k in O) {kValue = O[k];mappedValue = callback.call(T, kValue, k, O);A[k] = mappedValue;}k++;}return A;};}
Array.prototype.reduce||(Array.prototype.reduce=function(e){null===this&&alert("Array.prototype.reduce called on null or undefined"),"function"!=typeof e&&alert(e+" is not a function");var r,t=Object(this),n=t.length>>>0,o=0;if(arguments.length>=2)r=arguments[1];else{for(;o<n&&!(o in t);)o++;o>=n&&alert("Reduce of empty array with no initial value"),r=t[o++]}for(;o<n;)o in t&&(r=e(r,t[o],o,t)),o++;return r});/*======================= polyfill Array.prototype.reduce ==================================*/
Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),t=e.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var n=arguments[1],i=0;i<t;){var o=e[i];if(r.call(n,o,i,e))return o;i++}},configurable:!0,writable:!0});
Array.prototype.filter||(Array.prototype.filter=function(t,r){"use strict";if("Function"!=typeof t&&"function"!=typeof t||!this)throw new TypeError;var i=this.length>>>0,e=new Array(i),o=this,n=0,f=-1;if(void 0===r)for(;++f!==i;)f in this&&t(o[f],f,o)&&(e[n++]=o[f]);else for(;++f!==i;)f in this&&t.call(r,o[f],f,o)&&(e[n++]=o[f]);return e.length=n,e});

String.prototype.trim = function () { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');};

// ILLUSTRATOR JS BUG: not working: var cond1 = true; var cond2 = true; var x = cond1 ? 'cond1 is : '+cond1 : cond2 ? 'cond2 is : '+cond2 : 'default'; $.writeln(x); // check this in browser



/*========================= makeDoc Illustrator method ========================================*/
/**************
makeDoc is a function for creating new illustrator document with unit = millimeters (or ps if something else) and colorSpace = CMYK
example:
var newDoc = makeDoc('test_name_A4', 210, 295, 1, 'mm');
**************/
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
/*========================= makeDoc Illustrator method END ====================================*/


// ====================== Img CONSTRUCTOR =====================================

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
// ============================= Img END =========================




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

//~ var contentStyle = { // default style object;
//~     fontFamily : 'TimesNewRomanPS-ItalicMT', // names took from application
//~     textFont : 'TimesNewRomanPS-ItalicMT', // // for (var i=0; i<textFonts.length; i++) {$.writeln(textFonts[i]);}
//~     fontSize : 12,
//~     fontSrokeWeight: 1,
//~     fontStrokeColor : [0, 100, 100, 0], // purple
//~     fontfillColor : [100, 0, 100, 0], // green
//~     fontWeight : undefined,
//~     lineHeight: 120, // %  
//~     textAlign : 'center',     // [center | left | right | justify]; // Justification.CENTER; // Justification.LEFT; // Justification.RIGHT; // Justification.FULLJUSTIFY;
//~     textIndent : 0, // Sets or returns the indentation of the first line of text; // textRange.firstLineIndent
//~     textTransform : undefined,// [uppercase | lowercase | capitalize] // FontCapsOption.ALLCAPS; // 
//~     fontVariant: undefined,// [normal | small-caps];  // FontCapsOption.NORMALCAPS; // FontCapsOption.SMALLCAPS;
//~     verticalAlign : 'baseline',// [baseline | length | sub | super | top | text-top | middle | bottom |t ext-bottom] // FontBaselineOption.NORMALBASELINE; // FontBaselineOption.SUBSCRIPT; // FontBaselineOption.SUPERSCRIPT;
//~     wordSpacing : undefined,// textRange.sediredWordSpacing
//~     letterSpacing: undefined, //textRange.desiredLetterSpacing    
//~     };

//~ var boxStyle = {      // default style object;
//~     width: undefined, // auto width if not set;
//~     height : undefined, // auto height if not set;
//~     borderStyle : undefined, // none | dotted | dashed | solid ;
//~     borderWidth : 5,
//~     dashPattern : null, // [2,2]; // for borderStyle: dashed; // dashPattern[0] = dashLength; dashPattern[1] = dashSpace; dashPattern[2] = dashLenth and so on...;
//~     dashOffset : 0, // for borderStyle : dashed; // The default distance into the dash pattern at which the pattern should be started.
//~     borderColor : [10, 100, 100, 10], // [c, m, y, k];
//~     
//~     backgroundColor : [0, 10, 89, 10], // [c, m, y, k] | 'transparent'
//~     top : 0, // position[1];
//~     left : 0, // position[0]; 
//~     paddingTop : 0,
//~     paddingRight : 0,
//~     paddingBottom : 0,
//~     paddingLeft : 0,  
//~     };

function ContentStyle(styleOb) {
    // default Content style object;
    this.fontFamily = 'TimesNewRomanPS-ItalicMT'; // names took from application
    this.textFont = 'TimesNewRomanPS-ItalicMT'; // // for (var i=0; i<textFonts.length; i++) {$.writeln(textFonts[i]);}
    this.fontSize = 12;
    this.fontSrokeWeight = 1;
    this.fontStrokeColor = [0, 100, 100, 0]; // purple
    this.fontfillColor = [100, 0, 100, 0]; // green
    this.fontWeight = null;
    this.lineHeight = 120; // %  
    this.textAlign = 'center';     // [center | left | right | justify]; // Justification.CENTER; // Justification.LEFT; // Justification.RIGHT; // Justification.FULLJUSTIFY;
    this.textIndent = 0; // Sets or returns the indentation of the first line of text; // textRange.firstLineIndent
    this.textTransform = '';// [uppercase | lowercase | capitalize] // FontCapsOption.ALLCAPS; // 
    this.fontVariant = '';// [normal | small-caps];  // FontCapsOption.NORMALCAPS; // FontCapsOption.SMALLCAPS;
    this.verticalAlign = 'baseline';// [baseline | length | sub | super | top | text-top | middle | bottom |t ext-bottom] // FontBaselineOption.NORMALBASELINE; // FontBaselineOption.SUBSCRIPT; // FontBaselineOption.SUPERSCRIPT;
    this.wordSpacing = null;// textRange.sediredWordSpacing
    this.letterSpacing = null; //textRange.desiredLetterSpacing    
    
     if (arguments.length == 0) return; 
     else if (typeof styleOb === 'object') 
        for (var prop in styleOb) if (prop in this) this[prop] = styleOb[prop];
}
//~ ContentStyle.prototype = contentStyle;

function BoxStyle (styleOb) {
    // default  Box style object;
    this.width =  undefined; // auto width if not set;
    this.height = undefined; // auto height if not set;
    this.borderStyle = undefined; // none | dotted | dashed | solid ;
    this.borderWidth = 5; 
    this.dashPattern = null; // [2,2]; // for borderStyle: dashed; // dashPattern[0] = dashLength; dashPattern[1] = dashSpace; dashPattern[2] = dashLenth and so on...;
    this.dashOffset = 0; // for borderStyle : dashed; // The default distance into the dash pattern at which the pattern should be started.
    this.borderColor = [10, 100, 100, 10]; // [c, m, y, k];   
    this.backgroundColor = [0, 10, 89, 10]; // [c, m, y, k] | 'transparent'
    this.top = 0; // position[1];
    this.left = 0; // position[0]; 
    this.paddingTop = 0;
    this.paddingRight = 0;
    this.paddingBottom = 0;
    this.paddingLeft = 0;  
      
    if (arguments.length == 0) return;
    else if (typeof styleOb === 'object')
        for (var prop in styleOb) if (prop in this) this[prop] = styleOb[prop];
    }
//~ BoxStyle.prototype = boxStyle;


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
// render one line text
Content.prototype.renderText = function () {
    
    };


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
    // testFontsWidths ('Lorem ipsum', 30); // used to test factor;
*/
 
 
TextBox.prototype.calculateBoxWidth = function (text) {
    var boxWidth;
    var fontSize = this.content.style.fontSize;
    var factor= 0.8; // testFontsWidths ('Lorem ipsum', 30); // used to test factor;
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
                if (! this.boxStyle.dashPattern) 
                textFrame.textPath.strokeDashes = [borderWidth*2, borderWidth]; // if borderStyle = dashed;
                else 
                textFrame.textPath.strokeDashes = this.boxStyle.dashPattern; // if borderStyle = dashed; and dashPattern
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
        case (undefined || null || '') : 
        textFrame.textRange.capitalization = FontCapsOption.NORMALCAPS; break;
        default : alert('textTransform : '+ this.content.style.fontVariant + ' is not supported ! \
        textTransform : uppercase ');
        }
    switch (this.content.style.fontVariant) {
        case 'normal' : 
        textFrame.textRange.capitalization = FontCapsOption.NORMALCAPS; break;
        case 'small-caps' : 
        textFrame.textRange.capitalization = FontCapsOption.SMALLCAPS; break; // // FontCapsOption.ALLSMALLCAPS; // // FontCapsOption.SMALLCAPS;
        case (undefined || null || '') : 
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
//~      redraw();
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

// ======================= obFromJsonFile ===== saveObAsJson =======================

function obFromJsonFile (filePath) {
    try{
       // if(!filePath||typeof filePath!='string') throw new Error('type of filePath : is '+(typeof filePath)+filePath, filePath); 
            //else if ('string'===typeof filePath)  {            
                    var file = new File(filePath);          
                    if(!file.exists) throw new Error('file.error: '+file.error+', No file! ', file);
                    var opened = file.open("r"); // open file for reading; Returns true if the file has been opened successfully, false otherwise.
                    if(!opened) throw new Error('file.error: '+file.error+', Could not open("r")', file);
                        // else $.writeln(file.displayName+' successfully opened ("r") ! Path : '+file.path);
                    var jsonString = file.read();
                        // $.writeln('(jsonString from '+file.displayName+').length is : '+jsonString.length+';');
                     file.close();
                     var ob = JSON.parse(jsonString);
                     return ob;
               //     }
        } catch (e){
            $.writeln('=>function obFromJsonFile (filePath)\r\n'+e.name+' line: '+e.line+' , message: "'+e.message+'"'+', fileName: '+e.fileName+';');
            return false;
            }
    }




function saveObAsJson(ob, folderPath, jsonName, rewrite) {
    try{
        if (!ob) throw new Error('ob is '+ob);
        var jsonString = JSON.stringify(ob, null, ' ');       
       // if (!folderPath||typeof folderPath!='string') throw new Error('typeof folderPath must be "string" but is: "'+(typeof folderPath)+'" ! '+folderPath, folderPath);
         //   else if ('string'===typeof folderPath) {
                var file = new File(folderPath + '/'+jsonName+'.json');
                var initialExistence = file.exists;          
                if (file.exists&&rewrite||!file.exists) {
                    var opened = file.open("w"); // creates file if not exists or rewrite it if exists; Returns true if the file has been opened successfully, false otherwise.
                    if(!opened) throw new Error('file.error: '+file.error+', file.displayName: '+file.displayName+' could not be created/opened ("w") on folderPath: ', file.path);                
//~                     if(!opened) throw new Error('file.error is: '+file.error);                
                    var writen = file.write(jsonString); // returns true on success;
                    if (!writen) throw new Error('file.error: '+file.error+', file.displayName: '+file.displayName+'could not be writen on folderPath: '+file.path);
                    // $.writeln('=>function saveObAsJson() \r\n'+file.displayName+' initialExistence <<'+initialExistence+'>>');
                    // $.writeln((initialExistence) ? file.displayName+' successfully rewrited! Path : '+file.path : file.displayName+' successfully created! Path : '+file.path);
                    file.close();
                    return true;
                    } else if (file.exists&&!rewrite) return false;
             //   }
        } catch (e) {
            $.writeln(e.error);
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
// ============= obFromJsonFile ===== saveObAsJson ====== END  ==========


/* ===================== illustrator CALENDAR MonthMatrix constructor BEGIN ===================== */


function MonthMatrix () {
    this.position = [0,0];
    this.size= [], // overridden by app // the size of whole group of datesBoxes and daysBoxes
    this.firstDayOfWeek= 0, // 0 for Sunday;
    this.weeksAlign= 'vertical', // 'vertical' | 'horizontal';
    this.margin= 2, // margin between datesBoxes and margin between daysBoxes
    this.days= {
        names: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        abbrev: 2, // 0 for no shorthand for daysNames, 1 => only first letter, 2 => the first two letters, 3 , 4, and so on...
        dist: 5, // distance between daysBoxes and datesBoxes // margin between daysBoxes = margin between datesBoxes
        style: {
            fontSize: 12, borderStyle: 'solid', borderColor: [10, 20, 30, 40], borderWidth: 0.2
            },
        },
    this.dates= {
        specialDates: [[1,1], [6,10]], // user defined [day, month];
        neighboursStyle: {
            fontSize: 12, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'dotted', borderWidth: 0.2
            },
        mainStyle: {
            fontSize: 12, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'solid', borderColor: [10, 10, 10, 10], borderWidth: 0.5
            },
        sundaysStyle : {
            fontSize: 12, 
            },
        saturdayStyle: {
            fontfillColor : [0, 100, 0, 100]
            },
        specialStyle: {
            fontfillColor : [0, 100, 40, 100]
            }
        };
}

MonthMatrix.prototype.renderMonthMatrix = function (year, monthIndex, position) {
    
    var fullNameDays = this.days.names;
    var ab = this.days.abbrev; // number of letters to abbreviate days names
    var days = fullNameDays.map(function(dn){return dn.substring (0, ab)}); // days is an array with abbreviated days names
    var daysStyle = this.days.style;
    var firstDayOfWeekIndex = this.firstDayOfWeek;
    var monthPosition = (arguments[2]) ? position : this.position;
    var daysStyle = this.days.style;
    var mainDatesStyle = this.dates.mainStyle;
    var neighboursDatesStyle = this.dates.neighboursStyle;
    var margin = (this.margin) ? this.margin : 0;
    var dist = (this.days.dist) ? this.days.dist : margin;
    
    var m = new MonthData(year, monthIndex);     
    function MonthData (year, monthIndex) {
        var date = new Date(year, monthIndex+1, 0);
        this.daysCount = date.getDate(); // number of days in this month
        this.lastDayIndex = date.getDay(); // day of the week of the last day in this month
        this.firstDayIndex = (7-((this.daysCount-(this.lastDayIndex+1))%7)); // week day index of the first day in the month;  
        }
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
         
    var maxDayLength = days.reduce( function(a, b) { 
        if (a.length > b.length) return a; else return b;
        }, '' );
        // boxes width
    var daysTextBoxMaxWidth = daysTextBox.calculateBoxWidth(maxDayLength);
    var mainDatesTextBoxWidth = mainDatesTextBox.calculateBoxWidth('00');
    var neighboursDatesTextBoxWidth = neighboursDatesTextBox.calculateBoxWidth('00');  
    var boxesWidths = [daysTextBoxMaxWidth, mainDatesTextBoxWidth, neighboursDatesTextBoxWidth];
    var boxMinWidth = 1;
    var boxMaxWidth = boxesWidths.reduce(function(a, b) { 
        if (a > b) return a; else return b;
        }, boxMinWidth);
    
    daysTextBox.boxStyle.width = boxMaxWidth;
    mainDatesTextBox.boxStyle.width = boxMaxWidth;
    neighboursDatesTextBox.boxStyle.width = boxMaxWidth;
    // dates boxes height
    var mainDatesTextBoxHeight = mainDatesTextBox.calculateBoxHeight(1);
    var neighboursDatesTextBoxHeight = neighboursDatesTextBox.calculateBoxHeight(1);
    var boxesHeights = [mainDatesTextBoxHeight, neighboursDatesTextBoxHeight];
    var boxMinHeight = 10;
    var boxMaxHeight = boxesHeights.reduce(function(a, b) { 
        if (a > b) return a; else return b;
        }, boxMinHeight);
    mainDatesTextBox.boxStyle.height = boxMaxHeight;
    neighboursDatesTextBox.boxStyle.height = boxMaxHeight;
    // boxes max stroke
    var boxesStrokes = [daysTextBox.boxStyle.borderWidth, mainDatesTextBox.boxStyle.borderWidth, neighboursDatesTextBox.boxStyle.borderWidth];
    var maxStroke = boxesStrokes.reduce(function(a, b) { 
        if (a > b) return a; else return b;
        }, 0);
    
    var monthWidth = (boxMaxWidth+maxStroke+margin)*7;
    var monthHeight = (boxMaxHeight+maxStroke+margin)*6;  
    var monthMatrix = new MatrixJS (monthPosition, [monthWidth, monthHeight], [7,6], [0,100]);
    var datesBoxesPositions = monthMatrix.get_mPositions_lrtb (); 
    // render days
       for (var i=0;i<7;i++) {
           if (i<=6-firstDayOfWeekIndex) daysTextBox.content.textContent = days[i+firstDayOfWeekIndex];
            else daysTextBox.content.textContent = days[i-(7-firstDayOfWeekIndex)];
        daysTextBox.boxStyle.left =datesBoxesPositions[i][0];
        daysTextBox.boxStyle.top = datesBoxesPositions[i][1]+daysTextBox.calculateBoxHeight(1)+maxStroke+dist;
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
    function MonthData (year, monthIndex) {
            var date = new Date(year, monthIndex+1, 0);
            this.daysCount = date.getDate(); // number of days in this month
            this.lastDayIndex = date.getDay(); // day of the week of the last day in this month
            this.firstDayIndex = (7-((this.daysCount-(this.lastDayIndex+1))%7)); // week day index of the first day in the month;  
            }
    return true;
    };

function renderSoloCalendar (year, artboardSize, columns, rows) {
    var myDoc = makeDocPoints('docMMCalendarTest', artboardSize[0], artboardSize[1], 1, 'mm');
    var docMatrix = new MatrixJS ([0,0], [myDoc.width, myDoc.height], [columns, rows], [0,0]);
    var monthsPositions = docMatrix.get_mPositions_lrtb();
    for (var i=0;i<12;i++) {       
       var monthIndex = i;
        var monthPosition = monthsPositions[i];
        var m = new MonthMatrix ();
        var re = m.renderMonthMatrix (year, monthIndex, monthPosition);
        }
    }

function render12Calendar (year, artboardSize, position) {
    var myDoc = makeDoc('docMMCalendarTest', artboardSize[0], artboardSize[1], 12, 'mm');
    var monthIndex, x, y, currentArtboardOrigin, monthPosition;
    for (var i=0;i<12;i++) {
        monthIndex = i;
        x = myDoc.artboards[i].artboardRect[0];
        y = myDoc.artboards[i].artboardRect[3];
        currentArtboardOrigin = [x, y]; // current Artboard Origin
        if (arguments[1]) monthPosition = [x+position[0], y+position[1]];
        else monthPosition = currentArtboardOrigin;
        var m = new MonthMatrix ();
        var re = m.renderMonthMatrix (year, monthIndex, monthPosition);
        }
    }
//~  // TEST
//~ var days = ['Dum', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'];
//~ var monthsNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

//~ var daysStyle = {fontSize: 30, borderWidth: 6};
//~ var mainDatesStyle = {fontSize: 30, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'solid', borderColor: [10, 10, 10, 10], borderWidth: 4};
//~ var neighboursDatesStyle = {fontSize: 30, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'dotted', borderWidth: 2};

//~ var units = 'mm';
//~ var year = 3000;
//~ var firstDayOfWeekIndex = 0; 
//~ var myArtboard = [1000, 600];
//~ var monthPosition = [0, 0];// undefined // [500, 0]; // will be generated from align TL=[0,2], TM=[1,2], TR=[2,2], LM=[0,1], MM=[1,1], RM=[2,1], BL=[0,0], BM=[1,0], BR=[2,0];
//~ var monthAlign = [0,0]; // align TL=[0,2], TM=[1,2], TR=[2,2], LM=[0,1], MM=[1,1], RM=[2,1], BL=[0,0], BM=[1,0], BR=[2,0];
//~ var myDoc = makeDocPoints('docMMCalendarTest', myArtboard[0], myArtboard[1], 1);
//~ renderMatrixMonth (year, 11, firstDayOfWeekIndex, monthPosition, days, daysStyle, mainDatesStyle, neighboursDatesStyle);
// renderSoloCalendar(myArtboard, 4, 3);
// render12Calendar(myArtboard);
// render12Calendar(myArtboard, monthPosition);


/* ===================== illustrator CALENDAR MonthMatrix constructor END    ===================== */

/*==================== ill_library13   END =========================*/








iCalendarDefSet.year = (function () { // if we are in february=> this year, else next year
    var now = new Date();
    var thisMonth = now.getMonth();
    if (thisMonth<3) {
        return now.getFullYear();
        } else {
            return now.getFullYear()+1;
            }
    })();



function ICalendar (presetOb) {
    if (arguments.length>0&&typeof arguments[0]==='object') for (var p in presetOb) this[p] = presetOb[p];   
    }
ICalendar.prototype = Object.create(iCalendarDefSet);

ICalendar.prototype.runUi = function () {  
    };

// main function for rendering illustrator calendar document
ICalendar.prototype.renderCalendar = function () {
    //=============== unitsConversion ==================================================
    var pt = 2.83464567; // 1 millimeter = 2.83464567 PostScript points
    var umf = (this.doc.units === 'mm') ? pt : 1;// units of measurement factor; if um = 'mm' -> dimens*pt ; else dimens*1 = pt   
    var nvp = []; // nvp = number values propertie names // used later to change number properties of textBoxes style from pt to 'mm' (if this.doc.units === 'mm');
    for (var i=0;i<this.supportedStyle.length;i++)
        if (this.supportedStyle[i].valueType==='number')
            nvp.push(this.supportedStyle[i].propertyName);
    $.writeln('--> nvp: '+nvp);
          
    function unitsConvertion (obj, convertibleProps, propsToExclude, convertionFactor) {
        // var propsToExclude = obj.doNotConvert;
        var propsToConvert = remaining(convertibleProps, propsToExclude);
        changeValueOf (obj, propsToConvert, convertionFactor)
        }   
    // obj = object whose properties will be multiplied by factor; propsToChange is an array of properties names that will have to be changed
    function changeValueOf (obj, propsToChange, factor) {
        for (var p in obj) {
            $.writeln('obj[p] : '+p);
            var found = propsToChange.find(function(elem){return p===elem;})
            $.writeln('found is :'+found);       
                if (p===found) {
                    $.writeln('before: '+p+' : '+obj[p]);
                    if (typeof obj[p]==='number') obj[p] *= factor;
                    $.writeln('after : '+p+' : '+obj[p]);
                    }     
                }
        }   
    function remaining (convertibleProps, propsToExclude) {
        var remain = convertibleProps.filter(function(e){
        if (propsToExclude&&propsToExclude.length>0) // if propsToExclude is [ ] or undefined then remain = convertibleProps
                
                for (var i=0;i<propsToExclude.length;i++)
                    if (e ===propsToExclude[i]) return false;
           return true;
        });
    $.writeln('-->propsToChange: '+remain);
        return remain;
        }
    
     //=============== unitsConversion  END   ==================================================
     
     
    var artSize = this.artboard.size;
    var artNr = this.artboard.nr; // number of artboards
    var year = this.year;
    // render artboards
    var iDoc = makeDoc(this.doc.name, artSize[0], artSize[1], artNr, this.doc.units);
    var m = new MonthMatrix ();
    // override default props from MonthMatrix constructor
    for (var p in this.monthMatrix) {
        if (p in m) // checks property contained by iCalendarDefSet.monthMatrix of instance.monthMatrix exists in m; 
        m[p] = this.monthMatrix[p]; // if exists, will be overriden by monthMatrix corresponding property
        }
    
    // change number properties ob if 'mm',
    
    // change days dist value if 'mm'
    m.days.dist *=umf;
    // change margin value if 'mm'
    m.margin *=umf;
    $.writeln('-->var p in m.days.style: ');
    unitsConvertion(m.days.style, nvp, m.days.style.doNotConvert, umf);
    
    $.writeln('-->var p in m.dates.neighboursStyle: ');
    unitsConvertion(m.dates.neighboursStyle, nvp, m.dates.neighboursStyle.doNotConvert, umf);
    
    $.writeln('-->>m.dates.mainStyle: ')
    unitsConvertion (m.dates.mainStyle, nvp, m.dates.mainStyle.doNotConvert, umf);
    
    // render month on every artboard _________________________________________________
    var mpp = m.position.per; // month percent (%) position from m object (instance of MonthMatrix);
    var mrp = m.position.rel; // month relative position 
    var mRelPos;  // mRelPos = month relative postition (to artboard origin)
    mRelPos =(mrp.length==2) ? [mrp[0]*umf, mrp[1]*umf] : [(mpp[0]/100)*artSize[0]*umf, (mpp[1]/100)*artSize[1]*umf];
    var monthIndex, x, y, currentArtOrig, monthOrigPosition;    // monthOrigPosition is the position of month matrix origin (left-bottom point);
    var m_abs = this.monthMatrix.position.abs;
    for (var i=0;i<artNr;i++) {
        monthIndex = i;
        x = iDoc.artboards[i].artboardRect[0];
        y = iDoc.artboards[i].artboardRect[3];
        currentArtOrig = [x, y]; // current Artboard Origin
        // $.writeln('currentArtOrig: '+currentArtOrig);
        monthOrigPosition = [x+mRelPos[0], y+mRelPos[1]];
        // records monthMatrix absolute positions in monthMatrix.position.abs array
        m_abs.push(monthOrigPosition);
        m.renderMonthMatrix (year, monthIndex, monthOrigPosition);
        }
    // render yearBox_______________________________________________________________
    
    
    
    
    
    // should be a function like: 
//~     var box = new Box (this.box); // this.box.position; this.box.style
//~     for (var i=0;i<artNr;i++) {
//~         box.text = something[i];
//~         box.render();
//~         }


            
            
            
    $.writeln('-->yearBox');
    var yearBoxStyle = this.yearBox.style;
    unitsConvertion(yearBoxStyle, nvp, yearBoxStyle.doNotConvert, umf);
    var yearBox = new TextBox (this.yearBox.text, yearBoxStyle); 
    var ypp = this.yearBox.position.per; // yearBox percent position
    var yrp = this.yearBox.position.rel; // yearBox relative position from object (instance of ICalendar);
    var ysp =[this.yearBox.style.left, this.yearBox.style.top]; // yearBox style position (left, top);    
    // truly relative position of yearBox depending on what settings were defined in instance of ICalendar;
    var yRelPos =(ypp.length==2) ? [(ypp[0]/100)*artSize[0]*umf, (ypp[1]/100)*artSize[1]*umf] : [yrp[0]*umf, yrp[1]*umf];
    var ybh = yearBox.calculateBoxHeight (1); // yearBoxHeight   
    var y_abs = this.yearBox.position.abs;
    for (var i=0;i<artNr;i++) {
        x = iDoc.artboards[i].artboardRect[0]; // for left
        y = iDoc.artboards[i].artboardRect[3]; // for top
        currentArtOrig = [x, y]; // current Artboard Origin
         // if !per & !rel & !top & !left then yearBox position is set to artboard origin
        var yLeft = ysp[0] ? x+ysp[0] : x+yRelPos[0];
        var yTop = ysp[1] ? y+ysp[1] : y+yRelPos[1];
        yearBox.boxStyle.left = yLeft ? yLeft : x;
        yearBox.boxStyle.top = yTop ? yTop : y;
        // records yearBox absolute positions in yearBox.position.abs array
        y_abs.push([yearBox.boxStyle.left, yearBox.boxStyle.top]);
        yearBox.renderTextBox ();
        }
    // render monthNameBox ___________________________________________________________
    $.writeln('-->monthNameBox');
    var monthNameBoxStyle = this.monthNameBox.style;
    unitsConvertion(monthNameBoxStyle, nvp, monthNameBoxStyle.doNotConvert, umf);
    var monthNameBox = new TextBox (this.monthNameBox.style); 
    var mnpp = this.monthNameBox.position.per; // monthNameBox percent position
    var mnrp = this.monthNameBox.position.rel; // monthNameBox relative position from object (instance of ICalendar);
    var mnsp =[this.monthNameBox.style.left, this.monthNameBox.style.top]; // monthNameBox style position (left, top);    
    // truly relative position of monthNameBox depending on what settings were defined in instance of ICalendar;
    var mnRelPos =(mnpp.length==2) ? [(mnpp[0]/100)*artSize[0]*umf, (mnpp[1]/100)*artSize[1]*umf] : [mnrp[0]*umf, mnrp[1]*umf];
    var mnbh = monthNameBox.calculateBoxHeight (1); // monthNameBoxHeight   
    var mn_abs = this.monthNameBox.position.abs;
    for (var i=0;i<artNr;i++) {
        x = iDoc.artboards[i].artboardRect[0]; // for left
        y = iDoc.artboards[i].artboardRect[3]; // for top
        currentArtOrig = [x, y]; // current Artboard Origin
         // if !per & !rel & !top & !left then monthNameBox position is set to artboard origin
        var mnLeft = mnsp[0] ? x+mnsp[0] : x+mnRelPos[0];
        var mnTop = mnsp[1] ? y+mnsp[1] : y+mnRelPos[1];
        monthNameBox.boxStyle.left = mnLeft ? mnLeft : x;
        monthNameBox.boxStyle.top = mnTop ? mnTop : y;
        // records monthNameBox absolute positions in monthNameBox.position.abs array
        mn_abs.push([monthNameBox.boxStyle.left, monthNameBox.boxStyle.top]);
        // adding text with abbreviation
        var abbrev = this.monthNameBox.abbrev;
        var names = this.monthNameBox.names;
        monthNameBox.content.textContent = abbrev ? names[i].substring(0, abbrev) : names[i];
        monthNameBox.renderTextBox ();
        }
    
    
    return monthNameBox;
    };


// TEST
// ICalendar.prototype.renderCalendar = function () {
    // Test 1
    // render12Calendar (this.year, this.artboard.size, [100, 100]);
    // Test 2
    // renderSoloCalendar (this.year, [5000, 2000], 6, 2)
    // };


//~ var iCalendar = new ICalendar(iCalendarDefSet);
var someOb = {
    unknownProp: 'unknown',
    yearBox: {
        position: {
            per: [], // % position from x, y of artboard + print.layout.margins
            rel: [], // from x, y axis of artboard origin  ex: [100, 200]; // will be overridden
            abs: [],// absolute position in illustrator // will be overridden
            },
        text: '2018',
        style: { // left, top from style will override position.per and position.rel
            doNotConvert: ['fontSize'],
            fontSize: 5, borderWidth: 8, top: 100, left: 100
            }
        }
    };
var anotherOb = {
    doc: {
        name: 'anotherName',
        units: 'mm', // ps (postscriptpoints) if undefined or something else;
    },
    monthMatrix: {
        _alignment: [2,0], // x: [0, 1, 2]; y: [0, 1, 2]; for [2,0] monthMatrix is aligned to x: right - y: bottom of artboard+print.margins; for [1, 1] monthMatrix is center aligned;
        position: {
            per: [70, 3], // percent (%) position from x, y of artboard // if per.length == 0 will be writen from align & artboard dimensions; // if defined will override alignment
            rel: [150, 10], // from x, y axis of artboard origin  ex: [100, 200]; // if defined, will override per;
            abs: [],// array of absolute positions of every month matrix in illustrator // will be calculated and writen by script
            },
        _size: [], // overridden by app // the size of whole group of datesBoxes and daysBoxes
        firstDayOfWeek: 1, // 0 for Sunday;
        _weeksAlign: 'vertical', // 'vertical' | 'horizontal';
        margin: 2, // margin between datesBoxes and margin between daysBoxes // 0 if undefined or null
        days: {
            names: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
            abbrev: 2, // 0 for no shorthand for daysNames, 1 => only first letter, 2 => the first two letters, 3 , 4, and so on...
            dist: 10, // distance between daysBoxes and datesBoxes // margin between daysBoxes = margin between datesBoxes
            style: {
                // doNotConvert: ['fontSize'],
                fontSize: 6, borderStyle: 'solid', borderColor: [10, 20, 30, 40], borderWidth: 0.5,
                },
            },
        dates: {
            _specialDates: [[1,1,2019], [6,0,2019]], // user defined [day, month, year];
            neighboursStyle: {
                // doNotConvert: ['fontSize'],
                fontSize: 6, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'dotted', borderWidth: 1
                },
            mainStyle: {
                // doNotConvert: ['fontSize'],
                fontSize: 6, textFont: 'TimesNewRomanPSMT', backgroundColor: 'transparent', borderStyle: 'solid', borderColor: [10, 10, 10, 10], borderWidth: 1
                },
            _sundaysStyle : {
                fontSize: 6, 
                },
            _saturdayStyle: {
                fontfillColor : [0, 100, 0, 100]
                },
            _specialStyle: {
                fontfillColor : [0, 100, 40, 100]
                }
            },
    },
    yearBox: {
        position: {
            per: [], // % position from x, y of artboard + print.layout.margins
            rel: [], // from x, y axis of artboard origin  ex: [100, 200]; // will be overridden
            abs: [],// absolute position in illustrator // will be overridden
            },
        text: '2018',
        style: { // left, top from style will override position.per and position.rel
            doNotConvert: [],
            fontSize: 12, borderWidth: 8, backgroundColor: 'transparent',
            }
        },
    monthNameBox: {
        names: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
        abbrev: 3, // 0 for no shorthand for monthsNames, 1 => only first letter, 2 => the first two letters, 3 , 4, and so on...
        position: {
            per: [], // percent (%) position from x, y of artboard+print.margins // will be overridden by style.top and style.left (if defined in style)
            rel: [50,50], // from x, y axis of artboard origin  ex: [100, 200]; // if defined, will override per; // will be overridden by style.top and style.left (if defined in style)
            abs: [],// absolute position in illustrator // will be calculated by script
            },
        style: {
            width: null, height : 30, fontSize : 20, textAlign : 'center', borderWidth: 2, top: 100, borderStyle: 'dashed'
            },  
        },
};

//~ var iCalendar = new ICalendar(someOb);
var iCalendar = new ICalendar(anotherOb);
iCalendar.yearBox.text= '2020';

$.sleep(100);
//~ var aCalRendered = iCalendar.renderCalendar();
// iCalendar.runUi();
// iCalendar.render();
// iCalendar.savePresetJson();

makeDoc ('pos', 1000, 1000, 1)
var t = new TextBox();

var rt = t.renderTextBox();

