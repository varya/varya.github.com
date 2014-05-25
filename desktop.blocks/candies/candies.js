/** @requires BEM */
/** @requires BEM.DOM */

modules.define(
    'candies',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

provide(BEMDOM.decl({block: this.name}, {

    onSetMod : {

        'js' : {

            'inited' : function() {

                var width = this.domElem.width(),
                    p = this.params,
                    candies = [],
                    i = 0,
                    colorIndex = this.__self.stopPoint,
                    initSize = 6,
                    rt = 6,
                    newSize = function(max, min) {
                        return Math.round(Math.random()*(max - min) + min);
                    }

                while(width > 2*rt) {

                    if (initSize < p.size.min) {
                        size = newSize(initSize, initSize);
                        initSize = initSize + 2;
                    } else {
                        size = newSize(p.size.max, p.size.min);
                    }
                    if (size > width - 2*rt) size = width - 2*rt;
                    bt = Math.round(Math.sin(i/2.5 + 1.5)*p.size.max*0.9/2);
                    //bt = Math.round(Math.sin(i/2.5)*p.size.max*0.9/Math.sqrt(i));

                    lastSize = size;
                    width = width - size - rt;
                    candies.push('<b alt="' + i + '" class="candies_i" style="width:' + size + 'px; height:' + size + 'px; background:#' + this.__self.colors[colorIndex] +';margin: auto ' + rt + 'px ' + bt + 'px 0"></b>');
                    i++;
                    colorIndex++;
                    if (!this.__self.colors[colorIndex]) {
                        colorIndex = 0;
                    }
                }
                this.__self.stopPoint = colorIndex;
                if (p.reverse) { candies.reverse(); }
                this.domElem.append('<b>' + candies.join('') + '</b>');
            }
        }

    }

}, {
    colors: [
        'fa9300',
        '66c9ee',
        'c9c9c9',
        '82b964',
        'd24d33',
        'fffbdb',
        '2e77bb',
        '6bd5b1',
        'f87aa0',
        'c9c9c9',
        '72664e',
        'ccd600',
        'fffbdb',
        'df620e',
        '993838',
        'ff9600',
        'd24d33',
        '8960a7',
        '82b964',
        'f87aa0',
        'd43f3f',
        '668000',
        'ff9600',
        '8960a7',
        'c9c9c9',
        '993838',
        'CCD600',
        '668000',
        'f4cc13',
        '72664e',
        'fa9300',
        '66c9ee',
        'c9c9c9',
        '82b964',
        'CCD600',
        'fffbdb',
        '2e77bb',
        '6bd5b1',
        'f87aa0',
        'c9c9c9',
        'fa9300',
        '66c9ee',
        'c9c9c9',
        '82b964',
        'CCD600',
        'fffbdb',
        '2e77bb',
        '6bd5b1',
        'f87aa0',
        'c9c9c9'
    ],
    stopPoint: 0

}));

});
