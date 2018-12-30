'use strict';

(function () {
  var uploadForm = document.querySelector('.img-upload__overlay');
  var uploadFormSend = document.querySelector('.img-upload__form');

  var submitFormSendReset = function () {
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
  };
  window.submitFormSendReset = submitFormSendReset;
})();
