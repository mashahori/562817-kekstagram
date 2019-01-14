'use strict';

(function () {
  var PART_OF_COMMENTS = 5;
  var showCounter = document.querySelector('.social__comment-count');
  var commentsLoaderButton = document.querySelector('.comments-loader');

  var defaultCommentsCounter = function (commentsCount) {
    var defaultComments;
    if (commentsCount <= PART_OF_COMMENTS) {
      defaultComments = commentsCount;
      commentsLoaderButton.classList.add('hidden');
    } else {
      defaultComments = PART_OF_COMMENTS;
    }
    showCounter.textContent = defaultComments + ' из ' + commentsCount;
    return defaultComments;
  };

  var loadCommentsCounter = function (commentsCount, currentComments) {
    var loadComments = currentComments + PART_OF_COMMENTS;
    if (loadComments > commentsCount) {
      loadComments = commentsCount;
    }
    showCounter.textContent = loadComments + ' из ' + commentsCount;
    return loadComments;
  };

  window.loadCommentsCounter = loadCommentsCounter;
  window.defaultCommentsCounter = defaultCommentsCounter;
})();
