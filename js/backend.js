'use strict';

(function () {
  // var onErrorMessage = function (message) {
  //   console.log(message);
  // };
  //
  // var onSuccessData = function (data) {
  //   console.log(data);
  // };

  window.load = function (url, onSuccess) {
    var TIMEOUT = 1000;
    var OK_STATUS = 200;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === OK_STATUS) {
        // onSuccess(xhr.response);
        onSuccess(xhr.response);
      // } else {
      //   onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      // }
    }
    });

    // xhr.addEventListener('error', function () {
    //   onError('Произошла ошибка соединения');
    // });
    //
    // xhr.addEventListener('timeout', function () {
    //   onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    // });

    xhr.timeout = TIMEOUT;

    xhr.open('GET', url);
    xhr.send();

    window.xhr = xhr;
  };

  window.upload = function (data, onSuccess) {
    var URL = 'https://js.dump.academy/kekstagram';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.addEventListener('error', function () {
      var errorTemplate = document.querySelector('#error').content.querySelector('.error');
      document.querySelector('main').appendChild(errorTemplate);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.load('https://js.dump.academy/kekstagram/data', window.onLoad);
})();
