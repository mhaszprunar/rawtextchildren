$.extend($.expr[':'],{
    hasRawText: function(element) {
		var found = false;
		jQuery.each( element.childNodes, function(index,child){
			if ( child.nodeType === 3 && child.nodeType !== 1 && $.trim(child.nodeValue).length > 0 )
			{
				found = true;
				return false; // exit each-loop
			}
		});
		return found;
    }
});