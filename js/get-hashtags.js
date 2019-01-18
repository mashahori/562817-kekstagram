'use strict';

(function () {
  var MIN_HASHTAG_LENGTH = 1;
  var MAX_HASHTAG_LENGTH = 20;
  var MAX_DESCRIPTION_LENGTH = 140;
  var MAX_COUNT_HASHTAGS = 5;
  var textHashtags = document.querySelector('.text__hashtags');
  var textareaDescription = document.querySelector('.text__description');


  var isElementExist = function (hashtags) {
    var existOrNot;
    var newArrayHashtag = [];
    for (var index = 0; index < hashtags.length; index++) {
      if (hashtags[index] !== undefined) {
        if (!newArrayHashtag.includes(hashtags[index])) {
          newArrayHashtag.push(hashtags[index]);
        }
      }
    }
    if (hashtags.length === newArrayHashtag.length) {
      for (var i = 0; i < hashtags.length; i++) {
        if (hashtags[i] === (newArrayHashtag[i])) {
          existOrNot = true;
        }
      }
    } else {
      textHashtags.setCustomValidity('Хэштеги не должны повторяться!');
      textHashtags.style.border = '2px solid red';
      existOrNot = false;
    }
    return existOrNot;
  };

  var highlightHashtag = function (invalidForm, message) {
    invalidForm.setCustomValidity(message);
    invalidForm.style.border = '2px solid red';
  };

  var checkHashtag = function (hashtagsArray) {
    var validHashtagsSum = 0;
    for (var index = 0; index < hashtagsArray.length; index++) {
      if (hashtagsArray[index].charAt(0) !== '#') {
        highlightHashtag(textHashtags, '# - первый символ в хэштеге');
      } else if (hashtagsArray[index].length <= MIN_HASHTAG_LENGTH) {
        highlightHashtag(textHashtags, 'Слишком короткий хэштег');
      } else if (hashtagsArray[index].indexOf('#', 1) > 0) {
        highlightHashtag(textHashtags, '# не может стоять внутри хэштега');
      } else if (hashtagsArray[index].length > MAX_HASHTAG_LENGTH) {
        highlightHashtag(textHashtags, 'Слишком длинный хэштег');
      } else if (hashtagsArray.length > MAX_COUNT_HASHTAGS) {
        highlightHashtag(textHashtags, 'Не больше ' + MAX_COUNT_HASHTAGS + ' хэштегов');
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
      if (arrayHashtags[0] === '') {
        arrayHashtags.splice(0, 1);
      }
    }

    if (checkHashtag(arrayHashtags)) {
      isElementExist(arrayHashtags);
    }
  };

  var getTextarea = function () {
    var textareaComment = textareaDescription.value;
    if (textareaComment.length > MAX_DESCRIPTION_LENGTH) {
      highlightHashtag(textareaDescription, 'Слишком длинный комментарий');
    } else {
      textareaDescription.setCustomValidity('');
      textareaDescription.style.border = 'none';
    }
  };

  window.getHashtags = getHashtags;
  window.getTextarea = getTextarea;
})();
