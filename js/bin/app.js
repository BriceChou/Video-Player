window.addEventListener('load', function() {
  'use strict';
  var App = function() {

    var app;

    // set the current time
    var setCurrentTime = function() {
      var showTime = document.getElementById('time');
      var date = new Date();
      showTime.innerHTML = date.toLocaleString() + '';
    };

    //load list form the local JSON file
    var loadList = function() {
      var i = 0;
      // get all data from the JSON file
      for (i; i < data.list.length; i++) {
        // create the subNode LI
        var node = document.createElement('LI');
        var textnode = document.createTextNode(data.list[i].video_name);
        node.appendChild(textnode);
        listUl.appendChild(node);
      }

    };
    var initLinkFile = function() {
      var filePathname = window.location.pathname;

      // match the file which end with /*.*
      var pattern = /\/[a-zA-Z0-9]+\.+[a-zA-Z]/;

      var projectPath = filePathname.substring(0, filePathname.search(pattern));
      console.log(projectPath);
      /**
       * TODO : settings JS/JSON/CSS file location
       * add a judge function to distinguish libs between users javascript
       */
      Utils.setProjectPath(projectPath);
      Utils.importLinkFile("libs/clock.js");
      Utils.importLinkFile("bin/control_video.js");
      Utils.importLinkFile("main.css");

    };
    var init = function() {

      initLinkFile();

      // load the list information from JSON file
      loadList();

      // set the footer time
      setCurrentTime();

      // init the all control video button and function
      ControlVideo.init("video-area");
    };

    app = {
      init: init,
    };

    return app;
  }();
  App.init();
});