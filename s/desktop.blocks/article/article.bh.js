module.exports = function(bh) {

    bh.match('article', function(ctx) {
        ctx
            .attr('role', 'main')
            .content([
            {
                elem: 'body',
                mix: [{ block: 'box', elem: 'body' }],
                content: [
                    { elem: 'header', content: ctx.ctx.title },
                    { elem: 'details', content: 'by Varya Stepanova on 29th April' }
                ]
            },
            { elem: 'text', content: ctx.ctx.text }
        ]);
    });

    bh.match('article__header', function(ctx){

        ctx.tag('h1');

    });

    bh.match('article__details', function(ctx){

        ctx
            .tag('span')
            .cls('author vcard');

    });

    bh.match('article__text', function(ctx){
        ctx.mix([
            { block: 'box', elem: 'island' }
        ]);
    });

}
