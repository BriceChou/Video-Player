var app = {
  init: function() {
    Control.init("video");
    setCurrentTime();
    console.log("success");
  }

  //load list form the local JSON file
  loadList: function(filePath, listId) {
    var xhr;
    try {
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById(listId).innerHTML = xhr.responseText;
        } else {
          //cope with the error
          console.log("app.js: Can't load the play list information.");
        }
      }
      xhr.open("GET", filePath, false);
      xhr.send();
    } catch (e) {
      // statements
      console.log(e);
    }
  }

   /* window.addEventListener("load", function() {
    //get the date time now
    setInterval(getCurrentTime, 1000);
    //when page onload and load the local JSON file
    $.getJSON("json/list.json", function(data, status) {
      // console.log("Data: " + data + "\nStatus: " + status);
      $("#list").append("<ul id = \"playList\">Play List</ul>");
      $.each(data.list, function(i, item) {
        $("#playList").append("<a id= \"" + item.name + "\" onclick = \"play(this);\"><li>" + (i + 1) + ". " + item.video_name + "</li></a>");
        //record the src URL via input value
        $("#playList").append("<input id= \"i" + item.name + "\" value =\"" + item.src + ";" + item.type + "\" hidden/>");
      });
    });
  });*/

  // video playback failed - show a message saying why
  /*onfailed: function () {
    switch (e.target.error.code) {
      case e.target.error.MEDIA_ERR_ABORTED:
        alert('You aborted the video playback.');
        break;
      case e.target.error.MEDIA_ERR_NETWORK:
        alert('A network error caused the video download to fail part-way.');
        break;
      case e.target.error.MEDIA_ERR_DECODE:
        alert('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.');
        break;
      case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
        alert('The video could not be loaded, either because the server or network failed or because the format is not supported.');
        break;
      default:
        alert('An unknown error occurred.');
        break;
    }
    this.showList();
  };
*/
/*  //switch the play list action and video play action
  showList: function() {
    var list = document.getElementById("video-list");
    var listDisplayStatus = lsit.style.display;
    list.addEventListener("click", function() {
      if (listDisplayStatus == "none") {
        listDisplayStatus = "";
      } else {
        listDisplayStatus = "none";
      }
    });
  }
*/
/*  //play the selected video
  playSelectedVideo: function(selectedVideoId) {
    var selectedVideo = document.getElementById(selectedVideoId);
    var videoName = document.getElementById("video-name");
    var list = document.getElementById("video-list");
    var arr = selectedVideo.value.split(";");

    videoName.innerHTML(selectedVideoId);
    list.style.display = "none";

    //config the video tag property
    $("#video").attr({
      "src": arr[0],
      "controls": true,
      "loop": true,
      "autoplay": true,
      "type": arr[1]
    });
  }*/

  // set the current time
  setCurrentTime: function() {
    var date = new Date();
    var showTime =  document.getElementById("time");
    showTime.innerHTML(date.toLocaleString());
  }
  window.onload = app.init();
};
