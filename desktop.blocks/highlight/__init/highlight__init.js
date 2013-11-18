/** @requires BEM */
/** @requires BEM.DOM */

modules.require(['highlight', 'jquery'], function(hljs, $) {

    var langAliases = {
        js: 'javascript'
    }

    $(function(){
        $('.highlight pre code').each(function(i, block){
            var $block = $(block),
                lang = $block.attr('data-lang');
            $block.addClass(langAliases[lang] || lang);
            hljs.highlightBlock(block);
        })
    })

    //hljs.initHighlightingOnLoad();

});
