'use strict';

(function () {
  var applyMarvin = function (filterPosition) {
    window.fullPhotoContainer.style.filter = 'invert(' + filterPosition + '%)';
  };
  window.applyMarvin = applyMarvin;
})();
