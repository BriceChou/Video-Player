/**
 * finish the function that when page was loaded and load the resoure form the local folder.
 * solve the question when i change the file path and i need not to change every file
 * CSS file was located in "/style/css/*.css"
 * JSON data file was located in "/data/*.json"
 * img file : "/style/icons/*.png"
 * javascript file : "/js/bin/*.js" or "js/libs/*.js"
 *
 * Solve Method :
 *   1/ get the current HTML file path
 *   2/ import the file path
 */
Utils = function() {
  'use strict';

  var utils;

  var projectPath;

  var setProjectPath = function(path) {
    projectPath = path;
  };
  var importLinkFile = function(path) {
    var temp = path.substr(path.search(/\.+[a-zA-Z]/));
    if (temp == '.css') {
      loadCss(path);
    } else {
      loadJavascript(path);
    }
  };
  var loadJavascript = function(path) {
    var jsFile = document.createElement('SCRIPT');
    jsFile.src = projectPath + '/js/' + path;
    document.getElementsByTagName('head')[0].appendChild(jsFile);
  };

  var loadCss = function(path) {
    var cssFile = document.createElement('LINK');
    cssFile.rel = "stylesheet";
    cssFile.href = projectPath + "/style/css/" + path;
    cssFile.type = "text/css";
    document.getElementsByTagName('head')[0].appendChild(cssFile);
  };

  utils = {
    setProjectPath: setProjectPath,
    importLinkFile: importLinkFile
  };
  return utils;
}();