var gemini = require('gemini');

var examples = [
  '1.1',
  '1.2-1',
  '2.1'
];

examples.forEach(function(example) {

  gemini.suite(example, function(suite) {
      suite.setUrl('/styleguide/#/section/' + example + '/fullscreen')
          .setCaptureElements('body')
          .capture('plain', function(actions, find){
              /*actions.executeJS(function(window) {

                  window.addEventListener('load', function() {
                      window.doTake = true;
                  });

              })
              actions.waitForJSCondition(function(window) {
                  return window.doTake;
              }, 3000);*/
              actions.wait(3000)
          });
  });

});
