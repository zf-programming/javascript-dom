// DOM Manipulation

// // 1. element.innerHTML
// // mengubah isi sebuah elemen / tag
// const judul = document.getElementById(`judul`);
// judul.innerHTML = `Fahrul Zaman`;

// const sectionA = document.getElementById(`a`);
// sectionA.innerHTML = `<div class="content"><h1>Halo</h1></div>`;

// // 2. element.style.<property-css>
// const p2 = document.querySelector(`p.paragraf.p2`);
// p2.style.backgroundColor = `lightseagreen`;
// p2.style.fontFamily = `Courier New`;

// const sectionB = document.getElementById(`b`);
// sectionB.style.color = `lightblue`;
// sectionB.style.height = `900px`;

// 3. Manipulasi Attribute
// a. element.setAttribute("nama attribute", "value")
const p3 = document.getElementsByClassName(`p3`)[0];
p3.setAttribute("nama", "Fahrul"); // cek di console atau elements

const p2 = document.getElementsByTagName(`p`)[1];
p2.setAttribute("class", "js satu dua tiga"); // jika attribute ada seluruh value akan di timpa

// b. element.getAttribute("nama attribute")
console.log("output getAttribute = " + p2.getAttribute("class")); // mengecek value pada suatu attribute

// c. element.removeAttribute()
p2.removeAttribute(`class`);
console.log("output setelah di removeAttribute = " + p2.getAttribute("class"));
