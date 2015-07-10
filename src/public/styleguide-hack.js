/**
 * Init with a delay
 */

modules.require(
    ['i-bem__dom_init', 'jquery', 'next-tick'],
    function(init, $, nextTick) {

$(function() {
    window.setTimeout(function() { nextTick(init) }, 5000);
});

});
