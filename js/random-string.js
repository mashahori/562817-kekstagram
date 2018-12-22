'use strict';

(function () {
  var randomString = function (stringsArray, count) {
    var resultString = '';
    for (var i = 0; i < count; i++) {
      if (i !== 0) {
        resultString += ' ';
      }
      resultString += stringsArray[window.randomInteger(0, stringsArray.length - 1)];
    }
  return resultString;
  };
  window.randomString = randomString;
})();
