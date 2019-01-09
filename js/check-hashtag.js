'use strict';

(function () {
  var checkHashtag = function (elementHashtag) {
    var firstCharNotSharp = elementHashtag.charAt(0) !== '#';
    var tooLongHashtag = elementHashtag.length >= 20;
    var hasOneElement = elementHashtag.length === 1;
    if (firstCharNotSharp || tooLongHashtag || hasOneElement) {
      return 0;
    } else {
      return 1;
    }
  };
  window.checkHashtag = checkHashtag;
})();
