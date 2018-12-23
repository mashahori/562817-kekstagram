'use strict';

(function () {
  var MAX_SCALE = 100;
    var SCALE_STEP = 25;
  // var scaleValue = document.querySelector('.scale__control--value');

  var makePictureBigger = function () {
    var currentScale = window.scaleValue.value;
    currentScale = parseInt(currentScale, 10);
    if (currentScale < MAX_SCALE) {
      currentScale = currentScale + SCALE_STEP;
      window.scaleValue.value = currentScale + '%';
      window.fullPhotoContainer.style.transform = 'scale(' + currentScale / 100 + ')';
    } else {
      window.scaleValue.value = '100%';
    }
  };
  window.makePictureBigger = makePictureBigger;
})();
