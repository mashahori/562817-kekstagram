'use strict';

(function () {
  var MIN_SCALE = 25;
  var SCALE_STEP = 25;
  var scaleValue = document.querySelector('.scale__control--value');
  var fullPhotoContainer = document.querySelector('.img-upload__preview').querySelector('IMG');

  var makePictureSmaller = function () {
    var currentScale = scaleValue.value;
    currentScale = parseInt(currentScale, 10);
    if (currentScale > MIN_SCALE) {
      currentScale = currentScale - SCALE_STEP;
      scaleValue.value = currentScale + '%';
      fullPhotoContainer.style.transform = 'scale(' + currentScale / 100 + ')';
    } else {
      scaleValue.value = '25%';
    }
  };

  window.makePictureSmaller = makePictureSmaller;
})();
