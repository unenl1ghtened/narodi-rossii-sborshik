export const useStickyHeader = () => {
  const header = document.querySelector('.header');
  if (!header) return;

  const headerHeight = header.offsetHeight;

  // Отступ для .hero или первой section
  const heroSection = document.querySelector('.hero');
  const allSections = Array.from(document.querySelectorAll('section'));

  if (heroSection && allSections[0] === heroSection) {
    heroSection.style.marginTop = `${headerHeight}px`;
  } else {
    const firstContentSection = allSections.find(
      (section) => !section.classList.contains('header'),
    );

    if (firstContentSection) {
      firstContentSection.style.marginTop = `${headerHeight}px`;
    } else {
      document.body.style.marginTop = `${headerHeight}px`;
    }
  }

  // Добавляем top для sticky-сайдбара
  const sidebarNav = document.querySelector('.sidebar__nav');
  if (sidebarNav) {
    sidebarNav.style.position = 'sticky';
    sidebarNav.style.top = `${headerHeight + 25}px`;
  }
};
