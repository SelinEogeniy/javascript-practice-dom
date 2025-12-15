// 1. Додавання в список Є <ul id="items"></ul> + input + кнопка. При натисканні додавай новий <li> з текстом із input.

const refs1 = {
  addBtn: document.querySelector(".js-add-btn"),
  input: document.querySelector(".js-input"),
  list: document.querySelector("#items"),
};

const onAddBtnClick = () => {
  if (refs1.input.value.trim() !== "") {
    const newLi = document.createElement("li");
    newLi.textContent = refs1.input.value.trim();
    refs1.list.append(newLi);
    refs1.input.value = "";
  }
};

refs1.addBtn.addEventListener("click", onAddBtnClick);
