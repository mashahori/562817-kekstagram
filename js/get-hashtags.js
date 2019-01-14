'use strict';

(function () {
  var textHashtags = document.querySelector('.text__hashtags');

  var getHashtags = function () {
    var hashtags = textHashtags.value;
    hashtags.toLowerCase();
    var arrayHashtags = hashtags.split(' ');
    if (arrayHashtags.length < 6) {
      var newArrayHashtag = [];
      var flagSum = 0;
      for (var index = 0; index < arrayHashtags.length; index++) {
        if (!newArrayHashtag.includes(arrayHashtags[index])) {
          flagSum += window.checkHashtag(arrayHashtags[index]);
          newArrayHashtag.push(arrayHashtags[index]);
        } else {
          textHashtags.setCustomValidity('Хэштеги не должны повторяться!');
          break;
        }
      }
      if (flagSum === arrayHashtags.length) {
        textHashtags.setCustomValidity(''); // Все ок, поэтому сбрасываем сообщение и отправляем форму
      }
    } else {
      textHashtags.setCustomValidity('Не больше 5 хэштегов!');
    }
  };
  window.getHashtags = getHashtags;
})();
