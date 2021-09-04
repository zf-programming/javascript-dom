// // Event Handler

// // 1. Event di Inline HTML
// const p3 = document.querySelector(".p3");
// function gantiWarna() {
//   p3.style.backgroundColor = "coral";
// }

// // 2. Element Method
// const p2 = document.querySelector(".p2");
// function gantiWarnaP2() {
//   p2.style.backgroundColor = "lightseagreen";
// }
// p2.onclick = gantiWarnaP2; // element.event

// // 3. Method addEventListener(event, function)
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const textLi = document.createTextNode("Item Baru");

//   liBaru.append(textLi);
//   ul.append(liBaru);
// });

// perbedaan Element method & addEventListener
// element method
const p3 = document.querySelector(".p3");
p3.onclick = function () {
  p3.style.backgroundColor = "coral";
};
// akan menimpa event yang atas
p3.onclick = function () {
  p3.style.color = "lightseagreen";
};

// addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  p4.style.backgroundColor = "red";
});

// akan menambah event
p4.addEventListener("click", function () {
  p4.style.color = "blue";
});

// Untuk daftar event bisa dilihat di google
// contoh
// mouse (click, dblclick, mouseenter, mouseleave, mouseup, mouseover, wheel)
