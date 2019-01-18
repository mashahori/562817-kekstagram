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


  var renderComment = function (pictureComment) {
    socialComment = socialComment.cloneNode(true);

    socialComment.querySelector('.social__text').textContent = pictureComment.message;
    socialComment.querySelector('.social__picture').src = pictureComment.avatar;

    return socialComment;
  };

  var putComments = function (pictureObject, commentsCount) {
    while (socialComments.firstChild) {
      socialComments.removeChild(socialComments.firstChild);
    }

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < commentsCount; i++) {
      fragment.appendChild(renderComment(pictureObject.comments[i]));
    }

    socialComments.appendChild(fragment);

    return commentsCount;
  };
  window.putComments = putComments;
  window.createBigPicture = createBigPicture;
})();
