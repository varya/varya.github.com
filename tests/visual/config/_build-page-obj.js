'use strict';

module.exports = function (example) {
  return {
    'name': example,
    url: '/section/' + example + '/fullscreen'
  };
};