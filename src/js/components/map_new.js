/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Hammer from 'hammerjs';
import $ from 'jquery';

export const useMapNew = () => {
  var mapMode = 'region';

  var min_li_size = 14;
  var max_li_size = 320;

  // Кода регионов и их названия
  const oMap = {
    'RU-ALLMAP': 'Россия',
    'RU-RYA': 'Рязанская область',
    'RU-SMO': 'Смоленская область',
    'RU-YAR': 'Ярославская область',
    'RU-BEL': 'Белгородская область',
    'RU-BRY': 'Брянская область',
    'RU-VLA': 'Владимирская область',
    'RU-VOR': 'Воронежская область',
    'RU-TAM': 'Тамбовская область',
    'RU-MOS': 'Московская область',
    'RU-IVA': 'Ивановская область',
    'RU-KLU': 'Калужская область',
    'RU-MOW': 'Москва',
    'RU-TVE': 'Тверская область',
    'RU-KOS': 'Костромская область',
    'RU-KRS': 'Курская область',
    'RU-TUL': 'Тульская область',
    'RU-LIP': 'Липецкая область',
    'RU-ORL': 'Орловская область',
    'RU-KDA': 'Краснодарский край',
    'RU-AST': 'Астраханская область',
    'RU-VGG': 'Волгоградская область',
    'RU-KL': 'Республика Калмыкия',
    'RU-AD': 'Республика Адыгея',
    'RU-ROS': 'Ростовская область',
    'RU-CR': 'Республика Крым',
    'RU-SEV': 'Севастополь',
    'RU-SPE': 'Санкт-Петербург',
    'RU-KGD': 'Калининградская область',
    'RU-MUR': 'Мурманская область',
    'RU-NGR': 'Новгородская область',
    'RU-PSK': 'Псковская область',
    'RU-ARK': 'Архангельская область',
    'RU-KO': 'Республика Коми',
    'RU-KR': 'Республика Карелия',
    'RU-LEN': 'Ленинградская область',
    'RU-NEN': 'Ненецкий автономный округ',
    'RU-VLG': 'Вологодская область',
    'RU-YEV': 'Еврейская автономная область',
    'RU-CHU': 'Чукотский автономный округ',
    'RU-AMU': 'Амурская область',
    'RU-SAK': 'Сахалинская область',
    'RU-MAG': 'Магаданская область',
    'RU-KHA': 'Хабаровский край',
    'RU-PRI': 'Приморский край',
    'RU-KAM': 'Камчатский край',
    'RU-SA': 'Республика Саха (Якутия)',
    'RU-TY': 'Республика Тыва',
    'RU-ZAB': 'Забайкальский край',
    'RU-OMS': 'Омская область',
    'RU-NVS': 'Новосибирская область',
    'RU-BU': 'Республика Бурятия',
    'RU-AL': 'Республика Алтай',
    'RU-KYA': 'Красноярский край',
    'RU-KK': 'Республика Хакасия',
    'RU-KEM': 'Кемеровская область',
    'RU-TOM': 'Томская область',
    'RU-IRK': 'Иркутская область',
    'RU-ALT': 'Алтайский край',
    'RU-CHE': 'Челябинская область',
    'RU-KGN': 'Курганская область',
    'RU-SVE': 'Свердловская область',
    'RU-KHM': 'Ханты-Мансийский автономный округ - Югра',
    'RU-YAN': 'Ямало-Ненецкий автономный округ',
    'RU-TYU': 'Тюменская область',
    'RU-SAM': 'Самарская область',
    'RU-ULY': 'Ульяновская область',
    'RU-PNZ': 'Пензенская область',
    'RU-ORE': 'Оренбургская область',
    'RU-NIZ': 'Нижегородская область',
    'RU-KIR': 'Кировская область',
    'RU-CU': 'Чувашская республика',
    'RU-UD': 'Удмуртская республика',
    'RU-TA': 'Республика Татарстан',
    'RU-MO': 'Республика Мордовия',
    'RU-ME': 'Республика Марий Эл',
    'RU-BA': 'Республика Башкортостан',
    'RU-PER': 'Пермский край',
    'RU-SAR': 'Саратовская область',
    'RU-STA': 'Ставропольский край',
    'RU-KB': 'Кабардино-Балкарская республика',
    'RU-CE': 'Чеченская республика',
    'RU-IN': 'Республика Ингушетия',
    'RU-KC': 'Карачаево-Черкесская республика',
    'RU-DA': 'Республика Дагестан',
    'RU-SE': 'Республика Северная Осетия - Алания',
  };
  // Данные по населению

  const oPopulation = {
    // Ключ — это код региона (такой же, как в oMap)
    'RU-KYA': {
      // путь к изображению региона
      imgSrc: '../assets/img/map/krasnoyarskij-kraj.png',
      groups: [
        { group: 'Русские', number: '2 382 723 (93.6%)' },
        { group: 'Татары', number: '19 418 (0.8%)' },
        { group: 'Таджики', number: '12 968 (0.5%)' },
        { group: 'Азербайджанцы', number: '11 658 (0.5%)' },
      ],
    },
    'RU-CR': {
      imgSrc: '../assets/img/map/respublika-krym.png',
      groups: [
        { group: 'Русские', number: '1 296 442 (72.9%)' },
        { group: 'Крымские татары', number: '250 651 (14.1%)' },
        { group: 'Украинцы', number: '145 852 (2.3%)' },
        { group: 'Татары', number: '28 363 (0.6%)' },
      ],
    },
    'RU-TA': {
      imgSrc: '../assets/img/map/respublika-tatarstan.png',
      groups: [
        { group: 'Татары', number: '2 091 175 (53.6%)' },
        { group: 'Русские', number: '1 574 804 (40.3%)' },
        { group: 'Чуваши', number: '90 474 (2.3%)' },
        { group: 'Кряшены', number: '25 189 (0.6%)' },
      ],
    },
    // ... остальные регионы

    // Чтобы добавить новый регион:
    // 1. Найдите его код в списке выше (в oMap) — например, 'RU-ORE'
    // 2. Скопируйте один из готовых блоков (например, 'RU-TA') и вставьте ниже
    // 3. Измените ключ ('RU-ORE'), путь к изображению (imgSrc) и список групп

    /*
    Пример:
    'RU-ORE': {
      imgSrc: '/assets/img/map/orenburgskaya-oblast.png',
      groups: [
        { group: 'Русские', number: '1 000 000 (xx.x%)' },
        { group: 'Казахи', number: '200 000 (xx.x%)' },
        // и так далее
      ],
    },
    */
  };

  const svgMap = document.querySelector('.js-svg-map');
  const popup = document.querySelector('.popup');
  const popupTitle = popup.querySelector('.popup__title');
  const popupList = popup.querySelector('.popup__list');
  const popupImg = popup.querySelector('.popup__img');
  const popupCloseBtn = popup.querySelector('.popup__close');

  if (!svgMap || !popup) {
    console.error('Карта или попап не найдены');
    return;
  }

  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  function fillPopup(regionId) {
    if (!(regionId in oMap)) {
      console.error(`Регион с id "${regionId}" не задан в oMap`);
      return false;
    }

    popupTitle.textContent = oMap[regionId];

    const popData = oPopulation[regionId];

    if (popData) {
      popupImg.src = popData.imgSrc || '';
      popupImg.alt = oMap[regionId] || '';

      popupList.innerHTML = '';
      popData.groups.forEach(({ group, number }) => {
        const li = document.createElement('li');
        li.className = 'popup__item';

        const pText = document.createElement('p');
        pText.className = 'popup__item-text';
        pText.textContent = group;

        const pNum = document.createElement('p');
        pNum.className = 'popup__item-num';
        pNum.textContent = number;

        li.appendChild(pText);
        li.appendChild(pNum);
        popupList.appendChild(li);
      });
    } else {
      popupImg.src = '';
      popupImg.alt = '';
      popupList.innerHTML =
        '<li class="popup__item">Данные о населении отсутствуют</li>';
    }
    return true;
  }

  function showPopup(regionId, event) {
    if (!fillPopup(regionId)) return;

    if (!isMobile()) {
      popup.style.display = 'block';

      const offsetX = 15;
      const offsetY = 15;
      let left = event.pageX + offsetX;
      let top = event.pageY + offsetY;

      const popupRect = popup.getBoundingClientRect();
      if (left + popupRect.width > window.pageXOffset + window.innerWidth) {
        left = event.pageX - popupRect.width - offsetX;
      }
      if (top + popupRect.height > window.pageYOffset + window.innerHeight) {
        top = event.pageY - popupRect.height - offsetY;
      }

      popup.style.position = 'absolute';
      popup.style.left = left + 'px';
      popup.style.top = top + 'px';

      popup.classList.remove('active');
    } else {
      // Мобильный: фиксированное позиционирование и кнопка закрытия
      popup.style.display = '';
      popup.style.position = '';
      popup.style.left = '';
      popup.style.top = '';
      popup.classList.add('active');
      document.body.style.overflow = 'hidden'; // запрет скролла фона
    }
  }

  function hidePopup() {
    popup.style.display = 'none';
    popup.classList.remove('active');
    document.body.style.overflow = ''; // разблокировать скролл
  }

  // Для десктопа — hover (mouseenter/mousemove + mouseleave)
  // Для мобил — клик по региону + кнопка закрытия

  svgMap.querySelectorAll('[id]').forEach((el) => {
    if (!isMobile()) {
      el.addEventListener('mouseenter', (e) => showPopup(el.id, e));
      el.addEventListener('mousemove', (e) => showPopup(el.id, e));
      el.addEventListener('mouseleave', hidePopup);
    } else {
      el.addEventListener('click', (e) => {
        // Не блокируем переход по ссылкам, если внутри элемента есть <a>
        if (!el.closest('a')) {
          showPopup(el.id, e);
        }
      });
    }
  });

  popupCloseBtn.addEventListener('click', () => {
    hidePopup();
  });

  // Обновляем обработчики при изменении размера окна
  window.addEventListener('resize', () => {
    hidePopup();
  });

  // -------------
  $(window).on('resize', function () {
    if ($(window).width() <= 1024) {
      $('body').addClass('mobile-mode').removeClass('desktop-mode');
    } else {
      $('body').removeClass('mobile-mode').addClass('desktop-mode');
    }
  });
};
