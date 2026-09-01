document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const result = document.getElementById("formResult");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn.querySelector("span");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Change button state to loading
    btnText.innerHTML = "Sending...";
    submitBtn.disabled = true;
    result.classList.add("hidden");

    // Gather form data
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Send to Web3Forms
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          // Success State
          result.innerHTML = "Message sent successfully!";
          result.className = "text-sm font-medium text-green-500 mt-2 block";
          form.reset();
        } else {
          // Error State from Server
          console.log(response);
          result.innerHTML = json.message;
          result.className = "text-sm font-medium text-red-500 mt-2 block";
        }
      })
      .catch((error) => {
        // Network Error State
        console.log(error);
        result.innerHTML = "Something went wrong! Please try again.";
        result.className = "text-sm font-medium text-red-500 mt-2 block";
      })
      .then(function () {
        // Reset button state
        btnText.innerHTML = "Get In Touch";
        submitBtn.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
          result.classList.add("hidden");
        }, 5000);
      });
  });
});

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

// Mobile Menu Drawer Logic
const mobileBtn = document.getElementById("mobile-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const drawer = document.getElementById("mobile-drawer");
const backdrop = document.getElementById("mobile-backdrop");
const mobileLinks = document.querySelectorAll(".mobile-link");

function openMobileMenu() {
  backdrop.classList.remove("hidden");
  // Slight delay to allow display block to apply before opacity transition
  setTimeout(() => {
    backdrop.classList.remove("opacity-0");
    drawer.classList.remove("translate-x-full");
  }, 10);
}

function closeMobileMenu() {
  drawer.classList.add("translate-x-full");
  backdrop.classList.add("opacity-0");
  // Wait for transitions to finish before hiding elements
  setTimeout(() => {
    backdrop.classList.add("hidden");
  }, 300);
}

mobileBtn.addEventListener("click", openMobileMenu);
closeBtn.addEventListener("click", closeMobileMenu);
backdrop.addEventListener("click", closeMobileMenu);

// Close the drawer automatically when a link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
