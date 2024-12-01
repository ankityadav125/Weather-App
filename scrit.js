const apiKey = "bba563a141662512526d4b94e48ea795";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city_name");
const humid = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const img = document.querySelector(".weather_img");
const detail = document.querySelectorAll(".details");
const minTemp = document.querySelector(".min_temp");
const maxTemp = document.querySelector(".max_temp");
const error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    error.style.display = "block";
    detail[0].style.display = "none";
    detail[1].style.display = "none";
    img.style.display = "none";
    temp.style.display = "none";
    cityName.style.display = "none";
  } else {
    error.style.display = "none";
    detail[0].style.display = "flex";
    detail[1].style.display = "flex";
    img.style.display = "block";
    temp.style.display = "block";
    cityName.style.display = "block";

    const data = await response.json();
    console.log(data);

    temp.innerHTML = Math.round(data.main.temp) + "°C";
    cityName.innerHTML = data.name;
    humid.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";
    minTemp.innerHTML = data.main.temp_min + "°C";
    maxTemp.innerHTML = data.main.temp_max + "°C";

    let weath = data.weather[0].main;

    if (weath == "Clouds") {
      img.src = "Cloud.png";
    } else if (weath == "Clear") {
      img.src = "Clear.png";
    } else if (weath == "Rain") {
      img.src = "Rain.png";
    } else if (weath == "Drizzle") {
      img.src = "drizzle.png";
    } else if (weath == "Mist") {
      img.src = "Mist.png";
    } else if (weath == "Snow") {
      img.src = "Snow.png";
    }
  }
}

btn.addEventListener("click", function () {
  checkWeather(input.value);
});
