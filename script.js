// ハンバーガーメニュー（ unchanged ）
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

// Fade-in on scroll ( unchanged but safe )
try {
  const faders = document.querySelectorAll(".fade-in");
  const observerOptions = { threshold: 0.1 };
  const onEntry = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onEntry, observerOptions);
  faders.forEach((el) => observer.observe(el));
} catch (e) { /* older browsers – skip */ }

