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



window.addEventListener('scroll', () => {
      const header = document.getElementById('main-header');
      if (window.scrollY > 50) {
        header.classList.add('bg-ink/90', 'backdrop-blur-md', 'border-paper/5');
        header.classList.remove('bg-transparent', 'border-transparent');
      } else {
        header.classList.remove('bg-ink/90', 'backdrop-blur-md', 'border-paper/5');
        header.classList.add('bg-transparent', 'border-transparent');
      }
    });

    // Mobile Menu Drawer Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-backdrop');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
      backdrop.classList.remove('hidden');
      // Slight delay to allow display block to apply before opacity transition
      setTimeout(() => {
        backdrop.classList.remove('opacity-0');
        drawer.classList.remove('translate-x-full');
      }, 10);
    }

    function closeMobileMenu() {
      drawer.classList.add('translate-x-full');
      backdrop.classList.add('opacity-0');
      // Wait for transitions to finish before hiding elements
      setTimeout(() => {
        backdrop.classList.add('hidden');
      }, 300);
    }

    mobileBtn.addEventListener('click', openMobileMenu);
    closeBtn.addEventListener('click', closeMobileMenu);
    backdrop.addEventListener('click', closeMobileMenu);

    // Close the drawer automatically when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });