async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "e492716b6b33de506ba8c7d518b328f2";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);

let data = await response.json();

if(data.cod != 200){
alert("City not found");
return;
}

document.getElementById("city-name").innerText = data.name;

document.getElementById("temperature").innerText =
"Temperature: " + data.main.temp + "°C";

document.getElementById("description").innerText =
data.weather[0].description;

document.getElementById("humidity").innerText =
"Humidity: " + data.main.humidity + "%";

document.getElementById("wind").innerText =
"Wind Speed: " + data.wind.speed + " m/s";

}