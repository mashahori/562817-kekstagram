'use strict';

(function () {
  var bigPicture = document.querySelector('.big-picture');
  var bigPictureImg = bigPicture.querySelector('img');

  var createBigPicture = function (pictureNumber) {
    bigPictureImg.src = window.pictures[pictureNumber].url;
    bigPicture.querySelector('.likes-count').textContent = window.pictures[pictureNumber].likes;
    bigPicture.querySelector('.comments-count').textContent = window.pictures[pictureNumber].comments.length;
    bigPicture.querySelector('.social__caption').textContent = window.pictures[pictureNumber].description;
  };
  window.createBigPicture = createBigPicture;
  window.bigPicture = bigPicture;
})();
