export const useShowMore = (
  initialCount = 9,
  selector = '.people-list__item',
  btnId = 'showMoreBtn',
) => {
  const showMoreBtn = document.getElementById(btnId);
  if (!showMoreBtn) return;

  const cards = document.querySelectorAll(selector);
  let isExpanded = false;

  if (cards.length > initialCount) {
    const updateCardsVisibility = (count) => {
      cards.forEach((card, i) => {
        card.style.display = i < count ? 'block' : 'none';
      });
    };

    updateCardsVisibility(initialCount);
    showMoreBtn.style.display = 'block';
    showMoreBtn.textContent = 'Показать все';

    showMoreBtn.addEventListener('click', () => {
      if (isExpanded) {
        updateCardsVisibility(initialCount);
        showMoreBtn.textContent = 'Показать все';
        isExpanded = false;
      } else {
        updateCardsVisibility(cards.length);
        showMoreBtn.textContent = 'Показать меньше';
        isExpanded = true;
      }
    });
  } else {
    showMoreBtn.style.display = 'none';
  }
};
