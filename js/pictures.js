'use strict';

var ESC_BUTTON = 27;
var MAX_EFFECT_VALUE = 453;
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
var AVATARS_COUNT = 6;
var MAX_COMMENTS = 5;
var MAX_LIKES = 200;
var MIN_LIKES = 15;

var randomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

var randomString = function (stringsArray, count) {
  var resultString = '';
  for (var i = 0; i < count; i++) {
    if (i !== 0) {
      resultString += ' ';
    }
    resultString += stringsArray[randomInteger(0, stringsArray.length - 1)];
  }
  return resultString;
};

var makeComments = function (commentsCount) {
  var totalComments = [];
  for (var i = 0; i < commentsCount; i++) {
    totalComments.push({
      avatar: 'img/avatar-' + randomInteger(1, AVATARS_COUNT) + '.svg',
      text: randomString(pictureComments, randomInteger(1, 2))
    });
  }
  return totalComments;
};

var makePictures = function (pictureCount) {
  var totalPictures = [];
  for (var i = 0; i < pictureCount; i++) {
    totalPictures.push({
      url: 'photos/' + (i + 1) + '.jpg',
      likes: randomInteger(MIN_LIKES, MAX_LIKES),
      comments: makeComments(randomInteger(0, MAX_COMMENTS)),
      description: randomString(pictureDescriptions, 1)
    });
  }
  return totalPictures;
};

var pictures = makePictures(PICTURES_COUNT);

var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  return pictureElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < pictures.length; i++) {
  fragment.appendChild(renderPicture(pictures[i]));
}

similarListElement.appendChild(fragment);


var bigPicture = document.querySelector('.big-picture');
// bigPicture.classList.remove('hidden');

var bigPictureImg = bigPicture.querySelector('img');

var createBigPicture = function (pictureNumber) {
  bigPictureImg.src = pictures[pictureNumber].url;
  bigPicture.querySelector('.likes-count').textContent = pictures[pictureNumber].likes;
  bigPicture.querySelector('.comments-count').textContent = pictures[pictureNumber].comments.length;
  bigPicture.querySelector('.social__caption').textContent = pictures[pictureNumber].description;
};

createBigPicture(0);

var socialComment = document.querySelector('.social__comment');
var socialComments = document.querySelector('.social__comments');

while (socialComments.firstChild) {
  socialComments.removeChild(socialComments.firstChild);
}

for (var j = 1; j < pictures[0].comments.length; j++) {
  socialComment = socialComment.cloneNode(true);
  socialComments.appendChild(socialComment);
  socialComment.querySelector('.social__text').textContent = pictures[0].comments[j].text;
  socialComment.querySelector('.social__picture').src = pictures[0].comments[j].avatar;
}

document.querySelector('.social__comment-count').classList.add('visually-hidden');
document.querySelector('.comments-loader').classList.add('visually-hidden');


var uploadFile = document.querySelector('#upload-file');
var uploadForm = document.querySelector('.img-upload__overlay');
var uploadFormClose = document.querySelector('.img-upload__cancel');

var closePopup = function () {
  uploadForm.classList.add('hidden');
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_BUTTON) {
    closePopup();
  }
};

var openPopup = function () {
  uploadForm.classList.remove('hidden');
};


uploadFile.addEventListener('change', function() {
  openPopup();
  document.addEventListener('keydown', onPopupEscPress);
});

uploadFormClose.addEventListener('click', function () {
  closePopup();
  document.removeEventListener('keydown', onPopupEscPress);
});

uploadFormClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    closePopup();
    document.removeEventListener('keydown', onPopupEscPress);
  }
});


var thumbnails = document.querySelectorAll('.effects__radio');

var fullPhotoContainer = document.querySelector('.img-upload__preview');
var fullPhoto = fullPhotoContainer.querySelector('img');
var effectsPreviews = ['effects__preview--none', 'effects__preview--chrome',
 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat'];

 var addThumbnailClickHandler = function (thumbnail, photo) {
   thumbnail.addEventListener('click', function () {
     fullPhoto.removeAttribute('class');
     fullPhoto.classList.add(photo);
   });
 };

for (var i = 0; i < thumbnails.length; i++ ) {
  addThumbnailClickHandler(thumbnails[i], effectsPreviews[i]);
}

var effectLevelPin = document.querySelector('.effect-level__pin');
var effectLevel = document.querySelector('.effect-level');
var effectLevelValue = document.querySelector('.effect-level__value');

effectLevel.addEventListener('click', function (evt) {
  var n = evt.clientX;
    console.log(n);
    effectLevelValue.value = n;
     // if (evt.clientX < 715 && evt.clientX > 255) {
     //
     // }
    //
});
