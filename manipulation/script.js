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

// // 3. Manipulasi Attribute
// // a. element.setAttribute("nama attribute", "value")
// const p3 = document.getElementsByClassName(`p3`)[0];
// p3.setAttribute("nama", "Fahrul"); // cek di console atau elements

// const p2 = document.getElementsByTagName(`p`)[1];
// p2.setAttribute("class", "js satu dua tiga"); // jika attribute ada seluruh value akan di timpa

// // b. element.getAttribute("nama attribute")
// console.log("output getAttribute = " + p2.getAttribute("class")); // mengecek value pada suatu attribute

// // c. element.removeAttribute("nama attribute")
// p2.removeAttribute(`class`);
// console.log("output setelah di removeAttribute = " + p2.getAttribute("class"));

// 4. Manipulasi Class dalam suatu Tag
// a. element.classList.add("class name")
const li1 = document.querySelector(`section#b ul li:first-child`);
li1.classList.add(`satu`); // tambah class satu
li1.classList.add(`dua`, `tiga`, `empat`); // menambah banyak class
// tambah class dengan array
const li2 = document.getElementsByTagName(`li`)[1];
li2.classList.add(`c1`, `c2`);
// cek value attribute class
console.log(li1.getAttribute(`class`));
console.log(li2.getAttribute(`class`));

// b. element.classList.remove("class name")
li1.classList.remove(`dua`);
console.log(li1.getAttribute(`class`));

// c. element.classList.toggle("class name")
// toggle on off sebuah class
const p1 = document.querySelector(`p.paragraf.p1`);
p1.classList.toggle(`toggle`);
console.log("toggle (add jika tdk ada) = " + p1.getAttribute(`class`));
p1.classList.toggle(`toggle`);
console.log("toggle (remove jika ada) = " + p1.getAttribute(`class`));

// d. element.classList.item("index n")
// mengecek class ke (index)
console.log(p1.classList.item(0)); // mengembalikan class ke - n
console.log(li1.classList.item(2));

// e. element.classList.contains("class name")
// mengecek sebuah class apakah ada atau tidak
console.log(li2.classList.contains(`satu`));

// f. element.classList.replace("replaced class", "with what?")
li1.classList.replace(`tiga`, `ganti-tiga`);
console.log(li1.getAttribute(`class`));

// g. element.classList.toString()
// mengambil class dan disimpan dalam sebuah string
const classPunyaLi1 = li1.classList.toString();
console.log(classPunyaLi1);

// dan masih banyak lagi
