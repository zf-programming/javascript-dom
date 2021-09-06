// // DOM Traversal

// // seleksi elemen
// const close = document.querySelector("span.close");
// // const card = document.querySelector("div.card");

// close.addEventListener("click", function () {
//   // card.style.display = "none";
//   this.parentNode.style.display = "none"; // DOM traversal
// });

// // // Jika elemen yang sama banyak (card nya banyak)
const close = document.querySelectorAll(".close"); // nodelist
// // add event ke close dengan for
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     console.log(e);
//     // this.parentNode.style.display = "none";
//     e.target.parentNode.style.display = "none";
//   });
// }

// dengan forEach
close.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

// DOM Traversal Method
const nama = document.querySelector("span.nama");
console.log(nama.parentElement); // elemen parent
console.log(nama.parentNode); // node parent
console.log(nama.nextSibling); // next Node
console.log(nama.nextElementSibling); // next Element
console.log(nama.previousSibling); // previous Node
console.log(nama.previousElementSibling); // previous Element
console.log("ok");
