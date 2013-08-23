module.exports = function(bh) {

    bh.match('footer', function(ctx, json) {
        return {
            block: 'footer',
            elem: 'outer',
            content: json
        }
    });

    bh.match('footer', function(ctx){

        ctx.tag('footer');

    });

    bh.match('footer__left', function(ctx){

        ctx.content({
            block: 'menu-vert',
            content: [
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        url: '#',
                        content: 'Blog'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        url: '#',
                        content: 'Articles and talks'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        url: '#',
                        content: 'About me'
                    }
                }
            ]
        });

    });

}
