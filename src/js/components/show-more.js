export const useShowMore = () => {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const cards = document.querySelectorAll('.people-list__item');
  const initialCount = 9;
  let isExpanded = false; // состояние: показаны ли все карточки

  if (!showMoreBtn) return;

  if (cards.length > initialCount) {
    const updateCardsVisibility = (count) => {
      cards.forEach((card, i) => {
        card.style.display = i < count ? 'block' : 'none';
      });
    };

    // Изначально показываем 9 карточек
    updateCardsVisibility(initialCount);
    showMoreBtn.style.display = 'block';
    showMoreBtn.textContent = 'Показать все';

    showMoreBtn.addEventListener('click', () => {
      if (isExpanded) {
        // Скрываем лишние
        updateCardsVisibility(initialCount);
        showMoreBtn.textContent = 'Показать все';
        isExpanded = false;
      } else {
        // Показываем все
        updateCardsVisibility(cards.length);
        showMoreBtn.textContent = 'Показать меньше';
        isExpanded = true;
      }
    });
  } else {
    // Если карточек мало — кнопку можно скрыть или сделать неактивной
    showMoreBtn.style.display = 'none';
  }
};
