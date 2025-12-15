const refs2 = {
  list: document.querySelector(".js-list"),
  removeBtn: document.querySelector(".js-remove-btn"),
};
const onRemoveBtnClick = (evt) => {
  if (!evt.target.classList.contains("js-remove-btn")) {
    return;
  }
  evt.target.parentNode.remove();
};
refs2.list.addEventListener("click", onRemoveBtnClick);
