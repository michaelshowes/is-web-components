import { createStore } from '@stencil/store';

const { state, set } = createStore({
  multiple: false,
  collapsible: true,
  activeIndex: [-1],
  icon: 'arrow',
});

export { state, set };
