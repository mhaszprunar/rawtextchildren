jQuery.fn.rawTextChildren = function()
{
    var r = [];

    jQuery.each(this, function(){
        jQuery.each( this.childNodes, function(){
            if ( this.nodeType === 3 && this.nodeType !== 1 && $.trim(this.nodeValue).length > 0 )
            {
                r.push( $(this) );
            }
        });
    });
    return $(r);
};