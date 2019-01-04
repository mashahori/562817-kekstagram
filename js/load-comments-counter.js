'use strict';

(function () {
  var defaultCommentsCounter = function (commentsCount) {
    var defaultComments;
    if (commentsCount <= 5) {
      defaultComments = commentsCount;
    }
    if (commentsCount > 5) {
      defaultComments = 5;
    }
    return defaultComments;
  };

  var loadCommentsCounter = function (commentsCount) {
    var loadComments;
    if (commentsCount <= 5) {
      loadComments = commentsCount;
    }

    if (commentsCount > 5 && commentsCount <= 10) {
      loadComments = commentsCount;
    }
    if (commentsCount > 10 && commentsCount <= 15) {
      loadComments = 10;
    }
    return loadComments;
  };
  window.loadCommentsCounter = loadCommentsCounter;
  window.defaultCommentsCounter = defaultCommentsCounter;
})();
