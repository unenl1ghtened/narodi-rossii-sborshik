export const useTagsFilter = () => {
  const filterButtons = document.querySelectorAll('.tags__item');
  const peopleItems = document.querySelectorAll('.people-list__item');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedCategory = button.dataset.category;

      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      peopleItems.forEach((item) => {
        const categories = item.dataset.category
          .split(',')
          .map((c) => c.trim());

        if (
          selectedCategory === 'Все' ||
          categories.includes(selectedCategory)
        ) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
};
