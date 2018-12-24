'use strict';

(function () {
  var ENTER_BUTTON = 13;
  var PICTURES_COUNT = 25;
  var pictures = window.makePictures(PICTURES_COUNT);
  var pictureClose = document.querySelector('.big-picture__cancel');

  window.similarListElement.addEventListener('click', window.showBigPicture);

  pictureClose.addEventListener('click', function () {
    window.bigPicture.classList.add('hidden');
  });

  var socialComment = document.querySelector('.social__comment');
  var socialComments = document.querySelector('.social__comments');

  while (socialComments.firstChild) {
    socialComments.removeChild(socialComments.firstChild);
  }

  for (var j = 1; j < pictures[0].comments.length; j++) {
    socialComment = socialComment.cloneNode(true);
    socialComments.appendChild(socialComment);
    socialComment.querySelector('.social__text').textContent = pictures[0].comments[j].text;
    socialComment.querySelector('.social__picture').src = pictures[0].comments[j].avatar;
  }

  document.querySelector('.social__comment-count').classList.add('visually-hidden');
  document.querySelector('.comments-loader').classList.add('visually-hidden');

  var uploadFile = document.querySelector('#upload-file');
  var uploadForm = document.querySelector('.img-upload__overlay');
  var uploadFormClose = document.querySelector('.img-upload__cancel');

  var scaleSmaller = document.querySelector('.scale__control--smaller');
  var scaleBigger = document.querySelector('.scale__control--bigger');

  uploadFile.addEventListener('change', function () {
    window.openPopup(uploadForm, window.scaleValue);
    document.addEventListener('keydown', window.onPopupEscPress);
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
