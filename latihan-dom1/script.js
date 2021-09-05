// const body = document.getElementsByTagName("body")[0];
const button1 = document.querySelector("button.btn-1"); // seleksi button

// add events
button1.addEventListener("click", function () {
  document.body.classList.toggle("light-sea"); // toggle class light-sea
});

const button2 = document.createElement("button"); // buat elemen
button2.setAttribute("type", "button"); // set attribute type="button"
button2.append("Warna Acak"); // tambahkan teks Warna Acak
button2.style.marginLeft = "10px"; // ubah margin-left

button1.after(button2); // simpan button2 setelah button1

// add events button2
button2.addEventListener("click", function () {
  // acak nomor dengan mathfloor dan math random
  // 0-255
  const red = Math.floor(Math.random() * 255 + 1);
  const green = Math.floor(Math.random() * 255 + 1);
  const blue = Math.floor(Math.random() * 255 + 1);
  // set nomor rgb berdasarkan random nomor
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

// Set Warna dengan Slider
const sliderMerah = document.querySelector("input[name=sliderMerah]"); // seleksi slider merah
const sliderHijau = document.querySelector("input[name=sliderHijau]"); // seleksi slider hijau
const sliderBiru = document.querySelector("input[name=sliderBiru]"); // seleksi slider biru

// Add events
sliderMerah.addEventListener("input", function () {
  const red = sliderMerah.value;
  const green = sliderHijau.value;
  const blue = sliderBiru.value;

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

sliderHijau.addEventListener("input", function () {
  const red = sliderMerah.value;
  const green = sliderHijau.value;
  const blue = sliderBiru.value;

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

sliderBiru.addEventListener("input", function () {
  const red = sliderMerah.value;
  const green = sliderHijau.value;
  const blue = sliderBiru.value;

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

// set Warna dengan Posisi Mouse
document.body.addEventListener("mousemove", function (e) {
  // cari posisi mouse dengan e.clientX & e.clientY
  // window.innerWidth = lebar dari window
  const posisiX = Math.round((e.clientX / window.innerWidth) * 255);
  const posisiY = Math.round((e.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = `rgb(${posisiX}, ${posisiY}, 25)`;
});
