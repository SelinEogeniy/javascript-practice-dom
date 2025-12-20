const refs = {
  todoList: document.querySelector(".js-todo-list"),
  addBtn: document.querySelector(".js-add-btn"),
  todoInput: document.querySelector(".js-todo-input"),
};

function createElTask(text) {
  return `
    <li class="todo-item">
      <span class="todo-name">${text}</span>
      <button type="button" class="js-btn-complete">Done</button>
      <button type="button" class="js-btn-delete">Delete</button>
    </li>
  `;
}

const onAddBtnClick = () => {
  const task = refs.todoInput.value.trim();
  if (task === "") return;

  refs.todoList.insertAdjacentHTML("beforeend", createElTask(task));
  refs.todoInput.value = "";
};

const onTodoListClick = (evt) => {
  if (evt.target.classList.contains("js-btn-complete")) {
    const textEl = evt.target.closest("li").querySelector(".todo-name");

    textEl.classList.toggle("completed");
  }

  if (evt.target.classList.contains("js-btn-delete")) {
    evt.target.closest("li").remove();
  }
};

refs.addBtn.addEventListener("click", onAddBtnClick);
refs.todoList.addEventListener("click", onTodoListClick);
