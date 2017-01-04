<!doctype html>
<html class='no-js' lang=''>
    <head>
        <title>Isomorphic Example</title>
    </head>
    <body>
        <div id='contents'><div><h1></h1><div>/**
 * Init with a delay
 */

modules.require(
    ['i-bem__dom', 'jquery', 'next-tick'],
    function(BEMDOM, $, nextTick) {

$(function() {
    $(window).bind("styleguide:onRendered", function(e) {
        nextTick(function() {
            BEMDOM.init(e.originalEvent.detail.elements);
        });
    });
});

});
</div></div></div>

        <script src='bundle.js'></script>
    </body>
</html>

