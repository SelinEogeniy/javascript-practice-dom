// 1. Клік — показати текст

// На сторінці є кнопка.
// При натисканні виведи під нею текст "Clicked!".
// Повторні кліки не повинні дублювати текст.

const refs = {
  clickButton: document.querySelector(".js-button-click"),
  text: document.querySelector(".js-click-output"),
};

const onClickButton = () => {
  refs.text.textContent = "Clicked!";
};

refs.clickButton.addEventListener("click", onClickButton);
