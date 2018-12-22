'use strict';

(function () {
  var randomInteger = function(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
  };
  window.randomInteger = randomInteger;
})();
