'use strict';

var ESC_BUTTON = 27;
var ENTER_BUTTON = 13;
var MIN_SCALE = 25;
var MAX_SCALE = 100;
var SCALE_STEP = 25;
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
var bigPictureImg = bigPicture.querySelector('img');
var pictureClose = document.querySelector('.big-picture__cancel');

var createBigPicture = function (pictureNumber) {
  bigPictureImg.src = pictures[pictureNumber].url;
  bigPicture.querySelector('.likes-count').textContent = pictures[pictureNumber].likes;
  bigPicture.querySelector('.comments-count').textContent = pictures[pictureNumber].comments.length;
  bigPicture.querySelector('.social__caption').textContent = pictures[pictureNumber].description;
};

similarListElement.addEventListener('click', function (evt) {
  var target = evt.target;
  if (target.tagName !== 'IMG') { return; }
  bigPicture.classList.remove('hidden');
  createBigPicture(0);
});

pictureClose.addEventListener('click', function () {
  bigPicture.classList.add('hidden');
});

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

var scaleSmaller = document.querySelector('.scale__control--smaller');
var scaleBigger = document.querySelector('.scale__control--bigger');
var scaleValue = document.querySelector('.scale__control--value');
var scale = document.querySelector('.scale');

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
  scaleValue.value = '100%';
};


uploadFile.addEventListener('change', function () {
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


var fullPhotoContainer = document.querySelector('.img-upload__preview');

var effectLevel = document.querySelector('.effect-level');
var effectLevelPin = document.querySelector('.effect-level__pin');
var effectLevelLine = document.querySelector('.effect-level__line');
var effectLevelValue = document.querySelector('.effect-level__value');
var effectLevelDepth = document.querySelector('.effect-level__depth');
var effectsList = document.querySelector('.effects__list');

var applyCurrentEffect = function() {}; // по умолчанию пустая функция

var applyChrome = function (filterPosition) {
  fullPhotoContainer.style.filter = 'grayscale(' + filterPosition / 100 + ')';
}

var applySepia = function (filterPosition) {
  fullPhotoContainer.style.filter = 'sepia(' + filterPosition / 100 + ')';
}

var applyMarvin = function (filterPosition) {
  fullPhotoContainer.style.filter = 'invert(' + filterPosition + '%)';
}

var applyPhobos = function (filterPosition) {
  fullPhotoContainer.style.filter = 'blur(' + (filterPosition / 100 * 3) + 'px)';
}

var applyHeat = function (filterPosition) {
  fullPhotoContainer.style.filter = 'brightness(' + (filterPosition / 100 * 2 + 1) + ')';
}

effectsList.addEventListener('change', function (evt) { // Изменение фильтра большой картинки при переключении превьюшек
  effectLevelPin.style.left = '100%';
  effectLevelValue.value = 100;
  effectLevelDepth.style.width = effectLevelLine.offsetWidth + 'px';
  var target = evt.target.value;
  switch (target) {
    case 'none':
      fullPhotoContainer.style.filter = '';
      effectLevel.classList.add('hidden');
      break;
    case 'chrome':
      fullPhotoContainer.style.filter = 'grayscale(1)';
      effectLevel.classList.remove('hidden');
      applyCurrentEffect = applyChrome;
      break;
    case 'sepia':
      fullPhotoContainer.style.filter = 'sepia(1)';
      effectLevel.classList.remove('hidden');
      applyCurrentEffect = applySepia;
      break;
    case 'marvin':
      fullPhotoContainer.style.filter = 'invert(100%)';
      effectLevel.classList.remove('hidden');
      applyCurrentEffect = applyMarvin;
      break;
    case 'phobos':
      fullPhotoContainer.style.filter = 'blur(3px)';
      effectLevel.classList.remove('hidden');
      applyCurrentEffect = applyPhobos;
      break;
    case 'heat':
      fullPhotoContainer.style.filter = 'brightness(3)';
      effectLevel.classList.remove('hidden');
      applyCurrentEffect = applyHeat;
      break;
  }
});

effectLevelLine.addEventListener('click', function (evtLevel) { //определяем позицию клика на шкале
  var effectLevelClick = evtLevel.offsetX;
  var lineWidth = effectLevelLine.offsetWidth;
  var position = Math.round((effectLevelClick / lineWidth) * 100);
  effectLevelPin.style.left = position + '%';
  effectLevelValue.value = Math.round((effectLevelClick / lineWidth) * 100);
  effectLevelDepth.style.width = position + '%';
  fullPhotoContainer.style.filter = 'blur(' + (position / 100 * 3) + 'px)';
  applyCurrentEffect(position);
});

//Изменение размера изображения

// var calculateScale = function (scale, direction) {          //увеличение или уменьшение value
//   if (scale < MAX_SCALE && scale > MIN_SCALE) {
//     return scale + SCALE_STEP * direction;
//   } else {
//     return scale;
//     console.log('no way');
//   }
// };

scaleSmaller.addEventListener('click', function () {
  var currentScale = scaleValue.value;
  currentScale = parseInt(currentScale);
  if (currentScale > MIN_SCALE) {
    currentScale = currentScale - SCALE_STEP;
    scaleValue.value = currentScale + '%';
    fullPhotoContainer.style.transform ='scale(' + currentScale / 100 + ')';
  } else {
    scaleValue.value = '25%';
  }
});

scaleBigger.addEventListener('click', function () {
  var currentScale = scaleValue.value;
  currentScale = parseInt(currentScale);
  if (currentScale < MAX_SCALE) {
    currentScale = currentScale + SCALE_STEP;
    scaleValue.value = currentScale + '%';
  fullPhotoContainer.style.transform ='scale(' + currentScale / 100 + ')';
} else {
  scaleValue.value = '100%';
}
});

// scale.addEventListener('click', function (evt) {
//   var targetScale = evt.target;
//   var currentScale = scaleValue.value;
//   currentScale = parseInt(currentScale);
//   if (targetScale.classList.contains('scale__control--smaller')) {
//     var newScale = calculateScale(currentScale, -1);
//     console.log('less');
//   } else if (targetScale.classList.contains('scale__control--bigger')) {
//     var newScale = calculateScale(currentScale, 1);
//     console.log(newScale);
//   } else {
//     console.log('no');
//   }
//   scaleValue.value = newScale + '%';
//   fullPhotoContainer.style.transform ='scale(' + newScale / 100 + ')';
// });
