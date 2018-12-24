'use strict';

(function () {
  var applySepia = function (filterPosition) {
    window.fullPhotoContainer.style.filter = 'sepia(' + filterPosition / 100 + ')';
  };
  window.applySepia = applySepia;
})();
