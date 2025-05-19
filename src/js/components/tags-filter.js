export const useTagsFilter = (listSelector, itemSelector) => {
  const filterButtons = document.querySelectorAll('.tags__item');
  const container = document.querySelector(listSelector);
  let items = Array.from(document.querySelectorAll(itemSelector));

  const updateVisibleItems = (visibleItems) => {
    items.forEach((item) => (item.style.display = 'none'));
    visibleItems.forEach((item) => (item.style.display = 'block'));
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedCategory = button.dataset.category;

      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      items = Array.from(document.querySelectorAll(itemSelector)); // обновляем список на всякий случай

      if (selectedCategory === 'Все') {
        updateVisibleItems(items);
      } else if (selectedCategory === 'Популярные') {
        const filtered = items.filter(
          (item) => item.dataset.popular === 'true',
        );
        updateVisibleItems(filtered);
      } else if (selectedCategory === 'Сначала новые') {
        const sorted = [...items].sort(
          (a, b) => new Date(b.dataset.date) - new Date(a.dataset.date),
        );
        updateVisibleItems(sorted);
        sorted.forEach((item) => container.appendChild(item));
      } else if (selectedCategory === 'Сначала старые') {
        const sorted = [...items].sort(
          (a, b) => new Date(a.dataset.date) - new Date(b.dataset.date),
        );
        updateVisibleItems(sorted);
        sorted.forEach((item) => container.appendChild(item));
      } else {
        const filtered = items.filter((item) => {
          if (!item.dataset.category) return false;
          const categories = item.dataset.category
            .split(',')
            .map((c) => c.trim());
          return categories.includes(selectedCategory);
        });
        updateVisibleItems(filtered);
      }
    });
  });
};
