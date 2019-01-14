'use strict';

(function () {
  var uploadForm = document.querySelector('.img-upload__overlay');

  var openPopup = function () {
    uploadForm.classList.remove('hidden');
    document.addEventListener('keydown', window.onPopupEscPress);
  };
  window.openPopup = openPopup;
})();
