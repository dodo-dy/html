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

const detailDialog = document.querySelector(".detail");
const detailOpenButton = document.querySelector(".work-card");
const detailCloseButtons = document.querySelectorAll(".detail__close, .detail__back");

if (detailDialog && detailOpenButton instanceof HTMLButtonElement && detailDialog instanceof HTMLDialogElement) {
  detailOpenButton.addEventListener("click", () => detailDialog.showModal());

  detailCloseButtons.forEach((button) => {
    button.addEventListener("click", () => detailDialog.close());
  });
}
