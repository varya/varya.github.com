(function(d){

function addFont(content, h, l, s) {
h = d.getElementsByTagName('head')[0];
l = d.createElement('style');
s = d.createTextNode(content);
l.appendChild(s);
h.appendChild(l);
}

if (typeof(Storage) !== 'undefined' && localStorage.getItem('varya.me.fonts')) {
    addFont(localStorage.getItem('varya.me.fonts') );
}

})(document);
