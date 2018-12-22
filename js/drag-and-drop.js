'use strict';

(function () {
  var effectLevelLine = document.querySelector('.effect-level__line');
  var effectLevelValue = document.querySelector('.effect-level__value');
  var effectLevelDepth = document.querySelector('.effect-level__depth');

  var dragAndDrop = function (evtStart) {
    evtStart.preventDefault();
    var effectStartCoords = evtStart.offsetX;

    var onMouseMove = function (evtMove) {
      evtMove.preventDefault();

      var shift = evtMove.offsetX - effectStartCoords;

      effectStartCoords = evtMove.offsetX;

      var position = effectStartCoords - shift;
      var lineWidth = effectLevelLine.offsetWidth;
      position = Math.round((effectStartCoords / lineWidth) * 100);
      if (position < 100 && position > 0) {
        effectLevelPin.style.left = position + '%';
        effectLevelValue.value = position * 100;
        effectLevelDepth.style.width = position + '%';
        window.applyCurrentEffect;
      }
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  window.dragAndDrop = dragAndDrop;
})();
