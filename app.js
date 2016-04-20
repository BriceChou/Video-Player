window.addEventListener("load", function() {
  var width = document.documentElement.clientWidth;//可见区域宽度
  var height = document.documentElement.clientHeight;//可见区域高度
  //console.log("width:" + width + "px,Height:" + height + "px.");
  $("body").css({
    "width":width,
    "height":height,
    "overflow-x":"hidden",
  });
  $("body").attr({
    "scroll":"no"
  });
});

$(function() {  
  //get the date time now
  setInterval(getCurrentTime, 1000);
  //when page onload and load the local JSON file
  $.getJSON("json/list.json", function(data, status) {
    // console.log("Data: " + data + "\nStatus: " + status);
    $("#list").append("<ul id = \"playList\"><h1 class=\"h1\">Play List</h1></ul>");
    $.each(data.list, function(i, item) {
      $("#playList").append("<a id= \"" + item.name + "\" onclick = \"play(this);\"><li>" + (i+1) + ". " + item.video_name + "</li></a>");
      //record the src URL via input value
      $("#playList").append("<input id= \"i" + item.name + "\" value =\"" + item.src + ";" + item.type + "\" hidden/>");
    });
  });  
});

/*
package the JSON type data
function jsonStr(type, src){
    return ("\" value =\"{\"type\":\""+type+"\",\"src\":\""+src+"\"}\" hidden/>");
}
*/

//show the infomation about unable to load the video  
function failed(e) {
  // video playback failed - show a message saying why
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
  list();
};

//switch the play list action and video play action 
function list() {
  if($("#list").is(":hidden")) {
    $("#video").hide(500);
    $("#list").show();
    
    //奇数行
    //$("ul li:odd").css({"background-color":"#c3bbb9"});	
    //偶数行
    //$("ul li:even").css({"background-color":"#f7f6f6"});
  } else { 
    $("#list").hide();
    $("#video").show();
  }
}


//play the selected video   
function play(e) {
  var id = e.id;
  var arr = byId("i" + id).value.split(";");
  //  var jsonObj = JSON.parse(jsonStr);
  $("#h1").html(id);
  $("#list").hide();
  $("#video").show();
  //config the video tag property
  $("#video").attr({
    "src":arr[0],
    "controls":true,
    "loop":true,
    "autoplay":true,
    "type":arr[1],
    "height":"240px",
    "width":"320px"
  });
}

// get the current time
function getCurrentTime() {
  /*  
  var ajax = ajaxObject();
  ajax.open("GET", "http://www.timeapi.org/utc/now", false); 
  ajax.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded" );
  ajax.send(); 
  $.getJSON("http://www.timeapi.org/utc/now", function (result, status) {
    console.log("Data: " + data + "\nStatus: " + status);
    alert("Data: " + data + "\nStatus: " + status);
    var date = new Date(result);
    console.log(result);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date1 = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var time = year + "-" + month + "-" + date1 + " " + hour + ":" + minutes + ":" + second;
    console.log("time: " + time);
    $("#time").html(time);
  }, "html");
  */
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var date1 = date.getDate();
  var hour = date.getHours() - 8;
  var minutes = date.getMinutes();
  var second = date.getSeconds();
  var tempSecond, tempMinutes;
  if(hour < 0) {
    hour = hour + 24; 
  } 
  if(second < 10) {
    tempSecond = "0" + second + "";
  } else { 
    tempSecond = second;
  }
  if(minutes < 10) {
    tempMinutes = "0" + minutes + "";
  } else {
    tempMinutes = minutes;
  }
  var time = year + "-" + month + "-" + date1 + "  " + hour + ":" + tempMinutes + ":" + tempSecond;
  $("#time").html(time);
}

// find HTML object by id
function byId(val) {
  var object = document.getElementById(val);
  return(object);
}
