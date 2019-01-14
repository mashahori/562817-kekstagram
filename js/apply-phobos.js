'use strict';

(function () {
  var fullPhotoContainer = document.querySelector('.img-upload__preview').querySelector('IMG');

  var applyPhobos = function (filterPosition) {
    fullPhotoContainer.style.filter = 'blur(' + (filterPosition / 100 * 3) + 'px)';
  };
  window.applyPhobos = applyPhobos;
})();
