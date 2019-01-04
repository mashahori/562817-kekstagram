'use strict';

(function () {
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
    window.fragment = fragment;
  };


  var toggleFilter = function (picturesArray) {
    while (similarListElement.firstChild) {
      similarListElement.removeChild(similarListElement.firstChild);
    }
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < picturesArray.length; i++) {
      fragment.appendChild(renderPicture(picturesArray[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var buttonDiscussed = document.querySelector('#filter-discussed');

  buttonDiscussed.addEventListener('click', function () {
    buttonDiscussed.classList.add('img-filters__button--active');

    var commentsArrayCopy = window.xhr.response.slice();
    commentsArrayCopy.sort(function (a, b) {
      if (a.comments.length > b.comments.length) {
        return -1;
      } else if (a.comments.length < b.comments.length) {
        return 1;
      } else {
        return 0;
      }
    });
    toggleFilter(commentsArrayCopy);
  });

  buttonDiscussed.addEventListener('blur', function () {
    buttonDiscussed.classList.remove('img-filters__button--active');
  });


  var buttonPopular = document.querySelector('#filter-popular');

  buttonPopular.addEventListener('blur', function () {
    buttonPopular.classList.remove('img-filters__button--active');
  });

  buttonPopular.addEventListener('click', function () {
    buttonPopular.classList.add('img-filters__button--active');
    toggleFilter(window.xhr.response);
  });


  var toggleFilterNew = function (picturesArray) {
    var newPhotosArray = [];
    for (var i = 1; newPhotosArray.length !== 10; i++) {
      var newPhotosElement = picturesArray[window.randomInteger(0, 25)];
      if (!newPhotosArray.includes(newPhotosElement)) {
        newPhotosArray.push(newPhotosElement);
      }
    }
    return newPhotosArray;
  };

  var buttonNew = document.querySelector('#filter-new');

  buttonNew.addEventListener('blur', function () {
    buttonNew.classList.remove('img-filters__button--active');
  });

  buttonNew.addEventListener('click', function () {
    buttonNew.classList.add('img-filters__button--active');

    var commentsArrayCopy = window.xhr.response.slice();
    commentsArrayCopy = toggleFilterNew(commentsArrayCopy);
    toggleFilter(commentsArrayCopy);
  });


  window.onLoad = onLoad;
  window.similarListElement = similarListElement;
  window.renderPicture = renderPicture;
})();
