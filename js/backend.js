'use strict';

(function () {
  var loadShowError = function () {};

  window.load = function (url, onSuccess, onError) {
    var TIMEOUT = 1000;
    var OK_STATUS = 200;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = TIMEOUT;

    xhr.addEventListener('load', function () {
      if (xhr.status === OK_STATUS) {
        console.log(xhr.response);
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
    var URL = 'https://js.dump.academy/kekstagram';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.addEventListener('error', function () {
      onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.load('https://js.dump.academy/kekstagram/data', window.onLoad, loadShowError());
})();
