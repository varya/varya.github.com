module.exports = function(bh) {

    bh.match('social-ico', function(ctx) {
        return {
            block: 'menu-vert',
            mix: [{ block: 'social-ico' }],
            content: [
                {
                    elem: 'item',
                    content: [
                        {
                            block: 'menu-vert',
                            mix: [{ block: 'social-ico', elem: 'text' }],
                            content: [
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'link',
                                        mix: [{ block: 'social-ico', elem: 'rss-text' }],
                                        url: '/en/feed.xml',
                                        title: 'New on Varya.me in English',
                                        content: 'en'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'link',
                                        mix: [{ block: 'social-ico', elem: 'rss-text' }],
                                        url: '/ru/feed.xml',
                                        title: 'Новые записи на Varya.me',
                                        content: 'ru'
                                    }
                                }
                            ]
                        },
                        {
                            block: 'social-ico',
                            elem: 'ico',
                            mods: { type: 'rss' },
                            url: '/feed.xml',
                            title: 'New on Varya.me in both English and Russian'
                        }
                    ]
                },
                {
                    elem: 'item',
                    content: {
                        block: 'social-ico',
                        elem: 'ico',
                        mods: { type: 'twitter' },
                        url: 'https://twitter.com/toivonens'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'social-ico',
                        elem: 'ico',
                        mods: { type: 'github' },
                        url: 'https://github.com/toivonen'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'social-ico',
                        elem: 'ico',
                        mods: { type: 'facebook' },
                        url: 'https://www.facebook.com/varvara.stepanova.9'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'social-ico',
                        elem: 'ico',
                        mods: { type: 'linkedin' },
                        url: 'http://www.linkedin.com/pub/varvara-stepanova/30/72a/96b'
                    }
                }
            ]
        };
    });

    bh.match('social-ico__ico', function(ctx) {
        return {
            block: 'link',
            mix: [{ block: ctx.ctx.block, elem: ctx.ctx.elem, mods: ctx.ctx.mods}],
            url: ctx.param('url'),
            title: ctx.param('title'),
            target: '_blank'
        }
    });

}
