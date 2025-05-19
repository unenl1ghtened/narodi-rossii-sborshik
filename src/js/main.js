import '/scss/main.scss';

// components

import { useBurger } from './components/burger';
import { useStickyHeader } from './components/stickyHeader';
import { useStoriesSlider } from './components/storiesSlider';
import { useMapZoom } from './components/map_zoom';
import { useMapNew } from './components/map_new';

useBurger();
useStickyHeader();
useStoriesSlider();
useMapZoom();
useMapNew();
