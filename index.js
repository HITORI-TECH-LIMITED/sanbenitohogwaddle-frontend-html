const popupOverlay = document.getElementById("popup-overlay");
const closeButton = document.getElementById("close-button");

setTimeout(() => {
  popupOverlay.style.display = "flex";
}, 2000);

closeButton.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});
