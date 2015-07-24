var gemini = require('gemini');

var examples = [
  '1.2-1',
  '1.1',
  '2.1'
];

var pages = [];
pages.push({
  'name': 'index',
  url: '/styleguide/#'
});
examples.forEach(function(example) {
  pages.push({
    'name': example,
    url: '/styleguide/#/section/' + example + '/fullscreen'
  });
});

pages.forEach(function(page) {

  gemini.suite(page.name, function(suite) {
      if (page.name === 'index') {
        suite.skip();
      }
      suite.setUrl(page.url)
          .setCaptureElements('body')
          .capture('plain', function(actions, find){

              actions.waitForElementToShow('shadow-dom', 7000);
              actions.wait(500);


          });
  });

});
