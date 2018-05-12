$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(function(location) {
      
      if (location){
        getWeatherData(location);
      }
    });
      
      });
      function getWeatherData(location){
        var lat;
        var lon;
        var myUrl;
        lat =location.coords.latitude;
        lon =location.coords.longitude;
        myUrl="https://fcc-weather-api.glitch.me/api/current?lat="+lat +"&lon="+lon;
        console.log(myUrl);
      $.getJSON(myUrl,function(data){
        var tempFa= (data.main.temp*1.8)+32;
        $(".temp-view").html(data.main.temp.toFixed(1));
        $(".city-view").html(data.name);
        $(".weather-image").attr("src",data.weather[0].icon);
        $(".change-scale").on("click",function(){
          console.log($(".change-scale").text());
          if ($ (".change-scale").text() =="C" ){
          $(".change-scale").text("F");
          $(".temp-view").text(tempFa.toFixed(1));
          }
          else if ($(".change-scale").text()=="F"){
            $(".change-scale").text("C");
            $(".temp-view").text(data.main.temp.toFixed(1));
          }
        });
      });
      }