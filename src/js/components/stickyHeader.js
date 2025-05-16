export const useStickyHeader = () => {
  const header = document.querySelector('.header');
  if (!header) return;

  const heroSection = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;

  if (heroSection) {
    heroSection.style.marginTop = `${headerHeight}px`;
  } else {
    document.body.style.marginTop = `${headerHeight}px`;
  }
};
