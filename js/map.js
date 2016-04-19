
//int watchCurrentPosition(onSuccess,onError,options);
//持续获取当前用户位置

//void clearWatch(watchId);
//watchId 为watchCurrentPosition返回的值
//取消监控

function getLocation(){
   var options={
                   enableHighAccuracy:true,  //boolean 是否要求高精度的地理信息
                   maximumAge:1000  ,   //应用程序的缓存时间
                   timeout:1000   　    //表示等待响应的最大时间，默认是0毫秒，表示无穷时间
               }
       if (navigator.geolocation) {
          console.log("浏览器支持获取地理位置!");
          navigator.geolocation.getCurrentPosition(onSuccess,onError,options);
      }
      else {
           console.log("浏览器不支持获取地理位置!");
     }
};
          //成功时
           function onSuccess(position){
               //返回用户位置
               //经度
               var longitude =position.coords.longitude;
               //纬度
               var latitude = position.coords.latitude;

               //使用百度地图API
               //创建地图实例  
               var map =new BMap.Map("container");

               //创建一个坐标
               var point =new BMap.Point(longitude,latitude);
               //地图初始化，设置中心点坐标和地图级别  
               map.centerAndZoom(point,15);
           };
 
           //失败时
           function onError(error){
               switch(error.code){
                   case 1:
                   alert("位置服务被拒绝");
                   break;

                   case 2:
                   alert("暂时获取不到位置信息");
                   break;

                   case 3:
                   alert("获取信息超时");
                   break;

                   case 4:
                    alert("未知错误");
                   break;
               }
           };
