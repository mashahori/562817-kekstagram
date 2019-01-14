'use strict';

(function () {
  var effectLevelLine = document.querySelector('.effect-level__line');
  var effectLevelValue = document.querySelector('.effect-level__value');
  var effectLevelDepth = document.querySelector('.effect-level__depth');
  var effectLevelPin = document.querySelector('.effect-level__pin');

  var dragAndDrop = function (evtStart) {
    evtStart.preventDefault();

    var startX = evtStart.clientX;

    var onMouseMove = function (evtMove) {
      evtMove.preventDefault();

      var shift = startX - evtMove.clientX;

      startX = evtMove.clientX;

      var newPinOffset = effectLevelPin.offsetLeft - shift;

      if (newPinOffset > effectLevelLine.offsetWidth) {
        effectLevelPin.style.left = effectLevelLine.offsetWidth + 'px';
      } else if (newPinOffset < 0) {
        effectLevelPin.style.left = 0 + 'px';
      } else {
        effectLevelPin.style.left = effectLevelPin.offsetLeft - shift + 'px';

        effectLevelDepth.style.width = effectLevelPin.offsetLeft + 'px';

        var position = (effectLevelPin.offsetLeft / effectLevelLine.offsetWidth) * 100;
        effectLevelValue.value = position;
        window.applyCurrentEffect(position);
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
