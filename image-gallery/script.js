const container = document.querySelector(".container");
const previewImg = container.querySelector(".preview-img");

// setInterval(function () {
//   let random = Math.floor(Math.random() * 8 + 1);
//   previewImg.src = `img/img${random}.jpg`;
// }, 3000);

container.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.className == "thumb") {
    previewImg.src = e.target.src;
    previewImg.alt = e.target.alt;
    previewImg.classList.add("fade");
    setTimeout(function () {
      previewImg.classList.remove("fade");
    }, 300);
  }
});
