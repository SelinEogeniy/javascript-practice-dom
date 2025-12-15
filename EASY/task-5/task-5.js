// 5. Зміна тексту

// Є <p id="text">Hello</p> і кнопка.
// При натисканні змінюй текст на “World
const refs5 = {
  changeBtn: document.querySelector(".js-change-btn"),
  changeText: document.querySelector(".js-text"),
};

const onChangeButtonClick = () => {
  if (refs5.changeText.textContent === "World") {
    refs5.changeText.textContent = "Hello";
  } else {
    refs5.changeText.textContent = "World";
  }
};
refs5.changeBtn.addEventListener("click", onChangeButtonClick);
