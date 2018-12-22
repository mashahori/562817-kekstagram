'use strict';
(function () {
  var applyChrome = function (filterPosition) {
    window.fullPhotoContainer.style.filter = 'grayscale(' + filterPosition / 100 + ')';
  };
  window.applyChrome = applyChrome;
})();
