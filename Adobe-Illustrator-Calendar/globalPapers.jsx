// this script make a global object named papers
//~ alert('globalPapers sent !');


papers = {
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
         };
