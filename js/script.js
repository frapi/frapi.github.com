// Thanks janl and nslater
// hosted scripts
scripts = [
    "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js",
    "http://www.google-analytics.com/ga.js",
]

// load hosted scripts
for(i = 0; i < scripts.length; i++) {
    document.write("<script src='" + scripts[i] + "'></script>");
}

// run after hosted scripts have loaded
document.onready = function() {
    // catch all errors
    try {
        // wrap all elements with an id with an anchor
        $("*/[id!='']").wrap(function() {
            return "<a class='anchor' href='#" + $(this).attr("id") + "' />";
        });
        // activate analytics tracking
        _gat._getTracker("UA-XXXXX-Y")._trackPageview();
    } catch (error) {
        // uh oh, better have a debug console handy
    }
}

