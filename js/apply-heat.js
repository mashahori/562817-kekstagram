'use strict';

(function () {
  var applyHeat = function (filterPosition) {
    window.fullPhotoContainer.style.filter = 'brightness(' + (filterPosition / 100 * 2 + 1) + ')';
  };
  window.applyHeat = applyHeat;
})();
