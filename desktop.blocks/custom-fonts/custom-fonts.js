(function(d){

function addFont(url, h, l) {
h = d.getElementsByTagName('head')[0];
l = d.createElement('link');
l.href = url;
l.type = 'text/css';
l.rel = 'stylesheet';
h.appendChild(l);
}

addFont('http://fonts.googleapis.com/css?family=Noto+Serif&subset=latin,cyrillic-ext,cyrillic');

})(document);
