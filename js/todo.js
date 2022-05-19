const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

// 로컬 스토리지에 투두 배열을 집어넣음.
// 로컬 스토리지는 string format 밖에 지원을 안하기 때문.
// stringify로 array처럼 생긴 string을 저장한 후 다시 parse를 이용해 array로 저장한것임.
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    // 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다는 의미.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    // input의 현재 value를 새로운 변수에 복사.
    // 이 변수는 input의 value를 비우기전의 값을 나타내는 string임.
    // 그 다음 입력값을 paintTodo에 넣고 출력ㄴ
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    // sting data type을 object로 만들어준것임.
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // array에 있는 각각의 아이템에 실행해줌.
    parsedToDos.forEach(paintTodo);
}
