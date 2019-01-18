'use strict';

(function () {
  var textHashtags = document.querySelector('.text__hashtags');
  var textareaDescription = document.querySelector('.text__description');


  var isElementExist = function (hashtags) {
    var newArrayHashtag = [];                               // проверяем повторяются хэштеги или нет
    for (var index = 0; index < hashtags.length; index++) {
      if (hashtags[index] != undefined) {
        if (!newArrayHashtag.includes(hashtags[index])) {
          newArrayHashtag.push(hashtags[index]);
        }
    }
  }
    if (hashtags.length === newArrayHashtag.length) {
      for (var i = 0; i < hashtags.length; i++) {
        if (hashtags[i] === (newArrayHashtag[i])) {
            return true;
           }
      }

   } else {
      textHashtags.setCustomValidity('Хэштеги не должны повторяться!');
      return false;
    }
  };

  var checkHashtag = function (hashtagsArray) {
    var validHashtagsSum = 0;
    for (var index = 0; index < hashtagsArray.length; index++) {
      if (hashtagsArray[index].charAt(0) !== '#') {
        textHashtags.setCustomValidity('# - первый символ в хэштеге');
        textHashtags.style.border = '3px solid red';
      } else if (hashtagsArray[index].length < 2) {
        textHashtags.setCustomValidity('Слишком короткий хэштег');
        textHashtags.style.border = '3px solid red';
      } else if (hashtagsArray[index].indexOf('#', 1) > 0) {
        textHashtags.setCustomValidity('# не может стоять внутри хэштега');
        textHashtags.style.border = '3px solid red';
      } else if (hashtagsArray[index].length > 20) {
        textHashtags.setCustomValidity('Слишком длинный хэштег');
        textHashtags.style.border = '3px solid red';
      } else if (hashtagsArray.length > 5) {
        textHashtags.setCustomValidity('Не больше 5 хэштегов');
        textHashtags.style.border = '3px solid red';
      } else if (isElementExist(hashtagsArray)) {
        validHashtagsSum += 1;
      }
    }
    if (validHashtagsSum === hashtagsArray.length) {
      textHashtags.setCustomValidity('');
      textHashtags.style.border = 'none';
    }
  };

  var getHashtags = function () {
    var hashtags = textHashtags.value;
    hashtags.toLowerCase();
    var arrayHashtags = hashtags.split(' ');

    for (var symbol = arrayHashtags.length; symbol > 0; symbol--) {
      if (arrayHashtags[symbol] === '') {
        arrayHashtags.splice(symbol, 1);
      }
    }
    while (arrayHashtags[0] === '') {
      arrayHashtags.splice(0, 1);
    }

    if (checkHashtag(arrayHashtags)) {
      isElementExist(arrayHashtags);
    };

  };

  var getTextarea = function () {
    var textareaComment = textareaDescription.value;
    if (textareaComment.length > 140) {
      textareaDescription.setCustomValidity('Слишком длинный комментарий');
      textareaDescription.style.border = '3px solid red';
    } else {
      textareaDescription.setCustomValidity('');
      textareaDescription.style.border = 'none';
    }
  };

  window.getHashtags = getHashtags;
  window.getTextarea = getTextarea;
})();
