'use strict';

(function () {
  var MAX_SCALE = 100;
  var scaleValue = document.querySelector('.scale__control--value');

  var makePictureBigger = function () {
    var currentScale = scaleValue.value;
    currentScale = parseInt(currentScale, 10);
    if (currentScale < MAX_SCALE) {
      currentScale = currentScale + window.SCALE_STEP;
      scaleValue.value = currentScale + '%';
      window.fullPhotoContainer.style.transform = 'scale(' + currentScale / 100 + ')';
    } else {
      scaleValue.value = '100%';
    }
  };
  window.makePictureBigger = makePictureBigger;
})();
