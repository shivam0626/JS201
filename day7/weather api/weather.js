// src="https://maps.google.com/maps?q=lucknow&t=&z=13&ie=UTF8&iwloc=&output=embed" 
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

function getData(){
    let city = document.getElementById("city").value;

    const url = 
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4cb9ebffc5de21ec973ca500024e6fbe`;

        fetch(url)
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            console.log(res);
            appendData(res);
            
        })
        .catch(function(err){
            console.log("err:",err)
            alert("City not Found");
        });
    
}
function getDataLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4cb9ebffc5de21ec973ca500024e6fbe`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        appendData(res);
        // console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
}


function appendData(data){
    let container = document.getElementById("container");
    let map  = document.getElementById("gmap_canvas");
    container.innerHTML = null;

    let city = document.createElement("h3");
    city.innerText = `City: ${data.name}`;

    let min_temp = document.createElement("p");
    min_temp.innerText =  `Min temp: ${((data.main.temp_min)-273).toFixed(1)} °C`;

    let max_temp = document.createElement("p");
    max_temp.innerText =  `Max temp: ${((data.main.temp_max)-273).toFixed(1)} °C`;

    let clouds = document.createElement("p");
    clouds.innerText = `Clouds: ${data.clouds.all}`;

    let wind = document.createElement("p");
    wind.innerText = `Wind: ${data.wind.speed} mph`;

    let sunrise = document.createElement("p");
    sunrise.innerText = `Sunrise: ${Date(data.sys.sunrise)}`;

    let sunset = document.createElement("p");
    sunset.innerText = `Sunset: ${Date(data.sys.sunset)}`;


    container.append(city,min_temp,max_temp,clouds,wind,sunrise,sunset);
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

}
function getWeather(){
    navigator.geolocation.getCurrentPosition(success);

    function success(position){
     var crd = position.coords;

     console.log('Your current position is:');
     console.log(`Latitude : ${crd.latitude}`);
     console.log(`Longitude: ${crd.longitude}`);
     console.log(`More or less ${crd.accuracy} meters.`);

     getDataLocation(crd.latitude,crd.longitude);
     getWeeklyWeather(crd.latitude,crd.longitude);

    }
}
function getWeeklyWeather(lat,lon){
  const url =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=4cb9ebffc5de21ec973ca500024e6fbe`;
  fetch(url)
  .then(function (res) {
      return res.json();
    })
  .then(function (res) {
      // appendWeekly(res.daily);
      console.log(res.daily);
    })
  .catch(function (err) {
    console.log(err);
  });
}
let weekly = document.getElementById("weekly")
function appendWeekly(data){
  data.forEach(function(el){
    let div = document.createElement("div");

    let temp = document.createElement('h3');
    temp.innerText = el.temp.day;
    
    div.append(temp);
    weekly.append(div);
  });
}
