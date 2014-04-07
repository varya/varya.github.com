/** @requires BEM */

modules.define('colors', function(provide) {

var lastIndex;

var colors = {

    getRandomColor: function() {
        var clrs = this.colorBase;
        return clrs[Math.floor(Math.random()*clrs.length)];
    },

    getNextColor: function() {
        return this.colorBase[this.getLastIndex()];
    },

    getLastIndex: function() {
        var clrs = this.colorBase;
        lastIndex = lastIndex + 1 || Math.floor(Math.random()*clrs.length);
        if (lastIndex == clrs.length) {
            lastIndex = 0;
        }
        return lastIndex;
    },

    colorBase: [
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
        ]

};

provide(colors);

});
