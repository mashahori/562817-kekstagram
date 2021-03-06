'use strict';

(function () {
  var NEW_PHOTOS_COUNT = 10;
  var PHOTO_ELEMENTS_COUNT = 25;
  var DEBOUNCE_TIMEOUT = 300;
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  var renderPicture = function (picture) {
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__img').pictureData = picture; // создаем свойство, чтобы передать в него сам объект
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

    return pictureElement;

  };

  var similarListElement = document.querySelector('.pictures');

  var onLoad = function (pictures) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pictures.length; i++) {
      fragment.appendChild(renderPicture(pictures[i]));
    }

    similarListElement.appendChild(fragment);
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  };


  var toggleFilter = function (picturesArray) {

    while (similarListElement.querySelector('.picture')) {
      similarListElement.removeChild(similarListElement.querySelector('.picture'));
    }

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < picturesArray.length; i++) {
      if (picturesArray[i] !== undefined) {
        fragment.appendChild(renderPicture(picturesArray[i]));
      }
    }
    similarListElement.appendChild(fragment);
  };

  var buttonPopular = document.querySelector('#filter-popular');
  var buttonDiscussed = document.querySelector('#filter-discussed');
  var buttonNew = document.querySelector('#filter-new');

  buttonDiscussed.addEventListener('click', function () {
    buttonDiscussed.classList.add('img-filters__button--active');
    buttonPopular.classList.remove('img-filters__button--active');
    buttonNew.classList.remove('img-filters__button--active');

    window.setTimeout(function () {
      var commentsArrayCopy = window.xhr.response.slice();
      commentsArrayCopy.sort(function (a, b) {
        if (a.comments.length > b.comments.length) {
          return -1;
        } else if (a.comments.length < b.comments.length) {
          return 1;
        }
        return 0;
      });
      toggleFilter(commentsArrayCopy);
    }, DEBOUNCE_TIMEOUT);

  });

  buttonPopular.addEventListener('click', function () {
    buttonPopular.classList.add('img-filters__button--active');
    buttonDiscussed.classList.remove('img-filters__button--active');
    buttonNew.classList.remove('img-filters__button--active');

    window.setTimeout(function () {
      toggleFilter(window.xhr.response);
    }, DEBOUNCE_TIMEOUT);
  });


  var toggleFilterNew = function (picturesArray) {
    var newPhotosArray = [];
    for (var i = 1; newPhotosArray.length !== NEW_PHOTOS_COUNT; i++) {
      var newPhotosElement = picturesArray[window.randomInteger(0, PHOTO_ELEMENTS_COUNT)];
      if (!newPhotosArray.includes(newPhotosElement)) {
        newPhotosArray.push(newPhotosElement);
      }
    }
    return newPhotosArray;
  };

  buttonNew.addEventListener('click', function () {
    buttonNew.classList.add('img-filters__button--active');
    buttonPopular.classList.remove('img-filters__button--active');
    buttonDiscussed.classList.remove('img-filters__button--active');

    window.setTimeout(function () {
      var commentsArrayCopy = window.xhr.response.slice();
      commentsArrayCopy = toggleFilterNew(commentsArrayCopy);
      toggleFilter(commentsArrayCopy);
    }, DEBOUNCE_TIMEOUT);
  });

  window.onLoad = onLoad;
  window.renderPicture = renderPicture;
})();
