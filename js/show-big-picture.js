'use strict';

(function () {
  var showBigPicture = function(evt) {
    var target = evt.target;
    if (!target.classList.contains('picture__img')) {
      return;
    }
    bigPicture.classList.remove('hidden');
    var targetNumber = target.id.charAt(1);
    window.createBigPicture(targetNumber);
  };
  window.showBigPicture = showBigPicture;
})();
