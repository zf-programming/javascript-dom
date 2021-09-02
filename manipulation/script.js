// DOM Manipulation

// // 1. element.innerHTML
// // mengubah isi sebuah elemen / tag
// const judul = document.getElementById(`judul`);
// judul.innerHTML = `Fahrul Zaman`;

// const sectionA = document.getElementById(`a`);
// sectionA.innerHTML = `<div class="content"><h1>Halo</h1></div>`;

// 2. element.style.<property-css>
const p2 = document.querySelector(`p.paragraf.p2`);
p2.style.backgroundColor = `lightseagreen`;
p2.style.fontFamily = `Courier New`;

const sectionB = document.getElementById(`b`);
sectionB.style.color = `lightblue`;
sectionB.style.height = `900px`;
