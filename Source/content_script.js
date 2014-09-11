walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bDawgs\b/g, "dwags");
	v = v.replace(/\bdawgs\b/g, "dwags");
	v = v.replace(/\bbulldogs\b/g, "bulldwags");
	v = v.replace(/\bBulldogs\b/g, "BullDwags");
	v = v.replace(/\bThe University of Georgia\b/g, "U[sic]GA");
	v = v.replace(/\bUniversity of Georgia\b/g, "U[sic]GA");
	v = v.replace(/\bUGA\b/g, "U[sic]GA");
	
	
	textNode.nodeValue = v;
}


