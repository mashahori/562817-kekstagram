'use strict';

(function () {
  var MAX_COMMENTS = 5;
  var MAX_LIKES = 200;
  var MIN_LIKES = 15;
  var pictureDescriptions = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят',
    'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'];

  var makePictures = function (pictureCount) {
    var totalPictures = [];
    for (var i = 0; i < pictureCount; i++) {
      totalPictures.push({
        url: 'photos/' + (i + 1) + '.jpg',
        likes: window.randomInteger(MIN_LIKES, MAX_LIKES),
        comments: window.makeComments(window.randomInteger(0, MAX_COMMENTS)),
        description: window.randomString(pictureDescriptions, 1),
        id: '#' + i
      });
    }
    return totalPictures;
  };
  window.makePictures = makePictures;
})();
