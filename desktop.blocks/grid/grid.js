
(function() {

    (/grid=?/).test(window.location.search) ?
        $('body').append('<div class="grid"></div>') :
        false;

})();
