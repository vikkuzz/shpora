let consp = document.querySelector(".conspect__text--type");
let btn = document.querySelector(".nav__button--type");
let btnPerem = document.querySelector(".nav__button--perem");
let conspPerem = document.querySelector(".conspect__text--perem");

btn.addEventListener("click", function () {
  consp.style.display = "inline";
});

btnPerem.addEventListener("click", function () {
  conspPerem.style.display = "inline";
});
