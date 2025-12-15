const API_KEY = "5718024b6ba3c9f244a11b010b455103";//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");

async function checkWeather(city = "Delhi") {
  const response = await fetch(URL + city + `&appid=${API_KEY}`);
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});

checkWeather();//5718024b6ba3c9f244a11b010b455103