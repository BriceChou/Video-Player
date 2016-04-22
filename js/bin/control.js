/*
 * This is a object for video controller
 * @author BriceChou
 * @datetime 2016-4-22 16:30
 */

Control = {

  // change the figure can adjust the range of minimum video playback rate
  const PLAYBACK_RATE = 0.2;

  // change the figure can adjust the range of minimum video volume
  const VIDEO_VOLUME = 0.2;

  // chenge the figure can adjust the range of minimum fastward time
  const FASTWARD_TIME = 5;

  // define the video object;
  var video;

  init: function(videoId) {
    this.video = document.getElementById(videoId);
    console.log("control.js: SUCCESSED ENTER THE CONTROL INIT FUNCTION.");
  }

  // click the button to play or pause the video
  playOrPause: function(video) {
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
  }

  // stop to play video
  stop: function(video) {
    var stopButton = document.getElementById("stop");
    stopButton.addEventListener("click", function() {
      video.loadeddata();
    });
  }

  // reload the video
  reload: function(video) {
    var reloadButton = document.getElementById("reload");
    reloadButton.addEventListener("click", function() {
      video.load();
    });
  }

  // fast forward the video
  fastForward: function(video) {
    var fastForwardButton = document.getElementById("fast-forward");
    fastForwardButton.addEventListener("click", function() {
      video.currentTime += FASTWARD_TIME;
    });
  }

  // fast backward the video
  fastBackward: function(video) {
    var fastBackwardButton = document.getElementById("fast-backward");
    fastForwardButton.addEventListener("click", function() {
      video.currentTime -= FASTWARD_TIME;
    });
  }

  // mute the video and change the button status
  mute: function(video) {
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
  }

  // increase video volume
  increaseVolume: function(video) {
    var increaseVolumeButton = document.getElementById("increase-volume");
    increaseVolumeButton.addEventListener("click", function() {
      video.volume += VIDEO_VOLUME;
    });
  }

  // decrease video volume
  decreaseVolume: function(video) {
    var decreaseVolumeButton = document.getElementById("decrease-volume");
    decreaseVolumeButton.addEventListener("click", function() {
      video.volume -= VIDEO_VOLUME;
    });
  }

  //speed rate to play video
  speedRate: function(video) {
    var speedRateButton = document.getElementById("speed-rate");
    speedRateButton.addEventListener("click", function() {
      video.playbackRate += PLAYBACK_RATE;
    });
  }

  //decelerate rate to play video
  decelerateRate: function(video) {
    var decelerateRateButton = document.getElementById("decelerate-rate");
    decelerateRateButton.addEventListener("click", function() {
      video.playbackRate -= PLAYBACK_RATE;
    });
  }
}
