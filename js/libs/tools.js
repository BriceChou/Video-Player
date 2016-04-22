//javascript 原生ajax方法
function createXMLHttp() {
  var XmlHttp;
  if (window.ActiveXObject) {
    var arr = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"];
    for (var i = 0; i < arr.length; i++) {
      try {
        XmlHttp = new ActiveXObject(arr[i]);
        return XmlHttp;
      } catch (error) {}
    }
  } else {
    try {
      XmlHttp = new XMLHttpRequest();
      return XmlHttp;
    } catch (otherError) {}
  }
}

function xmlPost() {
  var xmlHttp = createXMLHttp();
  var queryStr = "Ajax_Type=Email&jsonData=" + JSON.stringify(jsonData);
  var url = "/Handler/AjaxHandlerHelper.ashx?no.=" + Math.random();
  xmlHttp.open('Post', url, true);
  xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlHttp.send(queryStr);
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var data = eval(xmlHttp.responseText);
      Data(data, "javascript原生xmlHttp");
    }
  }
}
//jquery $.ajax方法
function Ajax() {
  $.ajax({
    url: "/Handler/AjaxHandlerHelper.ashx?no.=" + Math.random(),
    type: "Post",
    async: false,
    data: {
      Ajax_Type: "Email",
      jsonData: JSON.stringify(jsonData)
    },
    dataType: "json",
    beforeSend: function() { //发送请求前
      $("#btnPost").attr('disabled', "true");
    },
    complete: function() { //发送请求完成后
      $("#btnPost").removeAttr("disabled");
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("error!" + errorThrown);
      //alert("请求错误，请重试！");
    },
    success: function(data) {
      Data(data, "Jquery $.ajax");
    }
  });
}
//jquery $.post方法
function Post() {
  $.post("/Handler/AjaxHandlerHelper.ashx?no.=" + Math.random(), {
      Ajax_Type: "Email",
      jsonData: JSON.stringify(jsonData)
    },
    function(data) {
      Data(data, "Jquery $.post");
    }
  );
}
//jquery $.getJSON方法
function GetJSON() {
  $.getJSON("/Handler/AjaxHandlerHelper.ashx?no.=" + Math.random(), {
      Ajax_Type: "Email",
      jsonData: JSON.stringify(jsonData)
    },
    function(data) {
      Data(data, "Jquery $.getJSON");
    }
  );
}
//jquery $.get方法
function Get() {
  $.get("/Handler/AjaxHandlerHelper.ashx?no.=" + Math.random(), {
      Ajax_Type: "Email",
      jsonData: JSON.stringify(jsonData)
    },
    function(data) {
      Data(data, "Jquery $.get");
    }
  );
}
//javascript原生脚本自定义jquery $.ajax方法
var CustomAjax = function(custom) {
  // 初始化
  var type = custom.type; //type参数,可选
  var url = custom.url; //url参数，必填
  var data = custom.data; //data参数可选，只有在post请求时需要
  var dataType = custom.dataType; //datatype参数可选
  var success = custom.success; //回调函数可选
  var beforeSend = custom.beforeSend; //回调函数可选
  var complete = custom.complete; //回调函数可选
  var error = custom.error; //回调函数可选
  if (type == null) { //type参数可选，默认为get
    type = "get";
  }
  if (dataType == null) { //dataType参数可选，默认为text
    dataType = "text";
  }
  var xmlHttp = createXMLHttp(); // 创建ajax引擎对象
  xmlHttp.open(type, url, true); // 打开
  // 发送
  if (type == "GET" || type == "get" || type == "Get") { //大小写
    xmlHttp.send(null);
  } else if (type == "POST" || type == "post" || type == "Post") {
    xmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xmlHttp.send(data);
  }
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      if (dataType == "text" || dataType == "TEXT") {
        if (success != null) {
          //普通文本
          success(xmlHttp.responseText);
        }
      } else if (dataType == "xml" || dataType == "XML") {
        if (success != null) {
          //接收xml文档
          success(xmlHttp.responseXML);
        }
      } else if (dataType == "json" || dataType == "JSON") {
        if (success != null) {
          //将json字符串转换为js对象
          success(eval("(" + xmlHttp.responseText + ")"));
        }
      }
    }
  };
};
//自定义方法
function Custom() {
  CustomAjax({
    type: "Post",
    url: "/Handler/AjaxHandlerHelper.ashx?no.=" + Math.random(),
    data: "Ajax_Type=Email&jsonData=" + JSON.stringify(jsonData),
    dataType: "json",
    success: function(data) {
      Data(data, "Custom自定义");
    }
  });
}