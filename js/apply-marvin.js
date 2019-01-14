'use strict';

(function () {
  var fullPhotoContainer = document.querySelector('.img-upload__preview').querySelector('IMG');

  var applyMarvin = function (filterPosition) {
    fullPhotoContainer.style.filter = 'invert(' + filterPosition + '%)';
  };
  window.applyMarvin = applyMarvin;
})();
