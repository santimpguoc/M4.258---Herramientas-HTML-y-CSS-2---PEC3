const toggleButton = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (toggleButton && mobileMenu) {
  toggleButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden");
    toggleButton.setAttribute("aria-expanded", String(!isOpen));
  });
}
