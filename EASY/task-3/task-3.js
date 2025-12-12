// 3. Лічильник

// Створи кнопку "Add".
// Поруч показуй число, яке збільшується при кожному кліку.
const refs3 = {
  button: document.querySelector(".js-add-btn"),
  addNumber: document.querySelector(".js-output"),
};

const onButtonClick = () => {
  refs3.addNumber.textContent = Number(refs3.addNumber.textContent) + 1;
};
refs3.button.addEventListener("click", onButtonClick);
