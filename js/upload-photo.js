'use strict';

(function () {
  var uploadPhoto = function (evt) {
    window.upload(new FormData(uploadFormSend), function (response) {
      uploadForm.classList.add('hidden');

      uploadFormSend.reset();
      window.fullPhotoContainer.style.transform = 'scale(1)';
      window.fullPhotoContainer.style.filter = '';
      window.effectLevel.classList.add('hidden');

      var successTemplate = document.querySelector('#success').content.querySelector('.success');
      document.querySelector('main').appendChild(successTemplate);

      document.querySelector('.success__button').addEventListener('click', function () {
        document.querySelector('main').removeChild(successTemplate);
      });

      document.querySelector('.success').addEventListener('click', function () {
        document.querySelector('main').removeChild(successTemplate);
      });
  }
        window.uploadPhoto = uploadPhoto;
})();
