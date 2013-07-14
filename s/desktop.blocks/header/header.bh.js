module.exports = function(bh) {

    bh.match('header', function(ctx) {
        ctx
            .tag('header')
            .content([
                {
                    elem: 'left',
                    mix: {
                        block: 'candies',
                        js: {
                            size: {
                                max: 28,
                                min: 12
                            },
                            reverse: true
                        }
                    }
                },
                {
                    block: 'logo',
                    mix: { block: 'header', elem: 'center' }
                },
                {
                    elem: 'right',
                    mix: {
                        block: 'candies',
                        js: {
                            size: {
                                max: 28,
                                min: 12
                            }
                        }
                    }
                }
            ]);
    });

}
