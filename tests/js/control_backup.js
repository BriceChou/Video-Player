/*
 * This is a object for video controller
 * @author BriceChou
 * @datetime 2016-4-22 16:30
 */

var Control = function() {
  // change the figure can adjust the range of minimum video playback rate
  var PLAYBACK_RATE = 0.2;

  // change the figure can adjust the range of minimum video volume
  var VIDEO_VOLUME = 0.2;

  // chenge the figure can adjust the range of minimum fastward time
  var FASTWARD_TIME = 5;

  // define public variable to confirm video location
  var videoId;

  // define the video object;
  var video;

  var control;

  var init = function() {
    video = document.getElementById(videoId);
    console.log("control.js: SUCCESSED ENTER THE CONTROL INIT FUNCTION.");
  };
  var initButton = function() {
    /* body... */
  };

  // click the button to play or pause the video
  var playOrPause = function() {
    var playPauseButton = document.getElementById("play-pause");
    playPauseButton.addEventListener("click", function() {
      if (video.paused) {
        video.play();
        this.className("button_inset");
      } else {
        video.pause();
        this.className("button_ouset");
      }
    });
  };

  // stop to play video
  var stop = function() {
    var stopButton = document.getElementById("stop");
    stopButton.addEventListener("click", function() {
      video.loadeddata();
    });
  };

  // reload the video
  var reload = function() {
    var reloadButton = document.getElementById("reload");
    reloadButton.addEventListener("click", function() {
      video.load();
    });
  };

  // fast forward the video
  var fastForward = function() {
    var fastForwardButton = document.getElementById("fast-forward");
    fastForwardButton.addEventListener("click", function() {
      video.currentTime += FASTWARD_TIME;
    });
  };

  // fast backward the video
  var fastBackward = function() {
    var fastBackwardButton = document.getElementById("fast-backward");
    fastForwardButton.addEventListener("click", function() {
      video.currentTime -= FASTWARD_TIME;
    });
  };

  // mute the video and change the button status
  var mute = function() {
    var muteButton = document.getElementById("mute");
    fastForwardButton.addEventListener("click", function() {
      if (video.muted) {
        video.muted = false;
        this.className("button_ouset");
      } else {
        video.muted = true;
        this.className("button_inset");
      }
    });
  };

  // increase video volume
  var increaseVolume = function() {
    var increaseVolumeButton = document.getElementById("increase-volume");
    increaseVolumeButton.addEventListener("click", function() {
      video.volume += VIDEO_VOLUME;
    });
  };

  // decrease video volume
  var decreaseVolume = function() {
    var decreaseVolumeButton = document.getElementById("decrease-volume");
    decreaseVolumeButton.addEventListener("click", function() {
      video.volume -= VIDEO_VOLUME;
    });
  };

  //speed rate to play video
  var speedRate = function() {
    var speedRateButton = document.getElementById("speed-rate");
    speedRateButton.addEventListener("click", function() {
      video.playbackRate += PLAYBACK_RATE;
    });
  };

  //decelerate rate to play video
  var decelerateRate = function() {
    var decelerateRateButton = document.getElementById("decelerate-rate");
    decelerateRateButton.addEventListener("click", function() {
      video.playbackRate -= PLAYBACK_RATE;
    });
  };

  control = {
    videoId: videoId,
    init: init,
    playOrPause: playOrPause,
    stop: stop,
    reload: reload,
    fastForward: fastForward,
    fastBackward: fastBackward,
    mute: mute,
    increaseVolume: increaseVolume,
    decreaseVolume: decreaseVolume,
    speedRate: speedRate,
    decelerateRate: decelerateRate
  };

  return control;
}();