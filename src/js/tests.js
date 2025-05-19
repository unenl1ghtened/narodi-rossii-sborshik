import '/scss/tests.scss';

// components
import { useBurger } from './components/burger';
import { useStickyHeader } from './components/stickyHeader';
import { useTagsFilter } from './components/tags-filter';
import { useShowMore } from './components/show-more';

useBurger();
useStickyHeader();
useTagsFilter('.tests__block-list', '.tests__block');
useShowMore(6, '.tests__block', 'showMoreBtn');
