'use strict';

(function () {
  var ESC_BUTTON = 27;
  var uploadForm = document.querySelector('.img-upload__overlay');
  var uploadFormSend = document.querySelector('.img-upload__form');
  var fullPhotoContainer = document.querySelector('.img-upload__preview').querySelector('IMG');
  var effectLevel = document.querySelector('.effect-level');

  var resetForm = function () {
    uploadForm.classList.add('hidden');
    document.querySelector('.img-upload__preview').querySelector('img').src = '';
    uploadFormSend.reset();
    fullPhotoContainer.style.transform = 'scale(1)';
    fullPhotoContainer.style.filter = '';
    effectLevel.classList.add('hidden');
  };

  var submitFormSendReset = function () {
    resetForm();

    var successTemplate = document.querySelector('#success').content.querySelector('.success');
    var successElement = successTemplate.cloneNode(true);

    document.querySelector('main').appendChild(successElement);

    document.querySelector('.success__button').addEventListener('click', function () {
      if (document.querySelector('main').contains(successElement)) {
        document.querySelector('main').removeChild(successElement);
      }
    });

    document.querySelector('.success').addEventListener('click', function () {
      if (document.querySelector('main').contains(successElement)) {
        document.querySelector('main').removeChild(successElement);
      }
    });

    document.addEventListener('keydown', function (evt) {
      if (document.querySelector('main').contains(successElement) && evt.keyCode === ESC_BUTTON) {
        document.querySelector('main').removeChild(successElement);
      }
    });
  };

  var uploadShowError = function () {
    resetForm();

    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorElement = errorTemplate.cloneNode(true);
    var pageMain = document.querySelector('main');

    pageMain.appendChild(errorElement);

    document.querySelector('.error__buttons').addEventListener('click', function () {
      if (pageMain.contains(errorElement)) {
        pageMain.removeChild(errorElement);
      }
    });

    document.querySelector('.error').addEventListener('click', function () {
      if (pageMain.contains(errorElement)) {
        document.querySelector('main').removeChild(errorElement);
      }
    });

    document.addEventListener('keydown', function (evt) {
      if (pageMain.contains(errorElement) && evt.keyCode === ESC_BUTTON) {
        pageMain.removeChild(errorElement);
      }
    });
  };
  window.uploadShowError = uploadShowError;
  window.submitFormSendReset = submitFormSendReset;
  window.resetForm = resetForm;
})();
