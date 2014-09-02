// Generated by CoffeeScript 1.7.1
(function() {
  (function() {
    var app;
    app = angular.module('localResizeIMG', []);
    return app.directive('localResizeImg', function() {
      return {
        restrict: 'A',
        scope: {
          ngModel: '=',
          lWidth: '=',
          lQuality: '='
        },
        link: function(scope, element, attrs) {
          var convertImgToBase64, file;
          convertImgToBase64 = function(url, callback, outputFormat) {
            var canvas, ctx, img;
            canvas = document.createElement("CANVAS");
            ctx = canvas.getContext("2d");
            img = new Image;
            img.crossOrigin = "Anonymous";
            img.onload = function() {
              var dataURL;
              dataURL = void 0;
              canvas.height = img.height;
              canvas.width = img.width;
              ctx.drawImage(img, 0, 0);
              dataURL = canvas.toDataURL(outputFormat);
              callback.call(this, dataURL);
              return canvas = null;
            };
            return img.src = url;
          };
          file = document.createElement('input');
          file.type = 'file';
          $(file).localResizeIMG({
            width: scope.lWidth,
            quality: scope.lQuality,
            success: function(result) {
              return scope.$apply(function() {
                return scope.ngModel = result;
              });
            }
          });
          element.bind('click', function() {
            return file.click();
          });
          return scope.$watch('ngModel', function(newVal) {
            if (typeof newVal !== 'string') {
              return false;
            }
            return convertImgToBase64(newVal, function(base64) {
              return scope.ngModel = {
                base64: base64,
                clearBase64: base64.substr(base64.indexOf(',') + 1)
              };
            });
          });
        }
      };
    });
  })();

}).call(this);

//# sourceMappingURL=angular-localResizeIMG.map
