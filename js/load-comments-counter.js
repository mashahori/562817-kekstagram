'use strict';

(function () {
  var showCounter = document.querySelector('.social__comment-count');

  var defaultCommentsCounter = function (commentsCount) {
    var defaultComments;
    if (commentsCount <= 5) {
      defaultComments = commentsCount;
      document.querySelector('.comments-loader').classList.add('hidden');
    } else {
      defaultComments = 5;
    }
    showCounter.textContent = defaultComments + ' из ' + commentsCount;
    return defaultComments;
  };

  var loadCommentsCounter = function (commentsCount, currentComments) {
    var loadComments = currentComments + 5;
    if (loadComments > commentsCount) {
      loadComments = commentsCount;
      document.querySelector('.comments-loader').classList.add('hidden');
    }
    showCounter.textContent = loadComments + ' из ' + commentsCount;
    return loadComments;
  };

  window.loadCommentsCounter = loadCommentsCounter;
  window.defaultCommentsCounter = defaultCommentsCounter;
})();
