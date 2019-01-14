'use strict';

(function () {
  var uploadForm = document.querySelector('.img-upload__overlay');

  var openPopup = function () {
    uploadForm.classList.remove('hidden');
  };
  window.openPopup = openPopup;
})();
