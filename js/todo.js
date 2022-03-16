const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); // 텍스트를 배열로 저장
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // li를 만들고
  const span = document.createElement("span"); // span을 만들었음
  span.innerText = newTodo; // 텍스트를 span 내부에 넣음(span안에 넣은 새로운 텍스트는 사용자가 form에서 입력한 newTodo 값)
  const button = document.createElement("button"); // button 만들기
  button.innerText = "❌"; // 버튼에 x라는 text 넣기
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // span을 li 내부에 넣기
  li.appendChild(button); // button을 li 내부에 넣기
  toDoList.appendChild(li); // li를 todolist에 추가
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 입력한 todo 저장
  toDoInput.value = ""; // 비우기
  toDos.push(newTodo); // toDos에 push
  paintToDo(newTodo); // 입력값을 paintToDo에 넣음
  saveToDos(); // saveToDos 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);
