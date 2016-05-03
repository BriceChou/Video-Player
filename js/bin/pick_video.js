/**
 * pick video from user's phone
 * @author BriceChou
 */
window.addEventListener('load', function() {
  'use strict';

  //
  var PickVideo = function() {

    var browseButton = document.getElementById('browse-video-location');
    var videoPath = document.getElementById('video-path');
    var pickVideo;

    var pick = function(type, nocrop, width, height) {
      var data = {
        type: type
      };
      if (nocrop) data.nocrop = true;
      if (width) data.width = width;
      if (height) data.height = height;
      var a = new MozActivity({
        name: 'TEST',
        data: data
      });
      a.onsuccess = function(e) {
        console.log('got blob of type', a.result.blob.type);
        var url = URL.createObjectURL(a.result.blob);
        var img = document.getElementById('result');
        img.src = url;
        img.onload = function() {
          URL.revokeObjectURL(url);
        };
      };
      a.onerror = function() {
        alert('Failure picking video');
      };
    };

    var init = function() {
      browseButton.addEventListener('click', function() {
        videoPath.value = 'TEST PATH';
        pick('video/*');
      });
    };

    pickVideo = {
      init: init
    }
    return pickVideo;
  }();
  PickVideo.init();
});