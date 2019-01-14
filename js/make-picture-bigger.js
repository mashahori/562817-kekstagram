'use strict';

(function () {
  var MAX_SCALE = 100;
  var SCALE_STEP = 25;
  var scaleValue = document.querySelector('.scale__control--value');
  var fullPhotoContainer = document.querySelector('.img-upload__preview').querySelector('IMG');

  var makePictureBigger = function () {
    var currentScale = scaleValue.value;
    currentScale = parseInt(currentScale, 10);
    if (currentScale < MAX_SCALE) {
      currentScale = currentScale + SCALE_STEP;
      scaleValue.value = currentScale + '%';
      fullPhotoContainer.style.transform = 'scale(' + currentScale / 100 + ')';
    } else {
      scaleValue.value = '100%';
    }
  };
  window.makePictureBigger = makePictureBigger;
})();
