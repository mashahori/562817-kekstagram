'use strict';

(function () {
  var checkHashtag = function (elementHashtag) {
    var textHashtags = document.querySelector('.text__hashtags');
    var someResult;
    if (elementHashtag.length === 0) {
      someResult = 0;
      textHashtags.setCustomValidity('');
    } else if (elementHashtag.charAt(0) !== '#') {
      someResult = 0;
      textHashtags.setCustomValidity('# - первый символ в хэштеге');
    } else if (elementHashtag.length <= 1) {
      someResult = 0;
      textHashtags.setCustomValidity('Слишком короткий хэштег');
    } else if (elementHashtag.length >= 20) {
      someResult = 0;
      textHashtags.setCustomValidity('Слишком длинный хэштег');
    } else {
      someResult = 1;
      textHashtags.setCustomValidity('');
    }
    return someResult;
  };
  window.checkHashtag = checkHashtag;
})();
