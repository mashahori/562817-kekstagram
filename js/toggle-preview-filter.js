'use strict';

(function () {
  var effectLevelValue = document.querySelector('.effect-level__value');
  var effectLevelDepth = document.querySelector('.effect-level__depth');
  var effectLevelLine = document.querySelector('.effect-level__line');
  var effectLevel = document.querySelector('.effect-level');
  var effectLevelPin = document.querySelector('.effect-level__pin');
  var fullPhotoContainer = document.querySelector('.img-upload__preview').querySelector('IMG');


  var togglePreviewFilter = function (evt) {
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
        window.applyCurrentEffect = window.applyChrome;
        break;
      case 'sepia':
        fullPhotoContainer.style.filter = 'sepia(1)';
        effectLevel.classList.remove('hidden');
        window.applyCurrentEffect = window.applySepia;
        break;
      case 'marvin':
        fullPhotoContainer.style.filter = 'invert(100%)';
        effectLevel.classList.remove('hidden');
        window.applyCurrentEffect = window.applyMarvin;
        break;
      case 'phobos':
        fullPhotoContainer.style.filter = 'blur(3px)';
        effectLevel.classList.remove('hidden');
        window.applyCurrentEffect = window.applyPhobos;
        break;
      case 'heat':
        fullPhotoContainer.style.filter = 'brightness(3)';
        effectLevel.classList.remove('hidden');
        window.applyCurrentEffect = window.applyHeat;
        break;
    }
  };

  window.togglePreviewFilter = togglePreviewFilter;
})();
