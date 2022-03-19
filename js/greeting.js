const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const greeting_content = document.querySelector("#greeting content");

// 반복되는 경우에는 변수로 만들어줌 -> 중요한 변수가 아니기 때문에 대문자로 구별해줌
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 기본으로 작동되는 것을 막고
  loginForm.classList.add(HIDDEN_CLASSNAME); // class name에 hidden을 추가
  const username = loginInput.value; // username은 user가 입력한 값임
  localStorage.setItem(USERNAME_KEY, username); // user가 입력한 username을 저장
  paintGreetings(username); // input 값을 넣은 paintGreetings 함수 실행
}

loginForm.addEventListener("submit", onLoginSubmit); // submit을 했을 때 JS를 통해 onLoginSubmit을 작동시킴

function paintGreetings(username) {
  greeting.innerHTML = `Hello! ${username} 🎈`; // Hello! 라는 text와 user가 입력하여 저장된 이름 username을 나타내줌
  // greeting_content.innerHTML = 랄라룰루;
  greeting.classList.remove(HIDDEN_CLASSNAME); // class name에 있는 hidden을 삭제
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // username을 저장하는 변수

if (savedUsername === null) {
  // 만약 username이 저장 되어 있지 않은 경우라면
  loginForm.classList.remove(HIDDEN_CLASSNAME); // class name에 있는 hidden을 삭제
  loginForm.addEventListener("submit", onLoginSubmit); // submit을 했을 때 JS를 통해 onLoginSubmit을 작동시킴
} else {
  // 아니라면(저장 되어 있다면)
  paintGreetings(savedUsername); // paintGreetings 함수 실행
}
