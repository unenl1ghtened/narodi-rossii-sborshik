import '/scss/biography.scss';

// components

import { useBurger } from './components/burger';
import { useStickyHeader } from './components/stickyHeader';
import { useTagsFilter } from './components/tags-filter';
import { useShowMore } from './components/show-more';

useBurger();
useStickyHeader();
useTagsFilter('.people-list__list', '.people-list__item');
useShowMore(9, '.people-list__item', 'showMoreBtn');
