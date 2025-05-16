import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const useStoriesSlider = () => {
  const wrapper = document.querySelector('.stories__slider-wrapper');
  const slides = document.querySelectorAll('.stories__slide');

  if (!wrapper || !slides.length) return;

  new Swiper('.stories__slider-inner', {
    modules: [Navigation],
    direction: 'horizontal',
    spaceBetween: 21,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.stories__slider-button--next',
      prevEl: '.stories__slider-button--prev',
    },
    on: {
      init: checkSliderState,
      resize: checkSliderState,
    },
  });

  function checkSliderState() {
    const visibleWidth = document.querySelector(
      '.stories__slider-inner',
    ).offsetWidth;

    const totalSlidesWidth = Array.from(slides).reduce((sum, slide) => {
      return sum + slide.offsetWidth + 21;
    }, 0);

    const isScrollable = totalSlidesWidth > visibleWidth + 20;

    if (isScrollable) {
      wrapper.style.justifyContent = '';
    } else {
      wrapper.style.display = 'flex';
      wrapper.style.justifyContent = 'center';
    }
  }
};
