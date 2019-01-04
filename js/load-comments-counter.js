'use strict';

(function () {
  var defaultCommentsCounter = function (commentsCount) {
    if (commentsCount <= 5) {
      return commentsCount;
    }
    if (commentsCount > 5) {
      return 5;
    }
  }


  var loadCommentsCounter = function (commentsCount) {
    if (commentsCount <= 5) {
      return commentsCount;
    }

    if (commentsCount > 5 && commentsCount <= 10) {
      return commentsCount;
    }
    if (commentsCount > 10 && commentsCount <= 15) {
      return 10;
    }

  }
    window.loadCommentsCounter = loadCommentsCounter;
    window.defaultCommentsCounter = defaultCommentsCounter;
})();
