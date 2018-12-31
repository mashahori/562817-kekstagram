'use strict';

(function () {
  var ENTER_BUTTON = 13;
  var pictureClose = document.querySelector('.big-picture__cancel');


  window.similarListElement.addEventListener('click', window.showBigPicture);

  pictureClose.addEventListener('click', function () {
    window.bigPicture.classList.add('hidden');
  });

  document.querySelector('.social__comment-count').classList.add('visually-hidden');
  document.querySelector('.comments-loader').classList.add('visually-hidden');

  var uploadFile = document.querySelector('#upload-file');
  var uploadForm = document.querySelector('.img-upload__overlay');
  var uploadFormSend = document.querySelector('.img-upload__form');
  var uploadFormClose = document.querySelector('.img-upload__cancel');

  var scaleSmaller = document.querySelector('.scale__control--smaller');
  var scaleBigger = document.querySelector('.scale__control--bigger');

  uploadFile.addEventListener('change', function () {
    window.openPopup(uploadForm, window.scaleValue);
    window.effectLevel.classList.add('hidden');
    document.addEventListener('keydown', window.onPopupEscPress);
  });

  var uploadShowError = function () {};

  uploadFormSend.addEventListener('submit', function (evt) {
    window.upload(new FormData(uploadFormSend), window.submitFormSendReset, uploadShowError());
    evt.preventDefault();
  });

  uploadFormClose.addEventListener('click', window.closePopup);

  uploadFormClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_BUTTON) {
      window.closePopup();
    }
  });

  var effectLevelPin = document.querySelector('.effect-level__pin');
  var effectsList = document.querySelector('.effects__list');

  effectsList.addEventListener('change', window.togglePreviewFilter);

  effectLevelPin.addEventListener('mousedown', window.dragAndDrop);

  scaleSmaller.addEventListener('click', window.makePictureSmaller);

  scaleBigger.addEventListener('click', window.makePictureBigger);

  var textHashtags = document.querySelector('.text__hashtags');

  textHashtags.addEventListener('input', window.getHashtags);

})();
