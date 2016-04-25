window.addEventListener("load", function() {

  var App = function() {

    var app;

    // set the current time
    var setCurrentTime = function() {
      var showTime = document.getElementById("time");
      var date = new Date();
      showTime.innerHTML = date.toLocaleString() + "";
    };

    //load list form the local JSON file
    var loadList = function() {
      // config JSON file path
      var filePath = "./data/list.json";

      // define the list ul object
      var listUl = document.getElementById("video-list-ul");

      var xhr;

      // get the div list id and contoel the display status
      var list = document.getElementById("video-list");

      try {
        xhr = new XMLHttpRequest();
        xhr.open("GET", filePath, false);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {

            // via eval function get the JSON data
            var data = eval('(' + xhr.responseText + ')');
            var i = 0;

            // get all data from the JSON file
            for (i; i < data.list.length; i++) {

              // create the subNode LI
              var node = document.createElement("LI");
              var textnode = document.createTextNode(data.list[i].video_name);
              node.appendChild(textnode);
              listUl.appendChild(node);
              listUl.innerHTML = "Play List";
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

      // load the list information from JSON file
      loadList();

      // set the footer time
      setCurrentTime();

      // init the control button
      Control.init();
    };

    app = {
      init: init,
    };

    return app;
  }();

  App.init();
});