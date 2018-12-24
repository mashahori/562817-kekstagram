'use strict';

(function () {
  var applyPhobos = function (filterPosition) {
    window.fullPhotoContainer.style.filter = 'blur(' + (filterPosition / 100 * 3) + 'px)';
  };
  window.applyPhobos = applyPhobos;
})();
