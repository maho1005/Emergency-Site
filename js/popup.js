const openButtons = document.querySelectorAll(".open-popup");
const closeButtons = document.querySelectorAll(".close-popup");
const popups = document.querySelectorAll(".popup");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popupId = button.dataset.popup;
    const popup = document.getElementById(popupId);

    if (popup) {
      popup.classList.remove("hidden");
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".popup").classList.add("hidden");
  });
});

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.add("hidden");
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popups.forEach((popup) => popup.classList.add("hidden"));
  }
});
