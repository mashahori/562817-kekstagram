'use strict';

(function () {
  var TIMEOUT = 1000;
  var OK_STATUS = 200;
  var URL = 'https://js.dump.academy/kekstagram';
  var URL_DATA = 'https://js.dump.academy/kekstagram/data';

  var loadShowError = function () {};

  window.load = function (url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT;

    xhr.addEventListener('load', function () {
      if (xhr.status === OK_STATUS) {
        onSuccess(xhr.response);
      } else {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      }
    });

    xhr.open('GET', url);
    xhr.send();

    window.xhr = xhr;
  };

  window.upload = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === OK_STATUS) {
        onSuccess(xhr.response);
      } else {
        onError('Произошла ошибка');
      }
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.load(URL_DATA, window.onLoad, loadShowError());
})();
