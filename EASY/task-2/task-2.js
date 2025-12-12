const box = document.querySelector("#box");
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
box.addEventListener("click", () => {
  box.style.backgroundColor = getRandomColor();
});
