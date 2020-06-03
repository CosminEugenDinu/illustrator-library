

// Make selection with all items you need to group. In my case I had to group all existing items on document, so I've selected all of them. You could use selections for certain layers as well. Actually you only need to find a way to select those items you need to group.
        for ( i = 0; i < docRef.pageItems.length; i++ ) {
            docRef.pageItems[i].selected = true;
        }
var docSelection = new Array;
docSelection = app.activeDocument.selection;
// Create a new group.
 var newGroup = app.activeDocument.groupItems.add();
// Item by item move selection to that new group.
   if (docSelection.length > 0) {
               for (i = 0; i < docSelection.length; i++) {
                    docSelection[i].moveToBeginning(newGroup); // or .moveToEnd() 
               }
          }
      
  
// add objects directly to a certain group
var ob1 = app.documents[0].pathItems.rectangle(100, 100, 100, 100),
ob2 = app.documents[0].pathItems.rectangle(150, 150, 200, 200),
ob3 = app.documents[0].pathItems.rectangle(50, 50, 50, 50)

var group = app.documents[0].groupItems.add();
group.name = 'test group';
ob1.moveToBeginning(group);
ob2.moveToBeginning(group);
ob3.moveToEnd(group);