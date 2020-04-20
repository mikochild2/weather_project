

$.getJSON("https://api.openweathermap.org/data/2.5/weather?zip=28210,us&units=imperial&appid=d355b9912a4731f6f1ac79de395ecb3c", function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var city = data.name;
    var weather = data.weather[0].main;

    $('.icon').attr('src', icon);
    $('.temp').append(temp + "°");
    $('.city').append(city);
    $('.weather').append(weather);
})

/*
$(document).ready(function() {
    $("#submitZip").click(function() {
        $.get("https://api.openweathermap.org/data/2.5/weather?zip=28210,us&units=imperial&appid=d355b9912a4731f6f1ac79de395ecb3c", function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
            });
        })
    })
*/







  