window.addEventListener("load", function() {
  var App = function() {
    'use strict';
    var app;

    // set the current time
    var setCurrentTime = function() {
      var showTime = document.getElementById("time");
      var date = new Date();
      showTime.innerHTML = date.toLocaleString() + "";
    };

    //load list form the local JSON file
    var loadList = function() {
      var filePath = "./data/list.json";

      var listUl = "video-list-ul";

      var xhr;

      var list = document.getElementById("video-list");
      try {
        xhr = new XMLHttpRequest();
        xhr.open("GET", filePath, false);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            var data = eval('(' + xhr.responseText + ')');
            var i = 0;
            for (i; i < data.list.length; i++) {
              var node = document.createElement("LI");
              var textnode = document.createTextNode(data.list[i].video_name);
              node.appendChild(textnode);
              document.getElementById("video-list-ul").appendChild(node);
            }
          } else {
            //cope with the error
            console.log("app.js: Can't load the play list information.");
          }
        }
        xhr.send();
      } catch (e) {
        // statements
        console.log(e);
      }
    };

    var init = function() {
      loadList();
      setCurrentTime();
    };

    app = {
      init: init,
    };

    return app;
  }();

  App.init();
  Control.init();
});
