'use strict';

(function () {
  // var DEFAULT_COMMENTS = 5;
  var showBigPicture = function (evt) {
    var target = evt.target;
    if (!target.classList.contains('picture__img')) {
      return;
    }
    window.bigPicture.classList.remove('hidden');
    var targetObject = target.pictureData;
    window.createBigPicture(targetObject);
    window.putComments(targetObject, window.defaultCommentsCounter(targetObject.comments.length));
    var currentComments = 5;

    var commentsLoader = document.querySelector('.comments-loader');
    commentsLoader.addEventListener('click', function (evtLoader) {
      evtLoader.preventDefault();
      currentComments = window.putComments(targetObject, window.loadCommentsCounter(targetObject.comments.length, currentComments));
    });
    window.targetObject = targetObject;
  };
  window.showBigPicture = showBigPicture;
})();
