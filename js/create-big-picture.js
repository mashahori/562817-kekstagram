'use strict';

(function () {
  var bigPicture = document.querySelector('.big-picture');
  var bigPictureImg = bigPicture.querySelector('img');

  var createBigPicture = function (pictureObject) {
    bigPictureImg.src = pictureObject.url;
    bigPicture.querySelector('.likes-count').textContent = pictureObject.likes;
    bigPicture.querySelector('.social__caption').textContent = pictureObject.description;
  };

  var socialComment = document.querySelector('.social__comment');
  var socialComments = document.querySelector('.social__comments');


  var putComments = function (pictureObject, commentsCount) {
    while (socialComments.firstChild) {
      socialComments.removeChild(socialComments.firstChild);
    }

    for (var j = 0; j < commentsCount; j++) {
      socialComment = socialComment.cloneNode(true);
      socialComments.appendChild(socialComment);
      socialComment.querySelector('.social__text').textContent = pictureObject.comments[j].message;
      socialComment.querySelector('.social__picture').src = pictureObject.comments[j].avatar;
    }
    return commentsCount;
  };
  window.putComments = putComments;
  window.createBigPicture = createBigPicture;
  window.bigPicture = bigPicture;
})();
