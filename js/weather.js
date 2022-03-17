function onGroOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng); // 현재 위치를 알려줌
}

function onGeoError() {
  // 에러가 났을 때 실행될 함수
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGroOk, onGeoError);
