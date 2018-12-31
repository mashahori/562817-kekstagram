'use strict';

(function () {
  var showBigPicture = function (evt) {
    var target = evt.target;
    if (!target.classList.contains('picture__img')) {
      return;
    }
    window.bigPicture.classList.remove('hidden');
    var targetObject = target.pictureData;
    window.createBigPicture(targetObject);
    window.putComments(targetObject);
  };
  window.showBigPicture = showBigPicture;
})();
