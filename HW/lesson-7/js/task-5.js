function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refsHw5 = {
  colorName: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

const onChangeColorBtnClick = () => {
  let random = getRandomHexColor();
  refsHw5.body.style.backgroundColor = random;
  refsHw5.colorName.textContent = random;
};

refsHw5.changeColorBtn.addEventListener("click", onChangeColorBtnClick);
