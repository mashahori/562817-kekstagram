'use strict';

var similarListElement = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

var pictureComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var pictureDescriptions = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят',
  'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'];
var PICTURES_COUNT = 25;
var COMMENTS_COUNT = 5;

var randomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

var randomString = function (commentDescriptions) {
  return commentDescriptions[Math.floor(Math.random() * commentDescriptions.length)];
};

var makePictures = function (pictureCount) {
  var totalPictures = [];
  for (var i = 0; i < pictureCount; i++) {
    totalPictures.push({
      url: 'photos/' + (i + 1) + '.jpg',
      likes: randomInteger(15, 200),
      comments: pictureComments[randomInteger(0, 5)],
      description: randomString(pictureDescriptions)
    });
  }
  return totalPictures;
};

var pictures = makePictures(PICTURES_COUNT);

var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments;

  return pictureElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < pictures.length; i++) {
  fragment.appendChild(renderPicture(pictures[i]));
}

similarListElement.appendChild(fragment);


var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

var bigPictureImg = bigPicture.querySelector('img');

bigPictureImg.src = pictures[0].url;
bigPicture.querySelector('.likes-count').textContent = pictures[0].likes;
bigPicture.querySelector('.comments-count').textContent = pictureComments.length;
bigPicture.querySelector('.social__caption').textContent = pictures[0].description;

var socialComment = document.querySelector('.social__comment');
var socialComments = document.querySelector('.social__comments');

socialComments.innerHtml = null;

for (var j = 1; j < COMMENTS_COUNT - 1; j++) {
  bigPicture.querySelector('.social__comments').appendChild(socialComment.cloneNode(true));
  socialComment.querySelector('.social__text').textContent = pictures[j].comments;
  socialComment.querySelector('.social__picture').src = 'img/avatar-' + randomInteger(1, 6) + '.svg';
}

document.querySelector('.social__comment-count').classList.add('visually-hidden');
document.querySelector('.comments-loader').classList.add('visually-hidden');
