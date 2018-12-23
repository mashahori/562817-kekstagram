'use strict';

(function () {
  var openPopup = function (uploadForm, scaleValue) {
    uploadForm.classList.remove('hidden');
    window.scaleValue.value = '100%';
  };
  window.openPopup = openPopup;
})();
