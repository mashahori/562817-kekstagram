'use strict';
(function () {
  var applyCurrentEffect = function () {};

  var applyChrome = function (filterPosition) {
    window.fullPhotoContainer.style.filter = 'grayscale(' + filterPosition / 100 + ')';
  };
  window.applyCurrentEffect = applyCurrentEffect;
  window.applyChrome = applyChrome;
})();
