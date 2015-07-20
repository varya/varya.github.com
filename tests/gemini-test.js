var gemini = require('gemini');

gemini.suite('varya', function(suite) {
    suite.setUrl('/')
        .setCaptureElements('.social-ico')
        .capture('plain');
});
