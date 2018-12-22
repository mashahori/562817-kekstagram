'use strict';

(function () {
  var MIN_SCALE = 25;
  var SCALE_STEP = 25;

  var makePictureSmaller = function () {
    var currentScale = window.scaleValue.value;
    currentScale = parseInt(currentScale, 10);
    if (currentScale > MIN_SCALE) {
      currentScale = currentScale - SCALE_STEP;
      window.scaleValue.value = currentScale + '%';
      window.fullPhotoContainer.style.transform = 'scale(' + currentScale / 100 + ')';
    } else {
      window.scaleValue.value = '25%';
    }
  }
  window.makePictureSmaller = makePictureSmaller;
})();
