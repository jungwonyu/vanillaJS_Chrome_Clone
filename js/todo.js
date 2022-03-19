const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // const 대신 let을 사용해서 업데이트 가능하도록 변경

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 텍스트를 배열로 저장
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 클릭한 id와 다른 것은 남겨두기 위한 함수
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // li를 만들고
  li.id = newTodo.id;
  const span = document.createElement("span"); // span을 만들었음
  span.innerText = newTodo.text; // 텍스트를 span 내부에 넣음(span안에 넣은 새로운 텍스트는 사용자가 form에서 입력한 newTodo 값)
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // id값 Date()를 통해 랜덤으로 주기
  };
  toDos.push(newTodoObj); // toDos에 push
  paintToDo(newTodoObj); // 입력값을 newTodoObj에 넣음
  saveToDos(); // saveToDos 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // forEach가 실행되면 paintToDo를 부름
}
