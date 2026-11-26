const landing = document.querySelector(".wrap");
const sections = landing ? landing.querySelectorAll(".landing-section") : [];

if ("IntersectionObserver" in window && sections.length > 0) {
  landing.classList.add("is-enhanced");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-active", entry.isIntersecting);
      });
    },
    {
      root: landing,
      threshold: 0.6,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
