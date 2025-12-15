const refs3 = {
  value: document.querySelector(".js-value"),
  parentBtn: document.querySelector(".counter"),
};

const onChangeValueClick = (evt) => {
  const value = Number(refs3.value.textContent);

  if (evt.target.classList.contains("js-increment")) {
    refs3.value.textContent = value + 1;
  }

  if (evt.target.classList.contains("js-decrement") && value > 0) {
    refs3.value.textContent = value - 1;
  }
};

refs3.parentBtn.addEventListener("click", onChangeValueClick);
