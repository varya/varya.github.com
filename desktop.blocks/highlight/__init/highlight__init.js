/** @requires BEM */
/** @requires BEM.DOM */

console.log(333);
modules.define('highlight__init', ['highlight'], function(provide, hljs) {

hljs.initHighlightingOnLoad();

provide(hljs);

});
