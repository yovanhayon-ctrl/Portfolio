// ===== TYPING EFFECT =====
const typingRoles = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenRoles = 2000;

function typeRoles() {
  const typingElement = document.getElementById("typing-role");
  const currentRole = typingRoles[roleIndex];

  if (!isDeleting) {
    // Typing
    if (charIndex < currentRole.length) {
      typingElement.textContent += currentRole.charAt(charIndex);
      charIndex++;
      setTimeout(typeRoles, typingSpeed);
    } else {
      // Finished typing, wait before deleting
      isDeleting = true;
      setTimeout(typeRoles, delayBetweenRoles);
    }
  } else {
    // Deleting
    if (charIndex > 0) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeRoles, deletingSpeed);
    } else {
      // Finished deleting, move to next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % typingRoles.length;
      setTimeout(typeRoles, 500);
    }
  }
}

// Start typing effect when page loads
document.addEventListener("DOMContentLoaded", function () {
  typeRoles();
  initScrollAnimations();
  initNavbar();
  initForm();
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-up, .fade-in").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 20px rgba(59, 130, 246, 0.1)";
      navbar.style.backdropFilter = "blur(10px)";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.backdropFilter = "blur(0px)";
    }
  });
}

// ===== FORM HANDLING =====
function initForm() {
  const form = document.getElementById("submitBtn");
  if (form) {
    form.addEventListener("click", handleSubmit);
  }
}

function handleSubmit(e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple validation
  if (!fname) {
    showError("fname-err");
    return;
  }
  if (!email || !isValidEmail(email)) {
    showError("email-err");
    return;
  }
  if (!subject) {
    showError("subject-err");
    return;
  }
  if (!message) {
    showError("msg-err");
    return;
  }

  // Show success message
  const successMsg = document.getElementById("successMsg");
  successMsg.style.display = "flex";

  // Clear form
  document.querySelector(".contact-form-card").reset();

  // Hide success message after 5 seconds
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 5000);
}

function showError(errorId) {
  const errorEl = document.getElementById(errorId);
  if (errorEl) {
    errorEl.style.display = "block";
    setTimeout(() => {
      errorEl.style.display = "none";
    }, 3000);
  }
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ===== SMOOTH SCROLL FOR NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Close mobile menu if open
      const navMenu = document.getElementById("navMenu");
      if (navMenu.classList.contains("show")) {
        const toggler = document.querySelector(".navbar-toggler");
        toggler.click();
      }
    }
  });
});

// ===== TICKER ANIMATION (Handled by CSS) =====
// The ticker animation is handled purely by CSS for better performance
// CSS animation creates a smooth continuous loop effect
