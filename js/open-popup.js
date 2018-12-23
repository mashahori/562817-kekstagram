'use strict';

(function () {
  var uploadForm = document.querySelector('.img-upload__overlay');

  var openPopup = function () {
    uploadForm.classList.remove('hidden');
    window.scaleValue.value = '100%';
  };
  window.openPopup = openPopup;
})();
