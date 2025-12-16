const refs4 = {
  changeThemeBtn: document.querySelector(".js-theme-toggle"),
  mainBody: document.querySelector("body"),
};

const onChangeThemeBtnClick = () => {
  refs4.mainBody.classList.toggle("dark");
};

refs4.changeThemeBtn.addEventListener("click", onChangeThemeBtnClick);
