const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1043/600/400",
];

const refs5 = {
  prevBtn: document.querySelector(".js-prev"),
  nextBtn: document.querySelector(".js-next"),
  currentImg: document.querySelector(".js-image"),
};

console.log(refs5);
let count = 0;
refs5.currentImg.src = images[count];

const onNextBtnClick = () => {
  count++;
  if (count > images.length - 1) {
    count = 0;
  }
  refs5.currentImg.src = images[count];
};

const onPrevBtnClick = () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  refs5.currentImg.src = images[count];
};

refs5.nextBtn.addEventListener("click", onNextBtnClick);
refs5.prevBtn.addEventListener("click", onPrevBtnClick);
