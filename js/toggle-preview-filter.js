'use strict';

(function () {
  var effectLevelValue = document.querySelector('.effect-level__value');
  var effectLevelDepth = document.querySelector('.effect-level__depth');
  var effectLevelLine = document.querySelector('.effect-level__line');
  var effectLevel = document.querySelector('.effect-level');
  var effectLevelPin = document.querySelector('.effect-level__pin');

  var applyCurrentEffect = function () {}; // по умолчанию пустая функция

  var togglePreviewFilter = function (evt) {
    window.effectLevelPin.style.left = '100%';
    effectLevelValue.value = 100;
    effectLevelDepth.style.width = effectLevelLine.offsetWidth + 'px';
    var target = evt.target.value;
    switch (target) {
      case 'none':
        window.fullPhotoContainer.style.filter = '';
        effectLevel.classList.add('hidden');
        break;
      case 'chrome':
        window.fullPhotoContainer.style.filter = 'grayscale(1)';
        effectLevel.classList.remove('hidden');
        applyCurrentEffect = window.applyChrome;
        break;
      case 'sepia':
        window.fullPhotoContainer.style.filter = 'sepia(1)';
        effectLevel.classList.remove('hidden');
        applyCurrentEffect = window.applySepia;
        break;
      case 'marvin':
        window.fullPhotoContainer.style.filter = 'invert(100%)';
        effectLevel.classList.remove('hidden');
        applyCurrentEffect = window.applyMarvin;
        break;
      case 'phobos':
        window.fullPhotoContainer.style.filter = 'blur(3px)';
        effectLevel.classList.remove('hidden');
        applyCurrentEffect = window.applyPhobos;
        break;
      case 'heat':
        window.fullPhotoContainer.style.filter = 'brightness(3)';
        effectLevel.classList.remove('hidden');
        applyCurrentEffect = window.applyHeat;
        break;
    }
    window.applyCurrentEffect = applyCurrentEffect;
    window.togglePreviewFilter = togglePreviewFilter;
  };
})();
