'use strict';

(function () {
  var textHashtags = document.querySelector('.text__hashtags');

  var getHashtags = function () {
    var hashtags = textHashtags.value;
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
          textHashtags.setCustomValidity('Хэштеги не должны повторяться!');
        }
      }
      if (flagSum === arrayHashtags.length) {
        textHashtags.setCustomValidity('Все ок!');
      } else {
        textHashtags.setCustomValidity('Ошибка!');
      }
    } else {
      textHashtags.setCustomValidity('Не больше 5 хэштегов!');
    }
  };
  window.textHashtags = textHashtags;
  window.getHashtags = getHashtags;
})();
