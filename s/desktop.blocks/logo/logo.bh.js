module.exports = function(bh) {

    bh.match('logo', function(ctx) {
        ctx
            .tag('logo')
            .content('···<b class="var">var</b>·<b class="ya">ya</b>;<b class="cursor"></b>');
    });

}
