'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.img-upload__input');
  var previewWrapper = document.querySelector('.img-upload__preview');
  var preview = previewWrapper.querySelector('img');

  fileChooser.addEventListener('change', function () {
    preview.src = '';
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
    document.querySelector('.scale__control--value').value='100%';
  });
})();
