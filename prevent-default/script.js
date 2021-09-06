// Prevent Default
// Menghentikan aksi default element

const close = document.querySelectorAll("a.close");

// dengan forEach
close.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault(); // hentikan default method tag <a>
    e.target.parentElement.style.display = "none";
  });
});
