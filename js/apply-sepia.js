'use strict';

(function () {
  var fullPhotoContainer = document.querySelector('.img-upload__preview').querySelector('IMG');
  var applySepia = function (filterPosition) {
    fullPhotoContainer.style.filter = 'sepia(' + filterPosition / 100 + ')';
  };
  window.applySepia = applySepia;
})();
