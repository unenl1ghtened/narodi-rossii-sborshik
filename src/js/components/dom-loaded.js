export const useDomLoaded = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
  });
};
