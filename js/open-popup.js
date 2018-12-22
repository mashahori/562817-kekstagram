'use strict';

(function () {
  var openPopup = function (uploadForm, scaleValue) {
    uploadForm.classList.remove('hidden');
    scaleValue.value = '100%';
  };
  window.openPopup = openPopup;
})();
