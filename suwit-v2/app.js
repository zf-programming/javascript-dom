// Seleksi Bot
const kotakBot = document.querySelector("div.kotak-bot");
const kotakGambar = kotakBot.querySelector("div.gambar-bot");
// Buat Elemen
const imgBot = document.createElement("img");
// Masukkan elemen
kotakGambar.append(imgBot);
// Generate Jawaban Bot
function generateBot() {
  const randomNumBot = Math.floor(Math.random() * 30 + 1);
  let jawabanBot;

  if (randomNumBot <= 10) {
    jawabanBot = "batu";
    imgBot.setAttribute("src", "img/batu.png");
    imgBot.setAttribute("alt", "Batu");
  } else if (randomNumBot <= 20) {
    jawabanBot = "gunting";
    imgBot.setAttribute("src", "img/gunting.png");
    imgBot.setAttribute("alt", "Gunting");
  } else {
    jawabanBot = "kertas";
    imgBot.setAttribute("src", "img/kertas.png");
    imgBot.setAttribute("alt", "Kertas");
  }

  return jawabanBot;
}

// Seleksi User
const kotakUser = document.querySelector("div.kotak-user");
const userBatu = kotakUser.querySelector(".gambar.batu");
const userGunting = kotakUser.querySelector(".gambar.gunting");
const userKertas = kotakUser.querySelector(".gambar.kertas");

// Seleksi Hasil
const kotakHasilH2 = document.querySelector("div.kotak-hasil h2");

// Seleksi Score
const teksScoreUser = document.querySelector(".point-user");
const teksScoreBot = document.querySelector(".point-bot");
teksScoreUser.innerHTML = localStorage.getItem("scoreUser");
teksScoreBot.innerHTML = localStorage.getItem("scoreBot");

// User Events Listener
const pilihanUser = document.querySelectorAll(".gambar");
pilihanUser.forEach(function (element, number) {
  let pilihan;
  switch (number) {
    case 0:
      pilihan = "batu";
      break;
    case 1:
      pilihan = "gunting";
      break;
    case 2:
      pilihan = "kertas";
      break;
    default:
      break;
  }

  element.addEventListener("click", function () {
    imgBot.setAttribute("src", "img/loading.png");
    imgBot.setAttribute("alt", "Loading");
    kotakHasilH2.innerHTML = element.classList[1];
    setTimeout(() => {
      const hasil = batuGuntingKertas(pilihan);
      kotakHasilH2.innerHTML = hasil;
      localStorage.setItem("scoreUser", scoreUser);
      localStorage.setItem("scoreBot", scoreBot);

      teksScoreUser.innerHTML = localStorage.getItem("scoreUser");
      teksScoreBot.innerHTML = localStorage.getItem("scoreBot");
    }, 500);
  });
});

let scoreUser = parseInt(localStorage.getItem("scoreUser"));
let scoreBot = parseInt(localStorage.getItem("scoreBot"));

// Rules / Function Permainan
function batuGuntingKertas(inputUser) {
  const bot = generateBot();
  let hasil;
  switch (inputUser) {
    case bot:
      hasil = "Seri!";
      break;
    case "batu":
      hasil = bot == "gunting" ? "Menang!" : "Kalah!";
      break;
    case "gunting":
      hasil = bot == "kertas" ? "Menang!" : "Kalah!";
      break;
    case "kertas":
      hasil = bot == "batu" ? "Menang!" : "Kalah!";
      break;
    default:
      break;
  }

  if (hasil === "Menang!") {
    scoreUser += 1;
  }
  if (hasil === "Kalah!") {
    scoreBot += 1;
  }
  return hasil;
}
