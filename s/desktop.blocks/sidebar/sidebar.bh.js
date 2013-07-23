module.exports = function(bh) {

    bh.match('sidebar', function(ctx) {
        ctx.tag('nav')
    });

}
