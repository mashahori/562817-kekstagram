'use strict';
(function () {
  var fullPhotoContainer = document.querySelector('.img-upload__preview').querySelector('IMG');
  var applyCurrentEffect = function () {};

  var applyChrome = function (filterPosition) {
    fullPhotoContainer.style.filter = 'grayscale(' + filterPosition / 100 + ')';
  };
  window.applyCurrentEffect = applyCurrentEffect;
  window.applyChrome = applyChrome;
})();
