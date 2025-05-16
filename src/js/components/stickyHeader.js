export const useStickyHeader = () => {
  const header = document.querySelector('.header');
  if (!header) return;

  const headerHeight = header.offsetHeight;
  const heroSection = document.querySelector('.hero');
  const allSections = Array.from(document.querySelectorAll('section'));

  if (heroSection && allSections[0] === heroSection) {
    // .hero существует и она первая — добавляем отступ ей
    heroSection.style.marginTop = `${headerHeight}px`;
  } else {
    // Ищем первую section (не header), которой можно задать отступ
    const firstContentSection = allSections.find(
      (section) => !section.classList.contains('header'),
    );

    if (firstContentSection) {
      firstContentSection.style.marginTop = `${headerHeight}px`;
    } else {
      // На крайний случай — добавим отступ всему body
      document.body.style.marginTop = `${headerHeight}px`;
    }
  }
};
