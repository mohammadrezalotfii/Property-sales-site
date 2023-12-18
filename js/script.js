let op = document.getElementById("open");
let clo = document.getElementById("close");
let menuMo = document.getElementById("menuMo");

op.addEventListener("click", function () {
  menuMo.classList.remove("hidden");
});

clo.addEventListener("click", function () {
  menuMo.classList.add("hidden");
});

let closeTab = document.getElementById("closeTab");
let ad = document.getElementById("ad");
closeTab.addEventListener("click", function () {
  ad.classList.add("hidden");
});

// slider=========================================================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// scrolling =================================>
$(document).ready(function () {
  $(document).scroll(function () {
    let st = $(this).scrollTop();
    if (st <= $("#head").offset().top + 500) {
      $("#headCard1")
        .removeClass("hidden")
        .fadeIn(1000)
        .addClass("headCard1 flex");
      $("#headCard2")
        .removeClass("hidden")
        .fadeIn(1000)
        .addClass("headCard2 flex");
    } else if (
      st >= $("#head").offset().top + 500 &&
      st <= $("#section2").offset().top + 200
    ) {
      $("#section2")
        .find("#h2Sec2")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("h2Sec2");
      $("#section2")
        .find("#img1Sec2")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("img1Sec2");
      $("#section2")
        .find("#p1Sec2")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("p1Sec2");
      $("#section2")
        .find("#btn1Sec2")
        .removeClass("md:hidden")
        .addClass("btn1Sec2 md:flex");
      $("#section2")
        .find("#slider1")
        .fadeIn(1000)
        .removeClass("hide")
        .addClass("slider1");
    } else if (
      st >= $("#section2").offset().top + 500 &&
      st <= $("#section3").offset().top + 200
    ) {
      $("#section3")
        .find("#h2Sec3")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("h2Sec2");
      $("#section3")
        .find("#img1Sec3")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("img1Sec2");
      $("#section3")
        .find("#p1Sec3")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("p1Sec2");
      $("#section3")
        .find("#btn1Sec3")
        .removeClass("md:hidden")
        .addClass("btn1Sec2 md:flex");
      $("#section3")
        .find("#slider2")
        .fadeIn(1000)
        .removeClass("hide")
        .addClass("slider1");
    } else if (
      st >= $("#section3").offset().top - 350 &&
      st <= $("#section4").offset().top + 200
    ) {
      $("#section4")
        .find("#h2Sec4")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("h2Sec2");
      $("#section4")
        .find("#img1Sec4")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("img1Sec2");
      $("#section4")
        .find("#p1Sec4")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("p1Sec2");
      $("#section4")
        .find("#btn1Sec4")
        .removeClass("md:hidden")
        .addClass("btn1Sec2 md:flex");
      $("#section4")
        .find("#slider3")
        .fadeIn(1000)
        .removeClass("hide")
        .addClass("slider1");
    } else if (st >= $("#section5").offset().top - 500){
      $("#section5")
        .find("#h3Sec5")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("h2Sec2");
      $("#section5")
        .find("#p1Sec5")
        .fadeIn(1000)
        .removeClass("hidden")
        .addClass("p1Sec2");
      $("#section5")
        .find("#btn1Sec5")
        .removeClass("hidden")
        .addClass("btn1Sec2 flex");
    }
    console.log($("#section4").offset().top - 400);
    console.log($("#section5").offset().top - 400);
    console.log(st);
  });
});

// progress ===========================================>
let customers = document.getElementById("customers");
let clients = document.getElementById("clients");
let experience = document.getElementById("experience");

let progEndC = 200,
  progStartC = 0;
var speedc = 10;
let progressC = setInterval(() => {
  progStartC++;

  customers.textContent = `${progStartC}+`;

  if (progStartC == progEndC) {
    clearInterval(progressC);
  }
}, speedc);

let progEndCl = 1000,
  progStartCl = 0;
var speedcl = 1;
let progressCl = setInterval(() => {
  progStartCl++;

  clients.textContent = `${progStartCl}+`;

  if (progStartCl == progEndCl) {
    clearInterval(progressCl);
  }
}, speedcl);

let progEnde = 16,
  progStarte = 0;
var speede = 100;
let progresse = setInterval(() => {
  progStarte++;

  experience.textContent = `${progStarte}+`;

  if (progStarte == progEnde) {
    clearInterval(progresse);
  }
}, speede);
