'use strict';

(function () {
  var fullPhotoContainer = document.querySelector('.img-upload__preview').querySelector('IMG');

  var applyHeat = function (filterPosition) {
    fullPhotoContainer.style.filter = 'brightness(' + (filterPosition / 100 * 2 + 1) + ')';
  };
  window.applyHeat = applyHeat;
})();
