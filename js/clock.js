const clock = document.querySelector("h3#clock");

function getClock() {
  const date = new Date(); // 현재 시간을 알려줌
  const hours = String(date.getHours()).padStart(2, "0"); // 시
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 분
  const seconds = String(date.getSeconds()).padStart(2, "0"); // 초
  //padStart 내가 가지고 있는 String보다 길이를 길게 하고 싶을 때 사용
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // html에 구한 시간을 넣어 화면에서 볼 수 있게함
}

getClock(); //getClock 즉시 실행
setInterval(getClock, 1000); // 즉시 실행 후 1초마다 호출해서 실행하도록 함
