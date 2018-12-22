'use strict';

(function () {
   var getHashtags = function () {
    var hashtags = window.textHashtags.value;
    hashtags.toLowerCase();
    var arrayHashtags = hashtags.split(' ');
    if (arrayHashtags.length < 5) {
      var newArrayHashtag = [];
      var flagSum = 0;
      for (var index = 0; index < arrayHashtags.length; index++) {
        if (!newArrayHashtag.includes(index)) {
          flagSum += window.checkHashtag(index);
          newArrayHashtag.push(index);
        } else {
          window.textHashtags.setCustomValidity('Хэштеги не должны повторяться!');
        }
      }
      if (flagSum === arrayHashtags.length) {
        window.textHashtags.setCustomValidity('Все ок!');
      } else {
        window.textHashtags.setCustomValidity('Ошибка!');
      }
    } else {
      window.textHashtags.setCustomValidity('Не больше 5 хэштегов!');
    }
  };
  window.getHashtags = getHashtags;
})();
