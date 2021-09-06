// Event Bubbling

// const close = document.querySelectorAll("a.close");

// close.forEach(function (element) {
//   element.addEventListener("click", function (e) {
//     e.preventDefault(); // hentikan default method tag <a>
//     e.target.parentElement.style.display = "none";
//     e.stopPropagation(); // mencegah double Event, yaitu event yang ada di parent
//   });
// });

// const cards = document.querySelectorAll("div.card");

// cards.forEach(function (element) {
//   element.addEventListener("click", function (e) {
//     alert("OK");
//   });
// });

// menambahkan event berdasarkan parent
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
  e.preventDefault();
});
