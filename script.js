"use strict";
const modal = document.querySelector(".modal");
const btnOpenmodal = document.querySelectorAll(".show-modal");
const btnClosemodal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnOpenmodal.length; i++) {
  btnOpenmodal[i].addEventListener("click", openModal);
}
btnClosemodal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
