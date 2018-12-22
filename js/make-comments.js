'use strict';

(function () {
  var AVATARS_COUNT = 6;
  var pictureComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

  var makeComments = function (commentsCount) {
    var totalComments = [];
    for (var i = 0; i < commentsCount; i++) {
      totalComments.push({
        avatar: 'img/avatar-' + window.randomInteger(1, AVATARS_COUNT) + '.svg',
        text: window.randomString(window.pictureComments, window.randomInteger(1, 2))
      });
    }
    return totalComments;
  };
  window.makeComments = makeComments;
  window.pictureComments = pictureComments;
})();
