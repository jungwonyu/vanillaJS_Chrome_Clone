const API_KEY = "bd34c67fb19eea790e4b2fa056722035";
const city = document.querySelector("#weather span:nth-child(1)");
const weather = document.querySelector("#weather span:nth-child(2)");
const temp = document.querySelector("#weather span:nth-child(3)");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `${data.name}`; // 도시 이름
      weather.innerText = `${data.weather[0].main}`;
      temp.innerText = `${data.main.temp}`; // 날씨, 온도
    });
}

function onGeoError() {
  // 에러가 났을 때 실행될 함수
  alert("Can't find you. No weather for you. 🥲");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
