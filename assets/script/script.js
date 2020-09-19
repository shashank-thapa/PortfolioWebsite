let btnHamburger = document.querySelector("#btnHamburger");
let mobileMenu = document.querySelector("#mobileMenu");
let body = document.querySelector("#body");

btnHamburger.addEventListener("click", function () {
  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
    body.style.overflow = "auto";
    mobileMenu.style.display = "none";
  } else {
    btnHamburger.classList.add("open");
    body.style.overflow = "hidden";
    mobileMenu.style.display = "block";
  }
});
