'use strict';

(function () {
  var uploadForm = document.querySelector('.img-upload__overlay');

  var closePopup = function () {
    uploadForm.classList.add('hidden');
    window.resetForm();
    document.removeEventListener('keydown', window.onPopupEscPress);
  };
  window.closePopup = closePopup;
})();
