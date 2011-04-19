RawTextChildren Plugins for jQuery
==================================

A filter to find all HTML elements that contain raw text children. "raw" in this sense means text without any elements wrapped around them

Example:
<div class="liquid highlight html+javascript"></div>
	<h1> <span>foo</span> bar </h1>
	<h1> <span>baz</span></h1>
	
	<script>
		$('h1:hasRawText'); // returns first header (bar is raw text node)
		
		$('h1').rawTextChildren().wrap('<span class="raw"></span>); // will wrap the text "bar" in a span with CSS class "raw" assigned.
	</script>
<div class="liquid endhighlight"></div>


Additionally, there is a plugin that returns the raw text children and let's you play with them, e.g. wrap them (see example). 

### Warning:
Be aware that most jQuery function will not work with raw text nodes, e.g. assigning CSS classes. If you want to do things like that, you need to wrap the text nodes in HTML elements first, e.g. <span>'s or <div>'s