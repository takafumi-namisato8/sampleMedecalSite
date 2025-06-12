// ハンバーガーメニュー
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

// Fade-in on scroll
try {
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  faders.forEach((el) => observer.observe(el));
} catch (e) { /* unsupported browser */ }

// Optional: keep hero rotation (comment out if not needed)
(function () {
  const heroBg = document.querySelector(".hero-bg");
  if (!heroBg) return;
  const imgs = [
    "https://images.unsplash.com/photo-1580281657521-188f971c6207?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0b?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1504439904031-93ded5130f8d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80",
  ];
  let idx = 0;
  heroBg.style.backgroundImage = `url(${imgs[0]})`;
  setInterval(() => {
    idx = (idx + 1) % imgs.length;
    heroBg.classList.add("fade-out");
    setTimeout(() => {
      heroBg.style.backgroundImage = `url(${imgs[idx]})`;
      heroBg.classList.remove("fade-out");
    }, 1000);
  }, 7000);
})();