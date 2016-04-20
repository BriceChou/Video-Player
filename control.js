$(function() {
  
  //play the video ro pause the video
  $("#playOrPause").click(function() {
    var video = byId("video");
    if(video.paused) {
      video.play();
      $("#playOrPause").css({
        "border":"3px inset grey"
      });
    } else {
       $("#playOrPause").css({
        "border":"3px outset gray"
      });
      video.pause();
    }
  });
  
  //stop the video 
  $("#stop").click(function() {
    var video = byId("video");
    video.load();
    video.pause();
    
  });
  
  //reload the video 
  $("#reload").click(function() {
    var video = byId("video");
    video.load();
    video.play();
  });
  
  //fast forward
  $("#ffd").click(function() {
    var video = byId("video"); 
    var currentTime = video.currentTime; 
    var duration = video.duration; 
    var ffd = duration - 5;
    if (currentTime >  ffd || currentTime == ffd) {
      video.currentTime = ffd; 
      }
    else {
      video.currentTime += 5;
      }
  });
  
  //fast backward
  $("#fbd").click(function() {
    var video = byId("video");
    var currentTime = video.currentTime;
    video.currentTime -= 5;
  });
  
  //video mute
  $("#mute").click(function() {   
    var video = byId("video");
    if(video.muted) {
      video.muted = false;
      $("#mute").css({
        "border":"3px outset gray"
      });
    } else {
      $("#mute").css({
        "border":"3px inset grey"
      });
      video.muted = true;
    }
  });
  
  //increase video volume 
  $("#increaseVol").click(function() {  
    var video = byId("video");
    if(video.volume < 1) {
      video.volume += 0.2;
    }
  });
  
  //decrease video volume
  $("#decreaseVol").click(function() {  
    var video = byId("video");
    var volume = new Number(video.volume);
    var vol = volume.toFixed(2) - 0.2;
    if( vol > 0 || vol == 0) {
      video.volume = vol;
    }
  });
  
  //speed to play video
  $("#speedRate").click(function() {  
    var video = byId("video");
    video.playbackRate += 0.2;
  });
  
  //decelerate to play video  
  $("#decelerateRate").click(function() {  
    var video = byId("video");
    video.playbackRate -= 0.2;
  }); 
  
  //keep button pressed satus
  function keepPressed(name, attr, val) {
    var tempName = "#" + name + "";
    $(tempName).css({
      attr:val
    });
  }
});
  