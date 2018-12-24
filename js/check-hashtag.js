'use strict';

(function () {
  var checkHashtag = function (elementHashtag) {
    if (elementHashtag.charAt(0) !== '#' || elementHashtag.length >= 20 || elementHashtag.length === 1) {
      return 0;
    } else {
      return 1;
    }
  };
  window.checkHashtag = checkHashtag;
})();
