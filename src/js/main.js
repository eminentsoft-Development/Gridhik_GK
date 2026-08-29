document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      // Toggle the hidden class to show/hide
      mobileMenu.classList.toggle("hidden");
      // Add flex display when shown
      mobileMenu.classList.toggle("flex");
    });
  }
});

window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("bg-ink/90", "backdrop-blur-md", "border-paper/5");
    header.classList.remove("bg-transparent", "border-transparent");
  } else {
    header.classList.remove("bg-ink/90", "backdrop-blur-md", "border-paper/5");
    header.classList.add("bg-transparent", "border-transparent");
  }
});
