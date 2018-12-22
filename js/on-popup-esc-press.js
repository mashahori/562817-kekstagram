'use strict';

(function () {
  var ESC_BUTTON = 27;
  var uploadForm = document.querySelector('.img-upload__overlay');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_BUTTON) {
      window.closePopup(uploadForm);
    }
  };
  window.onPopupEscPress = onPopupEscPress;
})();
