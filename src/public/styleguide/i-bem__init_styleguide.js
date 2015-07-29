/**
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
