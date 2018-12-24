'use strict';

(function () {
  var PICTURES_COUNT = 25;
  var pictures = window.makePictures(PICTURES_COUNT);
  var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  var renderPicture = function (picture) {
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__img').id = picture.id;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

    return pictureElement;
  };

  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.pictures');

  for (var i = 0; i < pictures.length; i++) {
    fragment.appendChild(renderPicture(pictures[i]));
  }

  similarListElement.appendChild(fragment);
  window.similarListElement = similarListElement;
  window.renderPicture = renderPicture;
  window.pictures = pictures;
})();
