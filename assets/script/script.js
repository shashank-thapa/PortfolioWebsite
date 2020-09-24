let btnHamburger = document.querySelector("#btnHamburger");
let mobileMenu = document.querySelector("#mobileMenu");
let body = document.querySelector("#body");
let topBttn = document.querySelector("#topBttn");

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

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    topBttn.style.opacity = "1";
  } else {
    topBttn.style.opacity = "0";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
