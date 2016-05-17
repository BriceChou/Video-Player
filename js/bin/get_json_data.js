var Json = function() {
  'use strict';
  var json;
  // config JSON file path
  var filePath = './data/list.json';
  try {
    // define the list ul object
    var listUl = document.getElementById('video-list-ul');
    listUl.innerHTML = 'Play List';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, false);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // via eval function get the JSON data
        var data = eval('(' + xhr.responseText + ')');
      } else {
        //cope with the error
        console.log('get_json_data.js: Can\'t load the play list information.');
      }
    }
    xhr.send();
  } catch (e) {
    // statements
    console.log(e);
  }
  json = {};
  return json;
}();