const refs4 = {
  toggleBtn: document.querySelector(".js-toggle-btn"),
  hiddenText: document.querySelector(".js-text"),
};

const onToggleBtn = () => {
  refs4.hiddenText.classList.toggle("is-hidden");
};

refs4.toggleBtn.addEventListener("click", onToggleBtn);
